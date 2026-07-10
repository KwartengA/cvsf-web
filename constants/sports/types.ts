export type Technique = {
  id: string;
  name: string;
  summary: string;
  body: string[];
  keyPoints: string[];
  videos: Video[];
};

export type Video = {
  title: string;
  youtubeId: string;
  duration: string;
  channel: string;
};

export type Resource = {
  title: string;
  type: "article" | "book" | "video" | "guide";
  description: string;
  url: string;
};

export type Sport = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  accentColor: string;
  techniques: Technique[];
  resources: Resource[];
};
