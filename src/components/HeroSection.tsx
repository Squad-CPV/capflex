import heroImg from "@/assets/capflex-hero-real.jpg";
import { useInView } from "@/hooks/use-animations";

export default function HeroSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-screen flex items-end pt-20 md:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Peças industriais com tampas elásticas Capflex" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>


      <div ref={ref} className="container relative z-10 pb-20 md:pb-28 pt-32">
        <div className={`max-w-3xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          <div className="industrial-tag mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Engenharia de tampas elásticas para alta exigência industrial
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-foreground mb-8">
            Você mantém
            <br />
            <span className="text-primary">60 modelos</span> de
            <br />
            tampas em estoque.
          </h1>

          <div className="flex items-baseline gap-3 mb-8">
            <span className="industrial-number text-6xl md:text-8xl">5.</span>
            <span className="text-xl md:text-2xl text-muted-foreground font-medium">
              É tudo o que você precisa.
            </span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Desenvolvemos soluções de tamponamento para proteger roscas, furos, conexões e superfícies críticas ao longo de fabricação, pintura, montagem, transporte e armazenagem.
          </p>

          <a href="#formulario" className="btn-industrial mb-12">
            Solicitar Amostra Técnica Gratuita →
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border max-w-3xl">
            {[
              { title: "Roscas", text: "Vedação flexível para múltiplos diâmetros com ajuste preciso." },
              { title: "Furos", text: "Proteção contra contaminação, impacto e retrabalho em linha." },
              { title: "Conexões", text: "Tamponamento seguro para embarque, estoque e processos críticos." },
            ].map((item, i) => (
              <div key={item.title} className={`p-4 md:p-5 ${i < 2 ? "sm:border-r border-border" : ""}`}>
                <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-bold mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
