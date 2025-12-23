import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Decorative from "@/components/Decorative";
import SectionTitle from "@/components/SectionTitle";
import AskForm from "@/components/AskForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Ask AI | AI Knowledge Base",
};

export default function AskPage() {
  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-10">
        <Reveal variant="scaleIn">
          <div className="relative overflow-hidden rounded-[28px] border border-emerald-100/80 bg-white/80 px-8 py-10 shadow-xl ring-1 ring-white/70">
            <div className="absolute -right-10 -top-16 h-48 w-48 opacity-70">
              <Decorative variant="halo" className="h-full w-full" />
            </div>
            <div className="relative space-y-4">
              <Badge variant="outline">Ask the Knowledge Base</Badge>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                A simulated RAG flow without real API keys.
              </h1>
              <p className="max-w-2xl text-lg text-slate-700">
                This client-side form calls a server action, waits briefly to feel
                like streaming, and returns an answer grounded in the docs JSON.
                Everything runs locally so you can explore the pattern safely.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <AskForm />
        </Reveal>

        <Reveal variant="fadeUp">
          <SectionTitle
            eyebrow="How it responds"
            title="What to expect from the simulated AI"
            description="Responses will cite the top matching docs and keep the tone concise. The rate-limited API endpoint uses the same logic if you want to call it directly."
            align="center"
          />
        </Reveal>
      </Container>
    </div>
  );
}
