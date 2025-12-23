import Container from "./Container";
import Decorative from "./Decorative";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-emerald-100/80 bg-white/70 py-10 backdrop-blur">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-800">
            MSIS207 · Lab 6 Mini Capstone
          </p>
          <p className="text-sm text-slate-600">
            AI-Powered Knowledge Base (Editorial UI) — simulated responses for
            learning purposes.
          </p>
        </div>
        <div className="relative">
          <Decorative variant="zigzag" className="h-10 w-40 text-emerald-500" />
        </div>
      </Container>
    </footer>
  );
}
