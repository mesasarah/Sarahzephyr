import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX } from "@/components/site/BackgroundFX";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import {
  Certifications,
  Publications,
  Leadership,
} from "@/components/site/CertsPubsLeadership";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { profile } from "@/lib/resume";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Sarah Zephyr — AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mesa Sarah Zephyr — AI, ML and full-stack engineer. Building document-intelligence platforms, RAG systems and real-time products with Python, React, FastAPI and LLMs.",
      },
      {
        property: "og:title",
        content: "Mesa Sarah Zephyr — AI Engineer & Full-Stack Developer",
      },
      {
        property: "og:description",
        content:
          "AI, ML and full-stack engineer. Building document-intelligence platforms, RAG systems and real-time products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mesa Sarah Zephyr — AI Engineer" },
      {
        name: "twitter:description",
        content:
          "AI, ML and full-stack engineer. Portfolio, projects, experience and contact.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "AI Engineer & Full-Stack Developer",
          email: `mailto:${profile.email}`,
          address: profile.location,
          url: "/",
          sameAs: [profile.github, profile.linkedin],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <LoadingScreen />
      <BackgroundFX />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Publications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
