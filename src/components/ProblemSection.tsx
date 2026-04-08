import { useInView } from "@/hooks/use-animations";
import { X, Check } from "lucide-react";

const legacyProblems = [
  "60+ modelos de tampas plásticas rígidas",
  "Uma tampa por diâmetro, por processo",
  "Estoque fragmentado, risco constante de falta",
  "Falhas de tamponamento em ambientes agressivos",
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
    <section id="problema" className="py-24 md:py-32 section-light industrial-section overflow-hidden">
      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Diagnóstico</div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className={inView ? "animate-fade-up" : "opacity-0 translate-y-8"}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 leading-[1.05] max-w-2xl">
                O custo invisível das tampas plásticas na sua
                <span className="text-primary"> linha de produção.</span>
              </h2>

              <div className="text-muted-foreground text-[15px] leading-[1.65] space-y-4 max-w-xl">
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
            {/* Padrão Convencional — fundo escuro */}
            <div
              className={`relative p-6 md:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={{
                background: "#0D1117",
                ...(inView ? { animationDelay: "240ms" } : {}),
              }}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5 text-[#8892A4]">
                {"// O padrão antigo"}
              </h3>
              <ul className="space-y-3">
                {legacyProblems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#F0F4F8]/70">
                    <X size={14} className="text-[#F0F4F8]/40 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Com Capflex — fundo teal */}
            <div
              className={`relative p-6 md:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={{
                background: "#1A7F6E",
                ...(inView ? { animationDelay: "400ms" } : {}),
              }}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5 text-white/80">
                {"// Com Capflex"}
              </h3>
              <ul className="space-y-3">
                {capflexBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <Check size={14} className="text-white/90 mt-0.5 shrink-0" />
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
