import { useInView } from "@/hooks/use-animations";

const metrics = [
  "15+ anos de desenvolvimento",
  "100% dedicada à proteção industrial",
  "5 países atendidos",
  "Processo PMF proprietário",
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div ref={ref} className={`container max-w-4xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
          15 anos desenvolvendo o que a indústria precisava e ainda não tinha.
        </h2>

        <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4 mb-10">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m} className="bg-card border border-border rounded-lg px-4 py-5 text-center">
              <p className="text-sm font-bold text-primary">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
