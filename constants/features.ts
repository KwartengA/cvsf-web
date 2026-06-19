export type SportCard = {
  name: string;
  description: string;
};

export type Feature = {
  tag: string;
  title: string;
  description: string;
  tilt?: number;
};

export const features: Feature[] = [
  {
    tag: "01 — Pose Detection",
    title: "Real-time body tracking",
    description:
      "33 keypoints tracked at up to 30fps directly on your device. No cloud round-trip, no lag — instant spatial awareness of every joint.",
    tilt: -2,
  },
  {
    tag: "02 — Feedback",
    title: "Instant corrective cues",
    description:
      "One correction at a time, surfaced the moment your form breaks. The most important fix, right when you need it.",
    tilt: 1.5,
  },
  {
    tag: "04 — History",
    title: "Session tracking",
    description:
      "Every rep scored, every session logged. Review your form trend over days and weeks without needing a coach to read the data.",
    tilt: -1,
  },
  {
    tag: "05 — Privacy",
    title: "Fully on-device",
    description:
      "No video leaves your network. Runs offline on a Raspberry Pi, a laptop, or any Linux device with a camera attached.",
    tilt: 2,
  },
];

export const sportCards: SportCard[] = [
  {
    name: "Gym",
    description: "Squat depth, bar path, lockout — every rep graded in real time.",
  },
  {
    name: "Swimming",
    description: "Stroke rate, entry angle, and body roll tracked per length.",
  },
  {
    name: "Tennis",
    description: "Serve motion and swing mechanics checked against form benchmarks.",
  },
  {
    name: "Basketball",
    description: "Shot release angle and footwork assessed on every attempt.",
  },
];
