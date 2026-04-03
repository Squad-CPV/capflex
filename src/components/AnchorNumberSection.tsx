import { useCountUp, useInView } from "@/hooks/use-animations";
import { ArrowRight } from "lucide-react";

export default function AnchorNumberSection() {
  const { count, ref: countRef } = useCountUp(1000000, 2500);
  const { ref, inView } = useInView();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div ref={ref} className={`container max-w-3xl text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div ref={countRef}>
          <p className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary mb-2">
            Até R$ {count.toLocaleString("pt-BR")}
          </p>
        </div>
        <p className="text-xl md:text-2xl font-semibold text-foreground mb-6">
          em economia anual de estoque e processo.
        </p>
        <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Esse é o impacto médio estimado quando indústrias de médio e grande porte substituem 60+ modelos de tampas por 5 modelos Capflex. A economia vem de onde você provavelmente nunca calculou:
        </p>
        <ul className="text-left max-w-lg mx-auto space-y-3 mb-8">
          {[
            "Redução de SKUs e custo de gestão de estoque",
            "Eliminação de compras emergenciais por ruptura",
            "Fim do retrabalho por falha de proteção",
            "Menos descarte por incompatibilidade de modelo",
            "Menor tempo de parada por tampa errada na linha",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
              <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground font-semibold mb-8">
          Não é sobre o preço da tampa. É sobre o que a tampa errada custa.
        </p>
        <a href="#formulario" className="inline-flex items-center px-6 py-3 border border-primary text-primary text-sm font-bold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
          Quer calcular a economia do seu processo? Solicitar análise gratuita →
        </a>
      </div>
    </section>
  );
}
