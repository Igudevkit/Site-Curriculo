import js from "@eslint/js";
// Importa as configurações recomendadas oficiais do ESLint para JavaScript

import globals from "globals";
// Importa uma lista de variáveis globais (como window, document etc.) já reconhecidas pelo ESLint

import reactHooks from "eslint-plugin-react-hooks";
// Importa o plugin do React Hooks, que ajuda a validar o uso correto do useEffect, useState etc.

import reactRefresh from "eslint-plugin-react-refresh";
// Plugin que ajuda na integração com o React Fast Refresh (hot reload)

import { defineConfig, globalIgnores } from "eslint/config";
// Importa funções do ESLint para definir a configuração e ignorar pastas/arquivos

export default defineConfig([
  // Exporta a configuração do ESLint usando o formato "flat config" (novo padrão)

  globalIgnores(["dist"]),
  // Diz para o ESLint ignorar a pasta "dist" (arquivos gerados pelo build)

  {
    files: ["**/*.{js,jsx}"],
    // Define que esta configuração deve ser aplicada a todos os arquivos .js e .jsx do projeto

    extends: [
      js.configs.recommended,
      // Carrega regras básicas recomendadas pelo ESLint

      reactHooks.configs.flat.recommended,
      // Carrega regras recomendadas para garantir o uso correto dos React Hooks

      reactRefresh.configs.vite,
      // Adiciona regras compatíveis com React Refresh e Vite
    ],

    languageOptions: {
      ecmaVersion: 2020,
      // Define versão do ECMAScript para análise (2020 já suporta recursos modernos)

      globals: globals.browser,
      // Define variáveis globais de ambiente de navegador (window, document, etc.)

      parserOptions: {
        ecmaVersion: "latest",
        // Garante suporte ao JavaScript mais atual disponível

        ecmaFeatures: { jsx: true },
        // Habilita o suporte a JSX dentro dos arquivos

        sourceType: "module",
        // Permite usar import/export
      },
    },

    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      // Ativa erro para variáveis não usadas, exceto se o nome começar com letra maiúscula ou underline
    },
  },
]);
// Fim da configuração