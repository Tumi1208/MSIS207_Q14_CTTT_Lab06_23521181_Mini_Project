"use server";

import { generateAnswer } from "@/lib/knowledge";

export async function askAI(question: string) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return generateAnswer(question);
}
