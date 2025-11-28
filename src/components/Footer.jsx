// Exporta o componente Footer para ser utilizado em outros arquivos
export function Footer() {
  // Retorna o conteúdo JSX do rodapé
  return (
    // Tag <footer> que define o rodapé da página, com padding, texto centralizado e cor cinza
    <footer className="py-10 text-center text-gray-500">
      {/* Texto exibido dentro do rodapé */}
      Repositorio desta pagina no GitHub. Criado com React + Tailwind.
    </footer>
  );
} // Fim do componente Footer