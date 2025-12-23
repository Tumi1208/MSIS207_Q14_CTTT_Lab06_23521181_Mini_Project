import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Reveal from "@/components/Reveal";
import { getDocBySlug, getDocs } from "@/lib/knowledge";

type DocPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const docs = await getDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: DocPageProps) {
  const { slug } = params;
  const doc = await getDocBySlug(slug);

  return {
    title: doc ? `${doc.title} | Docs` : "Doc not found",
    description: doc?.summary,
  };
}

export default async function DocDetail({ params }: DocPageProps) {
  const { slug } = params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const paragraphs = doc.content.split("\n\n");

  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-8">
        <Reveal variant="fadeIn">
          <div className="flex items-center justify-between">
            <Badge variant="outline">Knowledge</Badge>
            <Link
              href="/docs"
              className="text-sm font-semibold text-emerald-700 hover:underline"
            >
              ← Back to all docs
            </Link>
          </div>
        </Reveal>

        <Reveal className="space-y-3">
          <h1 className="text-4xl font-bold leading-tight text-slate-900">
            {doc.title}
          </h1>
          <p className="text-lg text-slate-600">{doc.summary}</p>
        </Reveal>

        <Divider />

        <Reveal className="prose" variant="fadeUp">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Reveal>
      </Container>
    </div>
  );
}
