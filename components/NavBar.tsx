import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import MotionButton from "./MotionButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/ask", label: "Ask AI" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-emerald-100/70 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full px-3 py-2 text-sm font-semibold"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-md transition duration-200 group-hover:scale-105">
            KB
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.18em] text-emerald-600">
              Lab 6
            </span>
            <span className="text-base text-slate-900">
              AI Knowledge Base
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <MotionButton
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-slate-700 hover:text-emerald-800"
            >
              {link.label}
            </MotionButton>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/docs" variant="ghost" className="hidden sm:inline-flex px-4 py-2">
            View Docs
          </Button>
          <Button href="/ask" variant="primary" className="px-4 py-2">
            Ask AI
          </Button>
        </div>
      </Container>
    </header>
  );
}
