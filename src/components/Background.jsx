// Importa os hooks do React: useState para armazenar valores e useEffect para efeitos colaterais
import { useEffect, useState } from "react";

export function Background() {
  // Cria um estado chamado "scroll" que começa em 0
  // Esse valor vai guardar quanto o usuário já rolou a página (scrollY)
  const [scroll, setScroll] = useState(0);

  // useEffect roda assim que o componente é montado
  useEffect(() => {
    // Função que atualiza o estado com o valor atual do scroll vertical
    const handleScroll = () => setScroll(window.scrollY);

    // Adiciona o evento de scroll na janela
    window.addEventListener("scroll", handleScroll);

    // Retorno do useEffect remove o evento quando o componente for desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Array vazio faz o efeito rodar uma vez só ao montar

  // Cria o estilo de fundo dinamicamente com base no scroll
  const gradient = {
    background: `
      radial-gradient(
        circle at ${50 + scroll * 0.02}% ${
      50 + scroll * 0.015
    }%, /* posição dinâmica do círculo */
        rgba(8, 20, 45, 0.80),   /* tom azul escuro */
        rgba(3, 8, 18, 0.97)     /* quase preto */
      ),
      radial-gradient(
        circle at ${40 - scroll * 0.015}% ${
      60 + scroll * 0.02
    }%, /* segunda mancha dinâmica */
        rgba(15, 45, 95, 0.25),  /* leve brilho azul */
        transparent              /* desaparece para fora */
      )
    `,
  };

  // Renderiza o fundo fixo atrás do site (-z-10 deixa no plano de fundo)
  return <div className="fixed inset-0 -z-10" style={gradient}></div>;
}