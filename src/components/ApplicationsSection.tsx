import { useInView } from "@/hooks/use-animations";
import appManufacturing from "@/assets/capflex-application-manufacturing.jpg";
import appTransport from "@/assets/capflex-application-transport.jpeg";
import appFinish from "@/assets/capflex-application-finish.jpg";

const cards = [
  {
    img: appManufacturing,
    number: "01",
    title: "Manuseio e Manufatura Segura",
    text: "Proteção de roscas, furos e conexões durante o processo de fabricação. Elimina retrabalho por dano em linha.",
    objectPosition: "center 40%",
  },
  {
    img: appTransport,
    number: "02",
    title: "Transporte e Armazenagem",
    text: "Vedação que permanece íntegra mesmo em condições de vibração, empilhamento e variação de temperatura durante o embarque.",
    objectPosition: "center 45%",
  },
  {
    img: appFinish,
    number: "03",
    title: "Mascaramento para Pintura e Acabamento",
    text: "Aderência precisa que impede a penetração de tinta em superfícies críticas. Substitui fitas e tampas inadequadas com zero risco de mancha ou retrabalho.",
    objectPosition: "center 35%",
  },
];

export default function ApplicationsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="aplicacoes" className="py-24 md:py-32 bg-card overflow-hidden relative">
      <div className="absolute right-0 top-16 w-72 h-72 bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_68%)] pointer-events-none" />

      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Aplicações</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-16 leading-[1.05] max-w-3xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          A Capflex já opera em processos <span className="text-primary">como o seu.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`group ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={inView ? { animationDelay: `${140 + i * 140}ms` } : undefined}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6 border border-border transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/40">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: c.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-bold text-primary font-mono block">{c.number}</span>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{c.text}</p>
              </div>

              <div className="mt-6 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "620ms" } : undefined}>
          <a href="#formulario" className="btn-industrial-outline hover-scale">
            Quero validar a Capflex no meu processo →
          </a>
        </div>
      </div>
    </section>
  );
}
