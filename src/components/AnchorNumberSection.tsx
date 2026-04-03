import { useCountUp, useInView } from "@/hooks/use-animations";
import { ArrowRight } from "lucide-react";

const savingsPoints = [
  "Redução de SKUs e custo de gestão de estoque",
  "Eliminação de compras emergenciais por ruptura",
  "Fim do retrabalho por falha de proteção",
  "Menos descarte por incompatibilidade de modelo",
  "Menor tempo de parada por tampa errada na linha",
];

export default function AnchorNumberSection() {
  const { count, ref: countRef } = useCountUp(1000000, 2500);
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[30vw] font-extrabold text-foreground leading-none">R$1M</span>
      </div>
      {/* Orange-purple gradient blur */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[radial-gradient(circle,hsl(var(--primary)/0.18),transparent_65%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-[radial-gradient(circle,hsl(var(--brand-purple)/0.15),transparent_65%)] pointer-events-none blur-3xl" />

      <div ref={ref} className={`container relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Impacto financeiro</div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              ref={countRef}
              className={`border border-border bg-background/40 backdrop-blur-sm p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Economia anual estimada
              </p>
              <p className="industrial-number text-5xl md:text-7xl lg:text-8xl mb-2">
                R$ {count.toLocaleString("pt-BR")}
              </p>
              <p className="text-lg text-foreground font-semibold mb-2">
                em economia anual de estoque e processo.
              </p>
              <div className="w-16 h-[2px] bg-primary my-6 pulse" />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Esse é o impacto médio estimado quando indústrias de médio e grande porte substituem 60+ modelos de tampas por 5 modelos Capflex.
              </p>
            </div>
          </div>

          <div>
            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "140ms" } : undefined}>
              Onde está a economia
            </p>
            <ul className="space-y-4 mb-8">
              {savingsPoints.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-4 text-sm text-muted-foreground group border-b border-border/60 pb-4 transition-all duration-300 hover:border-primary/40 hover:translate-x-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
                  style={inView ? { animationDelay: `${220 + i * 90}ms` } : undefined}
                >
                  <span className="text-[10px] font-bold text-primary mt-0.5 text-mono w-5 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className={`pl-4 border-l-2 border-primary mb-8 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "620ms" } : undefined}>
              <p className="text-foreground font-bold text-sm">
                Não é sobre o preço da tampa. É sobre o que a tampa errada custa.
              </p>
            </div>

            <a href="#formulario" className={`btn-industrial-outline hover-scale ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "720ms" } : undefined}>
              <ArrowRight size={14} className="mr-2" />
              Solicitar análise gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
