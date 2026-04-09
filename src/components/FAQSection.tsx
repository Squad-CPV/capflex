import { useState } from "react";
import { useInView } from "@/hooks/use-animations";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "A Capflex funciona em todos os meus diâmetros atuais?",
    a: "Cada modelo cobre uma faixa definida de diâmetros. Formato não importa — a Capflex absorve todos. Nossa equipe técnica faz um mapeamento do seu processo e confirma a cobertura antes de qualquer proposta. Sem chute — com engenharia.",
  },
  {
    q: "Qual o impacto na minha linha durante a implantação?",
    a: "Zero. O espaço destinado é menor, a aplicação é simples. A substituição é feita sem parada de linha. Validamos tudo com um lote piloto e suporte no local — sua tampa convencional acaba, seu problema também.",
  },
  {
    q: "O que eu ganho trocando pela solução Capflex?",
    a: "Redução de tempo na produção e no desenvolvimento, economia de estoque e mais espaço de trabalho. Um único modelo Capflex pode substituir até 20 modelos convencionais — menos dinheiro parado no estoque, mais recurso no seu bolso.",
  },
  {
    q: "Quando desenvolvo um produto novo, vou precisar de uma nova tampa?",
    a: "Com Capflex, você não se preocupa nunca mais em desenvolver tampas para seus produtos. Sempre uma Capflex atenderá sua demanda. Sem cotações, sem desenvolvimento de tampas, sem surpresas — você foca no seu produto, nós na proteção dele. Zero custos de desenvolvimento.",
  },
  {
    q: "Minhas tampas caem no estoque ou em processo. A Capflex resolve?",
    a: "Sim. A Capflex fica na posição do começo ao fim. No mercado convencional, as tampas saem em até 40% dos casos — ou seja, você pagou para jogar fora. Aqui, a proteção permanece sempre. Solicite amostras e comprove.",
  },
  {
    q: "Meu produto vaza. A Capflex resolve?",
    a: "Não só veda como resiste a produtos químicos e intempéries. Vamos trabalhar com você para resolver o seu caso — entre em contato pelo formulário abaixo.",
  },
  {
    q: "Preciso de amostras, como faço?",
    a: "Em qualquer lugar da América do Sul, pode chamar. Preencha o formulário abaixo e vamos conversar — enviamos amostras para você sem custo e sem compromisso.",
  },
  {
    q: "Tenho muitas tampas e muita gente aplicando. O que vai mudar?",
    a: "Vai diminuir muito o tempo de processo, reduzir falhas de aplicação e, consequentemente, o número de colaboradores envolvidos. Isso significa recurso financeiro de volta no seu bolso.",
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
          Perguntas que engenharia e compras fazem antes de <span className="text-primary">trocar de fornecedor.</span>
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
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60" : "max-h-0"}`}>
                <div className="px-6 pb-5 pl-[52px]">
                  <p className="text-[15px] leading-relaxed" style={{ color: "rgba(35,39,80,0.65)" }}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
