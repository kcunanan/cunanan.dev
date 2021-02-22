export type TFile = {
  id: string;
  file: string;
  url: string;
};

export interface IProject {
  id: string;
  name: string;
  slug: string;
  headline: string;
  tags: string;
  tldr: string;
  tools: string;
  logo?: TFile;
  header_color: string;

  introduction?: string;
  requirements?: string;
  architecture?: string;
  wireframes_ui?: string;
}
