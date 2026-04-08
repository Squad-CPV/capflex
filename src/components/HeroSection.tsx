import heroImg from "@/assets/capflex-hero-real.jpg";
import { useInView } from "@/hooks/use-animations";

const solutionHighlights = [
  {
    title: "Flanges",
    text: "Proteção flexível para flanges de múltiplos diâmetros com ajuste e vedação precisos.",
  },
  {
    title: "Dutos",
    text: "Proteção contra contaminação em dutos, impacto e retrabalho em linha de processo.",
  },
  {
    title: "Mangueiras Industriais",
    text: "Tamponamento seguro para mangueiras, conexões industriais, embarque e processos críticos.",
  },
];

export default function HeroSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-screen flex items-end pt-16 md:pt-20 overflow-hidden section-dark">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Peças industriais com tampas elásticas Capflex" width={1920} height={1080} className="w-full h-full object-cover" style={{ objectPosition: "center left 20%" }} />
        {/* Extra gradient to hide text on right side of photo */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(35,39,80,0.95) 0%, rgba(35,39,80,0.0) 40%)" }} />
        {/* Main overlay — azul-noite, NOT lilás */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(35,39,80,0.90) 0%, rgba(35,39,80,0.68) 45%, rgba(35,39,80,0.78) 100%)" }} />
      </div>

      <div ref={ref} className="container relative z-10 pb-12 md:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow — sem fundo sólido, apenas texto + traço */}
          <div className={`${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
            <p className="inline-flex items-center gap-2 mb-5 md:mb-8 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#92568D" }}>
              <span className="inline-block w-5 h-[2px]" style={{ background: "#92568D" }} />
              Engenharia de tampas elásticas para alta exigência industrial
            </p>
          </div>

          <h1
            className={`text-[2.25rem] leading-[1.05] md:text-6xl lg:text-[5.5rem] font-extrabold md:leading-[0.95] tracking-tight text-white mb-5 md:mb-8 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            style={inView ? { animationDelay: "120ms" } : undefined}
          >
            Você mantém
            <br />
            <span className="text-primary">60 modelos</span> de
            <br />
            tampas em estoque.
          </h1>

          <div
            className={`flex items-baseline gap-2 md:gap-3 mb-5 md:mb-8 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            style={inView ? { animationDelay: "220ms" } : undefined}
          >
            <span className="text-primary font-extrabold leading-none text-5xl md:text-8xl" style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em" }}>5.</span>
            <span className="text-lg md:text-2xl font-light" style={{ color: "rgba(255,255,255,0.60)" }}>
              É tudo o que você precisa.
            </span>
          </div>

          <p
            className={`text-[15px] md:text-lg font-light max-w-2xl mb-7 md:mb-10 leading-[1.65] ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            style={{ color: "rgba(255,255,255,0.60)", ...(inView ? { animationDelay: "320ms" } : {}) }}
          >
            Desenvolvemos soluções de tamponamento para proteger flanges, tubos, dutos e mangueiras industriais ao longo de fabricação,
            pintura, montagem, transporte e armazenagem.
          </p>

          <div
            className={`flex flex-col items-stretch sm:flex-row sm:items-start gap-3 md:gap-4 mb-8 md:mb-12 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            style={inView ? { animationDelay: "420ms" } : undefined}
          >
            <a href="#formulario" className="btn-industrial hover-scale text-center text-sm md:text-base" style={{ padding: "16px 32px" }}>
              Solicitar Amostra Técnica Gratuita →
            </a>
            <a href="#solucao" className="inline-flex items-center text-sm font-semibold text-primary" style={{ borderBottom: "1px solid #92568D", paddingBottom: "2px" }}>
              Como funciona a Capflex
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
            {solutionHighlights.map((item, i) => (
              <div
                key={item.title}
                className={`p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                  ...(inView ? { animationDelay: `${520 + i * 120}ms` } : {}),
                }}
              >
                <p className="text-[13px] uppercase tracking-[0.10em] font-bold mb-1.5 md:mb-2" style={{ color: "#92568D" }}>{item.title}</p>
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
