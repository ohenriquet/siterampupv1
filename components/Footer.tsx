
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-dark pt-20 pb-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13,2L3,14H10L8,22L18,10H11L13,2Z"></path>
              </svg>
              <span className="font-display text-2xl font-extrabold tracking-tight uppercase text-primary">Eva</span>
            </div>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="font-display font-extrabold mb-6 uppercase text-[11px] tracking-widest text-primary">PLATAFORMA</h5>
              <ul className="space-y-4 text-gray-500 text-[13px] font-semibold">
                <li><a className="hover:text-primary transition-colors" href="#como-funciona">Como funciona</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-display font-extrabold mb-6 uppercase text-[11px] tracking-widest text-primary">EMPRESA</h5>
              <ul className="space-y-4 text-gray-500 text-[13px] font-semibold">
                <li><a className="hover:text-primary transition-colors" href="#quem-somos">Sobre nós</a></li>
                <li><a className="hover:text-primary transition-colors" href="#quem-atendemos">Cases</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col items-start gap-4">
          <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-widest">
            Eva People © 2025. Todos os direitos reservados. 
            <a className="hover:text-primary ml-2" href="#">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
