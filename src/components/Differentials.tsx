import { DIFFERENTIALS, BRAND } from '../data/content';
import { Zap, Flame, Sliders, Award, MessageCircle, ArrowRight } from 'lucide-react';

export const Differentials = () => {
  const icons = [
    <Zap key="zap" className="w-6 h-6 text-amber-500" />,
    <Flame key="flame" className="w-6 h-6 text-amber-500" />,
    <Sliders key="sliders" className="w-6 h-6 text-amber-500" />,
    <Award key="award" className="w-6 h-6 text-amber-500" />,
  ];

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            <span>Diferenciais Competitivos</span>
            <span aria-hidden="true">·</span>
            <span className="text-brand-navy">Por que a Nexus Digital?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight mb-4 text-balance">
            Criado por quem entende o ritmo alucinante de uma chapa de hambúrguer.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Esqueça agências lentas que demoram 30 dias para responder e cobram por qualquer alteração no cardápio. Construímos um modelo sob medida para donos de hamburgueria.
          </p>
        </div>

        {/* Differentials 4-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item, index) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-corporate hover:shadow-corporate-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                  {icons[index]}
                </div>

                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  {item.tagline}
                </span>

                <h3 className="font-display text-lg font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>Diferencial {index + 1} de 4</span>
                <span className="text-emerald-600 font-semibold">Garantido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment box */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-corporate flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-brand-navy">
                Precisa do seu site no ar ainda hoje?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Envie suas informações pelo WhatsApp e nossa equipe inicia a montagem imediatamente.
              </p>
            </div>
          </div>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-surface rounded-xl shadow-corporate transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar com a Equipe no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
