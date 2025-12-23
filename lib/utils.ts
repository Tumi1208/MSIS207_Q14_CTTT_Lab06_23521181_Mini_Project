export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type Doc = {
  slug: string;
  title: string;
  summary: string;
  content: string;
};
