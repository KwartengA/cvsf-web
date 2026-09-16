import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { mapCvOutputToJointsAndFeedback } from "@/lib/cv-mapping";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.sport) {
    return NextResponse.json({ error: "sport is required" }, { status: 400 });
  }

  // If the caller sent explicit joints/feedback, use those. Otherwise, if
  // it looks like a raw CV pipeline payload (formScore/errorsDetected),
  // synthesize them (Scenario A — see lib/cv-mapping.ts).
  const hasExplicitJoints = body.joints !== undefined || body.feedback !== undefined;
  const mapped = hasExplicitJoints
    ? { joints: body.joints ?? [], feedback: body.feedback ?? [] }
    : mapCvOutputToJointsAndFeedback({
        formScore: body.formScore,
        errorsDetected: body.errorsDetected,
        featureImportances: body.featureImportances,
      });

  // body.reps is overloaded by callers: the CV pipeline sends a rep count
  // (number), while an explicit-shape payload sends RepScore rows (array).
  const repsIsCount = typeof body.reps === "number";
  const repsIsArray = Array.isArray(body.reps);

  const session = await prisma.session.create({
    data: {
      userId: body.userId,
      sport: body.sport,
      status: body.status ?? "live",
      formScore: body.formScore,
      repCount: body.repCount ?? (repsIsCount ? body.reps : 0),
      durationSec: body.durationSec ?? 0,
      joints: { create: mapped.joints },
      feedback: { create: mapped.feedback },
      reps: { create: repsIsArray ? body.reps : [] },
    },
    include: { joints: true, feedback: true, reps: true },
  });

  return NextResponse.json(session, { status: 201 });
}

export async function GET() {
  const sessions = await prisma.session.findMany({
    orderBy: { updatedAt: "desc" },
    include: { joints: true, feedback: true, reps: true },
  });

  return NextResponse.json(sessions);
}
