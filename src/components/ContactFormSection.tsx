import { useState } from "react";
import { useInView } from "@/hooks/use-animations";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  empresa: z.string().trim().min(1, "Empresa é obrigatória").max(100),
  cargo: z.string().trim().min(1, "Cargo é obrigatório").max(100),
  segmento: z.string().min(1, "Selecione um segmento"),
  volume: z.string().min(1, "Selecione o volume"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactFormSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Solicitação enviada com sucesso! Nossa equipe entrará em contato em até 1 dia útil.");
    setForm({});
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="formulario" className="py-24 md:py-32 bg-background industrial-section">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">Contato</div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-[1.05]">
              Valide a eficiência Capflex no
              <span className="text-primary"> seu processo.</span>
            </h2>
            
            <div className="hazard-stripe my-6 max-w-32" />
            
            <p className="text-xl text-primary font-bold mb-4">Sem custo. Sem compromisso.</p>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Preencha o formulário ao lado. Nossa equipe técnica analisa seu processo e envia amostras selecionadas especificamente para o seu caso.
            </p>

            <div className="space-y-4">
              {[
                { n: "01", text: "Você preenche os dados do processo" },
                { n: "02", text: "Nossa equipe seleciona os modelos" },
                { n: "03", text: "Enviamos amostras para teste" },
              ].map((step) => (
                <div key={step.n} className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-primary text-mono w-5">{step.n}</span>
                  <span className="text-sm text-muted-foreground">{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8 space-y-5">
            <div className="hazard-stripe mb-2" />
            
            {([
              { field: "nome" as const, label: "Nome completo", type: "text", placeholder: "Seu nome completo" },
              { field: "email" as const, label: "E-mail corporativo", type: "email", placeholder: "nome@empresa.com.br" },
              { field: "empresa" as const, label: "Empresa", type: "text", placeholder: "Nome da empresa" },
              { field: "cargo" as const, label: "Cargo", type: "text", placeholder: "Diretor Industrial, Compras..." },
            ] as const).map((f) => (
              <div key={f.field}>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.field] || ""}
                  onChange={(e) => update(f.field, e.target.value)}
                  placeholder={f.placeholder}
                  className={inputClass}
                />
                {errors[f.field] && <p className="text-xs text-destructive mt-1">{errors[f.field]}</p>}
              </div>
            ))}

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">Segmento</label>
              <select value={form.segmento || ""} onChange={(e) => update("segmento", e.target.value)} className={inputClass}>
                <option value="">Selecione o segmento</option>
                <option value="montadora">Montadora</option>
                <option value="agricola">Agrícola</option>
                <option value="oleo-gas">Óleo e Gás</option>
                <option value="engenharia-civil">Engenharia Civil</option>
                <option value="outro">Outro</option>
              </select>
              {errors.segmento && <p className="text-xs text-destructive mt-1">{errors.segmento}</p>}
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">Volume mensal de tampas</label>
              <select value={form.volume || ""} onChange={(e) => update("volume", e.target.value)} className={inputClass}>
                <option value="">Selecione o volume</option>
                <option value="abaixo-10k">Abaixo de 10.000</option>
                <option value="10k-50k">10.000 a 50.000</option>
                <option value="acima-50k">Acima de 50.000</option>
              </select>
              {errors.volume && <p className="text-xs text-destructive mt-1">{errors.volume}</p>}
            </div>

            <button type="submit" className="btn-industrial w-full text-center py-4">
              Solicitar Amostra Técnica Gratuita →
            </button>

            <p className="text-center text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
              Nossa equipe retorna em até 1 dia útil com a seleção de modelos para o seu processo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
