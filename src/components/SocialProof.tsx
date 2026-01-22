
import React from 'react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-muted overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="font-semibold tracking-[0.2em] text-[14px] uppercase mb-4 block text-primary">Social Proof</span>
          <h2 className="font-display text-[32px] md:text-[48px] font-[800] text-[#1A1A1A]">O que dizem os nossos clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="frosted-glass-card p-8 bg-white/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4A30E4]">person</span>
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] text-sm uppercase">{t.name}</p>
                  <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic font-medium">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
