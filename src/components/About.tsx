import { CheckCircle2, TrendingUp, Sparkles, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/content';

export const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Graphic / Story Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl p-8 shadow-corporate-lg border border-slate-200">
              
              {/* Decorative accent top bar */}
              <div className="w-12 h-1 bg-brand-navy rounded-full mb-6" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-xl shadow-corporate">
                  ND
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-navy">Nexus Digital</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    São Paulo, SP · Atendimento Nacional
                  </p>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4 my-6 py-6 border-y border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-display text-3xl font-extrabold text-brand-navy tabular-nums block">
                    +100
                  </span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">
                    Vendas & Projetos
                  </span>
                  <span className="text-[11px] text-slate-400">Em hamburguerias reais</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-display text-3xl font-extrabold text-brand-navy tabular-nums block">
                    6 Meses
                  </span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">
                    De Trajetória
                  </span>
                  <span className="text-[11px] text-slate-400">100% focados no nicho</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-display text-3xl font-extrabold text-emerald-600 tabular-nums block">
                    0%
                  </span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">
                    Taxas de Pedido
                  </span>
                  <span className="text-[11px] text-slate-400">Lucro direto para você</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-display text-3xl font-extrabold text-brand-navy tabular-nums block">
                    24h
                  </span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">
                    Mesmo Dia
                  </span>
                  <span className="text-[11px] text-slate-400">Entrega recorde</span>
                </div>
              </div>

              {/* Core Philosophy Note */}
              <div className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p>
                  Cada projeto que entregamos une estética gastronômica de dar água na boca, tecnologia de carregamento veloz e foco absoluto em aumentar o faturamento do dono da hamburgueria.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Mission & About Prose */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              <span>Sobre a Nexus Digital</span>
              <span aria-hidden="true">·</span>
              <span className="text-brand-navy">Especialistas em Gastronomia</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight mb-6 text-balance">
              Sites que dão fome e geram pedidos.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
              <p>
                Há 6 meses, nasceu a <strong className="text-brand-navy font-semibold">Nexus Digital</strong> com um propósito claro: transformar a presença online das hamburguerias através de sites modernos, profissionais e estratégicos.
              </p>
              <p>
                Em pouco tempo, já conquistamos a marca de <strong className="text-brand-navy font-semibold">+100 vendas</strong>, ajudando negócios a apresentarem seus produtos de forma mais atrativa, fortalecerem sua marca e oferecerem uma experiência digital à altura do seu sabor.
              </p>
              <p>
                Entendemos que o dono de hamburgueria não tem tempo a perder com burocracias. Ele precisa de uma ferramenta rápida que funcione perfeitamente no celular dos clientes e pare de drenar o lucro com comissões de terceiros.
              </p>
            </div>

            {/* Pillar list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Design feito para despertar o apetite</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cardápio integrado com seu WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sem taxas mensais sobre cada pedido</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Alterações sempre que você precisar</span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-surface rounded-xl shadow-corporate transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conhecer Nossos Pacotes no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500 self-center">
                Atendimento rápido de segunda a domingo.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
