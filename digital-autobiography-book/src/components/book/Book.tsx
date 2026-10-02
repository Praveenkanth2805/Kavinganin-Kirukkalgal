"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { book } from "@/data/book";
import { buildPages } from "@/lib/bookEngine";
import { Page } from "./Page";
import { PageSpread } from "./PageSpread";
import { PageTurn } from "./PageTurn";

const TURN_MS = 700;         // animation speed (was 700)
const COMMIT_RATIO = 0.15;   // easier commit (was 0.3)
const TAP_MS = 400;          // tap window (was 300)
const FLICK_VELOCITY = 0.45; // px/ms — fast swipe threshold

type Direction = 1 | -1;

interface TurnState {
  index: number;
  angle: number;
  dragging: boolean;
  direction: Direction;
}

function useIsMobile(query = "(max-width: 767px)") {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return isMobile;
}

export default function Book() {
  const pages = useMemo(() => buildPages(book), []);
  const leafCount = pages.length / 2;
  const isMobile = useIsMobile();

  const [leaf, setLeaf] = useState(0);
  const [face, setFace] = useState(0);
  const [turn, setTurn] = useState<TurnState | null>(null);

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
  startX: 0,
  width: 1,
  progress: 0,
  startedAt: 0,
  velocity: 0,
});

  const cursor = isMobile ? face : leaf;
  const total = isMobile ? pages.length : leafCount;

  useEffect(() => {
    if (isMobile) {
      setFace((f) => Math.min(pages.length - 1, Math.max(0, f)));
      setLeaf((l) => Math.min(leafCount, Math.max(0, l)));
    }
  }, [isMobile, pages.length, leafCount]);

  const beginTurn = (direction: Direction, rect: DOMRect, clientX: number) => {
    dragRef.current = {
      startX: clientX,
      width: (isMobile ? rect.width : rect.width / 2) || 1,
      progress: 0,
      startedAt: Date.now(),
      velocity: 0,
    };
    setTurn({
      index: direction === 1 ? cursor : cursor - 1,
      angle: direction === 1 ? 0 : -180,
      dragging: true,
      direction,
    });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (turn || e.button !== 0) return;
    const rect = bodyRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const direction: Direction = isMobile
      ? x < rect.width * 0.3 ? -1 : 1
      : x < rect.width / 2 ? -1 : 1;
    if (direction === 1 && cursor >= total) return;
    if (direction === -1 && cursor <= 0) return;
    beginTurn(direction, rect, e.clientX);
  };

  useEffect(() => {
    if (!turn?.dragging) return;
    const drag = dragRef.current;
    const direction = turn.direction;

    const onMove = (event: PointerEvent) => {
  const dx = event.clientX - drag.startX;
  const dt = Math.max(1, Date.now() - drag.startedAt);
  const raw = direction === 1 ? -dx / drag.width : dx / drag.width;
  const progress = Math.min(1, Math.max(0, raw));

  drag.progress = progress;
  drag.velocity = Math.abs(dx) / dt; // px per ms

  const angle =
    direction === 1 ? -180 * progress : -180 + 180 * progress;

  setTurn((t) => (t ? { ...t, angle } : t));
};

const onUp = () => {
  const progress = drag.progress;
  const elapsed = Date.now() - drag.startedAt;
  const velocity = drag.velocity;

  const isTap = progress < 0.08 && elapsed < TAP_MS;
  const isFlick = velocity > FLICK_VELOCITY;

  const shouldCommit = isTap || isFlick || progress > COMMIT_RATIO;

  const target =
    direction === 1 ? (shouldCommit ? -180 : 0) : shouldCommit ? 0 : -180;

  setTurn((t) => (t ? { ...t, angle: target, dragging: false } : t));

  window.setTimeout(() => {
    if (shouldCommit) {
      if (isMobile) setFace((f) => f + direction);
      else setLeaf((l) => l + direction);
    }
    setTurn(null);
  }, TURN_MS);
};

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [turn?.dragging, turn?.direction, isMobile]);

  const turnPage = (direction: Direction) => {
    if (turn) return;
    if (direction === 1 && cursor >= total) return;
    if (direction === -1 && cursor <= 0) return;
    setTurn({
      index: direction === 1 ? cursor : cursor - 1,
      angle: direction === 1 ? 0 : -180,
      dragging: false,
      direction,
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTurn((t) => (t ? { ...t, angle: direction === 1 ? -180 : 0 } : t));
        window.setTimeout(() => {
          if (isMobile) setFace((f) => f + direction);
          else setLeaf((l) => l + direction);
          setTurn(null);
        }, TURN_MS);
      });
    });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (turn) return;
      if (event.key === "ArrowRight") turnPage(1);
      if (event.key === "ArrowLeft") turnPage(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // During a turn, the base layer shows the page that will be revealed
// under the lifting page — exactly like a real book.
const turnDir = turn?.direction ?? 0;

const leftIndex =
  turnDir === -1 ? (leaf - 1) * 2 - 1 : leaf * 2 - 1;

const rightIndex =
  turnDir === 1 ? (leaf + 1) * 2 : leaf * 2;

const leftPage =
  leftIndex >= 0 && leftIndex < pages.length ? pages[leftIndex] : null;
const rightPage =
  rightIndex >= 0 && rightIndex < pages.length ? pages[rightIndex] : null;

  const mobileBaseIndex = turn ? face + turn.direction : face;

const mobileBasePage =
  pages[Math.min(Math.max(mobileBaseIndex, 0), pages.length - 1)];

  const turningFront = turn
    ? isMobile ? pages[turn.index] : pages[turn.index * 2]
    : null;
  const turningBack = turn
    ? isMobile ? pages[turn.index + 1] : pages[turn.index * 2 + 1]
    : null;

  const closedFront = !isMobile && leaf === 0;
  const closedBack = !isMobile && leaf === leafCount;
  const shift = turn ? 0 : closedFront ? -25 : closedBack ? 25 : 0;

  return (
    <div className="flex w-full justify-center perspective-book select-none [-webkit-tap-highlight-color:transparent]">
      <div
        className="w-full max-w-[1040px] transition-transform duration-650 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
        style={{ transform: `translateX(${shift}%)` }}
      >
        <div
          ref={bodyRef}
          role="application"
          aria-label={`${book.title} by ${book.author.name}`}
          onPointerDown={handlePointerDown}
          className={[
            "relative w-full cursor-pointer touch-pan-y",
            isMobile
              ? "perspective-book-mobile mx-auto aspect-[3/4] max-w-[430px] overflow-hidden rounded-lg shadow-[0_30px_60px_-24px_rgba(0,0,0,0.8)]"
              : "aspect-[3/2]",
          ].join(" ")}
        >
          {isMobile ? (
            <>
              <div className="absolute inset-0 overflow-hidden rounded-lg bg-paper">
                <Page page={mobileBasePage} side="right" />
              </div>
              {turn && turningFront && turningBack ? (
                <PageTurn
                  front={turningFront}
                  back={turningBack}
                  angle={turn.angle}
                  dragging={turn.dragging}
                  duration={TURN_MS}
                  fullWidth
                />
              ) : null}
            </>
          ) : (
            <>
              <PageSpread
                left={leftPage ? <Page page={leftPage} side="left" /> : null}
                right={rightPage ? <Page page={rightPage} side="right" /> : null}
                showSpine={Boolean(leftPage && rightPage)}
              />
              {turn && turningFront && turningBack ? (
                <PageTurn
                  front={turningFront}
                  back={turningBack}
                  angle={turn.angle}
                  dragging={turn.dragging}
                  duration={TURN_MS}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}