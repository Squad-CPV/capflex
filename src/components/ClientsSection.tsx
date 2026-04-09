import { useInView } from "@/hooks/use-animations";
import clientsImg from "@/assets/capflex-clients-fair.png";

export default function ClientsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={clientsImg}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* White overlay for contrast */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div ref={ref} className={`container relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Nossos Clientes</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-[1.05] max-w-3xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          Presença onde a <span className="text-primary">indústria decide.</span>
        </h2>

        <p
          className={`text-[15px] md:text-base leading-relaxed max-w-2xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={{ color: "rgba(35,39,80,0.72)", ...(inView ? { animationDelay: "120ms" } : {}) }}
        >
          A Capflex participa ativamente dos principais eventos e feiras industriais do Brasil, levando soluções de tamponamento para quem mais precisa.
        </p>
      </div>
    </section>
  );
}
