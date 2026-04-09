import { useInView } from "@/hooks/use-animations";
import { Zap, Shield, Layers } from "lucide-react";

const cards = [
  {
    icon: Zap,
    number: "01",
    title: "Elasticidade Controlada",
    text: "O polímero de alta performance se adapta ao diâmetro da peça com pressão constante — sem folga, sem vazamento, sem contaminação.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Resistência em Ambientes Agressivos",
    text: "Formulação resistente a óleos, solventes, tintas e variações térmicas. Projetada para os ambientes onde tampas convencionais falham.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Cobertura Ampliada",
    text: "Cada modelo Capflex cobre uma faixa de diâmetros. 5 modelos substituem o que hoje ocupa 60 SKUs no seu almoxarifado.",
  },
];

export default function HowItWorksSection() {
  const { ref, inView } = useInView();

  return (
    <section id="solucao" className="py-24 md:py-32 section-white overflow-hidden">
      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Solução</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-[1.05] max-w-3xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          Uma tampa. Múltiplos diâmetros.
          <br />
          <span className="text-primary">Nenhuma concessão</span> de performance.
        </h2>

        <div className={`grid-line my-12 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "120ms" } : undefined} />

        <div className="grid md:grid-cols-3 gap-4 md:gap-0 md:border md:border-border">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`relative p-8 border border-border md:border-0 bg-card group transition-all duration-300 hover:-translate-y-2 hover:bg-white ${i < 2 ? "md:border-r border-border" : ""} ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={inView ? { animationDelay: `${220 + i * 140}ms` } : undefined}
            >
              {i === 0 && <div className="absolute inset-x-0 top-0 h-[2px] bg-primary" />}
              <div className="absolute inset-x-8 top-0 h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 flex items-center justify-center" style={{ background: "#F3ECF2" }}>
                  <c.icon size={28} className="text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-muted-foreground text-mono">{c.number}</span>
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-foreground mb-3">{c.title}</h3>
              <p className="text-[15px] leading-relaxed group-hover:text-foreground transition-colors" style={{ color: "rgba(35,39,80,0.72)" }}>{c.text}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 flex items-center gap-3 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "620ms" } : undefined}>
          <div className="w-2 h-2 bg-primary rounded-full" />
          <p className="text-xs text-muted-foreground">
            Fabricadas pelo processo <span className="text-primary font-bold">PMF</span> — tecnologia proprietária com 15 anos de desenvolvimento em engenharia de polímeros industriais.
          </p>
        </div>
      </div>
    </section>
  );
}
