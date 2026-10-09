import { BRAND } from '../data/content';
import { ArrowUpRight, MessageCircle, MapPin, Instagram, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-navy-dark text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-2xl font-bold tracking-tight text-white block mb-3">
              Nexus Digital
            </a>
            <p className="text-xs text-amber-400 font-semibold mb-3">
              {BRAND.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              Agência especializada em criação de sites, cardápios digitais e infraestrutura de vendas direta no WhatsApp para hamburguerias de alta conversão.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                title="Instagram @marketingdigital202615"
                aria-label="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors"
                title="WhatsApp (11) 91796-0101"
                aria-label="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Agência
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais Competitivos
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfólio de Projetos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Differentials */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Garantias
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">⚡</span>
                <span>Entrega no Mesmo Dia</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">🍔</span>
                <span>Exclusivo p/ Hamburguerias</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">🔄</span>
                <span>Alterações Ilimitadas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">📱</span>
                <span>Otimizado para Smartphone</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">💰</span>
                <span>0% de Taxas sobre Pedidos</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Contato Oficial
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block text-[11px]">WhatsApp Direto</span>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-emerald-400 transition-colors flex items-center gap-1 mt-0.5"
                >
                  <span>{BRAND.phoneDisplay}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Instagram</span>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-amber-400 transition-colors flex items-center gap-1 mt-0.5"
                >
                  <span>@{BRAND.instagramHandle}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{BRAND.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Footer Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Nexus Digital. Todos os direitos reservados. Feito com excelência para hamburguerias de todo o Brasil.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>São Paulo, SP · Brasil</span>
            <span>·</span>
            <span className="text-slate-400">CNPJ & Operação Ativa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
