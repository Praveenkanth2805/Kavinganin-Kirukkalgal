import { book } from "@/data/book";

interface BookCoverProps {
  variant: "front" | "back";
}

export function BookCover({ variant }: BookCoverProps) {
  /* ----------------------------- FRONT ----------------------------- */
  if (variant === "front") {
    const hasImage = Boolean(book.cover.image);
    const showText = book.cover.showText !== false; // default true

    // CASE A — cover image irukku
    if (hasImage) {
      return (
        <div className="relative h-full w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={book.cover.image as string}
            alt={book.cover.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Top/bottom gradient for text legibility */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          {/* Spine shadow on left */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 z-10 w-5"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.5), rgba(255,255,255,0.07) 55%, rgba(0,0,0,0.18))",
            }}
          />

          {showText ? (
            <div className="relative z-20 flex h-full w-full flex-col items-center justify-between px-8 py-12 text-center text-[#f7e9ec] sm:px-10 sm:py-16">
              <p className="text-[0.55rem] uppercase tracking-[0.5em] text-white/70 sm:text-[0.6rem]">
                Poems &amp; Reflections
              </p>

              <div className="w-full">
                <div className="mx-auto mb-6 h-px w-14 bg-white/40 sm:mb-8 sm:w-16" />
                <h1 className="text-2xl font-semibold leading-tight tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-4xl">
                  {book.cover.title}
                </h1>
                {book.cover.subtitle ? (
                  <p className="mt-4 text-[0.7rem] italic tracking-wide text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:mt-5 sm:text-sm">
                    {book.cover.subtitle}
                  </p>
                ) : null}
                <div className="mx-auto mt-6 h-px w-14 bg-white/40 sm:mt-8 sm:w-16" />
              </div>

              <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-[0.65rem]">
                {book.author.name}
              </p>
            </div>
          ) : null}
        </div>
      );
    }

    // CASE B — image illa, CSS burgundy design (default)
    return (
      <div
        className="relative h-full w-full overflow-hidden text-[#f7e9ec]"
        style={{
          background:
            "radial-gradient(120% 90% at 25% 10%, #7b2940 0%, #651f32 46%, #3d111e 100%)",
        }}
      >
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 z-10 w-5"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5), rgba(255,255,255,0.07) 55%, rgba(0,0,0,0.18))",
          }}
        />

        <div className="relative z-20 flex h-full w-full flex-col items-center justify-between px-8 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-[0.55rem] uppercase tracking-[0.5em] text-white/45 sm:text-[0.6rem]">
            Poems &amp; Reflections
          </p>

          <div className="w-full">
            <div className="mx-auto mb-6 h-px w-14 bg-white/25 sm:mb-8 sm:w-16" />
            <h1 className="text-2xl font-semibold leading-tight tracking-wide sm:text-4xl">
              {book.cover.title}
            </h1>
            {book.cover.subtitle ? (
              <p className="mt-4 text-[0.7rem] italic tracking-wide text-white/60 sm:mt-5 sm:text-sm">
                {book.cover.subtitle}
              </p>
            ) : null}
            <div className="mx-auto mt-6 h-px w-14 bg-white/25 sm:mt-8 sm:w-16" />
          </div>

          <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/70 sm:text-[0.65rem]">
            {book.author.name}
          </p>
        </div>
      </div>
    );
  }

  /* ----------------------------- BACK ----------------------------- */
  const initials = book.author.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative h-full w-full overflow-hidden text-[#f7e9ec]"
      style={{
        background:
          "radial-gradient(120% 90% at 75% 10%, #7b2940 0%, #651f32 46%, #3d111e 100%)",
      }}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 right-0 z-10 w-5"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.5), rgba(255,255,255,0.07) 55%, rgba(0,0,0,0.18))",
        }}
      />

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-between px-8 py-12 text-center sm:px-10 sm:py-16">
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          {book.backCover.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={book.backCover.image}
              alt={book.author.name}
              className="h-20 w-20 rounded-full object-cover ring-1 ring-white/25 sm:h-24 sm:w-24"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/5 text-lg tracking-widest text-white/70 sm:h-24 sm:w-24">
              {initials}
            </div>
          )}

          <p className="mt-5 text-[0.65rem] uppercase tracking-[0.4em] text-white/80">
            {book.author.name}
          </p>

          {book.backCover.text ? (
            <p className="mt-7 max-w-xs whitespace-pre-line text-[0.72rem] leading-relaxed text-white/55 sm:text-xs">
              {book.backCover.text}
            </p>
          ) : null}
        </div>

        <div className="mt-8 w-full">
          <div className="mx-auto mb-5 h-px w-12 bg-white/20" />
          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/40">
            {book.publishedDate}
          </p>
        </div>
      </div>
    </div>
  );
}