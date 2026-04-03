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
    <footer className="bg-background border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xl font-extrabold text-primary tracking-tight mb-2">CAPFLEX</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Engenharia de proteção para processos que não aceitam falha.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Capflex · Todos os direitos reservados · Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  );
}
