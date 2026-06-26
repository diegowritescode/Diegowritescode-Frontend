import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Features from "@/components/Features";
import Audience from "@/components/Audience";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <TechMarquee />
        <Projects />
        <Features />
        <Audience />
      </main>
      <Footer />
    </>
  );
}
