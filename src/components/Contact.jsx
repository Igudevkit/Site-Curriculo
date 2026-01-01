// Exporta a função Contact, que representa a seção de contato da página
export function Contact() {
  // Retorna o conteúdo JSX do componente
  return (
    // Seção principal com padding, largura máxima e texto centralizado
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      {/* Título da seção "Contato" com estilo personalizado */}
      <h2 className="text-4xl font-bold mb-8 text-[#567EBB]">Contato</h2>

      {/* Bloco de textos informativos e contatos */}
      <div className="text-[#DCE0E6] space-y-2 mb-10">
        {/* Texto inicial convidando ao contato */}
        <p className="text-lg">Curtiu? Me chama:</p>

        {/* Exibição do telefone e WhatsApp */}
        <p className="text-lg">
          Tele e WhatsApp: {/* Número em destaque com cor branca e negrito */}
          <span className="text-white font-semibold">(48) 99859-6831</span>
        </p>

        {/* Exibição do e-mail */}
        <p className="text-lg">
          Email: {/* E-mail destacado */}
          <span className="text-white font-semibold">
            Contato.igorrodriguesdasilva@gmail.com
          </span>
        </p>
      </div>

      {/* Bloco dos botões de ação (Email, WhatsApp, Currículo) */}
      <div className="flex flex-col items-center gap-6">
        {/* --- BOTÃO EMAIL --- */}
        {/* Link que abre o aplicativo de email com o endereço já preenchido */}
        <a
          href="mailto:Contato.igorrodriguesdasilva@gmail.com"
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full 
                     font-semibold shadow-lg hover:scale-105 text-white"
        >
          Mande um Email
        </a>

        {/* --- BOTÃO WHATSAPP --- */}
        {/* Link que abre conversa no WhatsApp já com a mensagem pré-pronta */}
        <a
          href="https://wa.me/5548998596831?text=Olá%20Igor%20queria%20falar%20com%20você"
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full 
                     font-semibold shadow-lg hover:scale-105 text-white"
          target="_blank" // Abre em nova aba
          rel="noopener noreferrer" // Garante segurança para novos tabs
        >
          Mande um WhatsApp
        </a>

        {/* --- BOTÃO LINKEDIN --- */}
        {/* Link para o Linkedin */}
        <a
          href="https://www.linkedin.com/in/igor-rodrigues-da-silva-2795a9381/"
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full 
                     font-semibold shadow-lg hover:scale-105 text-white"
          target="_blank" // Abre em nova aba
          rel="noopener noreferrer" // Garante segurança para novos tabs
        >
          Acesse meu Linkedin
        </a>

        {/* --- BOTÃO GITHUB --- */}
        {/* Link para o Github */}
        <a
          href="https://github.com/Igudevkit"
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full 
                     font-semibold shadow-lg hover:scale-105 text-white"
          target="_blank" // Abre em nova aba
          rel="noopener noreferrer" // Garante segurança para novos tabs
        >
          Acesse meu Github
        </a>

        {/* --- BOTÃO BAIXAR CURRÍCULO --- */}
        {/* Link para download direto do arquivo PDF do currículo */}
        <a
          href="/curriculo-igorrodriguesdasilva.pdf" // Arquivo dentro da pasta public
          download // Força o download do arquivo
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full 
                     font-semibold shadow-lg hover:scale-105 text-white"
        >
          Baixe meu Currículo
        </a>
      </div>
    </section>
  );

} // Fim do componente Contact
