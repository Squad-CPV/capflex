import heroImg from "@/assets/capflex-hero-real.jpg";
import { useInView } from "@/hooks/use-animations";

export default function HeroSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-screen flex items-end pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Peças industriais com tampas elásticas Capflex" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

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
            A Capflex é uma tampa elástica de alta performance que substitui múltiplos diâmetros com um único modelo. Menos estoque, zero falhas de proteção, mais velocidade na linha.
          </p>

          <a href="#formulario" className="btn-industrial mb-12">
            Solicitar Amostra Técnica Gratuita →
          </a>

          <div className="grid grid-cols-3 gap-0 border border-border max-w-lg">
            {[
              { number: "336.106", label: "tampas fornecidas" },
              { number: "15", label: "anos de P&D" },
              { number: "5", label: "países atendidos" },
            ].map((stat, i) => (
              <div key={stat.label} className={`p-4 text-center ${i < 2 ? "border-r border-border" : ""}`}>
                <p className="industrial-number text-xl md:text-2xl mb-1">{stat.number}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
