
import React from 'react';
import { IMAGES, PARTNERS } from '../constants';
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden" id="hero">

      <Header />

      <main className="relative z-10 w-full px-6 mt-12 flex flex-col items-center flex-grow">
        <div className="ultra-glass-panel w-full max-w-[900px] rounded-[32px] p-10 md:p-14 text-center relative">
          <div className="inline-flex items-center px-6 py-2 liquid-glass mb-8 mx-auto text-center">
            <span className="text-[11px] font-semibold tracking-[0.1em] text-white leading-relaxed">
              90% das Fortune 250 têm mentoria. <a href="https://www.forbes.com/councils/forbescommunicationscouncil/2022/05/19/does-mentoring-still-matter-for-fortune-500-companies/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors">Forbes</a>
            </span>
          </div>

          <h1 className="font-display tracking-tight text-white mb-4">
            <span className="block text-[46px] md:text-[72px] leading-[1.1] font-[800]">Equipes mais produtivas</span>
            <span className="block text-[46px] md:text-[72px] leading-[1.1] font-[800]">com Buddy System</span>
          </h1>

          <h2 className="text-white/90 text-sm md:text-lg font-medium max-w-[850px] mx-auto leading-relaxed mb-12">
            A Eva combina templates de workflow por área, checkpoints bidirecionais 30/60/90 e buddy system automatizado para acelerar a evolução de cada novo integrante.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="liquid-glass px-5 py-3 flex items-center gap-4">
              <span className="material-symbols-outlined text-white/40 text-xl">traffic</span>
              <span className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider">Templates de workflow por área</span>
            </div>
            <div className="liquid-glass px-5 py-3 flex items-center gap-4">
              <span className="material-symbols-outlined text-white/40 text-xl">traffic</span>
              <span className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider">Checkpoints bidirecionais 30/60/90</span>
            </div>
            <div className="liquid-glass px-5 py-3 flex items-center gap-4">
              <span className="material-symbols-outlined text-white/40 text-xl">traffic</span>
              <span className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider">Buddy system automatizado</span>
            </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto">
            <form className="w-full liquid-glass p-2 flex items-center shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 px-6 text-sm font-semibold text-white placeholder:text-white/60"
                placeholder="Seu e-mail corporativo"
                type="email"
              />
              <button
                className="flex items-center gap-2 bg-[#4A30E4] hover:bg-[#3b25c7] text-white pl-8 pr-4 py-3 rounded-[8px] transition-all shadow-lg flex-shrink-0 group"
                type="submit"
              >
                <span className="text-sm font-semibold uppercase tracking-tight">acelerar</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-lg group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Logos Marquee */}
      <div className="relative z-10 w-full pb-12 overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-infinite-scroll flex items-center gap-16 md:gap-24 whitespace-nowrap px-8">
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => {
            const isPriority = partner.name === "SOFTPLAN" || partner.name === "META IT";
            return (
              <img
                key={idx}
                src={partner.logo}
                alt={partner.name}
                className={`${isPriority ? 'h-10 md:h-16' : 'h-7 md:h-10'} w-auto opacity-50 hover:opacity-100 transition-all duration-500 filter brightness-0 invert flex-shrink-0`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
