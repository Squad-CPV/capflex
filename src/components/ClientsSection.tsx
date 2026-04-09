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
    <section className="py-24 md:py-32 section-light overflow-hidden relative">
      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label text-center">Clientes</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-10 leading-[1.05] text-center ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          Confiado por líderes da <span className="text-primary">indústria automotiva</span>
        </h2>

        {/* Client names */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-10 mb-12 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={inView ? { animationDelay: "120ms" } : undefined}
        >
          {clients.map((name) => (
            <span key={name} className="text-sm md:text-base font-semibold tracking-wide" style={{ color: "rgba(35,39,80,0.55)" }}>
              {name}
            </span>
          ))}
        </div>

        {/* Photo banner */}
        <div
          className={`relative overflow-hidden mb-12 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={inView ? { animationDelay: "240ms" } : undefined}
        >
          <img
            src={clientsImg}
            alt="Capflex presente em feiras e eventos industriais"
            loading="lazy"
            width={1400}
            height={400}
            className="w-full h-[280px] md:h-[380px] object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>

        {/* Spec cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={inView ? { animationDelay: "360ms" } : undefined}
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
