
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Ramp-up Especializado",
      subtitle: "EQUIPES",
      price: "A partir de R$ 490/mês",
      highlight: false
    },
    {
      title: "Onboarding Organizacional",
      subtitle: "EMPRESAS",
      price: "A partir de R$ 890/mês",
      highlight: true
    },
    {
      title: "Design de Processo",
      subtitle: "CONSULTORIA",
      price: "A partir de R$ 4.900",
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="contratar">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="font-semibold tracking-[0.2em] text-[14px] uppercase mb-4 block text-primary">Comece Hoje</span>
        <h2 className="font-display text-[32px] md:text-[48px] font-[800] mb-4 text-[#1A1A1A]">Pronto para acelerar</h2>
        <p className="text-gray-500 font-semibold text-lg mb-12">Escolha o melhor formato para a sua necessidade.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`frosted-glass-card p-10 flex flex-col text-left h-auto transition-all ${plan.highlight ? 'border-2 border-primary/20 scale-105 z-10' : ''}`}
            >
              <h4 className="font-display text-2xl font-[800] mb-1 text-[#1A1A1A] leading-tight">{plan.title}</h4>
              <div className="mb-4">
                <p className="text-primary font-bold text-[11px] mb-1 uppercase tracking-wider">{plan.subtitle}</p>
                <p className="text-[#1A1A1A] font-bold text-xl opacity-80">{plan.price}</p>
              </div>
              <div className="mt-auto pt-6">
                <a 
                  className="w-full inline-block py-4 text-center rounded-full bg-[#4A30E4] text-white font-bold hover:bg-[#3b25c7] transition-all shadow-lg text-sm uppercase tracking-tight" 
                  href="#hero"
                >
                  acelerar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
