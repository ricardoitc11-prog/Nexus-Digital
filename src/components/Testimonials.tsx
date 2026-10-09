import { TESTIMONIALS, BRAND } from '../data/content';
import { Quote, CheckCircle2, MessageCircle, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            <span>Prova Social & Resultados Reais</span>
            <span aria-hidden="true">·</span>
            <span className="text-brand-navy">Quem Já Vende Mais com a Nexus</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight mb-4 text-balance">
            O que dizem os donos de hamburguerias que escolheram a Nexus Digital.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Com mais de 100 projetos entregues em todo o Brasil, ajudamos empresários gastronômicos a reduzirem custos e transformarem seus lanches em marcas consagradas.
          </p>
        </div>

        {/* Testimonials 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-corporate hover:shadow-corporate-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top row: stars + outcome badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {item.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-300 mb-3" />

                <blockquote className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-brand-navy">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.role} · <strong className="text-slate-700 font-medium">{item.restaurant}</strong>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Micro call to action */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Quer resultados semelhantes na sua hamburgueria ainda esta semana?
          </p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-surface rounded-xl shadow-corporate transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar com o Responsável da Nexus Digital</span>
          </a>
        </div>

      </div>
    </section>
  );
};
