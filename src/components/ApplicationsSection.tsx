import { useInView } from "@/hooks/use-animations";
import appManufacturing from "@/assets/app-manufacturing.jpg";
import appTransport from "@/assets/app-transport.jpg";
import appPainting from "@/assets/app-painting.jpg";

const cards = [
  {
    img: appManufacturing,
    title: "MANUSEIO E MANUFATURA SEGURA",
    text: "Proteção de roscas, furos e conexões durante o processo de fabricação. Elimina retrabalho por dano em linha.",
  },
  {
    img: appTransport,
    title: "TRANSPORTE E ARMAZENAGEM",
    text: "Vedação que permanece íntegra mesmo em condições de vibração, empilhamento e variação de temperatura durante o embarque.",
  },
  {
    img: appPainting,
    title: "MASCARAMENTO PARA PINTURA E ACABAMENTO",
    text: "Aderência precisa que impede a penetração de tinta em superfícies críticas. Substitui fitas e tampas inadequadas com zero risco de mancha ou retrabalho.",
  },
];

export default function ApplicationsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="aplicacoes" className="py-20 md:py-28 bg-card">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-12 text-center">
          A Capflex já opera em processos como o seu.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((c) => (
            <div key={c.title} className="relative rounded-lg overflow-hidden group min-h-[280px] flex flex-col justify-end">
              <img src={c.img} alt={c.title} loading="lazy" width={800} height={512} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/75" />
              <div className="relative z-10 p-6">
                <h3 className="text-sm font-bold text-foreground tracking-wider mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#formulario" className="inline-flex items-center px-6 py-3 border border-primary text-primary text-sm font-bold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
            Quero validar a Capflex no meu processo →
          </a>
        </div>
      </div>
    </section>
  );
}
