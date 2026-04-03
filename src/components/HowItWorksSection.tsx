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
    text: "Formulação resistente a óleos, tintas, solventes e variações térmicas. Projetada para os ambientes onde tampas plásticas comuns falham.",
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
    <section id="solucao" className="py-24 md:py-32 bg-background industrial-section">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Tecnologia</div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-[1.05] max-w-3xl">
          Uma tampa. Múltiplos diâmetros.
          <br />
          <span className="text-primary">Nenhuma concessão</span> de performance.
        </h2>

        <div className="grid-line my-12" />

        <div className="grid md:grid-cols-3 gap-0 border border-border">
          {cards.map((c, i) => (
            <div key={c.title} className={`p-8 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""} group hover:bg-surface-raised transition-colors`}>
              <div className="flex items-start justify-between mb-6">
                <c.icon size={28} className="text-primary" strokeWidth={1.5} />
                <span className="text-[10px] font-bold text-muted-foreground text-mono">{c.number}</span>
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-foreground mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <div className="w-2 h-2 bg-primary" />
          <p className="text-xs text-muted-foreground">
            Fabricadas pelo processo <span className="text-foreground font-bold">PMF</span> — tecnologia proprietária com 15 anos de desenvolvimento em engenharia de polímeros industriais.
          </p>
        </div>
      </div>
    </section>
  );
}
