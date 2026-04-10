import { useInView } from "@/hooks/use-animations";
import { PackageCheck, Timer, Leaf } from "lucide-react";

const results = [
  {
    icon: PackageCheck,
    number: "01",
    title: "Fim da Perda de Estoque",
    text: "Redução drástica de SKUs de tampas no almoxarifado. Menos ruptura, menos compra emergencial, menos espaço ocupado.",
  },
  {
    icon: Timer,
    number: "02",
    title: "Micro Parada Zero (Lean Mfg)",
    text: "A tampa certa sempre disponível. Sem linha parada por falta de modelo específico. Compatível com sistemas Kanban e just-in-time.",
  },
  {
    icon: Leaf,
    number: "03",
    title: "Produto Sustentável",
    text: "Menor volume de tampas descartadas por incompatibilidade. Processo PMF com menor geração de resíduos plásticos por unidade produzida.",
  },
];

export default function CaseSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 section-light relative overflow-hidden">
      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Resultados comprovados</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-[1.05] max-w-3xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          O que muda quando uma grande montadora substitui <span className="text-primary">60 modelos por 5.</span>
        </h2>

        <div className={`grid-line my-12 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "140ms" } : undefined} />

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-12">
          {results.map((r, i) => (
            <div
              key={r.title}
              className={`stat-block p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={{ background: "#F5F6FA", border: "0.5px solid rgba(35,39,80,0.08)", ...(inView ? { animationDelay: `${240 + i * 140}ms` } : {}) }}
            >
              <div className="flex items-start justify-between mb-4">
                <r.icon size={24} className="text-primary" strokeWidth={1.5} />
                <span className="text-[10px] font-bold text-primary text-mono">{r.number}</span>
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-foreground mb-3">{r.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "rgba(35,39,80,0.72)" }}>{r.text}</p>
            </div>
          ))}
        </div>

        <div className={`grid-line mb-8 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "620ms" } : undefined} />

        <div className={`flex flex-wrap items-center gap-3 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "720ms" } : undefined}>
          <div className="w-2 h-2 bg-primary rounded-full" />
          <div className="text-xs text-muted-foreground">
            <span>Aplicado nas maiores linhas de montagem do Brasil.</span>
            <span className="mx-2 text-border">|</span>
            <span>Disponível para auditoria técnica do processo.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
