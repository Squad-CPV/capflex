import { useInView } from "@/hooks/use-animations";
import { useRef } from "react";
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
    text: "Tamponamento que permanece íntegro mesmo em condições de vibração, empilhamento e variação de temperatura durante o embarque.",
    objectPosition: "center 45%",
  },
  {
    img: appFinish,
    number: "03",
    title: "Mascaramento para Pintura e Acabamento",
    text: "Aderência precisa que impede a penetração de tinta em superfícies críticas. Substitui fitas e tampas inadequadas com zero risco de mancha ou retrabalho.",
    objectPosition: "center 50%",
  },
];

export default function ApplicationsSection() {
  const { ref, inView } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="aplicacoes" className="py-24 md:py-32 section-light overflow-hidden relative">
      <div ref={ref} className={`container relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">Aplicações</div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-16 leading-[1.05] max-w-3xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          A Capflex já opera em processos <span className="text-primary">como o seu.</span>
        </h2>

        {/* Video + explanation side by side */}
        <div
          className={`mb-16 grid md:grid-cols-5 gap-6 items-stretch ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          style={inView ? { animationDelay: "100ms" } : undefined}
        >
          {/* Video */}
          <div className="md:col-span-3 relative overflow-hidden border border-border">
            <div className="relative aspect-video h-full">
              <video
                ref={videoRef}
                src="/capflex-demo.mp4"
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Explanation box */}
          <div className="md:col-span-2 border border-border bg-card p-6 md:p-8 flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-4 block">Demonstração</span>
            <h3 className="text-lg md:text-xl font-extrabold text-foreground leading-snug mb-4">
              Aplicação rápida, extração fácil,<br />proteção total do começo ao fim
            </h3>
            <ul className="space-y-3 text-[14px] leading-relaxed text-muted-foreground">
              <li className="flex gap-2.5">
                <span className="text-primary font-bold text-xs mt-0.5">01</span>
                <span>A tampa absorve qualquer formato, pronta para uso imediato.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-primary font-bold text-xs mt-0.5">02</span>
                <span>A borracha é esticada para demonstrar a alta elasticidade e resistência do material.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-primary font-bold text-xs mt-0.5">03</span>
                <span>O encaixe é feito manualmente sobre o tubo — pressão firme e tamponamento hermético.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-primary font-bold text-xs mt-0.5">04</span>
                <span>Resultado: proteção total sem folga, pronta para transporte ou linha de produção.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`group ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={inView ? { animationDelay: `${240 + i * 140}ms` } : undefined}
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
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(35,39,80,0.88), rgba(35,39,80,0.40), transparent)" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-[11px] font-bold text-primary font-mono block mb-2">{c.number}</span>
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-white">{c.title}</h3>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed group-hover:text-foreground transition-colors" style={{ color: "rgba(35,39,80,0.72)" }}>{c.text}</p>
              </div>

              <div className="mt-6 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={inView ? { animationDelay: "720ms" } : undefined}>
          <a href="#formulario" className="btn-industrial-outline hover-scale">
            Quero validar a Capflex no meu processo →
          </a>
        </div>
      </div>
    </section>
  );
}
