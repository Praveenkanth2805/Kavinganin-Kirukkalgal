export interface CoverData {
  title: string;
  subtitle?: string;
  image?: string | null;
  /** Image irundha, text overlay kaatanumaa. Default: true */
  showText?: boolean;
}

export interface PublicationData {
  date: string;
  publisher?: string;
  edition?: string;
  copyright?: string;
  isbn?: string;
}

export interface AuthorData {
  name: string;
  image?: string | null;
  introduction: string;
}

export interface Poem {
  id: string;
  title: string;
  content: string;
  image?: string | null;
  /** Default: "top" */
  imagePos?: "top" | "bottom" | "left" | "right" | "background";
  /** "sm" | "md" | "lg" | number (px) | CSS string (e.g. "180px", "50%") */
  imageSize?: "sm" | "md" | "lg" | number | string;
  imageOffset?: number;
}

export interface BackCoverData {
  image?: string | null;
  imageMode?: "avatar" | "background";
  text?: string;
}

export interface BookData {
  title: string;
  subtitle?: string;
  publishedDate: string;
  cover: CoverData;
  publication: PublicationData;
  author: AuthorData;
  poems: Poem[];
  backCover: BackCoverData;
}

export type PageKind =
  | "front-cover"
  | "inside-front-cover"
  | "title"
  | "publication"
  | "author"
  | "content"
  | "blank"
  | "inside-back-cover"
  | "back-cover";

export interface BookPage {
  id: string;
  kind: PageKind;
  pageNumber?: number;
  title?: string;
  content?: string;
  image?: string | null;
  imagePos?: "top" | "bottom" | "left" | "right" | "background";
  imageSize?: "sm" | "md" | "lg" | number | string;
  imageOffset?: number;
}

export interface Leaf {
  index: number;
  front: BookPage;
  back: BookPage;
}