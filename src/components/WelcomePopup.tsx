import { useState, useEffect } from "react";
import mascotImg from "@/assets/capflex-mascot.png";
import logoImg from "@/assets/capflex-logo.png";

const WelcomePopup = () => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("capflex-welcome-seen");
    if (!seen) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("capflex-welcome-seen", "1");
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-400 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Popup */}
      <div
        className={`relative z-10 w-[95vw] max-w-2xl rounded-sm border-2 border-primary/60 bg-card shadow-2xl shadow-primary/20 overflow-hidden transition-transform duration-400 ${
          closing ? "scale-90 opacity-0" : "animate-scale-in"
        }`}
      >
        {/* Industrial top stripe */}
        <div className="h-2 w-full bg-gradient-to-r from-primary via-[hsl(var(--hazard))] to-primary" />

        {/* Hazard tape pattern */}
        <div
          className="h-3 w-full opacity-40"
          style={{
            background:
              "repeating-linear-gradient(135deg, hsl(45 100% 50%) 0px, hsl(45 100% 50%) 10px, hsl(0 0% 10%) 10px, hsl(0 0% 10%) 20px)",
          }}
        />

        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Mascot */}
          <div className="flex-shrink-0 relative">
            <div className="w-36 h-36 md:w-48 md:h-48 relative animate-fade-in">
              <img
                src={mascotImg}
                alt="Capflex - Mascote tampa de borracha industrial"
                className="w-full h-full object-contain drop-shadow-[0_0_20px_hsl(25,95%,53%,0.4)]"
                width={512}
                height={512}
              />
            </div>
            {/* Speech bubble */}
            <div className="absolute -top-2 -right-4 md:-right-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full animate-fade-in shadow-lg"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              Olá! 👋
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <img
              src={logoImg}
              alt="Capflex Logo"
              className="h-10 md:h-12 brightness-0 invert mx-auto md:mx-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              width={200}
              height={48}
            />

            <h2
              className="text-lg md:text-xl font-bold text-foreground leading-tight animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              Bem-vindo à <span className="text-primary">Capflex</span>!
            </h2>

            <p
              className="text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              Somos especialistas em <strong className="text-foreground">tampas e plugues de borracha</strong> para
              mascaramento industrial. Protegemos roscas, furos e superfícies durante pintura, jateamento,
              anodização e tratamentos térmicos — com{" "}
              <strong className="text-primary">precisão, economia e reutilização</strong>.
            </p>

            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "both" }}
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/15 text-primary border border-primary/30 px-3 py-1.5 rounded-sm">
                🔧 +3.000 medidas
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/15 text-primary border border-primary/30 px-3 py-1.5 rounded-sm">
                🏭 100% Nacional
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/15 text-primary border border-primary/30 px-3 py-1.5 rounded-sm">
                ♻️ Reutilizável
              </span>
            </div>

            <button
              onClick={handleClose}
              className="mt-4 w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              Explorar Soluções →
            </button>
          </div>
        </div>

        {/* Bottom hazard tape */}
        <div
          className="h-3 w-full opacity-40"
          style={{
            background:
              "repeating-linear-gradient(135deg, hsl(45 100% 50%) 0px, hsl(45 100% 50%) 10px, hsl(0 0% 10%) 10px, hsl(0 0% 10%) 20px)",
          }}
        />
        <div className="h-2 w-full bg-gradient-to-r from-primary via-[hsl(var(--hazard))] to-primary" />
      </div>
    </div>
  );
};

export default WelcomePopup;
