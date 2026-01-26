import React, { Suspense, lazy } from 'react';
import { IMAGES } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Reveal from './components/Reveal';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Lazy load heavy below-the-fold components
const Methodology = lazy(() => import('./components/Methodology'));
const Clients = lazy(() => import('./components/Clients'));
const SocialProof = lazy(() => import('./components/SocialProof'));
const Pricing = lazy(() => import('./components/Pricing'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-pulse bg-gray-200 h-10 w-10 rounded-full"></div>
  </div>
);

const MainContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero and Background Wrapper */}
      <div className="relative w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 h-full pointer-events-none">
          {/* Low Res Placeholder (Immediate Load) */}
          <img
            alt="Road to Success Placeholder"
            className="absolute inset-0 w-full h-full object-cover object-top scale-100 origin-top filter blur-sm transition-opacity duration-1000"
            src={IMAGES.HERO_BG_LOW}
            loading="eager"
            decoding="sync"
          />

          {/* High Res Image (Priority) */}
          <img
            alt="Road to Success"
            className="absolute inset-0 w-full h-full object-cover object-top scale-100 origin-top opacity-100"
            src={IMAGES.HERO_BG}
            fetchPriority="high"
          />
          {/* Sunny Effect (Sunlight from Right) */}
          <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[100%] bg-gradient-to-bl from-orange-200/40 via-yellow-100/20 to-transparent blur-[80px] opacity-70 mix-blend-overlay"></div>

          {/* Subtle Glow for Hero Section */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-primary/10 blur-[120px] rounded-full opacity-40"></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10">
          <Hero />
          <Reveal>
            <Challenge />
          </Reveal>
        </div>
      </div>

      {/* Content Sections */}
      <div className="checkered-flag"></div>
      <Suspense fallback={<LoadingFallback />}>
        <Reveal className="motion-in wind-trail transition-all">
          <Methodology />
        </Reveal>
      </Suspense>

      <div className="checkered-flag"></div>

      {/* CTA Banner Area */}
      <Reveal>
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-[800] text-white mb-6">{t.ctaBanner.title}</h2>
            <p className="text-white/80 text-lg mb-10 font-medium">{t.ctaBanner.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contratar" className="bg-white text-primary px-8 py-4 rounded-xl font-bold uppercase tracking-tight hover:bg-gray-100 transition-all">{t.ctaBanner.button1}</a>
              <a href="#" className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-tight hover:bg-white/10 transition-all">{t.ctaBanner.button2}</a>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-[120px] rounded-full"></div>
        </section>
      </Reveal>

      <Suspense fallback={<LoadingFallback />}>
        <Reveal>
          <Clients />
        </Reveal>
        <Reveal>
          <SocialProof />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Footer />
      </Suspense>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
