import React from 'react';
import { Hero } from '../components/Hero';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { SERVICES, BRANDS } from '../data/services';
import { COMPANY_INFO } from '../data/company';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { motion } from 'motion/react';
import {
  Cpu,
  Wrench,
  ChevronRight,
  ArrowRight,
  Phone,
  Zap,
  Check,
  Layers,
  ShieldAlert,
  Clock,
  Settings,
  Truck,
  HeartHandshake,
  ArrowUpRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (catId: string) => void;
  onSearchSubmit: (query: string) => void;
}

const scrollRevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectCategory,
  onSearchSubmit
}) => {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 8);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-hidden selection:bg-brand-primary selection:text-white">
      
      {/* 1. Hero Banner */}
      <Hero onNavigate={onNavigate} onSearchSubmit={onSearchSubmit} />

      {/* 2. The Problem Section */}
      <motion.section 
        {...scrollRevealProps}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
            Operational Excellence
          </span>
          <h2 className="text-3xl md:text-5.5xl font-black text-slate-900 tracking-tight mt-4 leading-none">
            Is Machinery Downtime Limiting Your Output?
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            In global textile manufacturing, even a brief electronics failure halts complex production lines. This results in costly idle operations, logistics delays, and damaged client commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card 1 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-brand-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary mb-8 shadow-md">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3.5 tracking-tight">Critical Downtime Losses</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
              Every idle hour for loom arrays represents direct revenue loss. Waiting for overseas manufacturers to ship replacement modules takes weeks, interrupting global supply chain workflows.
            </p>
            <div className="absolute top-6 right-8 text-brand-primary/20 font-extrabold text-6xl select-none group-hover:text-brand-primary/45 transition-colors">01</div>
          </div>

          {/* Problem Card 2 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-brand-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary mb-8 shadow-md">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3.5 tracking-tight">Inflated OEM Sourcing Costs</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
              Procuring brand-new controller units or servo drives directly from original OEMs requires significant capital. Many reliable systems are prematurely categorized as obsolete to push machine upgrades.
            </p>
            <div className="absolute top-6 right-8 text-brand-primary/20 font-extrabold text-6xl select-none group-hover:text-brand-primary/45 transition-colors">02</div>
          </div>
        </div>
      </motion.section>

      {/* 3. The Solution Section */}
      <motion.section 
        {...scrollRevealProps}
        className="bg-white border-y border-slate-200/60 py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Solution graphics/highlight */}
            <div className="lg:col-span-5 relative">
              <div className="bg-brand-accent text-white rounded-2xl p-8 border border-brand-accent-hover shadow-2xl space-y-7 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-md">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Advanced Technical Hub</h4>
                    <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mt-0.5">High-Precision Benchwork</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Component-Level Diagnosis</p>
                      <p className="text-[11px] text-emerald-100/60 mt-0.5">We replace faulty IC chips, IGBT micro-modules, and EEPROMs to restore original integrity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Loom Load Simulation Benches</p>
                      <p className="text-[11px] text-emerald-100/60 mt-0.5">Repaired boards run through simulated multi-hour cycles before quality control sign-off.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">180-Day Guarantee</p>
                      <p className="text-[11px] text-emerald-100/60 mt-0.5">Robust engineering allows us to support all repair items with comprehensive warranties.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Back decorative shapes */}
              <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-brand-accent/5 rounded-2xl pointer-events-none border border-brand-accent/10" />
            </div>

            {/* Right Column: Copy text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
                Corporate Capabilities
              </span>
              <h2 className="text-3xl md:text-4.5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Global Standards of Industrial Engineering & Repair
              </h2>
              <p className="text-slate-550 text-xs md:text-sm leading-relaxed font-normal">
                Founded in Tiruppur—the industrial textile center—we bridge the gap between high-end international electronics specifications and practical, responsive regional support.
              </p>
              <p className="text-slate-550 text-xs md:text-sm leading-relaxed font-normal">
                Our advanced diagnostic lab provides component-level repair for microcontrollers, variable frequency drives, and HMI display monitors. We minimize production delays by hosting a large, ready-to-ship catalog of OEM spares.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Repair Services</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-white border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Request Diagnostic Call
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </motion.section>

      {/* 4. Specialized Repair Services (Interactive Grid) */}
      <motion.section 
        {...scrollRevealProps}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
              Lab Specializations
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-4">
              Our Core Technical Expertise
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-xl">
              We provide component-level diagnostics and restoration for complex electronics, industrial microprocessors, and high-load drives.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary-hover transition-colors shrink-0 uppercase tracking-widest"
          >
            <span>View Capabilities</span>
            <ArrowRight className="w-4 h-4 text-brand-primary" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)' }}
              className="bg-white rounded-2xl border border-slate-200 p-8 transition-all flex flex-col justify-between space-y-8"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-brand-accent text-brand-primary flex items-center justify-center shadow-md">
                  {index === 0 && <Cpu className="w-5 h-5" />}
                  {index === 1 && <Wrench className="w-5 h-5" />}
                  {index === 2 && <Settings className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-650 font-medium">
                      <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Service Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. How It Works Section */}
      <motion.section 
        {...scrollRevealProps}
        className="bg-brand-accent text-white border-y border-brand-accent-hover py-20 md:py-28 relative"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100/80 border-l-2 border-brand-primary pl-3">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
              SOP-Driven Dispatch & Diagnostics
            </h2>
            <p className="text-emerald-100/75 text-xs md:text-sm mt-3 leading-relaxed font-normal">
              We execute a clear, structured flow from technical receipt to bench simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Step 1 */}
            <div className="space-y-4 text-center md:text-left relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary-light font-black flex items-center justify-center text-lg shadow-md mx-auto md:mx-0 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Enquiry & Diagnostics Entry</h3>
              <p className="text-xs text-emerald-100/85 leading-relaxed max-w-xs mx-auto md:mx-0 font-normal">
                Search our parts catalogue or contact our engineering desk. Provide details on board anomalies to receive an initial repair analysis.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 text-center md:text-left relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary-light font-black flex items-center justify-center text-lg shadow-md mx-auto md:mx-0 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Bench Testing & Restoration</h3>
              <p className="text-xs text-emerald-100/85 leading-relaxed max-w-xs mx-auto md:mx-0 font-normal">
                Engineers perform component-level replacement and test components under high load simulations to ensure complete operational recovery.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 text-center md:text-left relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary-light font-black flex items-center justify-center text-lg shadow-md mx-auto md:mx-0 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Secure Shipping & Warranty</h3>
              <p className="text-xs text-emerald-100/85 leading-relaxed max-w-xs mx-auto md:mx-0 font-normal">
                Restored items are packed securely and dispatched via express logistics, backed by a comprehensive 180-day guarantee.
              </p>
            </div>

            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 border-t border-dashed border-brand-accent-hover -z-0" />
          </div>
        </div>
      </motion.section>

      {/* 6. Product Categories Section */}
      <motion.section 
        {...scrollRevealProps}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
              Stock Portfolio
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-4">
              Explore Spare Categories
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-xl">
              Browse microprocessors, sensors, encoders, and terminal displays compatible with global loom models.
            </p>
          </div>
          <button
            onClick={() => onNavigate('categories')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary-hover transition-colors shrink-0 uppercase tracking-widest"
          >
            <span>All Categories</span>
            <ArrowRight className="w-4 h-4 text-brand-primary" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.slice(0, 8).map(cat => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                onNavigate('products');
              }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full hover:border-brand-primary/50"
            >
              <div className="aspect-16/10 bg-slate-100 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 via-brand-accent/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-sm font-bold leading-tight group-hover:text-brand-primary transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-550 line-clamp-2 leading-relaxed font-normal">
                  {cat.description}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                  <span>Browse Stock</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 7. Trust Metrics & Stats Section */}
      <motion.section 
        {...scrollRevealProps}
        className="bg-brand-accent text-white py-20 md:py-28 border-y border-brand-accent-hover relative"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100/50 border-l-2 border-brand-primary pl-3">
              Performance Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
              Trusted by 1,200+ Mills Internationally
            </h2>
            <p className="text-emerald-100/40 text-xs md:text-sm mt-3 leading-relaxed font-normal">
              Combining electronic engineering precision with deep loom domain expertise.
            </p>
          </div>

          {/* Large Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
            <div className="space-y-1">
              <p className="text-4xl md:text-5.5xl font-black text-brand-primary font-mono tracking-tight">{COMPANY_INFO.repairedCardsCount}</p>
              <p className="text-[10px] text-emerald-100/50 font-bold uppercase tracking-wider mt-1">Cards Restored</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5.5xl font-black text-brand-primary font-mono tracking-tight">{COMPANY_INFO.activeClientsCount}</p>
              <p className="text-[10px] text-emerald-100/50 font-bold uppercase tracking-wider mt-1">Mills Supported</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5.5xl font-black text-brand-primary font-mono tracking-tight">{COMPANY_INFO.experienceYears}</p>
              <p className="text-[10px] text-emerald-100/50 font-bold uppercase tracking-wider mt-1">Years Industry Standing</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5.5xl font-black text-brand-primary font-mono tracking-tight">{COMPANY_INFO.repairSuccessRate}</p>
              <p className="text-[10px] text-emerald-100/50 font-bold uppercase tracking-wider mt-1">QC success Rate</p>
            </div>
          </div>

          {/* Strengths Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-accent-hover border border-brand-accent-hover/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Express Laboratory Service</h3>
              <p className="text-xs text-emerald-100/60 leading-relaxed font-normal">
                Emergency 24–48 hour diagnostics response to ensure minimal loss during loom CPU or drive breakdown.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-accent-hover border border-brand-accent-hover/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Simulated Bench Testing</h3>
              <p className="text-xs text-emerald-100/60 leading-relaxed font-normal">
                Restored items undergo load cycle testing on model machinery simulation boards, backed by a full warranty.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-accent-hover border border-brand-accent-hover/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Ready Inventory Reserves</h3>
              <p className="text-xs text-emerald-100/60 leading-relaxed font-normal">
                Immediate dispatch on thousands of verified original processors, VFD drives, encoders, and terminal displays.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. Featured Products Showcase Section */}
      <motion.section 
        {...scrollRevealProps}
        className="bg-white py-20 md:py-28 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
                Selected Stock
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-4">
                Featured Spares Ready for Dispatch
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-2">
                Genuine components, display terminals, and inverter drives.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary-hover transition-colors shrink-0 uppercase tracking-widest"
            >
              <span>View All Spares ({PRODUCTS.length} items)</span>
              <ArrowRight className="w-4 h-4 text-brand-primary" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(prod => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewDetails={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 9. Supported Brands Logo Strip */}
      <motion.section 
        {...scrollRevealProps}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center"
      >
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
          Compatible Machinery & Automation Brands
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-10 tracking-tight">
          Supported OEM Instrumentation Components
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs hover:border-brand-primary/50 transition-all duration-305"
            >
              <p className="font-bold text-sm md:text-base text-slate-900 tracking-tight font-mono">
                {brand.logoText}
              </p>
              <p className="text-[9px] font-bold uppercase text-brand-primary tracking-wider mt-1.5 truncate">{brand.category}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 10. Call to Action Quote Banner */}
      <motion.section 
        {...scrollRevealProps}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28"
      >
        <div className="bg-brand-accent rounded-2xl p-8 md:p-14 text-white shadow-2xl border border-brand-accent-hover flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle light spots inside CTA */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary font-bold text-xs uppercase tracking-wider">
              Technical Advisory Helpline
            </span>
            <h2 className="text-2xl md:text-4.5xl font-extrabold tracking-tight text-white leading-tight">
              Get Your Looms & Drives Running Today
            </h2>
            <p className="text-xs md:text-sm text-emerald-100/60 leading-relaxed font-normal">
              Outline your electronic card failure symptoms or spare part model numbers. Our engineering team provides stock checks, diagnostic pricing, and immediate dispatch options.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full lg:w-auto relative z-10">
            <button
              onClick={() => onNavigate('products')}
              className="px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider transition-all text-center shrink-0"
            >
              Request Spares Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="px-6 py-3.5 rounded-xl bg-brand-accent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2 font-mono shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
