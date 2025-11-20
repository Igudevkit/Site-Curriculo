export function Skills() {
  const skills = [
    { name: "Inglês", level: "Básico" },
    { name: "React", level: "Básico" },
    { name: "Tailwind", level: "Básico" },
    { name: "HTML", level: "Avançado" },
    { name: "CSS", level: "Avançado" },
    { name: "JavaScript", level: "Avançado" },
    { name: "Node.js", level: "Básico" },
    { name: "C++", level: "Básico" },
    { name: "UI/UX Design", level: "Básico" },
    { name: "Vite", level: "Básico" },
    { name: "Git", level: "Intermediário" },
    { name: "APIs REST", level: "Básico" },
    { name: "Pacote Office", level: "Intermediário" },
    { name: "Excel", level: "Básico" },
    { name: "Esquemas Elétricos", level: "Avançado" },
    { name: "Hardware IoT", level: "Intermediário" },
    { name: "Criptografia", level: "Intermediário" },
    { name: "Redes", level: "Básico" },
    { name: "SIP", level: "Intermediário" },
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-blue-400">Habilidades</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-gray-900 p-4 rounded-xl text-center shadow-lg border border-gray-700 hover:border-purple-500 hover:scale-105 transition flex flex-col gap-1"
          >
            <span className="text-lg font-semibold text-purple-300">
              {s.name}
            </span>
            <span className="text-sm text-gray-400 italic">{s.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
