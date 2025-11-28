import perfil from "../assets/perfil.jpg";

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-10 space-y-8">
      {/* FOTO COM MOLDURA ANIMADA */}
      <div className="relative group">
        {/* Glow Externo */}
        <div
          className="absolute inset-0 rounded-full opacity-60 
                     bg-[#567EBB] group-hover:opacity-80 
                     transition duration-700 animate-pulse"
        ></div>

        {/* Moldura */}
        <div
          className="absolute inset-0 rounded-full border-4 border-[#2B4C7E] 
                     group-hover:border-[#567EBB] transition duration-500"
        ></div>

        {/* Imagem */}
        <img
          src={perfil}
          alt="Foto do Igor"
          className="w-48 h-48 object-cover rounded-full relative z-10 shadow-xl 
                     transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* NOME */}
      <h1
        className="text-6xl font-extrabold drop-shadow-xl 
                   bg-gradient-to-r from-[#2B4C7E] to-[#567EBB]
                   text-transparent bg-clip-text leading-normal"
      >
        Igor Rodrigues da Silva
      </h1>

      {/* DESCRIÇÃO */}
      <p className="text-[#DCE0E6] text-xl max-w-xl animate-fade-in">
        Desenvolvedor Front-End, Técnico de Controle de Acesso e uma mente
        criativa para sua empresa.
      </p>

      {/* BOTÃO */}
      <button
        onClick={() =>
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="mt-4 px-6 py-3 bg-[#2B4C7E] hover:bg-[#567EBB] 
                   transition rounded-full font-semibold shadow-lg hover:scale-110"
      >
        Ver Projetos
      </button>
    </section>
  );
}