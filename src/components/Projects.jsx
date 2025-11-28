// Exporta a função Projects para que possa ser usada em outros componentes
export function Projects() {
  // Cria um array "proj" contendo objetos de cada projeto com título, descrição e link
  const proj = [
    {
      title: "Perfil no GitHub", // Título do projeto
      desc: "Confira todo meu perfil no GitHub, onde compartilho meus projetos e contribuições de código.", // Descrição
      link: "https://github.com/Igudevkit", // Link do projeto
    },
    {
      title: "Paginas HTML/CSS/JS", // Título do projeto
      desc: "Repositório onde estão centralizados todos os meus projetos públicos baseados em HTML, CSS e JavaScript", // Descrição
      link: "https://github.com/Igudevkit/HTML-s", // Link do projeto
    },
    {
      title: "Integrações entre Códigos", // Título do projeto
      desc: "Repositório que reúne exemplos e implementações de integrações", // Descrição
      link: "https://github.com/Igudevkit/Integracoes", // Link do projeto
    },
    {
      title: "Arduinos", // Título do projeto
      desc: "Repositório que reúne projetos e experimentos usando Arduino, ESP e Raspberry", // Descrição
      link: "https://github.com/Igudevkit/Arduinos", // Link do projeto
    },
    {
      title: "Repositorio desta Pagina", // Título do projeto
      desc: "Repositório desta pagina caso queira copiar e fazer sua versão", // Descrição
      link: "https://github.com/Igudevkit/Site-Curriculo", // Link do projeto
    },
  ];

  // Retorna o JSX que será exibido na tela
  return (
    // Define a seção com ID "projects", espaçamento e centralização usando Tailwind
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      {/* Título principal da seção com tamanho grande e cor personalizada */}
      <h2 className="text-4xl font-bold mb-6 text-[#567EBB]">Projetos</h2>

      {/* Grid responsiva: em telas grandes vira 3 colunas */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Faz um loop em cada item da lista "proj" e cria um card/link */}
        {proj.map((p) => (
          // Cada projeto é um link que leva ao GitHub, abrindo em nova aba
          <a
            key={p.title} // Define a chave única baseada no título
            href={p.link} // Define o link do projeto
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer" // Boa prática de segurança ao abrir links externos
            className="bg-[#1F1F20] p-6 rounded-xl shadow-lg border border-[#2B4C7E] 
                       hover:border-[#567EBB] hover:scale-105 transition block"
            // Classes do Tailwind para estilo, bordas, hover e animação
          >
            {/* Exibe o título do projeto com destaque e cor branca */}
            <h3 className="text-2xl font-bold mb-2 text-white">{p.title}</h3>

            {/* Exibe a descrição do projeto com cor suave */}
            <p className="text-[#DCE0E6]">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}