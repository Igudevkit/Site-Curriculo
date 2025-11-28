export function Contact() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-[#567EBB]">Contato</h2>

      <div className="text-[#DCE0E6] space-y-2 mb-10">
        <p className="text-lg">Curtiu? Me chama:</p>
        <p className="text-lg">
          Tele e WhatsApp:{" "}
          <span className="text-white font-semibold">(48) 99859-6831</span>
        </p>
        <p className="text-lg">
          Email:{" "}
          <span className="text-white font-semibold">
            Contato.igorrodriguesdasilva@gmail.com
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* EMAIL */}
        <a
          href="mailto:Contato.igorrodriguesdasilva@gmail.com"
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full font-semibold shadow-lg hover:scale-105 text-white"
        >
          Mande um Email
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/5548998596831?text=Olá%20Igor%20queria%20falar%20com%20você"
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full font-semibold shadow-lg hover:scale-105 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mande um WhatsApp
        </a>

        {/* BAIXAR CURRÍCULO */}
        <a
          href="/curriculo-igorrodriguesdasilva.pdf"
          download
          className="px-8 py-3 bg-[#567EBB] hover:bg-[#2B4C7E] transition rounded-full font-semibold shadow-lg hover:scale-105 text-white"
        >
          Baixe meu Currículo
        </a>
      </div>
    </section>
  );
}
