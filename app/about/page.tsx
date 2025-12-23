import Container from "@/components/Container";
import Divider from "@/components/Divider";

export const metadata = {
  title: "About | AI Knowledge Base",
};

export default function AboutPage() {
  return (
    <div className="pb-16 pt-10">
      <Container className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            About this mini capstone
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Built for MSIS207 Lab 6 with a focus on clarity and craft.
          </h1>
          <p className="text-lg text-slate-700">
            This project blends an editorial look with practical Next.js
            patterns: App Router layouts, server components, server actions, API
            routes, and middleware. The AI behavior is simulated so you can
            explore the flow without managing API keys.
          </p>
        </div>

        <Divider />

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2 rounded-2xl border border-emerald-100/80 bg-white/80 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Design Principles
            </h3>
            <p className="text-sm text-slate-600">
              Editorial typography, mint accent colors, generous whitespace, and
              simple Tailwind-only interactions make the UI feel calm and
              intentional.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-emerald-100/80 bg-white/80 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Technical Highlights
            </h3>
            <p className="text-sm text-slate-600">
              Server actions with a mock delay, a mirrored API route, demo
              middleware rate limiting, and static docs rendered via the App
              Router.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
