import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../data/content';

export const FloatingWhatsApp = () => {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    // Show polite prompt after 3 seconds if not closed
    const timer = setTimeout(() => {
      if (!closedManually) {
        setBubbleVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [closedManually]);

  const handleCloseBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setBubbleVisible(false);
    setClosedManually(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Speech bubble card */}
      {bubbleVisible && !closedManually && (
        <div className="pointer-events-auto mb-3 max-w-[280px] sm:max-w-xs bg-white rounded-2xl p-4 shadow-corporate-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-3 duration-300 relative text-left">
          <button
            type="button"
            onClick={handleCloseBubble}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
              Nexus Digital · Online
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-snug">
            🍔 Olá! Quer receber uma demonstração personalizada do site da sua hamburgueria hoje?
          </p>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp Agora</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-corporate-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Conversar no WhatsApp da Nexus Digital"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 border-2 border-white rounded-full"></span>
        </div>
        <span className="font-bold text-xs hidden sm:inline-block tracking-wide">
          WhatsApp Oficial
        </span>
      </a>

    </div>
  );
};
