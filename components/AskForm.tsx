"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useTransition } from "react";
import { askAI } from "@/app/actions/ask-ai";
import { fadeUp } from "@/lib/motion";
import type { AskResult } from "@/lib/knowledge";
import { cn } from "@/lib/utils";
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";

export default function AskForm() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<AskResult | null>(null);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [underlineActive, setUnderlineActive] = useState(false);
  const typingRef = useRef<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const reducedMotion = useReducedMotionPref();

  useEffect(() => {
    return () => {
      if (typingRef.current) window.clearInterval(typingRef.current);
    };
  }, []);

  const playAnswer = (response: AskResult) => {
    if (typingRef.current) {
      window.clearInterval(typingRef.current);
      typingRef.current = null;
    }

    setResult(response);

    const target = response.answer || "";

    if (reducedMotion) {
      setDisplayedAnswer(target);
      setUnderlineActive(true);
      return;
    }

    let index = 0;
    setDisplayedAnswer("");
    typingRef.current = window.setInterval(() => {
      index += 1;
      setDisplayedAnswer(target.slice(0, index));
      if (index >= target.length) {
        setUnderlineActive(true);
        if (typingRef.current) window.clearInterval(typingRef.current);
      }
    }, 14);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    setDisplayedAnswer("");
    setUnderlineActive(false);
    startTransition(async () => {
      const response = await askAI(question);
      playAnswer(response);
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <Card className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Ask the knowledge base
            </p>
            <p className="text-sm text-slate-600">
              Keywords help the simulated RAG find the right passages.
            </p>
          </div>
          <Badge variant="soft">Server Action</Badge>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-slate-800">
            Your question
          </label>
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="e.g. How does the middleware protect the API?"
            className={cn(
              "h-36 w-full rounded-2xl border border-emerald-100/80 bg-white/90 px-4 py-3 text-sm text-slate-800 shadow-inner outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200",
              isPending ? "opacity-80" : ""
            )}
            disabled={isPending}
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-slate-600">
              The AI will cite the top matching docs.
            </div>
            <Button type="submit" variant="primary" loading={isPending}>
              {isPending ? "Thinking" : "Submit question"}
            </Button>
          </div>
        </form>
      </Card>

      <Card className="space-y-4 bg-gradient-to-br from-white/90 to-emerald-50/50">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-800">
            Response preview
          </p>
          <div className="flex items-center gap-2 text-sm text-emerald-700">
            {isPending && (
              <span className="thinking-dots">
                <span />
                <span />
                <span />
              </span>
            )}
            <Badge variant="outline">{isPending ? "Thinking" : "Ready"}</Badge>
          </div>
        </div>
        <Divider />
        <div className="min-h-[220px] space-y-3">
          {isPending && (
            <div className="space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-100 shimmer" />
              <div className="h-4 w-full rounded bg-slate-100 shimmer" />
              <div className="h-4 w-11/12 rounded bg-slate-100 shimmer" />
              <div className="h-4 w-3/4 rounded bg-slate-100 shimmer" />
            </div>
          )}

          {!isPending && result && (
            <motion.div
              key={result.answer}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: reducedMotion ? 0 : 0.45 }}
              className="space-y-3"
            >
              <p
                className={cn(
                  "text-sm font-semibold text-slate-800 mint-underline",
                  underlineActive ? "is-active" : ""
                )}
              >
                Answer
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                {displayedAnswer || result.answer}
              </p>

              {result.references.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    References
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {result.references.map((ref) => (
                      <Link key={ref.slug} href={`/docs/${ref.slug}`}>
                        <Badge
                          variant="soft"
                          className={cn(
                            "cursor-pointer hover:border-emerald-400 hover:text-emerald-900"
                          )}
                        >
                          {ref.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {!result.ok && (
                <p className="text-sm text-amber-700">
                  Please add a specific question so the AI can help.
                </p>
              )}
            </motion.div>
          )}

          {!isPending && !result && (
            <p className="text-sm text-slate-600">
              Submit a question to see the AI response here. We will keep the
              tone concise and cite the closest matching docs.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}
