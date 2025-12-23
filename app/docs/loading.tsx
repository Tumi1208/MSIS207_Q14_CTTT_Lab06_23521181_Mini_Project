import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const skeletonCard =
  "glass rounded-3xl border border-emerald-100/80 p-6 shadow-xl ring-1 ring-white/60";

export default function LoadingDocs() {
  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Knowledge Base"
          title="Documentation, distilled"
          description="Loading docs..."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={skeletonCard}>
              <div className="flex items-center justify-between">
                <div className="h-6 w-20 rounded-full bg-emerald-100 shimmer" />
                <div className="h-4 w-16 rounded-full bg-slate-100 shimmer" />
              </div>
              <div className="mt-4 h-6 w-3/4 rounded bg-slate-100 shimmer" />
              <div className="mt-3 h-4 w-full rounded bg-slate-100 shimmer" />
              <div className="mt-2 h-4 w-5/6 rounded bg-slate-100 shimmer" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
