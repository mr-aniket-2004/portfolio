import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { content } from "@/data/content.js";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: content.seo.title },
      { name: "description", content: content.seo.description },
      { property: "og:title", content: content.seo.title },
      { property: "og:description", content: content.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: content.name,
          jobTitle: content.role,
          email: content.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          sameAs: [content.github, content.linkedin],
        }),
      },
    ],
  }),
  component: Portfolio,
});
