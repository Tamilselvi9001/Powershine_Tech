import React from 'react';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';
import { Wrench, Check, Cpu, Settings, Phone, ChevronRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 font-sans selection:bg-brand-primary selection:text-white">

      {/* Page Header */}
      <div className="bg-brand-accent text-white rounded-2xl p-10 md:p-14 shadow-2xl border border-brand-accent-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary font-bold text-[10px] uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Tiruppur Engineering Laboratory</span>
          </div>
          <h1 className="text-3.5xl md:text-5.5xl font-extrabold text-white tracking-tight leading-none">
            Industrial Electronics Services
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl font-normal">
            Component-level diagnostics, full-load bench simulation testing, and retrofitting for textile machinery, rapier looms, and variable frequency drives.
          </p>
        </div>
      </div>

      {/* Repair Process Workflow Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-xs space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
            SOP Protocol
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-3">Our 5-Step Diagnostics & Restoration Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4.5 pt-2 text-xs">
          {[
            { step: '01', title: 'Fault Analysis', desc: 'Oscilloscope logic diagnostics and microscopic path tracing.' },
            { step: '02', title: 'De-contamination', desc: 'Ultrasonic chemical bath washing & lint clearance.' },
            { step: '03', title: 'Micro-Repairs', desc: 'Precision IC controller, EEPROM, and IGBT module swap.' },
            { step: '04', title: 'Simulated Load Test', desc: 'Continuous multi-hour load run on dedicated test benches.' },
            { step: '05', title: 'Express Dispatch', desc: 'Anti-static protective packaging and express shipping.' }
          ].map((st, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-extrabold font-mono text-brand-primary bg-brand-primary-light border border-brand-primary/20 px-2 py-0.5 rounded">
                  SOP {st.step}
                </span>
                <h3 className="text-xs font-bold text-slate-900 mt-3">{st.title}</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
            Our Offerings
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-3">Specialized Electronics Laboratory Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all p-8 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent text-brand-primary flex items-center justify-center shadow-md">
                    {index % 3 === 0 && <Cpu className="w-5 h-5" />}
                    {index % 3 === 1 && <Wrench className="w-5 h-5" />}
                    {index % 3 === 2 && <Settings className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mt-0.5">Bench Verified</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {service.fullDesc}
                </p>

                <div className="space-y-3.5 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider text-[10px]">Technical Scope:</p>
                  <ul className="grid grid-cols-1 gap-2 text-xs text-slate-600 font-medium">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  className="text-xs font-bold text-brand-primary hover:text-brand-primary-hover flex items-center gap-2 font-mono"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>Call {COMPANY_INFO.phonePrimary}</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Request Quote</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
