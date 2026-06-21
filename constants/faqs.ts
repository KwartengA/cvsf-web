export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is CVSF?",
    answer:
      "CVSF is an AI-powered form analysis platform that gives you real-time feedback on your exercise technique. Using your camera, it tracks your movement, detects errors, and delivers instant corrections — like having a personal coach watching every rep. It supports gym exercises, swimming, tennis, and basketball.",
  },
  {
    question: "How does the form analysis work?",
    answer:
      "CVSF uses MediaPipe Pose Detection to track 33 keypoints on your body in real time. It calculates joint angles and alignment, then compares them to sport-specific form benchmarks. All processing happens locally on your device — nothing is sent to our servers.",
  },
  {
    question: "Which sports and exercises are supported?",
    answer:
      "Currently supported: gym and strength training, swimming, tennis, and basketball. More sports are added with each release.",
  },
  {
    question: "Is this a replacement for a trainer or coach?",
    answer:
      "No — it is a supplement, not a replacement. CVSF is very good at real-time form feedback and consistency tracking. A qualified coach provides program design, progression strategy, and personalized modifications. The best results come from combining both.",
  },
  {
    question: "Who should use CVSF?",
    answer:
      "Athletes optimizing technique, fitness enthusiasts who want better form, rehab patients tracking recovery movements, coaches monitoring multiple athletes, and gyms or clinics offering motion analysis. Anyone who wants data-driven form feedback without needing a camera crew.",
  },
  {
    question: "When can I start using it?",
    answer:
      "We are in early access. Request a spot from the home page and we will reach out with setup instructions.",
  },
  {
    question: "Is my video data stored or shared?",
    answer:
      "No. All processing is on-device. Video frames never leave your local system. If you choose to sync to the cloud, only your extracted pose keypoints — 33 coordinates per frame — are sent, and they are encrypted in transit. Raw video stays on your device.",
  },
  {
    question: "Who can see my workout data?",
    answer:
      "Only you. Workouts are private by default. You can optionally share specific sessions with a coach via a shareable link. No data is sold or shared with third parties — you own everything.",
  },
];
