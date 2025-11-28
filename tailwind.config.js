// Exporta um objeto como configuração padrão do TailwindCSS
export default {
  // Define os arquivos onde o Tailwind vai procurar classes para gerar o CSS final
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Configurações de tema personalizadas
  theme: {
    // "extend" adiciona valores ao tema padrão sem sobrescrevê-lo
    extend: {
      // Define uma paleta de cores personalizada
      colors: {
        dark: "#1F1F20", // Cor de fundo principal (bem escura)
        blueDark: "#2B4C7E", // Azul escuro da paleta
        blue: "#567EBB", // Azul principal da paleta
        blueSoft: "#606D80", // Azul acinzentado da paleta
        light: "#DCE0E6", // Cor clara usada em textos e detalhes
        white: "#FFFFFF", // Branco puro (útil para textos e contrastes)
      },
    },
  },

  // Lista de plugins extras do Tailwind (vazia por enquanto)
  plugins: [],
};