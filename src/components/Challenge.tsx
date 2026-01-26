import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Challenge: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-transparent">
      {/* Horizontal Divider Removed */}
      <div className="max-w-7xl mx-auto px-6">
      </div>

      <section className="pb-24 pt-16 relative overflow-hidden" id="quem-somos">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-[32px] md:text-[56px] font-[800] mb-12 leading-tight text-white max-w-4xl mx-auto">{t.challenge.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">{t.challenge.card1Title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                {t.challenge.card1Desc}
              </p>
            </div>
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">{t.challenge.card2Title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                {t.challenge.card2Desc}
              </p>
            </div>
            <div className="p-8 dark-glass-card h-full">
              <h3 className="text-xl font-display font-bold mb-4 text-white">{t.challenge.card3Title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                {t.challenge.card3Desc}
              </p>
            </div>
          </div>
          <p className="mt-12 text-gray-400 text-sm font-medium">
            {t.challenge.footer} <a href="https://www.microsoft.com/en-us/worklab/strategies-for-onboarding-in-a-hybrid-world" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Microsoft WorkLab</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
