
import React from 'react';

const Challenge: React.FC = () => {
  return (
    <div className="relative bg-transparent">
      {/* Horizontal Divider Removed */}
      <div className="max-w-7xl mx-auto px-6">
      </div>

      <section className="pb-24 pt-16 relative overflow-hidden" id="quem-somos">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-[32px] md:text-[56px] font-[800] mb-12 leading-tight text-white max-w-4xl mx-auto">Sua empresa está perdendo tração?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Líderes sobrecarregados</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Gestores e seniores dedicam horas treinando novos integrantes. A produtividade do time principal cai durante o ramp-up.
              </p>
            </div>
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Autonomia atrasada</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                O conhecimento fica concentrado e a transferência acontece no improviso. Isso cria dependências, retrabalho e atrasa a autonomia dos novos integrantes.
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
            Produtividade sobe até 40% com uso de IA no trabalho. <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Microsoft</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
