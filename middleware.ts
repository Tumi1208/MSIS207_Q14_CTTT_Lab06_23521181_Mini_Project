import { NextRequest, NextResponse } from "next/server";

type Counter = {
  count: number;
  firstHit: number;
};

// Demo-only in-memory rate limiter. Resets when the server restarts.
const counters = new Map<string, Counter>();
const WINDOW = 60 * 1000; // 1 minute
const LIMIT = 5;

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api/ask")) {
    return NextResponse.next();
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const entry = counters.get(ip) || { count: 0, firstHit: now };

  if (now - entry.firstHit > WINDOW) {
    entry.count = 0;
    entry.firstHit = now;
  }

  entry.count += 1;
  counters.set(ip, entry);

  if (entry.count > LIMIT) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/ask/:path*"],
};
