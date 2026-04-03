import capflexLogo from "@/assets/capflex-logo.png";

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
    <footer className="bg-background">
      <div className="h-[1px] bg-border" />
      <div className="container py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={capflexLogo} alt="Logo Capflex" className="h-16 md:h-20 w-auto object-contain" />
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Engenharia de proteção para processos que não aceitam falha.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Navegação</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-medium"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.1em]">
            © 2026 Capflex · Todos os direitos reservados
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.1em]">
            Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  );
}
