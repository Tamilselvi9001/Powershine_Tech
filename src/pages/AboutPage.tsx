import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Cpu, Building2, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 font-sans selection:bg-brand-primary selection:text-white">
      
      {/* Header Banner */}
      <div className="bg-brand-accent text-white rounded-2xl p-10 md:p-14 shadow-2xl border border-brand-accent-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary font-bold text-[10px] uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Established {COMPANY_INFO.establishedYear} • Tiruppur Laboratory</span>
          </div>
          <h1 className="text-3.5xl md:text-5.5xl font-extrabold text-white tracking-tight leading-none">
            About Powershine Tech
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl font-normal">
            Specialist industrial electronics engineers providing diagnostic repairs, retrofitting, and spare parts support for the global textile industry.
          </p>
        </div>
      </div>

      {/* Main Company Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-xs md:text-sm leading-relaxed font-normal text-slate-500">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
            Bridging European & Japanese Electronics Technology for Textile Mills
          </h2>
          {COMPANY_INFO.aboutLong.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-slate-600 leading-relaxed font-normal">
              {paragraph}
            </p>
          ))}

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
              <p className="text-2xl font-extrabold text-brand-primary font-mono">{COMPANY_INFO.experienceYears}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Years Field Work</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
              <p className="text-2xl font-extrabold text-slate-900 font-mono">{COMPANY_INFO.repairedCardsCount}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Cards Repaired</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
              <p className="text-2xl font-extrabold text-slate-900 font-mono">{COMPANY_INFO.activeClientsCount}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Mills Serviced</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
              <p className="text-2xl font-extrabold text-brand-primary font-mono">{COMPANY_INFO.repairSuccessRate}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">QC success Rate</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-brand-accent text-white rounded-2xl p-8 border border-brand-accent-hover shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-2 text-brand-primary font-bold text-[10px] uppercase tracking-wider relative z-10">
            <ShieldCheck className="w-4 h-4" />
            <span>Tiruppur Laboratory Infrastructure</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight relative z-10">Instrumentation & Diagnostics</h3>
          <ul className="space-y-3.5 text-xs text-slate-300 relative z-10 font-normal">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Multi-channel digital storage oscilloscopes & dynamic logic analyzers</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Dedicated load testing arrays for Yaskawa & Mitsubishi inverter drives</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>BGA hot-air rework stations & ultrasonic PCB cleaning baths</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>EEPROM programmer arrays for Tsudakoma & Toyota loom CPU boards</span>
            </li>
          </ul>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full mt-4 py-3.5 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider transition-colors relative z-10"
          >
            Consult Laboratory Engineers
          </button>
        </div>
      </div>

      {/* Industries Served */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-8 md:p-10 space-y-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider text-center border-b border-slate-100 pb-4">
          Machinery Applications & Sectors Supported
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-xs">
          {COMPANY_INFO.industries.map((ind, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 font-bold text-brand-accent">
              <Cpu className="w-4.5 h-4.5 text-brand-primary shrink-0" />
              <span>{ind}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
