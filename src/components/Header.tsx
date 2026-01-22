
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative z-50 w-full px-6 pt-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13,2L3,14H10L8,22L18,10H11L13,2Z"></path>
            </svg>
            <span className="text-xl font-display font-extrabold tracking-tight text-white uppercase">Eva</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-white/90">
            <li><a className="hover:text-primary transition-colors" href="#quem-somos">O que fazemos</a></li>
            <li><a className="hover:text-primary transition-colors" href="#como-funciona">Como funciona</a></li>
            <li><a className="hover:text-primary transition-colors" href="#quem-atendemos">Quem atendemos</a></li>
          </ul>
        </div>
        <a
          className="bg-[#4A30E4] hover:bg-[#3b25c7] text-white px-10 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg uppercase tracking-tight"
          href="#contratar"
        >
          agendar
        </a>
      </nav>
    </header>
  );
};

export default Header;
