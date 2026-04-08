import { useInView } from "@/hooks/use-animations";
import { Tractor, HardHat, Droplets, Factory } from "lucide-react";

const segments = [
  {
    icon: Tractor,
    number: "01",
    title: "Máquinas Agrícolas e Colheitadeiras",
    text: "Protege sistemas hidráulicos e conexões críticas em ambientes de alta exposição a poeira, umidade e agroquímicos.",
  },
  {
    icon: HardHat,
    number: "02",
    title: "Engenharia Civil",
    text: "Tampas de alta aderência para tubulações, conexões e peças estruturais em obra.",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Óleo e Gás / Tubulações Subaquáticas",
    text: "Resistência a pressão, salinidade e hidrocarbonetos. Aprovada para ambientes classificados.",
  },
  {
    icon: Factory,
    number: "04",
    title: "Grandes Montadoras",
    text: "A Capflex opera nas linhas de montagem das maiores fabricantes do Brasil — proteção de componentes do recebimento ao embarque final.",
  },
];

export default function SegmentsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="segmentos" className="py-24 md:py-32 section-light overflow-hidden relative">
      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Segmentos</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-12 leading-[1.05] max-w-3xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          Soluções de engenharia para os mercados de <span className="text-primary">maior exigência.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-0 md:border md:border-border">
          {segments.map((s, i) => (
            <div
              key={s.title}
              className={`p-8 border border-border md:border-0 bg-card group transition-all duration-300 hover:bg-white hover:-translate-y-1 ${i < 2 ? "md:border-b border-border" : ""} ${i % 2 === 0 ? "md:border-r border-border" : ""} ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={inView ? { animationDelay: `${140 + i * 120}ms` } : undefined}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 flex items-center justify-center" style={{ background: "#F3ECF2" }}>
                  <s.icon size={28} className="text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-muted-foreground text-mono">{s.number}</span>
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-foreground mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed group-hover:text-foreground transition-colors" style={{ color: "rgba(35,39,80,0.60)" }}>{s.text}</p>
              <div className="mt-6 w-full h-[1px] bg-border group-hover:bg-primary/50 transition-colors" />
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "620ms" } : undefined}>
          <a href="#formulario" className="btn-industrial-outline hover-scale">
            Falar com um especialista Capflex →
          </a>
        </div>
      </div>
    </section>
  );
}
