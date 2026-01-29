
import React from 'react';
import { IMAGES, PARTNERS } from '../constants';
import Header from './Header';

import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    const portalId = '48245348';
    const formId = '7b9f92b3-78af-4ef2-a3e7-f1b4e2dc0749';
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            {
              name: 'email',
              value: email,
            },
          ],
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden pt-4" id="hero">

      <Header />

      {/* Language Selector */}
      <div className="relative z-50 flex items-center justify-center gap-3 mt-4 text-[10px] font-bold tracking-widest text-white/40">
        <button
          onClick={() => setLanguage('EN')}
          className={`${language === 'EN' ? 'text-white' : 'hover:text-white transition-colors cursor-pointer'}`}
        >
          EN
        </button>
        <span className="opacity-30">|</span>
        <button
          onClick={() => setLanguage('PT')}
          className={`${language === 'PT' ? 'text-white' : 'hover:text-white transition-colors cursor-pointer'}`}
        >
          PT
        </button>
        <span className="opacity-30">|</span>
        <button
          onClick={() => setLanguage('ES')}
          className={`${language === 'ES' ? 'text-white' : 'hover:text-white transition-colors cursor-pointer'}`}
        >
          ES
        </button>
      </div>

      <main className="relative z-10 w-full px-6 mt-6 flex flex-col items-center justify-center flex-1">
        <div className="ultra-glass-panel w-full max-w-[700px] rounded-[32px] p-6 md:py-12 md:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-1.5 liquid-glass mb-5 mx-auto text-center">
            <span className="text-[10px] font-semibold tracking-[0.1em] text-white leading-relaxed">
              {t.hero.kicker}
            </span>
          </div>

          <h1 className="font-display tracking-tight text-white mb-5 flex flex-col items-center">
            <span className="block text-[35px] md:text-[55px] leading-[1] font-[800] mb-2 uppercase tracking-tight">{t.hero.title}</span>
            <div className="flex items-center gap-4 text-[19px] md:text-[28px] font-medium opacity-90">
              <span>{t.hero.with}</span>
              <img src="/logo eva principal.png" alt="Eva Logo" className="h-[22px] md:h-[33px] mt-1" />
            </div>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="liquid-glass px-4 py-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-white/40 text-lg">computer</span>
              <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider">{t.hero.box1}</span>
            </div>
            <div className="liquid-glass px-4 py-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-white/40 text-lg">group</span>
              <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider">{t.hero.box2}</span>
            </div>
            <div className="liquid-glass px-4 py-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-white/40 text-lg">smart_toy</span>
              <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider">{t.hero.box3}</span>
            </div>
          </div>

          <div className="relative w-full max-w-sm mx-auto">
            <form className="w-full liquid-glass p-1.5 flex items-center shadow-xl" onSubmit={handleSubmit}>
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 text-xs font-semibold text-white placeholder:text-white/60 focus:outline-none"
                placeholder={t.hero.emailPlaceholder}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting' || status === 'success'}
                required
              />
              <button
                className={`flex items-center gap-2 ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-[#4A30E4] hover:bg-[#3b25c7]'} text-white pl-6 pr-3 py-2 rounded-[8px] transition-all shadow-lg flex-shrink-0 group disabled:opacity-70 disabled:cursor-not-allowed`}
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
              >
                <span className="text-xs font-semibold uppercase tracking-tight">
                  {status === 'submitting' ? t.hero.sending : status === 'success' ? t.hero.success : t.hero.ctaButton}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <span className={`material-symbols-outlined text-white text-md ${status === 'idle' ? 'group-hover:translate-x-0.5' : ''} transition-transform`}>
                    {status === 'success' ? 'check' : 'arrow_forward'}
                  </span>
                </div>
              </button>
            </form>
            {status === 'error' && (
              <p className="absolute -bottom-8 left-0 w-full text-center text-red-400 text-[10px] font-medium">
                {t.hero.error}
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Logos Marquee - Visible in LCP */}
      <div className="relative z-10 w-full pb-6 -mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
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
                loading="eager"
                fetchPriority="high"
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
