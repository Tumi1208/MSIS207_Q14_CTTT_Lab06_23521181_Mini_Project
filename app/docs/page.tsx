import { ArrowRight, BookOpen } from "lucide-react";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import { getDocs } from "@/lib/knowledge";
import Reveal from "@/components/Reveal";
import Stagger, { StaggerItem } from "@/components/Stagger";

export const metadata = {
  title: "Docs | AI Knowledge Base",
};

export default async function DocsPage() {
  const docs = await getDocs();

  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-10">
        <Reveal variant="fadeUp">
          <SectionTitle
            eyebrow="Knowledge Base"
            title="Documentation, distilled"
            description="Browse the curated set of docs that power the Ask AI experience. Each one is written in an editorial, easy-to-skim style."
            align="left"
          />
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-2">
          {docs.map((doc) => (
            <StaggerItem key={doc.slug} className="h-full">
              <Card
                href={`/docs/${doc.slug}`}
                className="flex h-full flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <div className="flex items-center gap-2">
                      <Badge variant="soft">Doc</Badge>
                      <Icon icon={BookOpen} size={16} className="text-emerald-700/70" />
                    </div>
                    <span className="text-slate-500">~3 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-slate-600">{doc.summary}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-emerald-700">
                  <span className="hover:underline">Read the doc</span>
                  <Icon icon={ArrowRight} size={18} />
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </div>
  );
}
