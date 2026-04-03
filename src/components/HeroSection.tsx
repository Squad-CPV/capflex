import heroImg from "@/assets/hero-industrial.jpg";
import { useInView } from "@/hooks/use-animations";
import { CheckCircle, Globe, Clock } from "lucide-react";

export default function Hero() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Linha de montagem industrial" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div ref={ref} className="container relative z-10 py-20 md:py-32">
        <div className={`max-w-3xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full">
            Engenharia de tampas elásticas para alta exigência industrial
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-6">
            Você mantém 60 modelos de tampas em estoque.
            <br />
            <span className="text-primary">Precisa de 5.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            A Capflex é uma tampa elástica de alta performance que substitui múltiplos diâmetros com um único modelo. Menos estoque, zero falhas de proteção, mais velocidade na linha.
          </p>

          <a href="#formulario" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-base font-bold rounded-md hover:opacity-90 transition-opacity">
            Solicitar Amostra Técnica Gratuita →
          </a>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              336.106 tampas fornecidas
            </span>
            <span className="hidden md:inline text-border">·</span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              15 anos de desenvolvimento
            </span>
            <span className="hidden md:inline text-border">·</span>
            <span className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              5 países atendidos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
