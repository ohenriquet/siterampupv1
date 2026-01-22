
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
        <Hero />
        <Challenge />
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
