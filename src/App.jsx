import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

import ScrollToTop from "./components/ui/ScrollToTop";
import WhatsAppButton from "./components/ui/WhatsAppButton";

export default function App() {
  return (
    <>
      {" "}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
      >
        Skip to main content{" "}
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
