import { useState } from "react";
import { Menu, X } from "lucide-react";
import capflexLogo from "@/assets/capflex-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Diagnóstico", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderColor: "rgba(35,39,80,0.08)" }}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src={capflexLogo} alt="Logo Capflex" className="h-10 sm:h-12 md:h-14 w-auto max-w-[200px] object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-bold uppercase tracking-[0.15em] transition-colors"
              style={{ color: "rgba(35,39,80,0.65)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#232750"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(35,39,80,0.65)"}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#formulario"
          className="hidden md:inline-flex btn-industrial text-xs py-2.5 px-5"
        >
          Solicitar Amostra →
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: "#232750" }} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background" style={{ borderBottom: "1px solid rgba(35,39,80,0.08)" }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="p-4">
            <a href="#formulario" onClick={() => setOpen(false)} className="btn-industrial w-full text-xs py-3">
              Solicitar Amostra →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
