import { useInView } from "@/hooks/use-animations";
import appManufacturing from "@/assets/app-manufacturing.jpg";
import appTransport from "@/assets/app-transport.jpg";
import appPainting from "@/assets/app-painting.jpg";

const cards = [
  {
    img: appManufacturing,
    number: "01",
    title: "Manuseio e Manufatura Segura",
    text: "Proteção de roscas, furos e conexões durante o processo de fabricação. Elimina retrabalho por dano em linha.",
  },
  {
    img: appTransport,
    number: "02",
    title: "Transporte e Armazenagem",
    text: "Vedação que permanece íntegra mesmo em condições de vibração, empilhamento e variação de temperatura durante o embarque.",
  },
  {
    img: appPainting,
    number: "03",
    title: "Mascaramento para Pintura e Acabamento",
    text: "Aderência precisa que impede a penetração de tinta em superfícies críticas. Substitui fitas e tampas inadequadas com zero risco de mancha ou retrabalho.",
  },
];

export default function ApplicationsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="aplicacoes" className="py-24 md:py-32 bg-card">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Aplicações</div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-12 leading-[1.05] max-w-3xl">
          A Capflex já opera em processos <span className="text-primary">como o seu.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-1">
          {cards.map((c) => (
            <div key={c.title} className="relative group overflow-hidden min-h-[400px] flex flex-col justify-end">
              <img src={c.img} alt={c.title} loading="lazy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              
              <div className="relative z-10 p-6">
                <span className="text-[10px] font-bold text-primary text-mono mb-2 block">{c.number}</span>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-foreground mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#formulario" className="btn-industrial-outline">
            Quero validar a Capflex no meu processo →
          </a>
        </div>
      </div>
    </section>
  );
}
