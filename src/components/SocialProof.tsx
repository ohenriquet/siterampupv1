
import React from 'react';
import { TESTIMONIALS } from '../constants';

import { useLanguage } from '../contexts/LanguageContext';

const SocialProof: React.FC = () => {
  const { t } = useLanguage();

  const cases = [
    {
      name: "Nathália Tupinambá",
      role: "Diretora de Pessoas, Cultura e ESG",
      quote: t.socialProof.case1Quote,
      highlight: t.socialProof.case1Highlight,
      logo: "/cases/lwsa_case.png", // LWSA Official Logo
      buttonText: t.socialProof.case1Button,
      link: "https://evapeople.com.br/wp-content/uploads/2025/06/Case_LWSA_202506.pdf",
      avatar: "/cases/nathalia.jpg"
    },
    {
      name: "Lilian Ghirotto",
      role: "Coordenadora de DHO",
      quote: t.socialProof.case2Quote,
      highlight: t.socialProof.case2Highlight,
      logo: "/cases/elettromec_case.png", // Elettromec Official Logo
      buttonText: t.socialProof.case2Button,
      link: "https://evapeople.com.br/wp-content/uploads/2025/06/Case_Elettromec_202506.pdf",
      avatar: "/cases/lilian.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] overflow-hidden border-t border-gray-100" id="quem-somos-prova">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="font-semibold tracking-[0.2em] text-[12px] uppercase mb-4 block text-[#4A30E4]">{t.socialProof.label}</span>
          <h2 className="font-display text-[32px] md:text-[56px] font-[800] text-[#1A1A1A] tracking-tight">{t.socialProof.title}</h2>
        </div>

        <div className="space-y-10">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center gap-10 md:gap-16 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-700">
              {/* Profile */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[220px]">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
                  <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-display font-[900] text-[20px] text-[#1A1A1A] leading-tight mb-1">{c.name}</p>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">{c.role}</p>
              </div>

              {/* Quote */}
              <div className="flex-1 relative">
                <div className="absolute -top-10 -left-6 opacity-20">
                  <svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.129 0C25.0323 0 32.2581 7.2 32.2581 16.08C32.2581 31.2 20.6452 44.4 3.54839 48V36C12.9032 36 12.9032 28.8 12.9032 25.2H0V16.08C0 7.2 7.22581 0 16.129 0ZM43.871 0C52.7742 0 60 7.2 60 16.08C60 31.2 48.3871 44.4 31.2903 48V36C40.6452 36 40.6452 28.8 40.6452 25.2H27.7419V16.08C27.7419 7.2 34.9677 0 43.871 0Z" fill="#4A30E4" />
                  </svg>
                </div>
                <p className="text-[#1A1A1A] text-[18px] md:text-[22px] font-medium leading-[1.6] relative z-10">
                  {c.quote.split(c.highlight).map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="bg-[#4A30E4]/10 text-[#4A30E4] px-1 rounded-sm">{c.highlight}</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* Logo & CTA */}
              <div className="flex flex-col items-center justify-center gap-8 min-w-[200px]">
                <div className="h-12 flex items-center justify-center">
                  <img src={c.logo} alt="Company Logo" className="max-h-full max-w-[140px] object-contain" />
                </div>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF4500] hover:bg-[#E63E00] text-white px-8 py-4 rounded-2xl text-[12px] font-[900] uppercase tracking-widest flex items-center gap-3 shadow-[0_10px_20px_rgba(255,69,0,0.2)] transition-all hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  {c.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
