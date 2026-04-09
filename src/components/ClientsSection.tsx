import { useInView } from "@/hooks/use-animations";
import clientsImg from "@/assets/capflex-clients-fair.png";

const clients = ["Mercedes-Benz", "MWM", "Cummins", "Volvo", "CAT", "Bosch"];

const specs = [
  { title: "Resistência", text: "Fluidos, combustíveis, óleos" },
  { title: "Temperatura", text: "Operação ±60°C" },
  { title: "Material", text: "Borracha natural de alta elasticidade" },
  { title: "Armazenamento", text: "Indoor / Outdoor" },
];

export default function ClientsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={clientsImg} alt="" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div ref={ref} className={`container relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label text-center">Clientes</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-10 leading-[1.05] text-center ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          Confiado por líderes da <span className="text-primary">indústria automotiva</span>
        </h2>

        {/* Client names */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-10 mb-16 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={inView ? { animationDelay: "120ms" } : undefined}
        >
          {clients.map((name) => (
            <span key={name} className="text-sm md:text-base font-semibold tracking-wide" style={{ color: "rgba(35,39,80,0.55)" }}>
              {name}
            </span>
          ))}
        </div>

        {/* Spec cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border bg-white/70 backdrop-blur-sm ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={inView ? { animationDelay: "240ms" } : undefined}
        >
          {specs.map((s) => (
            <div key={s.title} className="p-5 md:p-6 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-foreground mb-1.5">{s.title}</p>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(35,39,80,0.60)" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
