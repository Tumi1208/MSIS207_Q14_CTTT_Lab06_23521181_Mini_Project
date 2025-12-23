import Link from "next/link";
import Container from "@/components/Container";

export default function DocNotFound() {
  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-6 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Missing Document
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          We could not find that doc.
        </h1>
        <p className="text-slate-600">
          Try heading back to the documentation list to pick another topic.
        </p>
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-full border border-emerald-300/80 px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
        >
          Back to Docs
        </Link>
      </Container>
    </div>
  );
}
