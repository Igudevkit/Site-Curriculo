export function Contact() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-green-400">Contato</h2>

      <div className="text-gray-300 space-y-2 mb-10">
        <p className="text-lg">Curtiu? Me chama:</p>
        <p className="text-lg">
          Tele e WhatsApp:{" "}
          <span className="text-green-400 font-semibold">(48) 99859-6831</span>
        </p>
        <p className="text-lg">
          Email:{" "}
          <span className="text-green-400 font-semibold">
            Contato.igorrodriguesdasilva@gmail.com
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* EMAIL */}
        <a
          href="mailto:Contato.igorrodriguesdasilva@gmail.com"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 transition rounded-full font-semibold shadow-lg hover:scale-105"
        >
          Mande um Email
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/5548998596831?text=Olá%20Igor%20queria%20falar%20com%20você"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 transition rounded-full font-semibold shadow-lg hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mande um WhatsApp
        </a>

        {/* BAIXAR CURRÍCULO */}
        <a
          href="/curriculo-igorrodriguesdasilva.pdf"
          download
          className="px-8 py-3 bg-green-600 hover:bg-green-700 transition rounded-full font-semibold shadow-lg hover:scale-105"
        >
          Baixe meu Currículo
      </div>
    </section>
  );
}

