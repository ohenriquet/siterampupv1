
import React from 'react';
import { IMAGES, PARTNERS } from '../constants';
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden" id="hero">

      <Header />

      <main className="relative z-10 w-full px-6 mt-12 flex flex-col items-center flex-grow">
        <div className="ultra-glass-panel w-full max-w-[900px] rounded-[32px] p-10 md:p-14 text-center relative">
          <div className="inline-flex items-center px-6 py-2 liquid-glass mb-8 mx-auto">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white">Para empresas e equipes</span>
          </div>

          <h1 className="font-display tracking-tight text-white mb-8">
            <span className="block text-[40px] md:text-[56px] leading-[1.1] font-[800]">A Eva acelera</span>
            <span className="block text-[48px] md:text-[72px] leading-[1.1] my-2 font-[800]">o ramp up de 0 a 100</span>
            <span className="block text-[24px] md:text-[36px] leading-[1.2] font-[300] mt-4">usando uma fração do tempo e recursos</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="liquid-glass p-6 flex flex-col items-center gap-3 text-center">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#4A30E4] text-xl">auto_awesome</span>
              </div>
              <p className="text-[11px] font-semibold text-white leading-tight uppercase tracking-wider">Templates de workflows prontos</p>
            </div>
            <div className="liquid-glass p-6 flex flex-col items-center gap-3 text-center">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#4A30E4] text-xl">timer</span>
              </div>
              <p className="text-[11px] font-semibold text-white leading-tight uppercase tracking-wider">Economia de ~22h por entrada</p>
            </div>
            <div className="liquid-glass p-6 flex flex-col items-center gap-3 text-center">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#4A30E4] text-xl">rocket_launch</span>
              </div>
              <p className="text-[11px] font-semibold text-white leading-tight uppercase tracking-wider">3.5x mais produtividade no 1º ano</p>
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
      <div className="relative z-10 w-full pb-12 overflow-hidden mt-12">
        <div className="animate-infinite-scroll flex items-center gap-24 whitespace-nowrap">
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <span key={idx} className="text-white font-display font-[800] text-3xl tracking-tighter uppercase opacity-80 hover:opacity-100 transition-opacity cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
