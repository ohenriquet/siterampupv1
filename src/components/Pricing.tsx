
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Para Equipes",
      subtitle: "Até 10 contratações",
      price: "R$ 890/mês",
      hasStartingAt: true,
      highlight: false,
      features: [
        "Workflows automatizados",
        "Checkpoints 30/60/90",
        "Buddy System automatizado",
        "Integrações nativas"
      ]
    },
    {
      title: "Para Empresas",
      subtitle: "De 0 a 100 contratações",
      price: "R$ 1.900/mês",
      hasStartingAt: true,
      highlight: true,
      badge: "Mais popular",
      features: [
        "Gestão e visibilidade para líderes",
        "Trilhas por área e por função",
        "Automação multicanal",
        "Integrações e webhooks"
      ]
    },
    {
      title: "Implantação do Processo",
      subtitle: "Serviço",
      price: "R$ 2.900",
      hasStartingAt: true,
      highlight: false,
      isService: true,
      description: "Configuração inicial do modelo, contexto e padrões para rodar a Eva no seu time.",
      features: [
        "Setup e diagnóstico",
        "Ajuste de workflows e checkpoints",
        "Treinamento rápido com líderes"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="contratar">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-[32px] md:text-[48px] font-[800] mb-4 text-[#1A1A1A] tracking-tight">Planos</h2>
        <p className="text-gray-500 font-semibold text-lg mb-8">Escolha o formato ideal para o seu momento.</p>
        <p className="text-gray-400 text-sm font-medium mb-16">
          Melhorar produtividade em 1% já paga a conta em times grandes. <a href="https://www.gartner.com/en/human-resources" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Gartner</a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`frosted-glass-card p-10 flex flex-col text-left h-auto transition-all relative wind-trail ${plan.highlight
                ? 'border-2 border-primary ring-4 ring-primary/5 scale-105 z-10 bg-white shadow-xl'
                : 'bg-white/60 border border-gray-100 shadow-sm'
                } ${plan.isService ? 'bg-muted/30 border-dashed border-2' : ''}`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {plan.badge}
                </span>
              )}

              <div className="mb-8">
                <h4 className="font-display text-2xl font-[800] mb-1 text-[#1A1A1A] leading-tight">{plan.title}</h4>
                <p className="text-primary font-bold text-[11px] mb-4 uppercase tracking-wider">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                  {plan.hasStartingAt && (
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-tight opacity-70">a partir de</span>
                  )}
                  <span className="text-[#1A1A1A] font-[900] text-2xl md:text-3xl">{plan.price}</span>
                </div>
              </div>

              {plan.description && (
                <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
                  {plan.description}
                </p>
              )}

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">check_circle</span>
                    <span className="text-sm font-medium text-gray-600 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className={`w-full py-4 text-center rounded-xl font-bold transition-all shadow-lg text-sm uppercase tracking-tight ${plan.highlight
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-[#F4F2FF] text-primary hover:bg-[#E9E5FF]'
                    }`}
                >
                  {plan.isService ? "falar com consultor" : "acelerar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
