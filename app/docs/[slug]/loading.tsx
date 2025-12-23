import Container from "@/components/Container";
import Divider from "@/components/Divider";

export default function LoadingDocDetail() {
  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="h-7 w-20 rounded-full bg-emerald-100 shimmer" />
          <div className="h-4 w-28 rounded bg-slate-100 shimmer" />
        </div>

        <div className="space-y-3">
          <div className="h-10 w-3/4 rounded bg-slate-100 shimmer" />
          <div className="h-5 w-2/3 rounded bg-slate-100 shimmer" />
        </div>

        <Divider />

        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-4 w-full rounded bg-slate-100 shimmer" />
          ))}
        </div>
      </Container>
    </div>
  );
}
