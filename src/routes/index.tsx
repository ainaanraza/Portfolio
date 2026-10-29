import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

const title = "Ainaan Raza | AI/ML Engineer & Full Stack Developer";
const description =
  "Portfolio of Ainaan Raza - AI/ML Engineer, Full Stack Developer, and Smart India Hackathon (SIH) Winner. Specializing in Deep Learning, Generative AI, React, TypeScript, Python, and high-performance intelligent interfaces.";
const siteUrl = "https://ainaanraza.com";
const ogImageUrl = `${siteUrl}/og-image.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Ainaan Raza, AI Engineer, Machine Learning, Deep Learning, Generative AI, Full Stack Developer, React, TanStack Start, TypeScript, Python, SIH Winner, Gold Medalist, Portfolio",
      },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ainaan Raza Portfolio" },
      { property: "og:url", content: siteUrl },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Ainaan Raza - AI/ML Engineer & Full Stack Developer" },
      { property: "og:locale", content: "en_US" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ainaanraza" },
      { name: "twitter:creator", content: "@ainaanraza" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImageUrl },
      { name: "twitter:image:alt", content: "Ainaan Raza - AI/ML Engineer & Full Stack Developer" },
    ],
  }),
  component: Home,
});

// The portfolio is fully interactive (cursor, canvas, mouse effects) and reads the
// browser window while drawing, so it renders in the browser only.
function Home() {
  return (
    <ClientOnly fallback={<div className="min-h-screen bg-cosmic-bg" />}>
      <Portfolio />
    </ClientOnly>
  );
}
