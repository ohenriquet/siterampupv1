
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [teamHires, setTeamHires] = useState(20);
  const [companyHires, setCompanyHires] = useState(100);

  // Cálculo de preço para equipes (20-100 contratações)
  const calculateTeamPrice = (hires: number) => {
    return (hires / 20) * 490;
  };

  // Cálculo de preço para empresas (100-500 contratações)
  const calculateCompanyPrice = (hires: number) => {
    return (hires / 100) * 1290;
  };

  const plans = [
    {
      badge: null,
      title: "PARA EQUIPES",
      description: "Focado em verticals de alta performance:",
      subtitle: "Tech, Vendas e Customer Success",
      features: [
        "Trilhas Técnicas Especializadas",
        "Buddy System Automatizado",
        "Ramp-up até os primeiros 90 dias"
      ],
      rangeLabel: "CONTRATAÇÕES ANUAIS",
      minRange: 20,
      maxRange: 100,
      step: 20,
      currentValue: teamHires,
      setValue: setTeamHires,
      price: calculateTeamPrice(teamHires),
      ctaText: "SOLICITAR DEMO",
      highlight: false
    },
    {
      badge: "***",
      title: "PARA EMPRESAS",
      description: "Focado em",
      subtitle: "Onboarding Organizacional",
      subtitleHighlight: "e operações em alta escala.",
      features: [
        "2-3x no onboarding (Contexto, Cultura, Compliance, Carreira)",
        "Dx em Boarding no onboarding",
        "Integração com ATS, folha ou LMS"
      ],
      rangeLabel: "CONTRATAÇÕES ANUAIS",
      minRange: 100,
      maxRange: 500,
      step: 100,
      currentValue: companyHires,
      setValue: setCompanyHires,
      price: calculateCompanyPrice(companyHires),
      ctaText: "SOLICITAR DEMO",
      highlight: true,
      highlightLabel: ""
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="contratar">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-[48px] font-[800] mb-4 text-[#1A1A1A] tracking-tight">
            PLANOS
          </h2>
          <p className="text-gray-500 text-base font-medium max-w-xl mx-auto">
            Planos modulares desenhados para a escala e velocidade do seu negócio.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl p-8 md:p-10 border-2 transition-all ${plan.highlight
                ? 'border-primary shadow-2xl shadow-primary/10'
                : 'border-gray-200 shadow-lg'
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="text-primary text-xs font-bold tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl font-[800] text-[#1A1A1A] mb-3">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-1">
                {plan.description}{' '}
                <span className={plan.highlight ? 'font-bold text-primary' : 'font-semibold text-[#1A1A1A]'}>
                  {plan.subtitle}
                </span>
              </p>
              {plan.subtitleHighlight && (
                <p className="text-sm text-gray-600 mb-6">{plan.subtitleHighlight}</p>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8 mt-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-lg flex-shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-sm font-medium text-gray-700 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Slider Section */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {plan.rangeLabel}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-[900] text-[#1A1A1A]">
                      {plan.currentValue}
                    </span>
                    <span className="text-sm text-gray-400 font-medium">/ano</span>
                  </div>
                </div>

                {/* Slider */}
                <div className="relative">
                  <input
                    type="range"
                    min={plan.minRange}
                    max={plan.maxRange}
                    step={plan.step}
                    value={plan.currentValue}
                    onChange={(e) => plan.setValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
                    style={{
                      background: `linear-gradient(to right, #4A30E4 0%, #4A30E4 ${((plan.currentValue - plan.minRange) / (plan.maxRange - plan.minRange)) * 100
                        }%, #E5E7EB ${((plan.currentValue - plan.minRange) / (plan.maxRange - plan.minRange)) * 100
                        }%, #E5E7EB 100%)`
                    }}
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400 font-medium">{plan.minRange}</span>
                    <span className="text-xs text-gray-400 font-medium">
                      {plan.maxRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-xs text-gray-500 font-medium">R$</span>
                  <span className="text-4xl md:text-5xl font-[900] text-[#1A1A1A]">
                    {plan.price.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">/mês</span>
                </div>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-tight transition-all flex items-center gap-2 ${plan.highlight
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30'
                    : 'bg-[#F4F2FF] text-primary hover:bg-[#E9E5FF]'
                    }`}
                >
                  {plan.ctaText}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Validation */}
        <p className="text-center mt-12 text-gray-400 text-sm font-medium">
          Ganhos pequenos de produtividade já geram ROI em times grandes.{' '}
          <a
            href="https://www.gartner.com/en/human-resources"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Gartner
          </a>
        </p>
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4A30E4;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(74, 48, 228, 0.3);
        }

        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4A30E4;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(74, 48, 228, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Pricing;
