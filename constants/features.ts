export type SportCard = {
  name: string;
  description: string;
  image: string;
};

export type Feature = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

export type SportsSection = {
  tag: string;
  title: string;
  description: string;
};

export const sportsSection: SportsSection = {
  tag: "03 Sports",
  title: "Multi-sport profiles",
  description:
    "Purpose-built form rules per discipline. A squat is not a swim stroke , each sport has its own keypoint weights and benchmarks.",
};

export const features: Feature[] = [
  {
    tag: "01  Pose Detection",
    title: "Real-time body tracking",
    description:
      "33 keypoints tracked at up to 30fps directly on your device. No cloud round-trip, no lag — instant spatial awareness of every joint.",
    image: "/assets/images/gym_001.jpg",
  },
  {
    tag: "02 Feedback",
    title: "Instant corrective cues",
    description:
      "One correction at a time, surfaced the moment your form breaks. The most important fix, right when you need it.",
    image: "/assets/images/gym_002.jpg",
  },
  {
    tag: "04  History",
    title: "Session tracking",
    description:
      "Every rep scored, every session logged. Review your form trend over days and weeks without needing a coach to read the data.",
    image: "/assets/images/gym_003.jpg",
  },
  {
    tag: "05  Privacy",
    title: "Fully on-device",
    description:
      "No video leaves your network. Runs offline on a Raspberry Pi, a laptop, or any Linux device with a camera attached.",
    image: "/assets/images/basketball_001.jpg",
  },
];

export const sportCards: SportCard[] = [
  {
    name: "Gym",
    description: "Squat depth, bar path, lockout — every rep graded in real time. Know exactly where your form breaks before the weight does.",
    image: "/assets/images/gym_001.jpg",
  },
  {
    name: "Swimming",
    description: "Stroke rate, entry angle, and body roll tracked per length. Turn pool sessions into measurable technique progress.",
    image: "/assets/images/swimming_003.jpg",
  },
  {
    name: "Tennis",
    description: "Serve motion and swing mechanics checked against form benchmarks. Catch the small errors that cost you the big points.",
    image: "/assets/images/tennis_001.jpg",
  },
  {
    name: "Basketball",
    description: "Shot release angle and footwork assessed on every attempt. Build consistency through data, not guesswork.",
    image: "/assets/images/basketball_002.jpg",
  },
];
