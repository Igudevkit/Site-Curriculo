// Exporta o componente About para ser usado em outras partes do projeto
export function About() {
  return (
    // <section> representa uma área da página dedicada ao conteúdo "Sobre mim"
    // py-16 → padding vertical grande
    // px-6 → padding horizontal moderado
    // max-w-4xl → largura máxima limitada para melhor leitura
    // mx-auto → centraliza horizontalmente
    <section className="py-16 px-6 max-w-4xl mx-auto">
      {/* Título principal da seção */}
      {/* text-4xl → tamanho grande da fonte */}
      {/* font-bold → deixa o texto em negrito */}
      {/* mb-4 → margem inferior */}
      {/* text-[#567EBB] → cor personalizada azul */}
      <h2 className="text-4xl font-bold mb-4 text-[#567EBB]">Sobre Mim</h2>

      {/* Parágrafo principal com descrição sobre você */}
      {/* text-[#DCE0E6] → cor do texto (cinza claro) */}
      {/* text-lg → tamanho de fonte levemente maior */}
      {/* leading-relaxed → espaçamento entre linhas para leitura confortável */}
      <p className="text-[#DCE0E6] text-lg leading-relaxed">
        {/* Texto descritivo */}
        Tenho 23 anos e sou uma pessoa criativa, sempre em busca de
        aprimoramento e novas soluções. Sou desenvolvedor focado em aplicações
        web, com experiência em HTML, CSS e JavaScript. Tenho interesse em
        sistemas de automação, maturidade de software (CMMI), análise de dados e
        criação de interfaces modernas. Gosto de desenvolver projetos
        funcionais, responsivos e com visual limpo, priorizando usabilidade,
        organização e clareza na comunicação.
        {/* <br /> adiciona quebra de linha */}
        <br />
        <br />
        Procuro sempre unir criatividade e lógica para criar ferramentas que
        facilitem o dia a dia da empresa. Na Intelbras, contribuí para a
        construção da nova wiki interna, desenvolvi um jogo educacional para
        novos colaboradores, mantive documentações técnicas (tutoriais e guias
        sobre produtos) e iniciei a criação de uma ferramenta para otimizar a
        gestão da carteira de alunos.
      </p>
    </section>
  );
}