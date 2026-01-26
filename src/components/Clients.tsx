
import React from 'react';
import { IMAGES } from '../constants';

import { useLanguage } from '../contexts/LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const [playVideo, setPlayVideo] = React.useState(false);

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="quem-atendemos">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-[40px] md:text-[64px] font-[800] text-[#1A1A1A] mb-4 tracking-tight">{t.clients.title}</h2>
          <p className="text-gray-500 font-semibold text-lg max-w-3xl mx-auto">
            {t.clients.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="frosted-glass-card p-10 flex flex-col items-center justify-center gap-5 text-center bg-muted/30">
            <span className="material-symbols-outlined text-[#4A30E4] text-4xl">terminal</span>
            <div className="space-y-1">
              <span className="text-sm font-display font-bold text-[#1A1A1A] uppercase tracking-widest block">{t.clients.card1Title}</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase">{t.clients.card1Desc}</span>
            </div>
          </div>
          <div className="frosted-glass-card p-10 flex flex-col items-center justify-center gap-5 text-center bg-muted/30">
            <span className="material-symbols-outlined text-[#4A30E4] text-4xl">trending_up</span>
            <div className="space-y-1">
              <span className="text-sm font-display font-bold text-[#1A1A1A] uppercase tracking-widest block">{t.clients.card2Title}</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase">{t.clients.card2Desc}</span>
            </div>
          </div>
          <div className="frosted-glass-card p-10 flex flex-col items-center justify-center gap-5 text-center bg-muted/30">
            <span className="material-symbols-outlined text-[#4A30E4] text-4xl">support_agent</span>
            <div className="space-y-1">
              <span className="text-sm font-display font-bold text-[#1A1A1A] uppercase tracking-widest block">{t.clients.card3Title}</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase">{t.clients.card3Desc}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-xl font-display font-bold text-[#1A1A1A] mb-2">{t.clients.caseTitle}</h4>
              <p className="text-[#4A30E4] font-bold text-sm mb-4">
                {t.clients.caseSubtitle}
              </p>

              <div className="text-gray-500 text-sm leading-relaxed max-w-md mb-6 space-y-4">
                <p>
                  {t.clients.caseP1}
                </p>
                <p>
                  {t.clients.caseP2}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  t.clients.caseBullet1,
                  t.clients.caseBullet2,
                  t.clients.caseBullet3
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-lg flex-shrink-0 mt-0.5">check_circle</span>
                    <span className="text-sm font-medium text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <div className="p-6 frosted-glass-card bg-muted/20 flex items-center gap-6">
                  <div className="text-primary font-[800] text-4xl font-display">3.000</div>
                  <div className="text-sm font-bold text-[#1A1A1A] leading-tight max-w-[150px]">{t.clients.stat1Label}</div>
                </div>
                <div className="p-6 frosted-glass-card bg-muted/20 flex items-center gap-6">
                  <div className="text-primary font-[800] text-4xl font-display">14</div>
                  <div className="text-sm font-bold text-[#1A1A1A] leading-tight max-w-[150px]">{t.clients.stat2Label}</div>
                </div>
                <p className="text-gray-500 text-sm font-medium italic pt-4 border-t border-gray-100 mt-4">
                  {t.clients.caseFooter}
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(74,48,228,0.2)] bg-black group cursor-pointer relative">
              {/* Video Facade */}
              {!playVideo ? (
                <div
                  className="w-full h-full bg-slate-900 flex items-center justify-center cursor-pointer group relative overflow-hidden"
                  onClick={() => setPlayVideo(true)}
                >
                  <img
                    src="https://img.youtube.com/vi/PpzP5RmgKEk/maxresdefault.jpg"
                    alt="Capa do vídeo Case Meta"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center z-10 border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-4xl fill-current">play_arrow</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/PpzP5RmgKEk?si=1PToL7Z6l6N-l7mJ&autoplay=1"
                  title="Case Meta: Experiência Eva"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            {/* Tag Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{t.clients.videoTagTitle}</p>
                  <p className="text-sm font-bold text-dark">{t.clients.videoTagSubtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
