import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";

export default function App() {
  return (
    <div className="relative">
      <Background /> {/* FUNDO ANIMADO AQUI */}
      <div className="bg-transparent text-white min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
