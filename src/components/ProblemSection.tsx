import { useInView } from "@/hooks/use-animations";
import { X, Check } from "lucide-react";

const legacyProblems = [
  "60+ modelos de tampas plásticas rígidas",
  "Uma tampa por diâmetro, por processo",
  "Estoque fragmentado, risco constante de falta",
  "Falhas de vedação em ambientes agressivos",
  "Perda de peças no transporte e manuseio",
];

const capflexBenefits = [
  "5 modelos elásticos que cobrem múltiplos diâmetros",
  "Alta aderência em superfícies irregulares",
  "Resistência a óleos, tintas e temperaturas extremas",
  "Zero retrabalho por falha de proteção",
  "Redução imediata de SKUs no almoxarifado",
];

export default function ProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section id="problema" className="py-24 md:py-32 bg-background industrial-section overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_68%)] pointer-events-none" />

      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Diagnóstico</div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className={inView ? "animate-fade-up" : "opacity-0 translate-y-8"}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 leading-[1.05] max-w-2xl">
                O custo invisível das tampas plásticas na sua
                <span className="text-primary"> linha de produção.</span>
              </h2>

              <div className="text-muted-foreground text-sm leading-relaxed space-y-4 max-w-xl">
                <p>A maioria das indústrias nunca calculou quanto perde com tampas.</p>
                <p>
                  Não apenas no estoque — mas no tempo de linha parada por tampa errada, no retrabalho por proteção que falhou, no descarte de peças contaminadas durante a pintura, e nos atrasos de embarque por componentes danificados no transporte.
                </p>
                <p>
                  Cada modelo diferente de tampa é mais um SKU para gerir, mais um risco de falta e mais complexidade para o comprador.
                </p>
              </div>
            </div>

            <div
              className={`relative pl-5 pr-6 py-5 border border-primary/25 bg-card/50 backdrop-blur-sm max-w-xl transition-all duration-300 hover:border-primary/45 hover:-translate-y-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={inView ? { animationDelay: "180ms" } : undefined}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <p className="text-foreground font-bold text-sm md:text-base">
                O problema não é a tampa. É a quantidade de modelos diferentes que você precisa manter.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "// O padrão antigo",
                tone: "muted",
                items: legacyProblems,
                icon: X,
              },
              {
                title: "// Com Capflex",
                tone: "primary",
                items: capflexBenefits,
                icon: Check,
              },
            ].map((card, index) => {
              const Icon = card.icon;
              const isPrimary = card.tone === "primary";

              return (
                <div
                  key={card.title}
                  className={`industrial-card p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 ${isPrimary ? "border-primary/30 bg-card" : "bg-card/70"} ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
                  style={inView ? { animationDelay: `${240 + index * 160}ms` } : undefined}
                >
                  {isPrimary && <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />}
                  <h3 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-5 ${isPrimary ? "text-primary" : "text-muted-foreground"}`}>
                    {card.title}
                  </h3>
                  <ul className="space-y-3">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 text-sm transition-all duration-300 hover:translate-x-1 ${isPrimary ? "text-foreground" : "text-muted-foreground"}`}
                        style={inView ? { animationDelay: `${320 + index * 120 + itemIndex * 70}ms` } : undefined}
                      >
                        <Icon size={14} className={`${isPrimary ? "text-primary" : "text-destructive"} mt-0.5 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
