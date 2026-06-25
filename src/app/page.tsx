import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import TechMarquee from "@/components/TechMarquee";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <TechMarquee />
        <Features />
      </main>
      <Footer />
    </>
  );
}
