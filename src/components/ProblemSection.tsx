import { useInView } from "@/hooks/use-animations";
import { X, Check } from "lucide-react";

export default function ProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section id="problema" className="py-24 md:py-32 bg-background industrial-section">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        <div className="section-label">Diagnóstico</div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 leading-[1.05]">
              O custo invisível das tampas plásticas na sua
              <span className="text-primary"> linha de produção.</span>
            </h2>

            <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
              <p>A maioria das indústrias nunca calculou quanto perde com tampas.</p>
              <p>
                Não apenas no estoque — mas no tempo de linha parada por tampa errada, no retrabalho por proteção que falhou, no descarte de peças contaminadas durante a pintura, e nos atrasos de embarque por componentes danificados no transporte.
              </p>
              <p>
                Cada modelo diferente de tampa é mais um SKU para gerir, mais um risco de falta e mais complexidade para o comprador.
              </p>
            </div>

            <div className="mt-8 pl-4 border-l-2 border-primary">
              <p className="text-foreground font-bold text-sm">
                O problema não é a tampa. É a quantidade de modelos diferentes que você precisa manter.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="industrial-card p-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5">
                // O padrão antigo
              </h3>
              <ul className="space-y-3">
                {[
                  "60+ modelos de tampas plásticas rígidas",
                  "Uma tampa por diâmetro, por processo",
                  "Estoque fragmentado, risco constante de falta",
                  "Falhas de vedação em ambientes agressivos",
                  "Perda de peças no transporte e manuseio",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X size={14} className="text-destructive mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="industrial-card p-6 border-primary/30">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-5">
                // Com Capflex
              </h3>
              <ul className="space-y-3">
                {[
                  "5 modelos elásticos que cobrem múltiplos diâmetros",
                  "Alta aderência em superfícies irregulares",
                  "Resistência a óleos, tintas e temperaturas extremas",
                  "Zero retrabalho por falha de proteção",
                  "Redução imediata de SKUs no almoxarifado",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
