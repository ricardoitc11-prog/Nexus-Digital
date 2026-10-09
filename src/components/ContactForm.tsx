import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Clock, ShieldCheck, Copy, Check } from 'lucide-react';
import { BRAND } from '../data/content';
import { LeadFormData } from '../types';

export const ContactForm = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    restaurantName: '',
    whatsapp: '',
    city: 'São Paulo, SP',
    instagramOrMenu: '',
    urgency: 'hoje',
    goal: 'Parar de pagar comissões e ter pedidos diretos',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const buildWhatsAppMessage = () => {
    return (
      `*SOLICITAÇÃO DE SITE PARA HAMBURGUERIA - NEXUS DIGITAL*\n\n` +
      `👤 *Responsável:* ${formData.name}\n` +
      `🍔 *Hamburgueria:* ${formData.restaurantName}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `📍 *Cidade/Bairro:* ${formData.city}\n` +
      `🔗 *Instagram / Cardápio:* ${formData.instagramOrMenu || 'Não informado'}\n` +
      `🎯 *Principal Objetivo:* ${formData.goal}\n` +
      `⚡ *Urgência de Entrega:* ${formData.urgency === 'hoje' ? 'Entrega no mesmo dia (Hoje)' : 'Esta semana'}\n` +
      (formData.notes ? `📝 *Observações:* ${formData.notes}\n` : '') +
      `\n_Enviado pelo formulário oficial da Nexus Digital_`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.restaurantName || !formData.whatsapp) {
      return;
    }

    const message = buildWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${BRAND.phoneRaw}?text=${encoded}`;
    
    setGeneratedUrl(targetUrl);
    setSubmitted(true);

    // Open WhatsApp
    window.open(targetUrl, '_blank');
  };

  const handleCopy = () => {
    const message = buildWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="orcamento" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Persuasive text & assurances */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              <span>Solicitação de Orçamento</span>
              <span aria-hidden="true">·</span>
              <span className="text-brand-navy">Resposta em até 10 minutos</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight mb-4 text-balance">
              Dê o primeiro passo para ter o site que sua hamburgueria merece.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Preencha os dados básicos da sua hamburgueria abaixo. Nossa equipe analisa seu perfil e monta uma proposta personalizada com opção de <strong className="text-brand-navy font-semibold">entrega no mesmo dia</strong>.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy">Entrega no Mesmo Dia</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Recebendo os materiais pela manhã ou tarde, seu site é publicado no ar nas próximas horas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy">Alterações Ilimitadas</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ajustamos qualquer detalhe no layout, preços ou fotos de acordo com a sua preferência.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy">Atendimento Humano em São Paulo</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    WhatsApp oficial: {BRAND.phoneDisplay} · Sem robôs enrolando.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: The Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-corporate-lg">
              
              {submitted ? (
                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">
                    Orçamento Enviado com Sucesso!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    A janela do seu WhatsApp foi aberta com todos os detalhes da hamburgueria{' '}
                    <strong className="text-brand-navy">{formData.restaurantName}</strong> prontos para envio.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir Conversa no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copiado!' : 'Copiar Texto da Mensagem'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-slate-400 hover:text-brand-navy underline"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="font-display text-xl font-bold text-brand-navy">
                      Solicitação do Site para Minha Hamburgueria
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Preencha os campos abaixo. Ao clicar em enviar, geramos sua solicitação no WhatsApp da Nexus Digital.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Oliveira"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors bg-white text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nome da Hamburgueria *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Smash Burger House"
                        value={formData.restaurantName}
                        onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Seu WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors bg-white text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Cidade e Estado *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: São Paulo, SP"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Link do Instagram ou Cardápio Atual (opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: @minhahamburgueria ou link do iFood/cardápio"
                      value={formData.instagramOrMenu}
                      onChange={(e) => setFormData({ ...formData, instagramOrMenu: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Qual o seu objetivo principal agora?
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors bg-white text-slate-900"
                    >
                      <option value="Parar de pagar comissões e ter pedidos diretos">
                        Parar de pagar taxas abusivas e vender direto no WhatsApp (0% de comissão)
                      </option>
                      <option value="Entrega no mesmo dia com cardápio profissional">
                        Preciso do site no ar no mesmo dia com cardápio visual
                      </option>
                      <option value="Modernizar a marca e aumentar o ticket médio">
                        Modernizar a marca e apresentar meus lanches com padrão gourmet
                      </option>
                      <option value="Cardápio digital via QR Code no salão e delivery">
                        Cardápio com QR Code para mesas do salão + Delivery conjunto
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Prazo desejado para entrega do site
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-xs font-medium transition-colors ${
                          formData.urgency === 'hoje'
                            ? 'bg-amber-50/60 border-amber-400 text-amber-900 font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value="hoje"
                          checked={formData.urgency === 'hoje'}
                          onChange={() => setFormData({ ...formData, urgency: 'hoje' })}
                          className="text-amber-600 focus:ring-amber-500"
                        />
                        <span>⚡ Entrega no Mesmo Dia (Hoje)</span>
                      </label>

                      <label
                        className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-xs font-medium transition-colors ${
                          formData.urgency === 'semana'
                            ? 'bg-amber-50/60 border-amber-400 text-amber-900 font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value="semana"
                          checked={formData.urgency === 'semana'}
                          onChange={() => setFormData({ ...formData, urgency: 'semana' })}
                          className="text-amber-600 focus:ring-amber-500"
                        />
                        <span>📅 Nos próximos dias</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-surface rounded-xl shadow-corporate-lg transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <span>Enviar Solicitação e Iniciar no WhatsApp</span>
                    <Send className="w-4 h-4 ml-1 opacity-80" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Seus dados são confidenciais e protegidos. Sem spam.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
