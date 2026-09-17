import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Credentials } from "@/components/portfolio/Credentials";
import { Profile } from "@/components/portfolio/Profile";
import { BackToTop, Contact, Footer } from "@/components/portfolio/Contact";

const title = "Deepak S — Computer Science & Engineering Student Portfolio";
const description =
  "Portfolio of Deepak S, a third-year Computer Science and Engineering student in Palakkad, Kerala, focused on software, web, mobile app development, databases, and AI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Profile />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
