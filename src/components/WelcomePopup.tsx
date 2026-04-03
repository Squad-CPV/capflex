import { useState, useEffect } from "react";
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

  const scrollToForm = () => {
    handleClose();
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  const scrollToContent = () => {
    handleClose();
    setTimeout(() => {
      document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
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
        className={`relative z-10 w-full max-w-sm bg-card border border-border rounded-2xl shadow-xl overflow-visible transition-all duration-300 ${
          closing ? "scale-95 opacity-0" : "animate-scale-in"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors text-lg leading-none z-20"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Mascot floating above the card */}
        <div className="flex justify-center -mt-16">
          <div className="relative">
            {/* Speech bubble */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg animate-bounce z-10">
              ⚡ Olá!
            </div>
            <img
              src={mascotImg}
              alt="Mascote Capflex"
              className="w-32 h-32 object-contain animate-mascot-bounce drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              width={512}
              height={512}
            />
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 flex flex-col items-center text-center gap-4">
          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">
              Eu sou o <span className="text-primary">Capflex</span>! ⚡
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sabia que o <strong className="text-foreground">tamponamento correto</strong> pode
              reduzir em até <strong className="text-primary">70% o retrabalho</strong> nos seus
              processos industriais? A Capflex oferece tampas e plugues em látex de alta durabilidade
              — <strong className="text-foreground">sob medida para a sua operação</strong>.
            </p>
          </div>

          {/* CTA buttons */}
          <button
            onClick={scrollToForm}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            ⚡ Quero uma solução sob medida
          </button>

          <button
            onClick={scrollToContent}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Talvez depois
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
