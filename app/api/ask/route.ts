import { NextResponse } from "next/server";
import { generateAnswer } from "@/lib/knowledge";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({ question: "" }));
  const question = typeof body.question === "string" ? body.question : "";

  const result = await generateAnswer(question);
  const status = result.ok ? 200 : 400;

  return NextResponse.json(result, { status });
}
