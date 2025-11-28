import { useEffect, useState } from "react";

export function Background() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradient = {
    background: `
      radial-gradient(
        circle at ${50 + scroll * 0.02}% ${50 + scroll * 0.015}%,
        rgba(8, 20, 45, 0.80),   /* azul bem escuro (um pouco mais escuro) */
        rgba(3, 8, 18, 0.97)     /* quase preto, mais fechado */
      ),
      radial-gradient(
        circle at ${40 - scroll * 0.015}% ${60 + scroll * 0.02}%,
        rgba(15, 45, 95, 0.25),  /* brilho azul reduzido */
        transparent
      )
    `,
  };

  return <div className="fixed inset-0 -z-10" style={gradient}></div>;
}
