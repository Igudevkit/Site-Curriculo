// Importa a imagem de perfil localizada na pasta assets
import perfil from "../assets/perfil.jpg";

// Exporta o componente Hero para ser usado em outro lugar
export function Hero() {
  // Início do retorno JSX do componente
  return (
    // Seção principal que ocupa a tela inteira, centraliza tudo e adiciona espaçamento
    <section className="h-screen flex flex-col justify-center items-center text-center px-10 space-y-8">
      {/* Container geral da foto e da moldura animada */}
      <div className="relative group">
        {/* Efeito de brilho atrás da foto, animado e pulsante */}
        <div
          className="absolute inset-0 rounded-full opacity-60 
                     bg-[#567EBB] group-hover:opacity-80 
                     transition duration-700 animate-pulse"
        ></div>

        {/* Moldura circular ao redor da imagem com animação no hover */}
        <div
          className="absolute inset-0 rounded-full border-4 border-[#2B4C7E] 
                     group-hover:border-[#567EBB] transition duration-500"
        ></div>

        {/* Imagem principal do perfil com sombra e leve zoom no hover */}
        <img
          src={perfil} // Caminho da imagem importada
          alt="Foto do Igor" // Texto alternativo para acessibilidade
          className="w-48 h-48 object-cover rounded-full relative z-10 shadow-xl 
                     transition duration-500 group-hover:scale-105" // Estilo e animação
        />
      </div>

      {/* Nome grande com efeito de degradê no texto */}
      <h1
        className="text-6xl font-extrabold drop-shadow-xl 
                   bg-gradient-to-r from-[#2B4C7E] to-[#567EBB]
                   text-transparent bg-clip-text leading-normal"
      >
        Igor Rodrigues da Silva {/* Texto exibido */}
      </h1>

      {/* Descrição abaixo do nome com animação suave */}
      <p className="text-[#DCE0E6] text-xl max-w-xl animate-fade-in">
        Desenvolvedor Front-End, Técnico de Controle de Acesso e uma mente
        criativa para sua empresa.
      </p>

      {/* Botão que rola suavemente até a seção de projetos */}
      <button
        onClick={
          () =>
            // Evento de clique do botão
            document // Acessa o documento da página
              .getElementById("projects") // Seleciona a seção de projetos pelo ID
              .scrollIntoView({ behavior: "smooth" }) // Faz a rolagem suave até ela
        }
        className="mt-4 px-6 py-3 bg-[#2B4C7E] hover:bg-[#567EBB] 
                   transition rounded-full font-semibold shadow-lg hover:scale-110"
      >
        Ver Projetos {/* Texto do botão */}
      </button>
    </section>
  );
}