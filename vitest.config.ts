import { defineConfig } from "vitest/config";

// Vitest backs the validation.md acceptance criteria (see specs/tech-stack.md).
// Node environment is enough: presentational components are rendered to static
// markup via react-dom/server, so no jsdom is required. JSX is transformed by
// Vitest's built-in esbuild using React's automatic runtime — no extra plugin.
export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react",
  },
  resolve: {
    alias: {
      "@": new URL(".", import.meta.url).pathname,
    },
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.{ts,tsx}"],
  },
});
