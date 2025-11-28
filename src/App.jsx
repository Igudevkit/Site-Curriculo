import { Hero } from "./components/Hero";
// Importa o componente Hero da pasta components

import { About } from "./components/About";
// Importa o componente About (sobre mim)

import { Skills } from "./components/Skills";
// Importa o componente Skills (habilidades)

import { Projects } from "./components/Projects";
// Importa o componente Projects (projetos)

import { Contact } from "./components/Contact";
// Importa o componente Contact (contato)

import { Footer } from "./components/Footer";
// Importa o componente Footer (rodapé)

import { Background } from "./components/Background";
// Importa o componente Background (fundo animado com gradiente)

// Exporta o componente principal do app
export default function App() {
  // Retorna toda a estrutura da aplicação
  return (
    <div className="relative">
      {/* Define que tudo dentro desse container é posicionado relativamente */}

      <Background />
      {/* Renderiza o fundo animado atrás de todo o site */}

      <div className="bg-transparent text-white min-h-screen overflow-x-hidden">
        {/* bg-transparent = fundo transparente
            text-white = texto branco
            min-h-screen = ocupa ao menos 100% da altura da tela
            overflow-x-hidden = impede rolagem horizontal */}

        <Hero />
        {/* Seção principal de apresentação */}

        <About />
        {/* Seção "Sobre mim" */}

        <Skills />
        {/* Seção de habilidades */}

        <Projects />
        {/* Seção de projetos */}

        <Contact />
        {/* Seção de contato */}

        <Footer />
        {/* Rodapé do site */}
      </div>
    </div>
  );
}