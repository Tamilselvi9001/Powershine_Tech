import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { CATEGORIES } from '../data/categories';
import {
  Cpu,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onSelectCategory?: (catId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectCategory }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-accent text-emerald-100/75 border-t border-brand-accent-hover font-sans tracking-wide">
      {/* Top Value Banner */}
      <div className="bg-brand-accent-hover/40 border-b border-brand-accent-hover py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Industrial Electronics Repair Laboratory</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Facing Loom Breakdown or Obsolete PCB Card Issues?
            </h3>
            <p className="text-emerald-100/70 text-xs md:text-sm mt-2 max-w-3xl leading-relaxed font-normal">
              Our Tiruppur electronics laboratory offers 24–48 hour rapid diagnostic testing and micro-component repairs under simulated machinery load conditions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs md:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 font-mono shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Hotline: {COMPANY_INFO.phonePrimary}</span>
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="px-5 py-3 rounded-xl bg-brand-accent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold text-xs md:text-sm transition-all shrink-0"
            >
              Get a Repair Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-3 h-10">
            <img 
              src="/logo.png" 
              alt="Powershine Tech Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <p className="text-xs text-emerald-100/70 leading-relaxed max-w-md font-normal">
            {COMPANY_INFO.aboutShort}
          </p>
          <div className="pt-2 grid grid-cols-2 gap-3 text-xs max-w-sm">
            <div className="p-3.5 rounded-xl bg-brand-accent border border-brand-accent-hover/40">
              <p className="text-brand-primary font-extrabold text-xl font-mono">{COMPANY_INFO.repairedCardsCount}</p>
              <p className="text-[10px] text-emerald-100/60 uppercase tracking-wider font-semibold mt-1">Cards Repaired</p>
            </div>
            <div className="p-3.5 rounded-xl bg-brand-accent border border-brand-accent-hover/40">
              <p className="text-brand-primary font-extrabold text-xl font-mono">{COMPANY_INFO.experienceYears}</p>
              <p className="text-[10px] text-emerald-100/60 uppercase tracking-wider font-semibold mt-1">Years Industry Standing</p>
            </div>
          </div>
        </div>

        {/* Col 3: Navigation */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-brand-primary pl-3">
            Company
          </h4>
          <ul className="space-y-3 text-xs font-semibold">
            {[
              { id: 'home', label: 'Home' },
              { id: 'products', label: 'Spare Parts Stock' },
              { id: 'categories', label: 'Categories' },
              { id: 'services', label: 'Laboratory Services' },
              { id: 'brands', label: 'Supported Brands' },
              { id: 'about', label: 'Our Story' },
              { id: 'contact', label: 'Location & Hotline' }
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 text-emerald-100/75"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400/55 shrink-0" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Top Categories */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-brand-primary pl-3">
            Key Sectors
          </h4>
          <ul className="space-y-3 text-xs font-semibold">
            {CATEGORIES.slice(0, 6).map(cat => (
              <li key={cat.id}>
                <button
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory(cat.id);
                    handleNav('products');
                  }}
                  className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 text-emerald-100/60 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-primary/40 shrink-0" />
                  <span>{cat.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Contact Information */}
        <div className="space-y-4 text-xs font-medium">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-brand-primary pl-3">
            Contact Details
          </h4>
          <div className="space-y-3.5">
            <div className="flex items-start gap-2.5 text-emerald-100/75">
              <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span className="leading-relaxed font-normal">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.area},<br />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, India
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-primary shrink-0" />
              <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="hover:text-white font-bold font-mono text-emerald-100/80">
                {COMPANY_INFO.phonePrimary}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-primary shrink-0" />
              <a href={`mailto:${COMPANY_INFO.emailSales}`} className="hover:text-white text-emerald-100/85">
                {COMPANY_INFO.emailSales}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-emerald-100/60">
              <Clock className="w-4 h-4 text-brand-primary shrink-0" />
              <span className="font-normal">{COMPANY_INFO.businessHours}</span>
            </div>
            <div className="pt-1.5">
              <a
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-brand-accent-hover hover:bg-brand-accent text-[11px] font-bold text-emerald-400 hover:text-white border border-brand-accent-hover/50 transition-colors"
              >
                <span>Get Directions Map</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-brand-accent border-t border-brand-accent-hover py-6 px-4 sm:px-6 lg:px-8 text-xs text-emerald-100/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-normal">© 2026 Powershine Tech. All Rights Reserved. ISO 9001:2015 Registered electronics lab.</p>
          <div className="flex items-center gap-5 font-semibold">
            <span className="text-emerald-100/45">Enterprise Solutions</span>
            <span>•</span>
            <button onClick={() => handleNav('admin')} className="hover:text-brand-primary">
              Secure Admin Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
