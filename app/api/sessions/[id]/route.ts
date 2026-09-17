import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { mapCvOutputToJointsAndFeedback } from "@/lib/cv-mapping";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const session = await prisma.session.findUnique({
    where: { id },
    include: { joints: true, feedback: true, reps: true },
  });

  if (!session) {
    return NextResponse.json({ error: "session not found" }, { status: 404 });
  }

  return NextResponse.json(session);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  // Only re-synthesize joints/feedback when the CV pipeline actually sent
  // new signal (formScore/errorsDetected/featureImportances) and the caller
  // didn't pass an explicit joints/feedback array of their own. A plain
  // rep-count or status update leaves existing joints/feedback alone.
  const hasExplicitJoints = body.joints !== undefined || body.feedback !== undefined;
  const hasCvSignal =
    body.formScore !== undefined ||
    body.errorsDetected !== undefined ||
    body.featureImportances !== undefined;

  const mapped =
    !hasExplicitJoints && hasCvSignal
      ? mapCvOutputToJointsAndFeedback({
          formScore: body.formScore,
          errorsDetected: body.errorsDetected,
          featureImportances: body.featureImportances,
        })
      : null;

  try {
    const updated = await prisma.session.update({
      where: { id },
      data: {
        formScore: body.formScore,
        repCount: body.repCount,
        durationSec: body.durationSec,
        status: body.status,
        reps: body.newRep ? { create: body.newRep } : undefined,
        ...(hasExplicitJoints && {
          joints: { deleteMany: {}, create: body.joints ?? [] },
          feedback: { deleteMany: {}, create: body.feedback ?? [] },
        }),
        ...(mapped && {
          joints: { deleteMany: {}, create: mapped.joints },
          feedback: { deleteMany: {}, create: mapped.feedback },
        }),
      },
      include: { joints: true, feedback: true, reps: true },
    });

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "session not found" }, { status: 404 });
  }
}
