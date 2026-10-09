import { SERVICES, BRAND } from '../data/content';
import { ArrowUpRight, CheckCircle2, MessageCircle, Utensils, MessageSquareText, Smartphone, Search } from 'lucide-react';

export const Services = () => {
  const iconMap = [
    <Utensils key="1" className="w-6 h-6 text-brand-navy" />,
    <MessageSquareText key="2" className="w-6 h-6 text-brand-navy" />,
    <Smartphone key="3" className="w-6 h-6 text-brand-navy" />,
    <Search key="4" className="w-6 h-6 text-brand-navy" />,
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            <span>Soluções Especializadas</span>
            <span aria-hidden="true">·</span>
            <span className="text-brand-navy">Para Hamburguerias de Alta Performance</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight mb-4 text-balance">
            Tudo o que sua hamburgueria precisa para vender mais e lucrar alto.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Não entregamos apenas um site bonito; entregamos uma infraestrutura de vendas direta feita para encantar seus clientes famintos e reter 100% do lucro dos seus lanches.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.number}
              className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:shadow-corporate-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-corporate flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[index]}
                  </div>
                  <span className="font-display text-xl font-bold text-slate-400 tabular-nums">
                    {service.number}
                  </span>
                </div>

                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1 block">
                  {service.subtitle}
                </span>

                <h3 className="font-display text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-navy-surface transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <ul className="space-y-2.5 pt-6 border-t border-slate-200/60 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy hover:text-brand-navy-surface group/link"
                >
                  <span>Solicitar este recurso para minha hamburgueria</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlight banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-brand-navy text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-corporate-xl">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-1 block">
              Pronto para faturar
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Quer ver uma prévia de como ficaria o cardápio da sua hamburgueria?
            </h4>
            <p className="text-sm text-slate-300">
              Chame nossa equipe no WhatsApp. Analisamos seu Instagram e cardápio atual sem compromisso.
            </p>
          </div>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-brand-navy bg-white hover:bg-slate-100 rounded-xl shadow-corporate transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Falar com Especialista Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
