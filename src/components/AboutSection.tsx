import { useInView } from "@/hooks/use-animations";

const metrics = [
  { number: "15+", label: "anos de desenvolvimento" },
  { number: "100%", label: "dedicada à proteção industrial" },
  { number: "5", label: "países atendidos" },
  { number: "PMF", label: "processo proprietário" },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-24 md:py-32 bg-background industrial-section">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Sobre</div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 leading-[1.05]">
              15 anos desenvolvendo o que a indústria precisava e
              <span className="text-primary"> ainda não tinha.</span>
            </h2>
          </div>

          <div>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mb-10">
              <p>
                A Capflex não surgiu de um catálogo. Surgiu de um problema real: a indústria de alta exigência precisava de proteção confiável para múltiplos diâmetros — e nenhuma solução do mercado resolvia isso com eficiência.
              </p>
              <p>
                15 anos de desenvolvimento em engenharia de polímeros resultaram em um produto que não existe no formato de prateleira. A Capflex é construída para processos que não aceitam falha.
              </p>
              <p>
                100% focada em proteção industrial. Presente em 5 países. Com histórico documentado de aplicação nas maiores plantas industriais do Brasil.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border mt-12">
          {metrics.map((m, i) => (
            <div key={m.label} className={`p-6 text-center ${i < 3 ? "border-r border-border" : ""}`}>
              <p className="industrial-number text-3xl md:text-4xl mb-2">{m.number}</p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
