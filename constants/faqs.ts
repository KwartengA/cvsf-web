export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
 {
  question: "What is CVSF?",
  answer:
    "CVSF is an AI-powered form analysis platform that provides real-time feedback on your exercise technique across multiple sports. Using your camera, it analyzes your movement, detects errors, and gives instant corrections , like having a personal coach in your pocket. Supports gym exercises, swimming, tennis, and basketball.",
},
{
  question: "How does  this Fitness AI work?",
  answer:
    "Fitness AI uses MediaPipe Pose Detection to analyze your movement in real-time. The system identifies 33 keypoints on your body, calculates joint angles and alignment, and compares them to correct form benchmarks. All processing happens locally on your device — nothing is sent to our servers.",
},
{
  question: "What sports and exercises does system support?",
  answer:
    "Currently supported: Gym exercises, Swimming techniques, Tennis basics , and Basketball fundamentals. More coming soon.",
},
{
  question: "Is this Fitness AI a replacement for a trainer or coach?",
  answer:
    "Fitness AI is a supplement to professional coaching, not a replacement. It excels at real-time form feedback and consistency tracking, but a qualified coach provides program design, progression strategy, and personalized modifications. Best results come from combining both.",
},
{
  question: "Who should use CVSF?",
  answer:
    "Athletes optimizing technique, fitness enthusiasts wanting better form, rehab patients tracking recovery movements, coaches monitoring multiple athletes, gyms and clinics offering motion analysis, and swimmers/tennis players without access to video analysis. Anyone wanting data-driven form feedback.",
},
  {
    question: "When can I start using it?",
    answer:
      "We are in early access. Request a spot from the home page and we will reach out with setup instructions.",
  },
  {
  question: "Is my video data stored or shared?",
  answer:
    "No. All processing is on-device. Video frames never leave your local system. Only your extracted pose keypoints (33 coordinates per frame) are sent to our servers if you sync to cloud, and that's encrypted. Raw video is always yours alone.",
},
{
  question: "Who can see my workout data?",
  answer:
    "Only you. Your workouts are private by default. Optional: Share specific workouts with coaches/trainers via shareable link. No data is sold or shared with third parties. You own all your data.",
},
];
