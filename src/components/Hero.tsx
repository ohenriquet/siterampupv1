
import React from 'react';
import { IMAGES, PARTNERS } from '../constants';
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-start overflow-hidden pt-4" id="hero">

      <Header />

      <main className="relative z-10 w-full px-6 mt-32 flex flex-col items-center flex-grow">
        <div className="ultra-glass-panel w-full max-w-[700px] rounded-[32px] p-4 md:py-14 md:px-6 text-center relative">
          <div className="inline-flex items-center px-4 py-1.5 liquid-glass mb-6 mx-auto text-center">
            <span className="text-[10px] font-semibold tracking-[0.1em] text-white leading-relaxed">
              Só 12% dizem que a empresa faz um ótimo onboarding. <a href="https://www.gallup.com/workplace/235121/why-onboarding-experience-key-retention.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors">Gallup</a>
            </span>
          </div>

          <h1 className="font-display tracking-tight text-white mb-4">
            <span className="block text-[30px] md:text-[45px] leading-[1.05] font-[800]">Equipes mais produtivas</span>
            <span className="block text-[30px] md:text-[45px] leading-[1.05] font-[800]">com Buddy System</span>
          </h1>

          <h2 className="text-white/90 text-[10px] md:text-[11px] font-medium max-w-[560px] mx-auto leading-relaxed mb-7">
            A Eva combina templates de workflow por área, checkpoints bidirecionais 30/60/90 e buddy system automatizado para acelerar a evolução de cada novo integrante.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-7">
            <div className="liquid-glass px-4 py-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-white/40 text-lg">traffic</span>
              <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider">Templates de workflow por área</span>
            </div>
            <div className="liquid-glass px-4 py-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-white/40 text-lg">traffic</span>
              <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider">Checkpoints bidirecionais 30/60/90</span>
            </div>
            <div className="liquid-glass px-4 py-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-white/40 text-lg">traffic</span>
              <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider">Buddy system automatizado</span>
            </div>
          </div>

          <div className="relative w-full max-w-sm mx-auto">
            <form className="w-full liquid-glass p-1.5 flex items-center shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 text-xs font-semibold text-white placeholder:text-white/60"
                placeholder="Seu e-mail corporativo"
                type="email"
              />
              <button
                className="flex items-center gap-2 bg-[#4A30E4] hover:bg-[#3b25c7] text-white pl-6 pr-3 py-2 rounded-[8px] transition-all shadow-lg flex-shrink-0 group"
                type="submit"
              >
                <span className="text-xs font-semibold uppercase tracking-tight">acelerar</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-md group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Logos Marquee */}
      <div className="relative z-10 w-full pb-8 overflow-hidden mt-4 -translate-y-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-infinite-scroll flex items-center gap-16 md:gap-40 whitespace-nowrap px-8">
          {([...PARTNERS, ...PARTNERS]).map((partner, idx) => {
            const isPriorityLogo = partner.name === "SOFTPLAN" || partner.name === "TELTEC";
            return (
              <img
                key={idx}
                src={partner.logo}
                alt={partner.name}
                width="200"
                height="100"
                loading="lazy"
                className={`${isPriorityLogo ? 'h-24 md:h-[160px]' : 'h-20 md:h-[125px]'} w-auto opacity-50 hover:opacity-100 transition-all duration-500 filter brightness-0 invert flex-shrink-0`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
