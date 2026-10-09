import { useState } from 'react';
import { FAQS, BRAND } from '../data/content';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            <span>Dúvidas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span className="text-brand-navy">Transparência Total</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight mb-4 text-balance">
            Perguntas comuns sobre a criação do seu site.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Tire suas dúvidas antes de começar. Se precisar de mais detalhes, nosso time está à disposição no WhatsApp.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-brand-navy hover:text-brand-navy-surface transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-navy' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-semibold text-brand-navy">
              Ficou com alguma dúvida específica da sua hamburgueria?
            </p>
            <p className="text-xs text-slate-500">
              Respondemos no WhatsApp em menos de 10 minutos.
            </p>
          </div>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-surface rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
