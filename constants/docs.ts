export type DocSection = {
  id: string;
  label: string;
};

export type DocNavGroup = {
  title: string;
  href?: string;
  items: DocSection[];
};

export const docNav: DocNavGroup[] = [
  {
    title: "Documentation",
    items: [
      { id: "introducing", label: "Introducing CVSF" },
      { id: "setup", label: "Setup" },
      { id: "camera", label: "Camera" },
      { id: "analysis", label: "Analysis" },
      { id: "sports", label: "Sports" },
      { id: "sessions", label: "Session logs" },
      { id: "deployment", label: "Deployment" },
      { id: "environment", label: "Environment Variables" },
    ],
  },
  {
    title: "Pricing",
    items: [],
  },
];
