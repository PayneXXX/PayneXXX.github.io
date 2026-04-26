import ReactMarkdown, { type Components } from "react-markdown";
import { cn } from "@/lib/utils";

const markdownComponents: Components = {
  h1: ({ node: _node, ...props }) => (
    <h1 className="text-2xl font-bold tracking-tight text-title" {...props} />
  ),
  h2: ({ node: _node, ...props }) => (
    <h2 className="mt-6 text-xl font-semibold text-title" {...props} />
  ),
  h3: ({ node: _node, ...props }) => (
    <h3 className="mt-4 text-lg font-semibold text-title" {...props} />
  ),
  p: ({ node: _node, ...props }) => (
    <p className="leading-relaxed text-primary" {...props} />
  ),
  a: ({ node: _node, ...props }) => (
    <a
      className="font-medium text-primary underline underline-offset-4"
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  ),
  ul: ({ node: _node, ...props }) => (
    <ul
      className="flex list-disc flex-col gap-1.5 pl-5 text-primary"
      {...props}
    />
  ),
  ol: ({ node: _node, ...props }) => (
    <ol
      className="flex list-decimal flex-col gap-1.5 pl-5 text-primary"
      {...props}
    />
  ),
  li: ({ node: _node, ...props }) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: ({ node: _node, ...props }) => (
    <blockquote
      className="border-l-2 border-border pl-4 text-muted-foreground"
      {...props}
    />
  ),
  table: ({ node: _node, ...props }) => (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: ({ node: _node, ...props }) => (
    <th
      className="border-b border-border bg-muted px-3 py-2 font-semibold text-title"
      {...props}
    />
  ),
  td: ({ node: _node, ...props }) => (
    <td className="border-b border-border px-3 py-2 text-primary" {...props} />
  ),
  code: ({ node: _node, className, ...props }) => (
    <code
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ node: _node, ...props }) => (
    <pre
      className="overflow-x-auto rounded-lg border border-border bg-muted p-3 text-sm"
      {...props}
    />
  ),
};

export function MarkdownArticle({ children }: { children: string }) {
  return (
    <article className="flex max-w-none flex-col gap-3 overflow-hidden text-sm sm:text-[0.95rem]">
      <ReactMarkdown components={markdownComponents}>{children}</ReactMarkdown>
    </article>
  );
}
