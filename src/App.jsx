import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";

import Daisy from "./pages/Daisy";

// 👇 Criamos um componente Home com seu layout atual
function Home() {
  return (
    <div className="relative">
      <Background />

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daisy" element={<Daisy />} />
      </Routes>
    </BrowserRouter>
  );
}