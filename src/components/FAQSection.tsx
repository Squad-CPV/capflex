import { useState } from "react";
import { useInView } from "@/hooks/use-animations";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "A Capflex funciona em todos os meus diâmetros atuais?",
    a: "Cada modelo cobre uma faixa definida de diâmetros. Nossa equipe técnica faz um mapeamento do seu portfólio atual e confirma a cobertura antes de qualquer proposta. Sem chute — com engenharia.",
  },
  {
    q: "Qual o impacto na minha linha durante a transição?",
    a: "Zero. A substituição é feita por lote, sem parada de linha. O processo de validação inclui teste piloto com volume reduzido antes da adoção completa.",
  },
  {
    q: "A Capflex tem resistência química certificada?",
    a: "Sim. A formulação é testada para óleos, solventes, tintas e ambientes classificados. Laudos técnicos disponíveis mediante solicitação.",
  },
  {
    q: "Vocês atendem fora do eixo SP/GO?",
    a: "Sim. Atendemos em todo o Brasil com suporte técnico remoto e visita presencial para projetos acima de determinado volume.",
  },
  {
    q: "Como funciona a amostra técnica?",
    a: "Você preenche o formulário abaixo com os dados do seu processo. Nossa equipe seleciona os modelos mais aderentes e envia amostras físicas para teste no seu ambiente. Sem custo, sem compromisso de compra.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 section-white overflow-hidden relative">
      <div ref={ref} className={`container max-w-4xl relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="section-label">FAQ</div>

        <h2 className={`text-3xl md:text-4xl font-extrabold text-foreground mb-12 leading-[1.05] max-w-3xl ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          Perguntas que todo diretor faz antes de <span className="text-primary">mudar de fornecedor.</span>
        </h2>

        <div className="bg-card" style={{ border: "1px solid rgba(35,39,80,0.08)" }}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`} style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(35,39,80,0.08)" : "none", ...(inView ? { animationDelay: `${140 + i * 90}ms` } : {}) }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group hover:bg-surface-raised transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-primary text-mono mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  <span className={`text-sm font-semibold transition-colors ${openIndex === i ? "text-primary" : "text-foreground"}`}>
                    {faq.q}
                  </span>
                </div>
                <div
                  className="w-7 h-7 shrink-0 ml-4 flex items-center justify-center transition-all duration-300"
                  style={{ background: openIndex === i ? "#92568D" : "#232750", color: "#FFFFFF" }}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40" : "max-h-0"}`}>
                <div className="px-6 pb-5 pl-[52px]">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(35,39,80,0.65)" }}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
