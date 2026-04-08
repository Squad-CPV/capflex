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
    <section className="relative min-h-screen flex items-end pt-16 md:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Peças industriais com tampas elásticas Capflex" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--brand-purple)/0.12),transparent_30%)]" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[radial-gradient(circle,hsl(var(--brand-purple)/0.10),transparent_65%)] pointer-events-none blur-2xl" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div ref={ref} className="container relative z-10 pb-12 md:pb-28">
        <div className="max-w-4xl">
          <div className={`${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
            <div className="industrial-tag mb-5 md:mb-8 pulse text-[9px] md:text-[10px]">
              <span className="w-1.5 h-1.5 bg-accent-economy rounded-full animate-pulse" />
              Engenharia de tampas elásticas para alta exigência industrial
            </div>
          </div>

          <h1
            className={`text-[2.25rem] leading-[1.05] md:text-6xl lg:text-[5.5rem] font-extrabold md:leading-[0.95] tracking-tight text-foreground mb-5 md:mb-8 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
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
            <span className="industrial-number text-5xl md:text-8xl">5.</span>
            <span className="text-lg md:text-2xl text-muted-foreground font-medium">
              É tudo o que você precisa.
            </span>
          </div>

          <p
            className={`text-sm md:text-lg text-muted-foreground max-w-2xl mb-7 md:mb-10 leading-relaxed ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
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
            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-muted-foreground border border-border px-4 py-3 bg-background/40 backdrop-blur-sm text-center sm:text-left">
              Diagnóstico técnico e seleção de modelos sem custo
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
            {solutionHighlights.map((item, i) => (
              <div
                key={item.title}
                className={`border border-border bg-background/40 backdrop-blur-sm p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-economy/50 hover:bg-background/55 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
                style={inView ? { animationDelay: `${520 + i * 120}ms` } : undefined}
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-accent-economy font-bold mb-1.5 md:mb-2">{item.title}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
