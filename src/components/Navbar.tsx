import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold text-primary tracking-tight">
          CAPFLEX
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#formulario" className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-md hover:opacity-90 transition-opacity">
          Solicitar Amostra Grátis →
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="#formulario" onClick={() => setOpen(false)} className="block text-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-md">
              Solicitar Amostra Grátis →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
