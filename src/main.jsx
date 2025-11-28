import { StrictMode } from "react";
// Importa o StrictMode, que ativa verificações extras no React durante o desenvolvimento

import { createRoot } from "react-dom/client";
// Importa createRoot, a nova API do React 18 para criar a raiz da aplicação

import "./index.css";
// Importa o arquivo global de estilos CSS

import App from "./App.jsx";
// Importa o componente principal da aplicação (App)

createRoot(document.getElementById("root")).render(
  // Cria a raiz React dentro da div com id="root" e inicia a renderização da aplicação

  <StrictMode>
    {/* O StrictMode envolve a aplicação para ajudar a detectar problemas comuns */}
    <App />
    {/* Renderiza o componente App, que é toda a estrutura do seu site */}
  </StrictMode>
);