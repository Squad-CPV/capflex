import { useInView } from "@/hooks/use-animations";
import { PackageCheck, Timer, Leaf } from "lucide-react";

const results = [
  {
    icon: PackageCheck,
    title: "FIM DA PERDA DE ESTOQUE",
    text: "Redução drástica de SKUs de tampas no almoxarifado. Menos ruptura, menos compra emergencial, menos espaço ocupado.",
  },
  {
    icon: Timer,
    title: "MICRO PARADA ZERO (LEAN MFG)",
    text: "A tampa certa sempre disponível. Sem linha parada por falta de modelo específico. Compatível com sistemas Kanban e just-in-time.",
  },
  {
    icon: Leaf,
    title: "PRODUÇÃO SUSTENTÁVEL",
    text: "Menor volume de tampas descartadas por incompatibilidade. Processo PMF com menor geração de resíduos plásticos por unidade produzida.",
  },
];

export default function CaseSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-12 text-center max-w-3xl mx-auto leading-tight">
          O que muda quando uma grande montadora substitui 60 modelos por 5.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {results.map((r) => (
            <div key={r.title} className="text-center">
              <r.icon size={36} className="text-primary mx-auto mb-4" />
              <h3 className="text-sm font-bold text-foreground tracking-wider mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>Aplicado nas maiores linhas de montagem do Brasil.</p>
          <p>Disponível para auditoria técnica do processo.</p>
        </div>
      </div>
    </section>
  );
}
