// Importa a função defineConfig do Vite, responsável por facilitar a criação da configuração do projeto
import { defineConfig } from "vite";

// Importa o plugin oficial do React para Vite, permitindo usar JSX, Fast Refresh e otimizações do React
import react from "@vitejs/plugin-react";

// Comentário que aponta a documentação oficial da configuração do Vite (gerado automaticamente pelo template)
// https://vite.dev/config/

// Exporta a configuração do Vite como padrão (default) usando defineConfig
export default defineConfig({
  // Define a lista de plugins que o Vite deve usar — nesse caso, apenas o plugin do React
  plugins: [react()],
});