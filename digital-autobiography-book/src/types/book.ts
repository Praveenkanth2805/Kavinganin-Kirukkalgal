export interface CoverData {
  title: string;
  subtitle?: string;
  image?: string | null;
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
  /** Optional image that matches the poem. */
  image?: string | null;
}

export interface BackCoverData {
  image?: string | null;
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
}

export interface Leaf {
  index: number;
  front: BookPage;
  back: BookPage;
}