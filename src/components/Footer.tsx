
import React from 'react';

import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-[#F5F5F5] to-[#EBEBEB] text-[#1A1A1A] pt-20 pb-12 border-t border-white/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Nav, Logo, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 mb-20 border-b border-gray-200/60 pb-16">

          {/* Nav Links */}
          <nav className="flex gap-8">
            {t.footer.nav.map((item, index) => {
              const footerLinks = [
                "/sobre-a-empresa/",
                "/cases/",
                "/blog/",
                "/recursos/"
              ];

              return (
                <a
                  key={item}
                  href={footerLinks[index] || '#'}
                  className="text-[#4A30E4] font-medium text-sm hover:text-[#3b25c7] transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <img src={import.meta.env.BASE_URL + "logo-eva-principal.png"} alt="Eva People" className="h-8 md:h-10 w-auto" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              {
                name: 'YouTube',
                color: '#4A30E4',
                link: 'https://www.youtube.com/@evapeople_ai',
                path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              },
              {
                name: 'Instagram',
                color: '#4A30E4',
                link: 'https://www.instagram.com/evapeople_ai/',
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              },
              {
                name: 'LinkedIn',
                color: '#4A30E4',
                link: 'https://www.linkedin.com/company/evapeopleai/',
                path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 6.114-4.985 6.114 0v8.306h5v-9.358c0-6.137-7.23-5.903-8.868-2.908l-.278-2.734z"
              },
              {
                name: 'WhatsApp',
                color: '#25D366',
                link: 'https://api.whatsapp.com/send/?phone=5511910701372&text=Ol%C3%A1%21+Quero+conhecer+a+Eva',
                path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.516-.173-.009-.371-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487 2.082.899 2.861.721 3.355.673.495-.05 1.757-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white hover:shadow-md group"
                aria-label={social.name}
              >
                <svg className="w-5 h-5 transition-colors group-hover:scale-110 duration-300" viewBox="0 0 24 24" fill={social.name === 'WhatsApp' ? '#25D366' : '#4A30E4'}>
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-b border-gray-200/60 pb-16 mb-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{t.footer.partOf}</span>
            <div className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src={import.meta.env.BASE_URL + "logos/cubo.png"} alt="Cubo" className="h-8 w-auto mix-blend-multiply" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-gray-400">cubo</span>'; }} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{t.footer.investedBy}</span>
            <div className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src={import.meta.env.BASE_URL + "logos/ace.png"} alt="ACE Ventures" className="h-8 w-auto mix-blend-multiply" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-gray-400">ACE</span>'; }} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{t.footer.recognizedBy}</span>
            <div className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src={import.meta.env.BASE_URL + "logos/top10.png"} alt="Top 10 HR Techs" className="h-10 w-auto mix-blend-multiply" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-gray-400">TOP 10 HRTechs</span>'; }} />
            </div>
          </div>
        </div>

        {/* Bottom Section: Address & Copyright */}
        <div className="text-center space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[11px] text-gray-400 font-medium">
            <span>{t.footer.rights}</span>
            <span className="hidden md:block">|</span>
            <a href="#" className="hover:text-[#4A30E4] transition-colors">{t.footer.privacy}</a>
          </div>
          <p className="text-[10px] text-gray-300 font-medium uppercase tracking-wider max-w-2xl mx-auto leading-relaxed">
            {t.footer.address}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
