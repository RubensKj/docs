export interface DocPage {
  id: string;
  title: string;
  content?: string;
}

export interface Documentation {
  id: string;
  name: string;
  description?: string;
  pages?: DocPage[];
}