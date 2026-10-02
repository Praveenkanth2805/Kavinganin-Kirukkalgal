import Book from "@/components/book/Book";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-2 py-6 sm:px-6 sm:py-10">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 20%, rgba(120,60,80,0.22) 0%, rgba(0,0,0,0) 55%), radial-gradient(100% 100% at 50% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      <div className="relative z-10 flex w-full flex-col items-center">
        <Book />
      </div>
    </main>
  );
}