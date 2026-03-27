export type Project = {
  title: string;
  type: "video" | "image";
  media: string;
  tech: string[];
  role: string;
  description: string;
  contributions: string[];
  mobilePreview?: boolean;
  link?: string;
};