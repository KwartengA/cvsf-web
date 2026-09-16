// Maps the CV pipeline's flat output (pi_live_inference.py) into the
// joint/feedback shape ResultsView renders (app/analytics/page.tsx).
//
// The classifier gives us a formScore and feature_importances (which
// angle feature mattered most), but no per-joint positions or per-joint
// scores. So we reuse a fixed standing-pose rig (same layout as
// DEMO_SESSION in app/analytics/page.tsx) and vary only:
//   - every joint's score, nudged around formScore
//   - the "watch" joint singled out by feature_importances, scored lower
//     and given a feedback entry
// This is intentionally approximate (Scenario A) — it's a plausible
// pose, not a reconstruction of the actual frame.

const RIG: { id: string; label: string; x: number; y: number }[] = [
  { id: "j-head", label: "Head", x: 50, y: 8 },
  { id: "j-lsh", label: "L Shoulder", x: 38, y: 20 },
  { id: "j-rsh", label: "R Shoulder", x: 62, y: 20 },
  { id: "j-lel", label: "L Elbow", x: 32, y: 32 },
  { id: "j-rel", label: "R Elbow", x: 68, y: 32 },
  { id: "j-lwr", label: "L Wrist", x: 28, y: 43 },
  { id: "j-rwr", label: "R Wrist", x: 72, y: 43 },
  { id: "j-hip", label: "Hip", x: 50, y: 50 },
  { id: "j-lkn", label: "L Knee", x: 41, y: 67 },
  { id: "j-rkn", label: "R Knee", x: 59, y: 67 },
  { id: "j-lank", label: "L Ankle", x: 41, y: 84 },
  { id: "j-rank", label: "R Ankle", x: 59, y: 84 },
];

// Maps feature_importances keys ({joint}_angle_{side}) to a rig joint label.
// This is a naming convention, not confirmed against the real classifier
// output yet — update this table once pi_live_inference.py's actual
// feature names are known.
const FEATURE_TO_JOINT: Record<string, string> = {
  knee_angle_left: "L Knee",
  knee_angle_right: "R Knee",
  hip_angle_left: "Hip",
  hip_angle_right: "Hip",
  shoulder_angle_left: "L Shoulder",
  shoulder_angle_right: "R Shoulder",
  elbow_angle_left: "L Elbow",
  elbow_angle_right: "R Elbow",
  ankle_angle_left: "L Ankle",
  ankle_angle_right: "R Ankle",
};

function severityFor(score: number): "critical" | "warning" | "good" {
  if (score < 60) return "critical";
  if (score < 80) return "warning";
  return "good";
}

function topFeature(
  featureImportances: Record<string, number> | undefined
): string | null {
  if (!featureImportances) return null;
  let best: string | null = null;
  let bestValue = -Infinity;
  for (const [key, value] of Object.entries(featureImportances)) {
    if (value > bestValue) {
      best = key;
      bestValue = value;
    }
  }
  return best;
}

export type CvMappingInput = {
  formScore?: number | null;
  errorsDetected?: string[];
  featureImportances?: Record<string, number>;
};

export type MappedJoint = { label: string; x: number; y: number; score: number };
export type MappedFeedback = {
  severity: "critical" | "warning" | "good";
  joint: string;
  message: string;
  detail: string;
};

// Synthesizes joints + feedback from a CV pipeline payload. Returns empty
// arrays if formScore is missing, since there's nothing to derive scores
// from — callers should leave existing joints/feedback untouched in that case.
export function mapCvOutputToJointsAndFeedback(
  input: CvMappingInput
): { joints: MappedJoint[]; feedback: MappedFeedback[] } {
  const { formScore, errorsDetected = [], featureImportances } = input;

  if (formScore == null) {
    return { joints: [], feedback: [] };
  }

  const watchLabel = FEATURE_TO_JOINT[topFeature(featureImportances) ?? ""] ?? null;
  const watchScore = Math.round(Math.max(0, formScore - 15));
  const restScore = Math.round(Math.min(100, formScore + 5));

  const joints: MappedJoint[] = RIG.map((j) => {
    const isWatch = j.label === watchLabel;
    // Watch joint scores below formScore (it's what dragged the score down);
    // everything else scores at/above formScore with a small honest jitter.
    return { label: j.label, x: j.x, y: j.y, score: isWatch ? watchScore : restScore };
  });

  const feedback: MappedFeedback[] = [];

  if (errorsDetected.length > 0) {
    for (const error of errorsDetected) {
      feedback.push({
        severity: severityFor(watchLabel ? watchScore : formScore),
        joint: watchLabel ?? "General",
        message: error,
        detail: error,
      });
    }
  } else if (watchLabel) {
    feedback.push({
      severity: severityFor(watchScore),
      joint: watchLabel,
      message: `${watchLabel} needs attention`,
      detail: `${watchLabel} contributed most to the lowered form score.`,
    });
  } else {
    feedback.push({
      severity: severityFor(formScore),
      joint: "General",
      message: "No specific issues flagged",
      detail: `Form score: ${formScore}.`,
    });
  }

  return { joints, feedback };
}
