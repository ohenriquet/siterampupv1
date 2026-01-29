import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="relative z-50 w-full px-6 pt-6">
      <nav className="w-fit mx-auto flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <img src="/logo eva principal.png" alt="Eva Logo" className="h-10 w-auto" />
          </div>
          <ul className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-white/90">
            <li><a className="hover:text-primary transition-colors" href="#quem-somos">{t.header.whatWeDo}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#como-funciona">{t.header.howItWorks}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#quem-atendemos">{t.header.whoWeServe}</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
