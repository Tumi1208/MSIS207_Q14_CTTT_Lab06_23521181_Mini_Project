import docsData from "@/content/docs.json";
import { Doc } from "./utils";

const docs: Doc[] = docsData;

export type AskResult = {
  ok: boolean;
  answer: string;
  references: Array<Pick<Doc, "slug" | "title">>;
};

export async function getDocs(): Promise<Doc[]> {
  return docs;
}

export async function getDocBySlug(slug: string): Promise<Doc | undefined> {
  return docs.find((doc) => doc.slug === slug);
}

export async function generateAnswer(question: string): Promise<AskResult> {
  const query = question.trim();

  if (!query) {
    return {
      ok: false,
      answer: "Please enter a question so I can look through the knowledge base for you.",
      references: [],
    };
  }

  const normalized = query.toLowerCase();
  const terms = normalized.split(/\s+/).filter(Boolean);

  const scored = docs
    .map((doc) => {
      const haystack = `${doc.title} ${doc.summary} ${doc.content}`.toLowerCase();
      const score = terms.reduce((total, term) => {
        return haystack.includes(term) ? total + 1 : total;
      }, 0);

      return { doc, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const matches = scored.length > 0 ? scored : docs.map((doc) => ({ doc, score: 1 }));
  const topMatches = matches.slice(0, 3).map((entry) => entry.doc);

  const references = topMatches.map(({ title, slug }) => ({ title, slug }));
  const insightPhrases = topMatches
    .map(
      (doc, index) =>
        `${index + 1}. ${doc.title} — ${doc.summary.replace(/\.$/, "")}.`
    )
    .join(" ");

  const opener =
    scored.length > 0
      ? "I found a few pieces in the knowledge base that speak to your question."
      : "I did not find an exact match, but here is a quick orientation based on the core docs.";

  const answer = `${opener} ${insightPhrases} If you want to go deeper, open the referenced docs for the full details.`;

  return {
    ok: true,
    answer,
    references,
  };
}
