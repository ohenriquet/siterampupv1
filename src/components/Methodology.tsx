
import React from 'react';

const Methodology: React.FC = () => {
  const steps_1 = [
    { title: "Ingestão de Dados", icon: "dataset", tag: "Contexto" },
    { title: "Config de Trilhas", icon: "settings_input_component", tag: "Setup" },
    { title: "Mapeamento Tácito", icon: "psychology_alt", tag: "Captura" },
    { title: "Compliance de IA", icon: "verified_user", tag: "Governança" },
  ];

  const integrations = [
    { name: "Gmail", icon: "/logos/tools/gmail.png" },
    { name: "Google Calendar", icon: "/logos/tools/google-calendar.png" },
    { name: "Google Chat", icon: "/logos/tools/google-chat.png" },
    { name: "Slack", icon: "/logos/tools/slack.png" },
    { name: "Teams", icon: "/logos/tools/teams.png" },
    { name: "WhatsApp", icon: "/logos/tools/whatsapp.png" },
    { name: "Webhooks", icon: "/logos/tools/webhooks.png" },
  ];

  return (
    <section className="py-32 bg-[#F5F5F5] relative z-20" id="como-funciona">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-28">
          <h2 className="font-display text-[32px] md:text-[56px] font-[800] text-[#1A1A1A] tracking-tight">Como funciona</h2>
        </div>

        <div className="space-y-40">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-16 text-center wind-trail">
              <span className="font-display font-[900] text-[120px] md:text-[180px] leading-none text-primary/10 mb-[-20px] md:mb-[-40px]">1</span>
              <img src="/traffic/red.png" alt="Traffic Light Red" className="h-[144px] w-auto mb-6 relative z-10" />
              <h3 className="font-display font-[800] text-3xl md:text-5xl text-[#1A1A1A]">Setup da Eva</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  title: "Templates por área",
                  desc: "Tech, Sales e CS prontos para rodar.\nComece com um modelo validado e adapte ao seu contexto.",
                  icon: "dataset"
                },
                {
                  title: "Customização",
                  desc: "Ajuste de blocos, conteúdos e links em minutos.\nSem depender de time técnico para cada mudança simples.",
                  icon: "settings_input_component"
                },
                {
                  title: "Previsibilidade",
                  desc: "Publicação da trilha com foco em execução.\nO time segue um padrão claro e você acompanha o progresso por fase.",
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
          <div className="w-full max-w-5xl mx-auto motion-in wind-trail">
            <div className="frosted-glass-card w-full aspect-video bg-white shadow-2xl border-white/40 flex items-center justify-center overflow-hidden">
              <img
                src="/workflow-eva.gif"
                alt="Workflow Eva Animation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-16 text-center wind-trail">
              <span className="font-display font-[900] text-[120px] md:text-[180px] leading-none text-primary/10 mb-[-20px] md:mb-[-40px]">2</span>
              <img src="/traffic/yellow.png" alt="Traffic Light Yellow" className="h-[144px] w-auto mb-6 relative z-10" />
              <h3 className="font-display font-[800] text-3xl md:text-5xl text-[#1A1A1A]">Buddy system automatizado</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <div className="frosted-glass-card p-10 bg-white/50 border-white/60">
                <h4 className="font-display text-2xl font-[800] mb-6 text-[#1A1A1A] leading-tight text-center lg:text-left">Gestão e Cadência Automatizada</h4>
                <div className="space-y-4 mb-8">
                  {[
                    "Acompanhamento estruturado de progresso por fase",
                    "Validações e coleta estruturada de sinais com colaborador e buddy",
                    "Nudges e lembretes automáticos para manter cadência"
                  ].map((bullet, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span className="text-gray-600 font-medium text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-[11px] font-medium mb-6 text-center lg:text-left italic">
                  “Times com cadência e clareza executam melhor”. <a href="https://hbr.org/2020/05/why-some-teams-are-smarter-than-others" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">HBR</a>
                </p>

                {/* Integrations Block */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 text-center lg:text-left">Integrações nativas</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-5 opacity-80">
                    {integrations.map((tool, idx) => (
                      <img key={idx} src={tool.icon} alt={tool.name} className="h-5 w-auto" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col gap-4">
                {/* Slack Mockup */}
                <div className="frosted-glass-card p-4 bg-white shadow-xl translate-x-4">
                  <div className="flex items-center gap-3 mb-2 p-2 bg-gray-50 rounded-lg">
                    <img src="/logos/tools/slack.png" className="h-4 w-4" alt="Slack" />
                    <span className="text-xs font-bold text-gray-700">Eva Buddy no Slack</span>
                  </div>
                  <div className="px-2">
                    <div className="h-2 bg-gray-100 rounded w-5/6 mb-2"></div>
                    <div className="h-2 bg-primary/20 rounded w-1/2"></div>
                  </div>
                </div>
                {/* WhatsApp Mockup */}
                <div className="frosted-glass-card p-4 bg-white shadow-xl -translate-x-4">
                  <div className="flex items-center gap-3 mb-2 p-2 bg-[#E7FFDB] rounded-lg">
                    <img src="/logos/tools/whatsapp.png" className="h-4 w-4" alt="WhatsApp" />
                    <span className="text-xs font-bold text-gray-700">Eva Buddy no WhatsApp</span>
                  </div>
                  <div className="px-2">
                    <div className="h-2 bg-gray-100 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </div>
                {/* Teams Mockup */}
                <div className="frosted-glass-card p-4 bg-white shadow-xl translate-x-2">
                  <div className="flex items-center gap-3 mb-2 p-2 bg-[#F3F2F1] rounded-lg">
                    <img src="/logos/tools/teams.png" className="h-4 w-4" alt="Teams" />
                    <span className="text-xs font-bold text-gray-700">Eva Buddy no Teams</span>
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
            <div className="flex flex-col items-center mb-16 text-center wind-trail">
              <span className="font-display font-[900] text-[120px] md:text-[180px] leading-none text-primary/10 mb-[-20px] md:mb-[-40px]">3</span>
              <img src="/traffic/green.png" alt="Traffic Light Green" className="h-[144px] w-auto mb-6 relative z-10" />
              <h3 className="font-display font-[800] text-3xl md:text-5xl text-[#1A1A1A]">Ready to Work</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  title: "Acompanhamento 30/60/90",
                  desc: "Status e pontos de atenção por pessoa, com foco em destravar o dia a dia e manter ritmo.",
                  icon: "visibility"
                },
                {
                  title: "Plano de ação com dono e prazo",
                  desc: "Ações por fase com responsável e prazo para antecipar autonomia e reduzir ramp-up.",
                  icon: "event_available"
                },
                {
                  title: "Apoio humano do time",
                  desc: "Suporte prático para acelerar o aprendizado no trabalho. Meta de reduzir em até 50% o tempo para autonomia com checkpoints 30/60/90 e rotina de validação.",
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
              Processos e coaching melhoram desempenho em até 22%. <a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/performance-management-and-the-post-covid-19-world" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">McKinsey</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
