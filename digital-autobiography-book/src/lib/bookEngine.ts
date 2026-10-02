import type { BookData, BookPage } from "@/types/book";

const NUMBERED: ReadonlySet<BookPage["kind"]> = new Set(["author", "content"]);

export function buildPages(data: BookData): BookPage[] {
  const body: BookPage[] = [
    { id: "front-cover", kind: "front-cover" },
    { id: "inside-front-cover", kind: "inside-front-cover" },
    { id: "title", kind: "title" },
    { id: "publication", kind: "publication" },
    { id: "author", kind: "author" },
  ];

  data.poems.forEach((poem) => {
    body.push({
      id: poem.id,
      kind: "content",
      title: poem.title,
      content: poem.content,
      image: poem.image ?? null,
      imagePos: poem.imagePos ?? "top",
      imageSize: poem.imageSize ?? "md",
    });
  });

  if (body.length % 2 !== 0) {
    body.push({ id: "blank-tail", kind: "blank" });
  }

  body.push({ id: "inside-back-cover", kind: "inside-back-cover" });
  body.push({ id: "back-cover", kind: "back-cover" });

  return body.map((page, index) => ({
    ...page,
    pageNumber: NUMBERED.has(page.kind) ? index : undefined,
  }));
}

export function buildLeaves(pages: BookPage[]) {
  const leaves = [];
  for (let i = 0; i < pages.length; i += 2) {
    leaves.push({ index: i / 2, front: pages[i], back: pages[i + 1] });
  }
  return leaves;
}