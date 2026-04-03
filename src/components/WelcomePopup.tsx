import { useState, useEffect } from "react";
import logoImg from "@/assets/capflex-logo.png";
import mascotImg from "@/assets/capflex-mascot.png";

const WelcomePopup = () => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("capflex-welcome-seen");
    if (!seen) setVisible(true);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("capflex-welcome-seen", "1");
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={handleClose} />

      <div
        className={`relative z-10 w-full max-w-sm bg-card border border-border rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
          closing ? "scale-95 opacity-0" : "animate-scale-in"
        }`}
      >
        <div className="h-1 w-full bg-primary" />

        <div className="p-5 flex flex-col items-center text-center gap-3">
          {/* Logo + Mascot side by side */}
          <div className="flex items-center gap-4">
            <img
              src={mascotImg}
              alt="Mascote Capflex"
              className="w-20 h-20 object-contain"
              width={512}
              height={512}
            />
            <img
              src={logoImg}
              alt="Capflex Logo"
              className="h-10 brightness-0 invert"
              width={200}
              height={48}
            />
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-foreground">
              Bem-vindo à <span className="text-primary">Capflex</span>!
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especialista em <strong className="text-foreground">soluções de tamponamento industrial</strong>.
              Tampas e plugues em látex de alta durabilidade para proteger roscas, furos e superfícies nos seus processos.
            </p>
          </div>

          <button
            onClick={handleClose}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-md text-sm transition-colors"
          >
            Conhecer soluções
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
