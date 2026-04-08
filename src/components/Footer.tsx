import capflexLogo from "@/assets/capflex-logo.png";
import { Leaf } from "lucide-react";

const footerLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Formulário", href: "#formulario" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1A1D3D" }}>
      <div className="h-[1px]" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="container py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={capflexLogo} alt="Logo Capflex" className="h-12 md:h-24 w-auto max-w-[220px] object-contain brightness-0 invert" />
            </div>
            <p className="text-xs max-w-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              Engenharia de proteção para processos que não aceitam falha.
            </p>
            <div className="flex items-center gap-2">
              <Leaf size={10} className="text-primary shrink-0" />
              <span className="text-[11px] font-bold text-primary">
                Compromisso ESG — Menor descarte plástico
              </span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>Navegação</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs uppercase tracking-wider font-medium transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.40)" }}>
            © 2026 Capflex · Todos os direitos reservados
          </p>
          <p className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.40)" }}>
            Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  );
}
