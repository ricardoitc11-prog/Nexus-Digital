import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/content';

export const FeeCalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(35000);
  const [marketplaceFeePct, setMarketplaceFeePct] = useState<number>(20);
  const [migrationPct, setMigrationPct] = useState<number>(35);

  // Calculations
  const currentLostInFees = (monthlyRevenue * marketplaceFeePct) / 100;
  const migratedRevenue = (monthlyRevenue * migrationPct) / 100;
  const monthlySavings = (migratedRevenue * marketplaceFeePct) / 100;
  const annualSavings = monthlySavings * 12;

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-20 lg:py-24 bg-brand-navy-dark text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Explanatory & Value */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/20">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulador de Lucro Líquido</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
              Quanto dinheiro sua hamburgueria está perdendo em taxas de aplicativo?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Grandes marketplaces de entrega chegam a morder de 12% a 27% de cada lanche que sai da sua cozinha. Ao ter seu site próprio com cardápio e pedido direto no WhatsApp, seus clientes habituais compram sem intermediários.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>O site próprio não substitui o app, ele complementa</span>
              </div>
              <p>
                Você continua atraindo clientes novos pelos apps, mas fideliza seus clientes frequentes no seu site oficial com 0% de comissões.
              </p>
            </div>
          </div>

          {/* Right: Interactive Sliders & Results Box */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-corporate-xl">
            
            {/* Input 1: Monthly Revenue */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Faturamento Mensal no Delivery
                </label>
                <span className="font-display font-bold text-lg text-amber-400 tabular-nums">
                  {formatBRL(monthlyRevenue)}
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={150000}
                step={5000}
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>R$ 10.000</span>
                <span>R$ 75.000</span>
                <span>R$ 150.000</span>
              </div>
            </div>

            {/* Input 2: Marketplace Fee % */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Comissão do App (%)
                  </label>
                  <span className="font-bold text-sm text-white tabular-nums">
                    {marketplaceFeePct}%
                  </span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={27}
                  step={1}
                  value={marketplaceFeePct}
                  onChange={(e) => setMarketplaceFeePct(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Clientes no Site Próprio (%)
                  </label>
                  <span className="font-bold text-sm text-emerald-400 tabular-nums">
                    {migrationPct}%
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={70}
                  step={5}
                  value={migrationPct}
                  onChange={(e) => setMigrationPct(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>

            {/* Calculated Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800 mb-6">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-xs text-rose-400 font-medium block mb-1">
                  Você paga em taxas hoje:
                </span>
                <span className="font-display text-2xl font-extrabold text-rose-300 tabular-nums block">
                  {formatBRL(currentLostInFees)}
                  <span className="text-xs font-normal text-slate-400 ml-1">/mês</span>
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Indo para o bolso de plataformas
                </span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40">
                <span className="text-xs text-emerald-400 font-bold block mb-1">
                  Economia no seu bolso:
                </span>
                <span className="font-display text-2xl font-extrabold text-emerald-300 tabular-nums block">
                  {formatBRL(monthlySavings)}
                  <span className="text-xs font-normal text-slate-400 ml-1">/mês</span>
                </span>
                <span className="text-[11px] text-emerald-400/80 font-semibold mt-1 block">
                  = {formatBRL(annualSavings)} economizados por ano
                </span>
              </div>
            </div>

            {/* Direct action button */}
            <a
              href={`https://wa.me/${BRAND.phoneRaw}?text=Ol%C3%A1%21+Simulei+na+calculadora+que+posso+economizar+${encodeURIComponent(
                formatBRL(monthlySavings)
              )}+por+m%C3%AAs+com+o+site+da+minha+hamburgueria.+Como+podemos+iniciar%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Economizar Essa Quantia na Minha Hamburgueria</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
