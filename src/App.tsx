
import React from 'react';
import { IMAGES } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Methodology from './components/Methodology';
import Clients from './components/Clients';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [bgLoaded, setBgLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.src = IMAGES.HERO_BG;
    img.onload = () => {
      setBgLoaded(true);
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.motion-in, .wind-trail').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

          {/* High Res Image (Fade in when loaded) */}
          <img
            alt="Road to Success"
            className={`absolute inset-0 w-full h-full object-cover object-top scale-100 origin-top transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
            src={IMAGES.HERO_BG}
          />
          {/* Sunny Effect (Sunlight from Right) */}
          <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[100%] bg-gradient-to-bl from-orange-200/40 via-yellow-100/20 to-transparent blur-[80px] opacity-70 mix-blend-overlay"></div>

          {/* Subtle Glow for Hero Section */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-primary/10 blur-[120px] rounded-full opacity-40"></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10">
          <Hero />
          <div className="motion-in">
            <Challenge />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="checkered-flag"></div>
      <div className="motion-in wind-trail transition-all">
        <Methodology />
      </div>

      <div className="checkered-flag"></div>

      {/* CTA Banner Area */}
      <section className="py-20 bg-primary relative overflow-hidden motion-in">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-[800] text-white mb-6">Pronto para acelerar?</h2>
          <p className="text-white/80 text-lg mb-10 font-medium">Não deixe sua empresa perder tempo no box. Acelere o ramp-up e crie uma cultura de evolução constante no time.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contratar" className="bg-white text-primary px-8 py-4 rounded-xl font-bold uppercase tracking-tight hover:bg-gray-100 transition-all">Ver planos</a>
            <a href="#" className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-tight hover:bg-white/10 transition-all">Falar com consultor</a>
          </div>
        </div>
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-[120px] rounded-full"></div>
      </section>

      <div className="motion-in">
        <Clients />
      </div>
      <div className="motion-in">
        <SocialProof />
      </div>
      <div className="motion-in">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default App;
