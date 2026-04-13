import { useState } from "react";
import { useInView } from "@/hooks/use-animations";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(1, "Telefone é obrigatório").max(20),
  empresa: z.string().trim().min(1, "Empresa é obrigatória").max(100),
  segmento: z.string().min(1, "Selecione um segmento"),
  problema: z.string().trim().min(1, "Descreva brevemente o problema").max(300),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactFormSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
    setSubmitting(true);
    try {
      const payload = {
        nome: result.data.nome,
        email: result.data.email,
        telefone: result.data.telefone,
        empresa: result.data.empresa,
        segmento: result.data.segmento,
        problema: result.data.problema,
      };
      const { error } = await supabase.from("contact_submissions").insert(payload);
      if (error) throw error;
      // Fire webhook (non-blocking)
      supabase.functions.invoke("contact-webhook", { body: payload }).catch(console.error);
      toast.success("Solicitação enviada com sucesso! Nossa equipe entrará em contato em até 1 dia útil.");
      // Google Ads conversion
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17992207030/YPBCCKjAy5scELaVrYND",
          value: 1.0,
          currency: "BRL",
        });
      }
      setForm({});
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#FFFFFF",
  };

  return (
    <section id="formulario" className="py-24 md:py-32 section-dark relative overflow-hidden">
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">Contato</div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-[1.05]">
              Valide a eficiência Capflex no
              <span className="text-primary"> seu processo.</span>
            </h2>
            
            <div className="w-16 h-[2px] bg-primary my-6" />
            
            <p className="text-xl text-primary font-bold mb-4">Sem custo. Sem compromisso.</p>
            
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
              Preencha o formulário ao lado. Nossa equipe técnica analisa seu processo e envia amostras selecionadas especificamente para o seu caso.
            </p>

            <div className="space-y-4">
              {[
                { n: "01", text: "Você preenche os dados do processo" },
                { n: "02", text: "Nossa equipe seleciona os modelos" },
                { n: "03", text: "Enviamos amostras para teste" },
              ].map((step) => (
                <div key={step.n} className="flex items-center gap-4">
                  <span className="w-7 h-7 flex items-center justify-center text-[10px] font-bold text-primary text-mono" style={{ background: "rgba(146,86,141,0.15)" }}>{step.n}</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.05)" }}>
            <div className="w-full h-[2px] bg-primary mb-4" />
            
            {([
              { field: "nome" as const, label: "Nome para Contato", type: "text", placeholder: "Seu nome" },
              { field: "email" as const, label: "E-mail corporativo", type: "email", placeholder: "nome@empresa.com.br" },
              { field: "telefone" as const, label: "Telefone / WhatsApp", type: "tel", placeholder: "(00) 00000-0000" },
              { field: "empresa" as const, label: "Empresa", type: "text", placeholder: "Nome da empresa" },
            ] as const).map((f) => (
              <div key={f.field}>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "rgba(255,255,255,0.50)" }}>{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.field] || ""}
                  onChange={(e) => update(f.field, e.target.value)}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                  style={{ ...inputStyle, "--tw-placeholder-color": "rgba(255,255,255,0.25)" } as React.CSSProperties}
                  onFocus={(e) => e.currentTarget.style.borderColor = "#92568D"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                />
                {errors[f.field] && <p className="text-xs text-destructive mt-1">{errors[f.field]}</p>}
              </div>
            ))}

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "rgba(255,255,255,0.50)" }}>Segmento</label>
              <select
                value={form.segmento || ""}
                onChange={(e) => update("segmento", e.target.value)}
                className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                style={inputStyle}
                onFocus={(e) => e.currentTarget.style.borderColor = "#92568D"}
                onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
              >
              <option value="" style={{ background: "#1a1a3e", color: "#fff" }}>Selecione o segmento</option>
                <option value="montadora" style={{ background: "#1a1a3e", color: "#fff" }}>Montadora</option>
                <option value="agricola" style={{ background: "#1a1a3e", color: "#fff" }}>Agrícola</option>
                <option value="oleo-gas" style={{ background: "#1a1a3e", color: "#fff" }}>Óleo e Gás</option>
                <option value="engenharia-civil" style={{ background: "#1a1a3e", color: "#fff" }}>Engenharia Civil</option>
                <option value="outro" style={{ background: "#1a1a3e", color: "#fff" }}>Outro</option>
              </select>
              {errors.segmento && <p className="text-xs text-destructive mt-1">{errors.segmento}</p>}
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "rgba(255,255,255,0.50)" }}>Qual o problema?</label>
              <input
                type="text"
                value={form.problema || ""}
                onChange={(e) => update("problema", e.target.value)}
                placeholder="Ex: Vazamento, proteção, pintura, transporte..."
                className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                style={{ ...inputStyle, "--tw-placeholder-color": "rgba(255,255,255,0.25)" } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.borderColor = "#92568D"}
                onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
              />
              {errors.problema && <p className="text-xs text-destructive mt-1">{errors.problema}</p>}
            </div>

            <button type="submit" disabled={submitting} className="btn-industrial w-full text-center py-4 disabled:opacity-50">
              {submitting ? "Enviando..." : "Solicitar Amostra Técnica Gratuita →"}
            </button>

            <p className="text-center text-[10px] uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.30)" }}>
              Nossa equipe retorna em até 1 dia útil com a seleção de modelos para o seu processo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
