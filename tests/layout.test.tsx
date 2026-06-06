import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Main } from "@/components/layout/Main";
import { MainLayout } from "@/components/layout/MainLayout";

// Phase 0 validation: the layout splits into Header / Main / Footer (each in its
// own file) composed by MainLayout, and surfaces the ClinicInfo banner (clinic
// name + tagline) read from the database. These tests render the presentational
// components to static markup and assert that contract.

const CLINIC = "AgentClinic";
const TAGLINE = "A place for AI agents to get relief from their humans.";

describe("Header", () => {
  it("renders the clinic name inside a <header>", () => {
    const html = renderToStaticMarkup(<Header clinicName={CLINIC} />);
    expect(html).toContain("<header");
    expect(html).toContain(CLINIC);
  });
});

describe("Footer", () => {
  it("renders the clinic name and tagline inside a <footer>", () => {
    const html = renderToStaticMarkup(
      <Footer clinicName={CLINIC} tagline={TAGLINE} />,
    );
    expect(html).toContain("<footer");
    expect(html).toContain(CLINIC);
    expect(html).toContain(TAGLINE);
  });
});

describe("Main", () => {
  it("wraps its children in a <main> region", () => {
    const html = renderToStaticMarkup(
      <Main>
        <p>hero content</p>
      </Main>,
    );
    expect(html).toContain("<main");
    expect(html).toContain("hero content");
  });
});

describe("MainLayout", () => {
  const html = renderToStaticMarkup(
    <MainLayout clinicName={CLINIC} tagline={TAGLINE}>
      <p>page hero</p>
    </MainLayout>,
  );

  it("composes header, main, and footer in order", () => {
    expect(html).toContain("<header");
    expect(html).toContain("<main");
    expect(html).toContain("<footer");

    const headerAt = html.indexOf("<header");
    const mainAt = html.indexOf("<main");
    const footerAt = html.indexOf("<footer");
    expect(headerAt).toBeLessThan(mainAt);
    expect(mainAt).toBeLessThan(footerAt);
  });

  it("surfaces the ClinicInfo banner: name in the header, name + tagline in the footer", () => {
    // Clinic name appears in both header and footer → at least twice.
    const occurrences = html.split(CLINIC).length - 1;
    expect(occurrences).toBeGreaterThanOrEqual(2);
    expect(html).toContain(TAGLINE);
  });

  it("renders the page's main content (children) between header and footer", () => {
    expect(html).toContain("page hero");
    const childAt = html.indexOf("page hero");
    expect(childAt).toBeGreaterThan(html.indexOf("<main"));
    expect(childAt).toBeLessThan(html.indexOf("<footer"));
  });
});

describe("Responsive design (validation.md)", () => {
  // Mobile-first baseline: containers use a fluid max-width and breakpoint-aware
  // horizontal padding so the shell adapts from phone to desktop.
  it("Main uses a fluid max-width container with responsive padding", () => {
    const html = renderToStaticMarkup(
      <Main>
        <p>hero</p>
      </Main>,
    );
    expect(html).toContain("max-w-5xl");
    expect(html).toContain("w-full");
    // Mobile padding plus a larger breakpoint variant.
    expect(html).toContain("px-4");
    expect(html).toMatch(/sm:px-6/);
  });

  it("Header and Footer use responsive horizontal padding", () => {
    const header = renderToStaticMarkup(<Header clinicName={CLINIC} />);
    const footer = renderToStaticMarkup(
      <Footer clinicName={CLINIC} tagline={TAGLINE} />,
    );
    for (const html of [header, footer]) {
      expect(html).toContain("px-4");
      expect(html).toMatch(/sm:px-6/);
    }
  });

  it("MainLayout emits at least one responsive breakpoint utility", () => {
    const html = renderToStaticMarkup(
      <MainLayout clinicName={CLINIC} tagline={TAGLINE}>
        <p>page hero</p>
      </MainLayout>,
    );
    expect(html).toMatch(/\bsm:/);
  });
});
