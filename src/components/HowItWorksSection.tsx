import { useInView } from "@/hooks/use-animations";
import { Zap, Shield, Layers } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "ELASTICIDADE CONTROLADA",
    text: "O polímero de alta performance se adapta ao diâmetro da peça com pressão constante — sem folga, sem vazamento, sem contaminação.",
  },
  {
    icon: Shield,
    title: "RESISTÊNCIA EM AMBIENTES AGRESSIVOS",
    text: "Formulação resistente a óleos, tintas, solventes e variações térmicas. Projetada para os ambientes onde tampas plásticas comuns falham.",
  },
  {
    icon: Layers,
    title: "COBERTURA AMPLIADA",
    text: "Cada modelo Capflex cobre uma faixa de diâmetros. 5 modelos substituem o que hoje ocupa 60 SKUs no seu almoxarifado.",
  },
];

export default function HowItWorksSection() {
  const { ref, inView } = useInView();

  return (
    <section id="solucao" className="py-20 md:py-28 bg-background">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-12 text-center max-w-3xl mx-auto leading-tight">
          Uma tampa. Múltiplos diâmetros. Nenhuma concessão de performance.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cards.map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-lg p-6">
              <c.icon size={32} className="text-primary mb-4" />
              <h3 className="text-sm font-bold text-foreground tracking-wider mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          Fabricadas pelo processo PMF — tecnologia proprietária com 15 anos de desenvolvimento em engenharia de polímeros industriais.
        </p>
      </div>
    </section>
  );
}
