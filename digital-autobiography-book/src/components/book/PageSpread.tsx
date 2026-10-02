import type { ReactNode } from "react";

interface PageSpreadProps {
  left: ReactNode | null;
  right: ReactNode | null;
  showSpine?: boolean;
}

export function PageSpread({ left, right, showSpine = true }: PageSpreadProps) {
  return (
    <div className="absolute inset-0 grid grid-cols-2">
      {/* LEFT — transparent when empty */}
      <div
        className={[
          "relative h-full overflow-hidden",
          left
            ? "rounded-l-lg bg-paper shadow-[-20px_24px_44px_-22px_rgba(0,0,0,0.7)]"
            : "",
        ].join(" ")}
      >
        {left}
        {left ? (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-6"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.15), rgba(0,0,0,0))",
            }}
          />
        ) : null}
      </div>

      {/* RIGHT — transparent when empty */}
      <div
        className={[
          "relative h-full overflow-hidden",
          right
            ? "rounded-r-lg bg-paper shadow-[20px_24px_44px_-22px_rgba(0,0,0,0.7)]"
            : "",
        ].join(" ")}
      >
        {right}
        {right ? (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-6"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0))",
            }}
          />
        ) : null}
      </div>

      {/* SPINE */}
      {showSpine && left && right ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 34%, rgba(0,0,0,0.17) 50%, rgba(0,0,0,0.05) 66%, rgba(0,0,0,0) 100%)",
          }}
        />
      ) : null}
    </div>
  );
}