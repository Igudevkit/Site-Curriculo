export function Projects() {
  const proj = [
    {
      title: "Perfil no GitHub",
      desc: "Confira todo meu perfil no GitHub, onde compartilho meus projetos e contribuições de código.",
      link: "https://github.com/Igudevkit",
    },
    {
      title: "Paginas HTML/CSS/JS",
      desc: "Repositório onde estão centralizados todos os meus projetos públicos baseados em HTML, CSS e JavaScript",
      link: "https://github.com/Igudevkit/HTML-s",
    },
    {
      title: "Integrações entre Códigos",
      desc: "Repositório que reúne exemplos e implementações de integrações",
      link: "https://github.com/Igudevkit/Integracoes",
    },
    {
      title: "Arduinos",
      desc: "Repositório que reúne projetos e experimentos usando Arduino, ESP e Raspberry",
      link: "https://github.com/Igudevkit/Arduinos",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-[#567EBB]">Projetos</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {proj.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1F1F20] p-6 rounded-xl shadow-lg border border-[#2B4C7E] 
                       hover:border-[#567EBB] hover:scale-105 transition block"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">{p.title}</h3>
            <p className="text-[#DCE0E6]">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
