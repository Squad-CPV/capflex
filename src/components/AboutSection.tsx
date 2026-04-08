import { useInView } from "@/hooks/use-animations";
import { Leaf } from "lucide-react";

const metrics = [
  { number: "15+", label: "anos de desenvolvimento" },
  { number: "100%", label: "dedicada à proteção industrial" },
  { number: "Multi", label: "aplicação em múltiplos diâmetros" },
  { number: "PMF", label: "processo proprietário" },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-24 md:py-32 section-dark overflow-hidden relative">
      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Sobre</div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className={inView ? "animate-fade-up" : "opacity-0 translate-y-8"}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-[1.05]">
              15 anos desenvolvendo o que a indústria precisava e
              <span className="text-primary"> ainda não tinha.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className={`p-7 transition-all duration-300 hover:-translate-y-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", ...(inView ? { animationDelay: "160ms" } : {}) }}>
              <div className="text-sm leading-[1.65] space-y-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                <p>
                  A Capflex não surgiu de um catálogo. Surgiu de um problema real: a indústria de alta exigência precisava de proteção confiável para múltiplos diâmetros — e nenhuma solução do mercado resolvia isso com eficiência.
                </p>
                <p>
                  15 anos de desenvolvimento em engenharia de polímeros resultaram em um produto que não existe no formato de prateleira. A Capflex é construída para processos que não aceitam falha.
                </p>
                <p>
                  100% focada em proteção industrial, com histórico documentado de aplicação em processos críticos e nas maiores plantas industriais do Brasil.
                </p>
              </div>
            </div>

            <div className={`p-4 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={{ borderLeft: "3px solid #92568D", background: "rgba(146,86,141,0.12)", ...(inView ? { animationDelay: "280ms" } : {}) }}>
              <p className="text-white font-bold text-sm">
                Processo <span className="text-primary">PMF</span> — tecnologia proprietária de fabricação de polímeros de alta performance.
              </p>
            </div>

            <div className={`flex items-center gap-2 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "360ms" } : undefined}>
              <Leaf size={14} className="text-primary shrink-0" />
              <span className="text-[11px] font-bold text-primary">
                Compromisso ESG — Menor descarte plástico por unidade produzida
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 mt-12" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-6 text-center transition-all duration-300 hover:-translate-y-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                ...(inView ? { animationDelay: `${400 + i * 120}ms` } : {}),
              }}
            >
              <p className="economy-number text-3xl md:text-4xl mb-2 text-white">{m.number}</p>
              <p className="text-[10px] uppercase tracking-[0.15em] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
