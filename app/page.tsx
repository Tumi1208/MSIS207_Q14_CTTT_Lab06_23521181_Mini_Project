import { ArrowRight, BookOpen, Palette, ShieldCheck, Sparkles } from "lucide-react";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Decorative from "@/components/Decorative";
import Divider from "@/components/Divider";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import Stagger, { StaggerItem } from "@/components/Stagger";

const features = [
  {
    title: "Static Docs (SSG)",
    description:
      "Server components render the knowledge base statically for fast, reliable reading.",
    link: "/docs",
    icon: BookOpen,
  },
  {
    title: "Ask AI (Server Actions)",
    description:
      "A client form calls server actions that simulate retrieval and craft an answer.",
    link: "/ask",
    icon: Sparkles,
  },
  {
    title: "Middleware Security",
    description:
      "Edge-style middleware rate limits API calls to keep the demo predictable.",
    link: "/docs/security-middleware",
    icon: ShieldCheck,
  },
  {
    title: "Modern App Router",
    description:
      "Layouts, loading states, and shared components keep the experience cohesive.",
    link: "/docs/architecture-routing",
    icon: Palette,
  },
];

export default function Home() {
  return (
    <div className="pb-16 pt-10 sm:pt-14">
      <Container className="relative overflow-hidden rounded-[32px] border border-emerald-100/80 bg-white/80 px-8 py-12 shadow-2xl ring-1 ring-white/70 sm:px-12">
        <div className="absolute -left-24 top-16 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-emerald-100/60 blur-[100px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-6" variant="fadeUp">
            <Badge variant="outline">Editorial Mini Capstone</Badge>
            <h1 className="text-4xl leading-tight sm:text-5xl sm:leading-tight">
              AI-Powered Knowledge Base in a mint-forward editorial shell.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700">
              Explore a calm, airy interface that pairs static documentation
              with a simulated Ask AI experience. Built with the Next.js App
              Router, Tailwind CSS, and thoughtful loading states for Lab 6.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/ask" variant="primary">
                Ask the Knowledge Base
              </Button>
              <Button href="/docs" variant="ghost">
                Browse Docs
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Server Actions demo
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                Edge-style middleware
              </span>
            </div>
          </Reveal>

          <Reveal
            className="relative rounded-3xl bg-white/70 p-6 shadow-lg ring-1 ring-emerald-100/70 backdrop-blur"
            variant="scaleIn"
            delay={0.05}
          >
            <div className="absolute right-6 top-6 h-20 w-20 opacity-70">
              <Decorative variant="halo" className="h-full w-full" />
            </div>
            <div className="relative space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                How it works
              </p>
              <h3 className="text-2xl font-semibold text-slate-900">
                Ask in plain English, get grounded responses.
              </h3>
              <p className="text-slate-600">
                Type a question on the Ask page, and a server action will comb
                through the docs JSON to craft a concise answer with references.
                A small delay fakes streaming so the UI feels alive.
              </p>
              <Divider />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-2xl border border-emerald-100/70 bg-emerald-50/60 px-4 py-3 text-sm font-semibold text-emerald-900">
                  <Icon icon={BookOpen} size={18} />
                  Static docs with SSG-style rendering
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-emerald-100/70 bg-white/80 px-4 py-3 text-sm font-semibold text-emerald-900">
                  <Icon icon={Sparkles} size={18} />
                  Server actions + API parity
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-emerald-100/70 bg-white/80 px-4 py-3 text-sm font-semibold text-emerald-900">
                  <Icon icon={ShieldCheck} size={18} />
                  Middleware demo rate limits
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-emerald-100/70 bg-emerald-50/60 px-4 py-3 text-sm font-semibold text-emerald-900">
                  <Icon icon={Palette} size={18} />
                  Editorial-grade UI polish
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <Container className="mt-16 space-y-10">
        <Reveal variant="fadeUp">
          <SectionTitle
            eyebrow="What this project does"
            title="A modern, minty knowledge base with simulated AI"
            description="Explore the feature grid to see how the App Router, server actions, middleware, and editorial styling come together."
            align="center"
          />
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <StaggerItem key={feature.title} className="h-full">
              <Card href={feature.link} className="flex h-full flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-emerald-700">
                  <span className="hover:underline">View more</span>
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
