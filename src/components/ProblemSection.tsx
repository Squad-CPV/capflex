import { useInView } from "@/hooks/use-animations";
import { X, Check } from "lucide-react";

export default function ProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section id="problema" className="py-20 md:py-28 bg-background">
      <div ref={ref} className={`container max-w-4xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
          O custo invisível das tampas plásticas na sua linha de produção.
        </h2>

        <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4 mb-12">
          <p>A maioria das indústrias nunca calculou quanto perde com tampas.</p>
          <p>
            Não apenas no estoque — mas no tempo de linha parada por tampa errada, no retrabalho por proteção que falhou, no descarte de peças contaminadas durante a pintura, e nos atrasos de embarque por componentes danificados no transporte.
          </p>
          <p>
            Cada modelo diferente de tampa é mais um SKU para gerir, mais um risco de falta e mais complexidade para o comprador.
          </p>
          <p className="text-foreground font-semibold">
            O problema não é a tampa. É a quantidade de modelos diferentes que você precisa manter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-muted-foreground font-bold text-sm uppercase tracking-wider mb-4">O Padrão Antigo</h3>
            <ul className="space-y-3">
              {[
                "60+ modelos de tampas plásticas rígidas",
                "Uma tampa por diâmetro, por processo",
                "Estoque fragmentado, risco constante de falta",
                "Falhas de vedação em ambientes agressivos",
                "Perda de peças no transporte e manuseio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X size={16} className="text-destructive mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-6">
            <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-4">Com Capflex</h3>
            <ul className="space-y-3">
              {[
                "5 modelos elásticos que cobrem múltiplos diâmetros",
                "Alta aderência em superfícies irregulares",
                "Resistência a óleos, tintas e temperaturas extremas",
                "Zero retrabalho por falha de proteção",
                "Redução imediata de SKUs no almoxarifado",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
