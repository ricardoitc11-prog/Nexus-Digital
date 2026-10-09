import { useState } from 'react';
import { PROJECTS, BRAND } from '../data/content';
import { ProjectItem } from '../types';
import { Monitor, Smartphone, CheckCircle2, ArrowRight, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS[0]);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredProjects =
    filterCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              <span>Portfólio & Casos de Sucesso</span>
              <span aria-hidden="true">·</span>
              <span className="text-brand-navy">Projetos Reais Entregues</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight text-balance">
              Sites pensados para abrir o apetite e gerar vendas imediatas.
            </h2>
          </div>

          {/* Interactive Filter Buttons (segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'all'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              Todos ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilterCategory('smash')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'smash'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              Smash
            </button>
            <button
              onClick={() => setFilterCategory('artesanal')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'artesanal'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              Artesanal Gourmet
            </button>
            <button
              onClick={() => setFilterCategory('dark-kitchen')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'dark-kitchen'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              Delivery & BBQ
            </button>
          </div>
        </div>

        {/* Project Selector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {filteredProjects.map((project) => {
            const isSelected = selectedProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-brand-navy text-white border-brand-navy shadow-corporate-lg ring-2 ring-brand-navy/20'
                    : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-amber-400' : 'text-slate-500'
                    }`}
                  >
                    {project.neighborhood} · {project.city.split(',')[0]}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  >
                    {project.highlightMetric}
                  </span>
                </div>

                <h3
                  className={`font-display text-base font-bold truncate mb-1 ${
                    isSelected ? 'text-white' : 'text-brand-navy'
                  }`}
                >
                  {project.name}
                </h3>

                <p
                  className={`text-xs line-clamp-1 ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {project.tagline}
                </p>

                {isSelected && (
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-1 text-[11px] text-amber-300 font-medium">
                    <span>Visualizando em tempo real</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Canvas & Device Frame */}
        <div className="bg-slate-900 rounded-2xl p-6 lg:p-10 border border-slate-800 shadow-corporate-xl text-white">
          
          {/* Showcase Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.name}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                  {selectedProject.highlightMetric} {selectedProject.metricLabel}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                {selectedProject.description}
              </p>
            </div>

            {/* Viewport switch: Desktop vs Mobile */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Visualização em Desktop"
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Visualização em Smartphone"
              >
                <Smartphone className="w-4 h-4" />
                <span>Celular</span>
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="flex justify-center items-center">
            {viewMode === 'desktop' ? (
              /* Desktop Frame */
              <div className="w-full max-w-4xl bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-2xl transition-all">
                {/* Browser top row */}
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-0.5 rounded border border-slate-800 ml-2">
                      https://pedidos.{selectedProject.id}.com.br
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">● Cardápio Oficial Ativo</span>
                </div>

                {/* Simulated Web Page Content */}
                <div className="p-6 sm:p-8 bg-slate-900">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                        {selectedProject.neighborhood} · {selectedProject.city}
                      </span>
                      <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {selectedProject.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        {selectedProject.tagline}
                      </p>
                    </div>

                    <a
                      href={BRAND.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm whitespace-nowrap self-start md:self-auto"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Fazer Pedido no WhatsApp</span>
                    </a>
                  </div>

                  {/* Highlights tags */}
                  <div className="flex flex-wrap gap-2 my-5">
                    {selectedProject.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/70 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>

                  {/* Menu items preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {selectedProject.mockMenu.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          {item.tag && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-2 inline-block">
                              {item.tag}
                            </span>
                          )}
                          <h5 className="font-semibold text-sm text-white">{item.name}</h5>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-amber-400">
                            {item.price}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">+ Adicionar</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Mobile Smartphone Frame */
              <div className="w-[320px] sm:w-[350px] bg-slate-950 rounded-[36px] border-4 border-slate-800 p-2 shadow-2xl">
                {/* Notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />

                <div className="rounded-[28px] bg-slate-900 overflow-hidden text-white p-4">
                  <div className="text-center pb-4 border-b border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      {selectedProject.neighborhood}
                    </span>
                    <h4 className="font-display text-lg font-bold mt-0.5">
                      {selectedProject.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {selectedProject.tagline}
                    </p>
                  </div>

                  <div className="py-3 space-y-2.5 max-h-[340px] overflow-y-auto">
                    {selectedProject.mockMenu.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-left"
                      >
                        <div className="flex justify-between items-start gap-1">
                          <span className="font-semibold text-xs text-white leading-tight">
                            {item.name}
                          </span>
                          <span className="font-mono text-xs font-bold text-amber-400 shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Fixed bottom WhatsApp checkout button */}
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 py-2.5 px-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Bottom call to action */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Gostou deste modelo? Adaptamos suas cores, fotos e cardápio no mesmo dia.</span>
            </span>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-surface border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Solicitar Site Semelhante</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
