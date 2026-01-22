
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { title: "OKRs da Empresa", icon: "target", tag: "Contexto" },
    { title: "Políticas de RH", icon: "gavel", tag: "Normas" },
    { title: "Arquitetura de Sistemas", icon: "account_tree", tag: "Técnico" },
    { title: "Onboarding de Time", icon: "group_add", tag: "Cultura" },
    { title: "Glossário Interno", icon: "translate", tag: "Linguagem" },
  ];

  return (
    <section className="py-32 bg-muted relative z-20 border-t border-gray-200" id="como-funciona">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="font-semibold tracking-widest text-[14px] uppercase mb-4 block text-primary">A Metodologia Eva</span>
          <h2 className="font-display text-[32px] md:text-[48px] font-[800] text-[#1A1A1A] tracking-tight">Como a Eva acelera</h2>
        </div>

        <div className="space-y-24">
          <div className="flex flex-col">
            <div className="flex items-center gap-6 mb-12">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">1</div>
              <h3 className="font-display font-[800] text-2xl md:text-3xl text-[#1A1A1A]">Ela absorve seu contexto de negócio</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="frosted-glass-card p-6 flex flex-col items-center text-center hover:shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#4A30E4] text-xl">{step.icon}</span>
                  </div>
                  <h4 className="font-display font-bold text-xs mb-3 text-[#1A1A1A] uppercase tracking-tight leading-tight">{step.title}</h4>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-[9px] font-bold text-primary uppercase mt-auto">{step.tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-6 mb-12">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">2</div>
              <h3 className="font-display font-[800] text-2xl md:text-3xl text-[#1A1A1A]">O Framework "Gold Standard"</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="frosted-glass-card p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Exclusivo: IA Tutora
                </div>
                <h4 className="font-display text-3xl font-[800] mb-6 text-[#1A1A1A] leading-tight">Suporte em tempo real para aplicação prática</h4>
                <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
                  A <strong>IA Tutora</strong> acompanha cada colaborador em seus workflows, traduzindo o conhecimento teórico em execução prática imediata.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <span className="material-symbols-outlined text-[#4A30E4] text-sm">psychology</span>
                    <span className="text-[11px] font-bold text-primary uppercase">Aplicação de Contexto</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <span className="material-symbols-outlined text-[#4A30E4] text-sm">support_agent</span>
                    <span className="text-[11px] font-bold text-primary uppercase">Mentoria 24/7</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="frosted-glass-card p-8 border-l-4 border-l-primary !rounded-l-none">
                  <h5 className="font-display text-sm font-bold text-[#1A1A1A] uppercase tracking-tight mb-2">Trilha de Excelência</h5>
                  <p className="text-gray-500 text-sm font-medium">Curadoria automatizada do melhor conhecimento disponível na empresa para criar o padrão ouro.</p>
                </div>
                <div className="frosted-glass-card p-8 border-l-4 border-l-primary !rounded-l-none">
                  <h5 className="font-display text-sm font-bold text-[#1A1A1A] uppercase tracking-tight mb-2">Feedback Loop Contínuo</h5>
                  <p className="text-gray-500 text-sm font-medium">A IA avalia o progresso e ajusta o nível de profundidade do conteúdo com base na performance real.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
