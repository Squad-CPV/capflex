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
  const { count, ref: countRef } = useCountUp(5800000, 2500);
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 section-light relative overflow-hidden">

      <div ref={ref} className={`container relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Impacto financeiro</div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              ref={countRef}
              className={`border border-border bg-card p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Economia acumulada em clientes industriais
              </p>
              <p className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-2">
                <span className="text-primary">R$ </span>
                <span className="text-foreground">{(count / 1000000).toFixed(1).replace(".", ",")} mi</span>
              </p>
              <p className="text-lg text-foreground font-semibold mb-2">
                economia gerada em clientes que substituíram 60+ modelos por Capflex.
              </p>
              <div className="w-16 h-[2px] bg-primary my-6" />
              <p className="text-[13px] leading-relaxed max-w-md" style={{ color: "rgba(35,39,80,0.55)" }}>
                *Impacto médio estimado em clientes de médio e grande porte.
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
                  className={`flex items-start gap-4 text-sm group pb-4 transition-all duration-300 hover:translate-x-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
                  style={{ borderBottom: "1px solid rgba(35,39,80,0.10)", color: "rgba(35,39,80,0.72)", ...(inView ? { animationDelay: `${220 + i * 90}ms` } : {}) }}
                >
                  <span className="text-[10px] font-bold text-primary mt-0.5 text-mono w-5 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className={`py-5 px-5 mb-8 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={{ borderLeft: "3px solid #92568D", background: "#F3ECF2", ...(inView ? { animationDelay: "620ms" } : {}) }}>
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
