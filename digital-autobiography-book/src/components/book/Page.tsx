import type { BookPage } from "@/types/book";
import { book } from "@/data/book";
import { BookCover } from "./BookCover";

interface PageProps {
  page: BookPage;
  side: "left" | "right";
}

function Blank() {
  return <div className="h-full w-full" aria-hidden />;
}

function TitlePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <p className="text-[0.55rem] uppercase tracking-[0.45em] text-neutral-400">
        A Collection
      </p>
      <h1 className="mt-6 text-2xl font-semibold leading-tight tracking-wide text-neutral-900 sm:text-3xl">
        {book.title}
      </h1>
      {book.subtitle ? (
        <p className="mt-4 text-xs italic text-neutral-500 sm:text-sm">
          {book.subtitle}
        </p>
      ) : null}
      <div className="mt-8 h-px w-14 bg-neutral-300" />
      <p className="mt-6 text-[0.65rem] uppercase tracking-[0.35em] text-neutral-600">
        {book.author.name}
      </p>
    </div>
  );
}

function PublicationPage() {
  const { publication } = book;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center text-[0.68rem] leading-relaxed text-neutral-500 sm:px-10 sm:text-xs">
      <div className="mb-5 h-px w-12 bg-neutral-300" />
      <p className="font-medium tracking-wide text-neutral-700">{book.title}</p>
      {book.subtitle ? <p className="italic">{book.subtitle}</p> : null}
      <div className="mt-4 space-y-1">
        <p>{publication.publisher}</p>
        {publication.edition ? <p>{publication.edition}</p> : null}
        <p>Published {publication.date || book.publishedDate}</p>
        {publication.isbn ? <p>ISBN {publication.isbn}</p> : null}
      </div>
      {publication.copyright ? (
        <p className="mt-4 text-[0.62rem] text-neutral-400">
          {publication.copyright}
        </p>
      ) : null}
    </div>
  );
}

function AuthorPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 py-10 text-center sm:px-10 sm:py-12">
      <p className="text-[0.55rem] uppercase tracking-[0.45em] text-neutral-400">
        About the Author
      </p>
      <h2 className="mt-4 text-lg font-semibold tracking-wide text-neutral-900 sm:text-xl">
        {book.author.name}
      </h2>
      <div className="mt-5 mb-6 h-px w-12 bg-neutral-300" />
      <div className="flex-1 overflow-hidden">
        <p className="whitespace-pre-line text-[0.78rem] leading-[1.85] text-neutral-700 sm:text-[0.85rem]">
          {book.author.introduction}
        </p>
      </div>
    </div>
  );
}

function ContentPage({ page }: { page: BookPage }) {
  const pos = page.imagePos ?? "top";
  const size = page.imageSize ?? "md";
  const offset = page.imageOffset ?? 0;
  const hasImage = Boolean(page.image);

  /* ---------- size resolver ---------- */
  // Presets → return Tailwind classes (stacked: max-height, side: width %)
  const presetStack: Record<string, string> = {
    sm: "max-h-24 sm:max-h-32",   // 96 / 128
    md: "max-h-40 sm:max-h-52",   // 160 / 208
    lg: "max-h-56 sm:max-h-72",   // 224 / 288
  };
  const presetSide: Record<string, string> = {
    sm: "w-1/4",
    md: "w-1/3",
    lg: "w-2/5",
  };

  // Is `size` a preset string?
  const isPreset = size === "sm" || size === "md" || size === "lg";

  // Stacked wrapper classes
  const stackedClass = isPreset
    ? presetStack[size as string]
    : ""; // custom → use inline style

  // Side wrapper classes
  const sideClass = isPreset ? presetSide[size as string] : "";

  // Inline style for custom sizes
  const customStyle: React.CSSProperties | undefined = !isPreset
    ? {
        // number → px, string → as-is
        maxHeight: typeof size === "number" ? `${size}px` : size,
        width:
          pos === "left" || pos === "right"
            ? typeof size === "number"
              ? `${size}px`
              : size
            : undefined,
      }
    : undefined;

  /* ---------- background ---------- */
  if (hasImage && pos === "background") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={page.image as string}
          alt={page.title ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8 py-10 text-center text-white sm:px-10 sm:py-12">
          {page.title ? (
            <>
              <h2 className="text-base font-semibold tracking-wide drop-shadow sm:text-lg">
                {page.title}
              </h2>
              <div className="mt-4 mb-6 h-px w-10 bg-white/50" />
            </>
          ) : null}
          <p className="whitespace-pre-line text-center text-[0.82rem] leading-[2] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-[0.9rem]">
            {page.content}
          </p>
        </div>
      </div>
    );
  }

  const titleEl = page.title ? (
    <>
      <h2 className="text-center text-base font-semibold tracking-wide text-neutral-900 sm:text-lg">
        {page.title}
      </h2>
      <div className="mx-auto mt-4 mb-6 h-px w-10 bg-neutral-300" />
    </>
  ) : null;

  const imageEl = hasImage ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={page.image as string}
      alt={page.title ?? ""}
      className="object-contain"
      style={{
        transform:
          pos === "top"
            ? `translateY(${offset}px)`
            : pos === "bottom"
              ? `translateY(-${offset}px)`
              : pos === "left"
                ? `translateX(${offset}px)`
                : pos === "right"
                  ? `translateX(-${offset}px)`
                  : undefined,
      }}
    />
  ) : null;

  /* ---------- side by side ---------- */
  if (pos === "left" || pos === "right") {
    return (
      <div className="flex h-full w-full flex-col px-8 py-10 sm:px-10 sm:py-12">
        {titleEl}
        <div
          className={[
            "flex flex-1 items-center justify-center gap-5 overflow-hidden",
            pos === "right" ? "flex-row-reverse" : "flex-row",
          ].join(" ")}
        >
          {hasImage ? (
            <div
              className={`shrink-0 ${sideClass}`}
              style={
                isPreset
                  ? undefined
                  : { width: customStyle?.width, maxWidth: "100%" }
              }
            >
              {imageEl}
            </div>
          ) : null}
          <div className="flex-1">
            <p className="whitespace-pre-line text-center text-[0.82rem] leading-[2] text-neutral-800 sm:text-[0.9rem]">
              {page.content}
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- stacked (top / bottom) ---------- */
  return (
    <div className="flex h-full w-full flex-col px-8 py-10 sm:px-10 sm:py-12">
      {titleEl}
      <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden">
        {hasImage && pos === "top" ? (
          <div
            className={stackedClass}
            style={
              isPreset
                ? undefined
                : { maxHeight: customStyle?.maxHeight }
            }
          >
            {imageEl}
          </div>
        ) : null}

        <p className="whitespace-pre-line text-center text-[0.82rem] leading-[2] text-neutral-800 sm:text-[0.9rem]">
          {page.content}
        </p>

        {hasImage && pos === "bottom" ? (
          <div
            className={stackedClass}
            style={
              isPreset
                ? undefined
                : { maxHeight: customStyle?.maxHeight }
            }
          >
            {imageEl}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function Page({ page, side }: PageProps) {
  const renderContent = () => {
    switch (page.kind) {
      case "front-cover":
        return <BookCover variant="front" />;
      case "back-cover":
        return <BookCover variant="back" />;
      case "title":
        return <TitlePage />;
      case "publication":
        return <PublicationPage />;
      case "author":
        return <AuthorPage />;
      case "content":
        return <ContentPage page={page} />;
      default:
        return <Blank />;
    }
  };

  return (
    <div className="relative h-full w-full bg-paper font-serif text-ink">
      {renderContent()}

      {page.pageNumber !== undefined ? (
        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-[0.62rem] tracking-[0.2em] text-neutral-400">
          {page.pageNumber}
        </span>
      ) : null}
    </div>
  );
}