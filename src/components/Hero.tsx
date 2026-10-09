import { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Smartphone, Zap, ShoppingBag, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/content';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<'burgers' | 'combos' | 'bebidas'>('burgers');
  const [orderCount, setOrderCount] = useState<number>(1);
  const [addedItemName, setAddedItemName] = useState<string>('Duplo Smash Cheddar Bacon');

  const sampleItems = {
    burgers: [
      {
        name: 'Duplo Smash Cheddar Bacon',
        desc: '2x blend 90g ultra smash, cheddar inglês cremoso, bacon artesanal crocante no brioche tostado na manteiga.',
        price: 'R$ 38,90',
        badge: 'Mais Pedido',
      },
      {
        name: 'Truffle Smash Gourmet',
        desc: 'Blend Angus, queijo provolone derretido, cebola caramelizada e aioli trufado artesanal.',
        price: 'R$ 44,50',
        badge: 'Novidade',
      },
    ],
    combos: [
      {
        name: 'Combo Smash Duplo + Fritas + Refri',
        desc: 'O carro-chefe acompanhado de batatas rústicas com alecrim e refrigerante lata gelado.',
        price: 'R$ 52,90',
        badge: 'Melhor Valor',
      },
    ],
    bebidas: [
      {
        name: 'Milkshake Artesanal Nutella 400ml',
        desc: 'Sorvete de baunilha de verdade batido com bastante Nutella e chantilly fresco.',
        price: 'R$ 22,00',
        badge: 'Sobremesa',
      },
    ],
  };

  const handleSimulateAdd = (name: string) => {
    setAddedItemName(name);
    setOrderCount((prev) => prev + 1);
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0A2540 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline / Frase de impacto */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-6 border border-slate-200/60">
              <span className="text-base leading-none">🍔</span>
              <span>Seu hambúrguer é irresistível. Seu site também precisa ser.</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.08] tracking-tight mb-6 text-balance">
              Sites que dão fome e geram pedidos para a sua hamburgueria.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Em apenas 6 meses, mais de 100 hamburguerias aceleraram suas vendas com a{' '}
              <strong className="text-brand-navy font-semibold">Nexus Digital</strong>. Desenvolvemos sites de alto padrão com cardápio digital irresistível, carregamento ultra rápido e pedidos direto no seu WhatsApp sem cobrar comissões de delivery.
            </p>

            {/* Unboxed Metadata Trust Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-slate-600 mb-8 py-2 border-y border-slate-100 w-full max-w-xl">
              <span className="text-brand-navy font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Entrega no Mesmo Dia
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-brand-navy font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                +100 Vendas Realizadas
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-brand-navy font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                São Paulo & Brasil
              </span>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-surface rounded-xl shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-200 active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-brand-navy bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
              >
                <span>Ver Demonstração Interativa</span>
              </a>
            </div>

            {/* Assurance footnote */}
            <p className="text-xs text-slate-500 mt-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Sites 100% sujeitos a alterações ilimitadas de acordo com a sua vontade.</span>
            </p>

          </div>

          {/* Right Column: Live Interactive Mockup Simulator */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame representing a client's burger site */}
              <div className="bg-slate-900 rounded-2xl shadow-corporate-xl border border-slate-800 overflow-hidden text-white transition-all">
                
                {/* Browser Top Navigation Bar */}
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 ml-2">
                      smashhouse.com.br
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Aberto Agora
                  </span>
                </div>

                {/* Mockup Header Hero banner */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-navy-dark p-5 border-b border-slate-800/80">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                        Cardápio Oficial
                      </span>
                      <h3 className="font-display text-xl font-bold text-white mt-0.5">
                        Smash House Burger
                      </h3>
                      <p className="text-xs text-slate-300 mt-1">
                        Pinheiros · São Paulo | Pedido Direto sem taxas
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shadow-inner">
                      🍔
                    </div>
                  </div>

                  {/* Delivery time & rating */}
                  <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-300">
                    <span className="flex items-center gap-1 font-semibold text-white">
                      ⭐ 4.9 (1.420 avaliações)
                    </span>
                    <span className="text-slate-500">·</span>
                    <span>🛵 30-40 min</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-emerald-400 font-medium">Entrega Grátis acima de R$ 50</span>
                  </div>
                </div>

                {/* Simulated Interactive Filter Tabs */}
                <div className="bg-slate-950/70 px-4 py-2.5 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('burgers')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                      activeTab === 'burgers'
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Smash Burgers
                  </button>
                  <button
                    onClick={() => setActiveTab('combos')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                      activeTab === 'combos'
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Combos da Casa
                  </button>
                  <button
                    onClick={() => setActiveTab('bebidas')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                      activeTab === 'bebidas'
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Bebidas & Doces
                  </button>
                </div>

                {/* Interactive Item Cards */}
                <div className="p-4 space-y-3 bg-slate-900/90 max-h-[260px] overflow-y-auto">
                  {sampleItems[activeTab].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-white group-hover:text-amber-300 transition-colors">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="mt-2.5 flex items-center justify-between">
                          <span className="font-mono text-sm font-bold text-amber-400">
                            {item.price}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleSimulateAdd(item.name)}
                            className="px-2.5 py-1 text-xs font-semibold bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white rounded-md transition-all active:scale-95 flex items-center gap-1"
                          >
                            <span>+ Adicionar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simulated Order Checkout Bar */}
                <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center relative">
                      <ShoppingBag className="w-4 h-4" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-[10px] font-bold text-slate-950 flex items-center justify-center">
                        {orderCount}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Pedido Pronto p/ WhatsApp</p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[160px] sm:max-w-[200px]">
                        {addedItemName}
                      </p>
                    </div>
                  </div>

                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <span>Finalizar Pedido</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Floating Feature callout badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-corporate-xl border border-slate-200 flex items-center gap-3 text-slate-900 max-w-xs animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center text-white shrink-0">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy">Velocidade Extrema</p>
                  <p className="text-[11px] text-slate-500">Abre em 0.6s no 4G de qualquer smartphone.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
