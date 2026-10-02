"use client";

import type { BookPage } from "@/types/book";
import { Page } from "./Page";

interface PageTurnProps {
  front: BookPage;
  back: BookPage;
  angle: number;
  dragging: boolean;
  duration?: number;
  fullWidth?: boolean;
}

export function PageTurn({
  front,
  back,
  angle,
  dragging,
  duration = 700,
  fullWidth = false,
}: PageTurnProps) {
  const progress = Math.min(1, Math.abs(angle) / 180);

  return (
    <div
      className={[
        "page-turn preserve-3d origin-left-center absolute top-0 h-full z-40",
        fullWidth ? "left-0 w-full" : "right-0 w-1/2",
        dragging ? "page-turn--dragging" : "",
      ].join(" ")}
      style={{
        transform: `rotateY(${angle}deg)`,
        transitionDuration: dragging ? "0ms" : `${duration}ms`,
      }}
    >
      {/* FRONT FACE */}
      <div
        className={[
          "backface-hidden absolute inset-0 overflow-hidden bg-paper",
          fullWidth
            ? "rounded-lg"
            : "rounded-r-lg",
        ].join(" ")}
      >
        <Page page={front} side="right" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: progress * 0.6,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0) 46%)",
          }}
        />
      </div>

      {/* BACK FACE */}
      <div
        className={[
          "backface-hidden absolute inset-0 overflow-hidden bg-paper",
          fullWidth
            ? "rounded-lg"
            : "rounded-l-lg",
        ].join(" ")}
        style={{ transform: "rotateY(180deg)" }}
      >
        <Page page={back} side="left" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: (1 - progress) * 0.6,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0) 46%)",
          }}
        />
      </div>
    </div>
  );
}