import Container from "@/components/Container";

export default function AskLoading() {
  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-8">
        <div className="rounded-[28px] border border-emerald-100/80 bg-white/80 px-8 py-10 shadow-xl ring-1 ring-white/70">
          <div className="mb-4 h-6 w-32 rounded-full bg-emerald-100 shimmer" />
          <div className="mb-3 h-10 w-3/4 rounded bg-slate-100 shimmer" />
          <div className="h-5 w-2/3 rounded bg-slate-100 shimmer" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="glass rounded-3xl border border-emerald-100/80 p-6 shadow-xl ring-1 ring-white/60"
            >
              <div className="mb-4 h-5 w-24 rounded bg-emerald-100 shimmer" />
              <div className="mb-3 h-4 w-full rounded bg-slate-100 shimmer" />
              <div className="mb-3 h-4 w-5/6 rounded bg-slate-100 shimmer" />
              <div className="h-4 w-4/6 rounded bg-slate-100 shimmer" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
