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
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(35,39,80,0.82) 0%, rgba(35,39,80,0.65) 50%, rgba(35,39,80,0.78) 100%)" }} />
      </div>

      <div ref={ref} className={`container relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label" style={{ color: "#c490bf" }}>Clientes</div>

        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-[1.05] text-center ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={{ textShadow: "0 2px 16px rgba(35,39,80,0.7)" }}
        >
          Confiado por líderes da{" "}
          <span style={{ color: "#c490bf", textShadow: "0 2px 20px rgba(146,86,141,0.5)" }}>indústria automotiva</span>
        </h2>

        {/* Client names */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-10 mb-16 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={inView ? { animationDelay: "120ms" } : undefined}
        >
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm md:text-base font-semibold tracking-wide"
              style={{ color: "rgba(255,255,255,0.75)", textShadow: "0 1px 8px rgba(35,39,80,0.5)" }}
            >
              {name}
            </span>
          ))}
        </div>

        {/* Spec cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={{ border: "1px solid rgba(255,255,255,0.15)", ...(inView ? { animationDelay: "240ms" } : {}) }}
        >
          {specs.map((s, i) => (
            <div
              key={s.title}
              className="p-5 md:p-6 text-center backdrop-blur-sm"
              style={{
                background: "rgba(35,39,80,0.45)",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.10)" : "none",
              }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white mb-1.5">{s.title}</p>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
