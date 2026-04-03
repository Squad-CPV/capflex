import { useInView } from "@/hooks/use-animations";
import { Tractor, HardHat, Droplets, Factory } from "lucide-react";

const segments = [
  {
    icon: Tractor,
    title: "MÁQUINAS AGRÍCOLAS E COLHEITADEIRAS",
    text: "Protege sistemas hidráulicos e conexões críticas em ambientes de alta exposição a poeira, umidade e agroquímicos.",
  },
  {
    icon: HardHat,
    title: "ENGENHARIA CIVIL",
    text: "Tampas de alta aderência para tubulações, conexões e peças estruturais em obra.",
  },
  {
    icon: Droplets,
    title: "ÓLEO E GÁS / TUBULAÇÕES SUBAQUÁTICAS",
    text: "Resistência a pressão, salinidade e hidrocarbonetos. Aprovada para ambientes classificados.",
  },
  {
    icon: Factory,
    title: "GRANDES MONTADORAS",
    text: "A Capflex opera nas linhas de montagem das maiores fabricantes do Brasil — proteção de componentes do recebimento ao embarque final.",
  },
];

export default function SegmentsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="segmentos" className="py-20 md:py-28 bg-background">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-12 text-center max-w-3xl mx-auto leading-tight">
          Soluções de engenharia para os mercados de maior exigência.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {segments.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-6">
              <s.icon size={28} className="text-primary mb-4" />
              <h3 className="text-sm font-bold text-foreground tracking-wider mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#formulario" className="inline-flex items-center px-6 py-3 border border-primary text-primary text-sm font-bold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
            Falar com um especialista Capflex →
          </a>
        </div>
      </div>
    </section>
  );
}
