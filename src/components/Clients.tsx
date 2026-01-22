
import React from 'react';
import { IMAGES } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100" id="quem-atendemos">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold tracking-[0.2em] text-[14px] uppercase mb-4 block text-primary">Nossos Clientes</span>
          <h2 className="font-display text-[32px] md:text-[48px] font-[800] text-[#1A1A1A] mb-4">Quem atendemos</h2>
          <p className="text-gray-500 font-semibold">Segmentos transformados pela automação da Eva</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="frosted-glass-card p-10 flex flex-col items-center justify-center gap-5 text-center bg-muted/30">
            <span className="material-symbols-outlined text-[#4A30E4] text-4xl">home_repair_service</span>
            <span className="text-sm font-display font-bold text-[#1A1A1A] uppercase tracking-widest">Empresas de Serviço</span>
          </div>
          <div className="frosted-glass-card p-10 flex flex-col items-center justify-center gap-5 text-center bg-muted/30">
            <span className="material-symbols-outlined text-[#4A30E4] text-4xl">terminal</span>
            <span className="text-sm font-display font-bold text-[#1A1A1A] uppercase tracking-widest">Tecnologia</span>
          </div>
          <div className="frosted-glass-card p-10 flex flex-col items-center justify-center gap-5 text-center bg-muted/30">
            <span className="material-symbols-outlined text-[#4A30E4] text-4xl">trending_up</span>
            <span className="text-sm font-display font-bold text-[#1A1A1A] uppercase tracking-widest">Scale-ups</span>
          </div>
          <div className="frosted-glass-card p-10 flex flex-col items-center justify-center gap-5 text-center bg-muted/30">
            <span className="material-symbols-outlined text-[#4A30E4] text-4xl">corporate_fare</span>
            <span className="text-sm font-display font-bold text-[#1A1A1A] uppercase tracking-widest">Enterprise</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="flex flex-wrap gap-12 items-center">
              <span className="text-3xl font-display font-bold tracking-tighter text-[#1A1A1A]/30 uppercase">Empresa A</span>
              <span className="text-3xl font-display font-extrabold italic text-[#1A1A1A]/30 tracking-tight">Empresa B</span>
              <span className="text-2xl font-display font-extrabold uppercase tracking-[0.2em] text-[#1A1A1A]/30">Empresa C</span>
            </div>
            <div className="space-y-4">
              <div className="p-6 frosted-glass-card bg-muted/20 flex items-center gap-6">
                <div className="text-primary font-[800] text-3xl font-display">70%</div>
                <div className="text-sm font-semibold text-[#1A1A1A]/70">Redução no tempo de onboarding técnico</div>
              </div>
              <div className="p-6 frosted-glass-card bg-muted/20 flex items-center gap-6">
                <div className="text-primary font-[800] text-3xl font-display">22h</div>
                <div className="text-sm font-semibold text-[#1A1A1A]/70">Poupadas mensalmente por cada gestor</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[1.5rem] overflow-hidden shadow-2xl">
              <img 
                alt="Case Study" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                src={IMAGES.CASE_STUDY} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
