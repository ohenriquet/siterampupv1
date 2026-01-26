
import React from 'react';

const Challenge: React.FC = () => {
  return (
    <div className="relative bg-transparent">
      {/* Horizontal Divider Removed */}
      <div className="max-w-7xl mx-auto px-6">
      </div>

      <section className="pb-24 pt-16 relative overflow-hidden" id="quem-somos">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-[32px] md:text-[56px] font-[800] mb-12 leading-tight text-white max-w-4xl mx-auto">Novos integrantes levam meses para ficar produtivos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Líderes sobrecarregados</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Gestores e seniores dedicam horas treinando novos integrantes. A produtividade do time principal cai durante o ramp-up.
              </p>
            </div>
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Repetitivo e Manual</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Sem um processo claro, o onboarding vira sequência de tarefas repetidas e manuais. Isso consome tempo do time, aumenta o improviso e atrasa a evolução dos novos integrantes.
              </p>
            </div>
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Evolução lenta do time</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Novos colaboradores levam meses para atingir o ritmo esperado. O custo de oportunidade aumenta e os resultados do trimestre sentem o impacto.
              </p>
            </div>
          </div>
          <p className="mt-12 text-gray-400 text-sm font-medium">
            Com buddy no onboarding, 56% dizem que ficaram produtivos mais rápido. Pode chegar a 97% com mais encontros. <a href="https://www.microsoft.com/en-us/worklab/strategies-for-onboarding-in-a-hybrid-world" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Microsoft WorkLab</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
