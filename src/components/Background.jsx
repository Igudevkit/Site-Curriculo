import { useEffect, useState } from "react";

export function Background() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Roxo MUITO escuro + preto
  const gradient = {
    background: `
      radial-gradient(
        circle at ${50 + scroll * 0.02}% ${50 + scroll * 0.015}%, 
        rgba(30, 0, 60, 0.9),
        rgba(3, 0, 8, 1)
      )
    `,
  };

  return <div className="fixed inset-0 -z-10" style={gradient}></div>;
}
