import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Portfolio } from './components/Portfolio';
import { FeeCalculator } from './components/FeeCalculator';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-navy selection:text-white flex flex-col">
      {/* 3-zone Top Bar */}
      <Header />

      <main className="flex-1">
        {/* 1. Seção Inicial Impactante (Hero) */}
        <Hero />

        {/* 2. Sobre / Quem Somos (+100 vendas, 6 meses, propósito) */}
        <About />

        {/* 3. Serviços Especializados para Hamburguerias */}
        <Services />

        {/* 4. Diferenciais Competitivos (Entrega no mesmo dia, Mudanças ilimitadas) */}
        <Differentials />

        {/* 5. Portfólio / Projetos com Simulador Desktop e Mobile */}
        <Portfolio />

        {/* 6. Simulador / Calculadora de Economia de Taxas (Aumento de Faturamento) */}
        <FeeCalculator />

        {/* 7. Depoimentos Reais de Clientes */}
        <Testimonials />

        {/* 8. Formulário de Contato & Solicitação de Orçamento */}
        <ContactForm />

        {/* 9. Perguntas Frequentes (FAQ) */}
        <FAQ />
      </main>

      {/* 10. Footer Corporativo com Redes e Contatos */}
      <Footer />

      {/* 11. WhatsApp Flutuante Oficial */}
      <FloatingWhatsApp />
    </div>
  );
}
