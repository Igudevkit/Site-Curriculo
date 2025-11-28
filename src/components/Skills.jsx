// Exporta a função Skills para que possa ser usada em outros arquivos
export function Skills() {
  // Cria um array chamado "skills" contendo objetos com nome e nível de cada habilidade
  const skills = [
    { name: "Inglês", level: "Básico" }, // Define a habilidade Inglês
    { name: "React", level: "Básico" }, // Define a habilidade React
    { name: "Tailwind", level: "Básico" }, // Define a habilidade Tailwind CSS
    { name: "HTML", level: "Avançado" }, // Define a habilidade HTML
    { name: "CSS", level: "Avançado" }, // Define a habilidade CSS
    { name: "JavaScript", level: "Avançado" }, // Define a habilidade JavaScript
    { name: "Node.js", level: "Básico" }, // Define a habilidade Node.js
    { name: "C++", level: "Básico" }, // Define a habilidade C++
    { name: "UI/UX Design", level: "Básico" }, // Define a habilidade de design UI/UX
    { name: "Vite", level: "Básico" }, // Define a habilidade com Vite
    { name: "Git", level: "Intermediário" }, // Define a habilidade Git
    { name: "APIs REST", level: "Básico" }, // Define a habilidade com APIs REST
    { name: "Pacote Office", level: "Intermediário" }, // Define a habilidade com Office
    { name: "Excel", level: "Básico" }, // Define a habilidade Excel
    { name: "Esquemas Elétricos", level: "Avançado" }, // Define a habilidade com esquemas elétricos
    { name: "Hardware IoT", level: "Intermediário" }, // Define a habilidade com IoT
    { name: "Criptografia", level: "Intermediário" }, // Define a habilidade em criptografia
    { name: "Redes", level: "Básico" }, // Define a habilidade em redes
    { name: "SIP", level: "Intermediário" }, // Define a habilidade com SIP
  ];

  // Retorna o JSX que será renderizado na tela
  return (
    // Define a seção com espaçamento e centralização usando Tailwind
    <section className="py-16 px-6 max-w-5xl mx-auto">
      {/* Título da seção com cor e tamanho configurados */}
      <h2 className="text-4xl font-bold mb-4 text-[#567EBB]">Habilidades</h2>

      {/* Grid responsiva que organiza os cards das habilidades */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {/* Faz um loop sobre o array "skills" e cria um card para cada habilidade */}
        {skills.map((s) => (
          // Cada card recebe um "key" único baseado no nome da habilidade
          <div
            key={s.name}
            // Classes Tailwind para estilo, sombra, borda, animação e hover
            className="bg-[#1F1F20] p-4 rounded-xl text-center shadow-lg 
                       border border-[#2B4C7E] hover:border-[#567EBB] 
                       hover:scale-105 transition flex flex-col gap-1"
          >
            {/* Exibe o nome da habilidade com destaque */}
            <span className="text-lg font-semibold text-white">{s.name}</span>

            {/* Exibe o nível da habilidade em estilo itálico e cor suave */}
            <span className="text-sm text-[#DCE0E6] italic">{s.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}