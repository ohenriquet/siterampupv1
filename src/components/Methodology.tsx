
import React from 'react';
import { IMAGES } from '../constants';
import Reveal from './Reveal';
import { useLanguage } from '../contexts/LanguageContext';

const Methodology: React.FC = () => {
  const { t } = useLanguage();

  const steps_1 = [
    { title: "Ingestão de Dados", icon: "dataset", tag: "Contexto" },
    { title: "Config de Trilhas", icon: "settings_input_component", tag: "Setup" },
    { title: "Mapeamento Tácito", icon: "psychology_alt", tag: "Captura" },
    { title: "Compliance de IA", icon: "verified_user", tag: "Governança" },
  ];

  const integrations = [
    { name: "Gmail", icon: import.meta.env.BASE_URL + "logos/tools/gmail.png" },
    { name: "Google Calendar", icon: import.meta.env.BASE_URL + "logos/tools/google-calendar.png" },
    { name: "Google Chat", icon: import.meta.env.BASE_URL + "logos/tools/google-chat.png" },
    { name: "Slack", icon: import.meta.env.BASE_URL + "logos/tools/slack.png" },
    { name: "Teams", icon: import.meta.env.BASE_URL + "logos/tools/teams.png" },
    { name: "WhatsApp", icon: import.meta.env.BASE_URL + "logos/tools/whatsapp.png" },
    { name: "Webhooks", icon: import.meta.env.BASE_URL + "logos/tools/webhooks.png" },
  ];

  return (
    <section className="py-32 bg-[#F5F5F5] relative z-20" id="como-funciona">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-28">
          <h2 className="font-display text-[32px] md:text-[56px] font-[800] text-[#1A1A1A] tracking-tight">{t.methodology.title}</h2>
        </div>

        <div className="space-y-40">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <Reveal className="flex flex-col items-center mb-16 text-center wind-trail">
              <span className="font-display font-[900] text-[120px] md:text-[180px] leading-none text-primary/10 mb-[-20px] md:mb-[-40px]">1</span>
              <img src={import.meta.env.BASE_URL + "traffic/red.png"} alt="Traffic Light Red" className="h-[144px] w-auto mb-6 relative z-10" loading="lazy" />
              <h3 className="font-display font-[800] text-3xl md:text-5xl text-[#1A1A1A]">{t.methodology.step1Title}</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  title: t.methodology.step1Card1Title,
                  desc: t.methodology.step1Card1Desc,
                  icon: "dataset"
                },
                {
                  title: t.methodology.step1Card2Title,
                  desc: t.methodology.step1Card2Desc,
                  icon: "settings_input_component"
                },
                {
                  title: t.methodology.step1Card3Title,
                  desc: t.methodology.step1Card3Desc,
                  icon: "verified_user"
                }
              ].map((step, idx) => (
                <div key={idx} className="frosted-glass-card p-8 flex flex-col items-center text-center hover:shadow-xl bg-white/50 border-white/60">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm mb-3 text-[#1A1A1A] uppercase tracking-tight leading-tight">{step.title}</h4>
                  <p className="text-gray-500 text-xs font-medium whitespace-pre-line">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow GIF */}
          {/* Workflow GIF */}
          <Reveal className="w-full max-w-5xl mx-auto motion-in wind-trail">
            <div className="frosted-glass-card w-full aspect-video bg-white shadow-2xl border-white/40 flex items-center justify-center overflow-hidden">
              <img
                src={IMAGES.WORKFLOW_GIF}
                alt="Workflow Eva Animation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <Reveal className="flex flex-col items-center mb-16 text-center wind-trail">
              <span className="font-display font-[900] text-[120px] md:text-[180px] leading-none text-primary/10 mb-[-20px] md:mb-[-40px]">2</span>
              <img src={import.meta.env.BASE_URL + "traffic/yellow.png"} alt="Traffic Light Yellow" className="h-[144px] w-auto mb-6 relative z-10" loading="lazy" />
              <h3 className="font-display font-[800] text-3xl md:text-5xl text-[#1A1A1A]">{t.methodology.step2Title}</h3>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <div className="frosted-glass-card p-10 bg-white/50 border-white/60">
                <h4 className="font-display text-2xl font-[800] mb-6 text-[#1A1A1A] leading-tight text-center lg:text-left">{t.methodology.step2CardTitle}</h4>
                <div className="space-y-4 mb-8">
                  {[
                    t.methodology.step2Bullet1,
                    t.methodology.step2Bullet2,
                    t.methodology.step2Bullet3
                  ].map((bullet, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span className="text-gray-600 font-medium text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-[11px] font-medium mb-6 text-center lg:text-left italic">
                  {t.methodology.step2Footer} <a href="https://hbr.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">HBR</a>
                </p>

                {/* Integrations Block */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 text-center lg:text-left">{t.methodology.integrations}</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-5 opacity-80">
                    {integrations.map((tool, idx) => (
                      <img key={idx} src={tool.icon} alt={tool.name} className="h-5 w-auto" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col gap-4">
                {/* Slack Mockup */}
                <div className="frosted-glass-card p-4 bg-white shadow-xl translate-x-4">
                  <div className="flex items-center gap-3 mb-2 p-2 bg-gray-50 rounded-lg">
                    <img src={import.meta.env.BASE_URL + "logos/tools/slack.png"} className="h-4 w-4" alt="Slack" />
                    <span className="text-xs font-bold text-gray-700">{t.methodology.slackMockup}</span>
                  </div>
                  <div className="px-2">
                    <div className="h-2 bg-gray-100 rounded w-5/6 mb-2"></div>
                    <div className="h-2 bg-primary/20 rounded w-1/2"></div>
                  </div>
                </div>
                {/* WhatsApp Mockup */}
                <div className="frosted-glass-card p-4 bg-white shadow-xl -translate-x-4">
                  <div className="flex items-center gap-3 mb-2 p-2 bg-[#E7FFDB] rounded-lg">
                    <img src={import.meta.env.BASE_URL + "logos/tools/whatsapp.png"} className="h-4 w-4" alt="WhatsApp" />
                    <span className="text-xs font-bold text-gray-700">{t.methodology.whatsappMockup}</span>
                  </div>
                  <div className="px-2">
                    <div className="h-2 bg-gray-100 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </div>
                {/* Teams Mockup */}
                <div className="frosted-glass-card p-4 bg-white shadow-xl translate-x-2">
                  <div className="flex items-center gap-3 mb-2 p-2 bg-[#F3F2F1] rounded-lg">
                    <img src={import.meta.env.BASE_URL + "logos/tools/teams.png"} className="h-4 w-4" alt="Teams" />
                    <span className="text-xs font-bold text-gray-700">{t.methodology.teamsMockup}</span>
                  </div>
                  <div className="px-2">
                    <div className="h-2 bg-gray-100 rounded w-4/5 mb-2"></div>
                    <div className="h-2 bg-primary/20 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Reveal className="flex flex-col items-center mb-16 text-center wind-trail">
              <span className="font-display font-[900] text-[120px] md:text-[180px] leading-none text-primary/10 mb-[-20px] md:mb-[-40px]">3</span>
              <img src={import.meta.env.BASE_URL + "traffic/green.png"} alt="Traffic Light Green" className="h-[144px] w-auto mb-6 relative z-10" loading="lazy" />
              <h3 className="font-display font-[800] text-3xl md:text-5xl text-[#1A1A1A]">{t.methodology.step3Title}</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  title: t.methodology.step3Card1Title,
                  desc: t.methodology.step3Card1Desc,
                  icon: "visibility"
                },
                {
                  title: t.methodology.step3Card2Title,
                  desc: t.methodology.step3Card2Desc,
                  icon: "event_available"
                },
                {
                  title: t.methodology.step3Card3Title,
                  desc: t.methodology.step3Card3Desc,
                  icon: "psychology"
                }
              ].map((card, idx) => (
                <div key={idx} className="frosted-glass-card p-8 bg-white/50 border-white/60 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-primary text-xl">{card.icon}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#1A1A1A] mb-3">{card.title}</h4>
                  <p className="text-gray-500 text-sm font-medium">{card.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-gray-400 text-sm font-medium">
              {t.methodology.step3Footer} <a href="https://www.mckinsey.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">McKinsey</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
