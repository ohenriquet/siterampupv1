
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Methodology from './components/Methodology';
import Clients from './components/Clients';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero and Background Wrapper */}
      <div className="relative w-full">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 h-full pointer-events-none">
          <img
            alt="Premium Landscape"
            className="w-full h-full object-cover object-top sticky top-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSYgRhbhKE4MJZRizonDnAY12ngzqiScjNo9Wk-snLzmSWmYYKt0SzOWzZ7gcdt9HggLy5UExJ8eCcoBCffMCsDC2HWVl-l0yePzicfDDrO9E_OadQ_JggYUg3hwSD7CDbE0qEc7iXDWf3lASGT88f1pnqdL9wg-ZDXHb1S4TkFjv-BMbjPVEFLs0RG7XqmPPFAWvYjC2_ls1cW597m6RAHDNEzbP9KLSa1FU7uxLTKDqGjrNHbylZsFu0lO0ks_nmwu2_fXccVVc"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10">
          <Hero />
          <Challenge />
        </div>
      </div>

      {/* Content Sections */}
      <Methodology />
      <Clients />
      <SocialProof />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
