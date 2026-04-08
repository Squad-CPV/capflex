import heroImg from "@/assets/capflex-hero-real.jpg";
import { useInView } from "@/hooks/use-animations";

const solutionHighlights = [
  {
    title: "Roscas",
    text: "Tamponamento flexível para múltiplos diâmetros com ajuste preciso.",
  },
  {
    title: "Furos",
    text: "Proteção contra contaminação, impacto e retrabalho em linha.",
  },
  {
    title: "Conexões",
    text: "Tamponamento seguro para embarque, estoque e processos críticos.",
  },
];

export default function HeroSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-screen flex items-end pt-16 md:pt-20 overflow-hidden section-dark">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Peças industriais com tampas elásticas Capflex" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(235,39%,23%)] via-[hsl(235,39%,23%,0.85)] to-[hsl(235,39%,23%,0.40)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(235,39%,23%,0.70)] via-[hsl(235,39%,23%,0.40)] to-transparent" />
      </div>

      <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div ref={ref} className="container relative z-10 pb-12 md:pb-28">
        <div className="max-w-4xl">
          <div className={`${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
            <div className="industrial-tag mb-5 md:mb-8 text-[9px] md:text-[10px]" style={{ borderColor: "rgba(146,86,141,0.5)", color: "white", background: "rgba(146,86,141,0.15)" }}>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Engenharia de tampas elásticas para alta exigência industrial
            </div>
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
            <span className="text-lg md:text-2xl text-white/60 font-light">
              É tudo o que você precisa.
            </span>
          </div>

          <p
            className={`text-[15px] md:text-lg text-white/60 font-light max-w-2xl mb-7 md:mb-10 leading-[1.65] ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            style={inView ? { animationDelay: "320ms" } : undefined}
          >
            Desenvolvemos soluções de tamponamento para proteger roscas, furos, conexões e superfícies críticas ao longo de fabricação,
            pintura, montagem, transporte e armazenagem.
          </p>

          <div
            className={`flex flex-col items-stretch sm:flex-row sm:items-start gap-3 md:gap-4 mb-8 md:mb-12 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            style={inView ? { animationDelay: "420ms" } : undefined}
          >
            <a href="#formulario" className="btn-industrial hover-scale text-center text-sm md:text-base">
              Solicitar Amostra Técnica Gratuita →
            </a>
            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-white/50 border border-white/10 px-4 py-3 bg-white/5 backdrop-blur-sm text-center sm:text-left">
              Diagnóstico técnico e seleção de modelos sem custo
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
            {solutionHighlights.map((item, i) => (
              <div
                key={item.title}
                className={`border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
                style={inView ? { animationDelay: `${520 + i * 120}ms` } : undefined}
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-bold mb-1.5 md:mb-2">{item.title}</p>
                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
