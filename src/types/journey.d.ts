export type Journey = {
  _id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights?: string[];
  tools?: string[];
  category?: "work" | "project" | "education" | "paper" | "award";
};
