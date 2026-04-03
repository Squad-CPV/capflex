import { useState } from "react";
import { Menu, X } from "lucide-react";
import capflexLogo from "@/assets/capflex-logo.png";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Sobre", href: "#sobre" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-24">
        <a href="#" className="flex items-center gap-3">
          <img src={capflexLogo} alt="Logo Capflex" className="h-16 md:h-20 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
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

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="h-[1px] bg-border" />

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary hover:bg-card transition-colors"
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
