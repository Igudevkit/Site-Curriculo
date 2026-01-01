// Exporta o componente About para ser utilizado em outras partes da aplicação
export function About() {
  return (
    // Section principal da área "Sobre Mim"
    // py-16 → espaçamento vertical
    // px-6 → espaçamento horizontal
    // max-w-4xl → largura máxima para boa leitura
    // mx-auto → centraliza o conteúdo na tela
    <section className="py-16 px-6 max-w-4xl mx-auto">

      {/* Título da seção */}
      {/* text-4xl → fonte grande */}
      {/* font-bold → negrito */}
      {/* mb-4 → margem inferior */}
      {/* text-[#567EBB] → azul personalizado */}
      <h2 className="text-4xl font-bold mb-4 text-[#567EBB]">
        Sobre Mim
      </h2>

      {/* Primeiro parágrafo */}
      {/* text-[#DCE0E6] → cor do texto */}
      {/* text-lg → tamanho da fonte */}
      {/* leading-relaxed → espaçamento entre linhas */}
      <p className="text-[#DCE0E6] text-lg leading-relaxed">
        Sou uma pessoa criativa, curiosa e movida pelo aprendizado contínuo,
        com forte interesse em entender não apenas como a tecnologia funciona,
        mas principalmente como ela é usada pelas pessoas. Acredito que uma boa
        solução técnica não se mede apenas pela complexidade do código, mas pela
        clareza, usabilidade e impacto real que ela gera no dia a dia de quem
        utiliza.
      </p>

      {/* Quebra de linha para separar parágrafos */}
      <br />

      {/* Segundo parágrafo */}
      <p className="text-[#DCE0E6] text-lg leading-relaxed">
        Atuo como desenvolvedor com foco em aplicações web, utilizando HTML,
        CSS e JavaScript, e tenho uma trajetória fortemente ligada à
        documentação técnica, suporte, capacitação e estruturação de processos.
        Ao longo da minha experiência, percebi que o suporte técnico não é um
        setor de “apagar incêndios”, mas sim uma ponte estratégica entre
        tecnologia e usuários, onde comunicação clara, didática e organização
        fazem toda a diferença.
      </p>

      {/* Quebra de linha */}
      <br />

      {/* Terceiro parágrafo */}
      <p className="text-[#DCE0E6] text-lg leading-relaxed">
        Tenho facilidade em aprender novas tecnologias e transformar
        conhecimento técnico em conteúdos acessíveis, práticos e bem
        estruturados, como tutoriais, guias, documentações, vídeos explicativos
        e materiais de apoio. Gosto de pensar na experiência do usuário desde o
        primeiro contato com o produto, passando pelo onboarding, uso diário e
        resolução de dúvidas, sempre buscando reduzir fricções e tornar a
        tecnologia mais compreensível.
      </p>

      {/* Quebra de linha */}
      <br />

      {/* Quarto parágrafo */}
      <p className="text-[#DCE0E6] text-lg leading-relaxed">
        Durante minha atuação na Intelbras, tive a oportunidade de contribuir
        diretamente para a melhoria da comunicação técnica interna. Participei
        da construção da nova wiki corporativa, organizando conteúdos e
        padronizando documentações, o que facilitou o acesso à informação e
        reduziu retrabalho entre equipes. Também desenvolvi um jogo educacional
        voltado ao onboarding de novos colaboradores, atuei na manutenção de
        documentações técnicas de produtos e iniciei o desenvolvimento de uma
        ferramenta para otimizar a gestão da carteira de alunos, trazendo mais
        controle e organização aos processos internos.
      </p>

      {/* Quebra de linha */}
      <br />

      {/* Quinto parágrafo */}
      <p className="text-[#DCE0E6] text-lg leading-relaxed">
        Tenho grande afinidade com atividades que envolvem treinamento de
        pessoas, capacitação técnica e melhoria contínua, além de interesse
        por áreas como automação, IoT, maturidade de software (CMMI), análise
        de dados e desenvolvimento de interfaces modernas. Gosto de ambientes
        onde criatividade e lógica caminham juntas, e onde existe espaço para
        questionar, melhorar processos e propor soluções.
      </p>

      {/* Quebra de linha */}
      <br />

      {/* Parágrafo final com objetivo profissional */}
      <p className="text-[#DCE0E6] text-lg leading-relaxed">
        Mais do que apenas desenvolver sistemas, busco criar entendimento.
        Meu objetivo profissional é atuar em uma posição onde eu possa
        capacitar colaboradores e clientes, além de criar ferramentas,
        conteúdos e processos que facilitem o aprendizado, o uso da tecnologia
        e a resolução de problemas.
      </p>

    </section>
  );
}
