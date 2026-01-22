
import React from 'react';

const Challenge: React.FC = () => {
  return (
    <div className="relative bg-transparent">
      <section className="py-24 relative overflow-hidden" id="quem-somos">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-[32px] md:text-[56px] font-[800] mb-12 leading-tight text-white max-w-4xl mx-auto">Receber talentos custa caro e dá trabalho</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 dark-glass-card">
              <h3 className="text-xl font-display font-bold mb-4 text-white">6 Meses de Ramp-up</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">É o tempo médio para autonomia total. Com Eva, reduzimos esse período para 45 dias através de trilhas guiadas por IA.</p>
            </div>
            <div className="p-8 dark-glass-card">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Fadiga de Contexto</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">Gerentes sobrecarregados ignoram a cultura por falta de tempo. A Eva automatiza a transmissão de conhecimento tácito.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
