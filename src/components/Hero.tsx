import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Cpu,
  ShieldCheck,
  Search,
  Phone,
  ArrowRight,
  Zap,
  Wrench,
  ChevronRight,
  CheckCircle2,
  Settings,
  Activity
} from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
  onSearchSubmit: (query: string) => void;
}

// Interactive 3D Processor Component
const Interactive3DProcessor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse movement to rotation degree limits (-30 to 30 deg)
  const rotateX = useSpring(useTransform(y, [-150, 150], [30, -30]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-30, 30]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div 
      className="flex items-center justify-center w-full min-h-[300px] md:min-h-[400px] relative select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow Backdrop */}
      <div className="absolute w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl" />
      <div className="absolute w-64 h-64 bg-brand-accent-light/10 rounded-full blur-3xl translate-x-12 translate-y-12" />

      {/* 3D Perspective Wrapper */}
      <div className="perspective-1000 w-80 h-80 flex items-center justify-center">
        <motion.div
          animate={isHovered ? {} : { rotateY: [0, 360] }}
          transition={isHovered ? {} : { repeat: Infinity, duration: 25, ease: "linear" }}
          style={{
            rotateX: isHovered ? rotateX : 15,
            rotateY: isHovered ? rotateY : undefined,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-64 h-64 rounded-3xl cursor-grab active:cursor-grabbing transition-shadow duration-300"
        >
          {/* Layer 1: Substrate Base Board (Dark Emerald Fiberglass) */}
          <div 
            style={{ transform: 'translateZ(0px)' }}
            className="absolute inset-0 bg-brand-accent/95 rounded-3xl border border-brand-primary/45 shadow-2xl flex items-center justify-center overflow-hidden"
          >
            {/* PCB Trace Pattern Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 100">
              <path d="M10,10 L30,10 L35,15 L65,15 L70,10 L90,10" fill="none" stroke="#059669" strokeWidth="0.5" />
              <path d="M10,50 L25,50 L35,40 L65,40 L75,50 L90,50" fill="none" stroke="#059669" strokeWidth="0.5" />
              <path d="M10,90 L30,90 L35,85 L65,85 L70,90 L90,90" fill="none" stroke="#059669" strokeWidth="0.5" />
              <path d="M30,10 L30,90" fill="none" stroke="#059669" strokeWidth="0.3" />
              <path d="M70,10 L70,90" fill="none" stroke="#059669" strokeWidth="0.3" />
              {/* Solder Points in green design palette */}
              <circle cx="30" cy="10" r="1" fill="#34d399" />
              <circle cx="70" cy="10" r="1" fill="#34d399" />
              <circle cx="35" cy="15" r="1" fill="#34d399" />
              <circle cx="65" cy="15" r="1" fill="#34d399" />
              <circle cx="30" cy="90" r="1" fill="#34d399" />
              <circle cx="70" cy="90" r="1" fill="#34d399" />
            </svg>

            {/* Glowing Solder Runs */}
            <div className="absolute inset-x-8 top-12 bottom-12 border border-brand-primary/20 rounded-xl" />
          </div>

          {/* Layer 2: Elevated Circuit Tracks */}
          <div 
            style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
            className="absolute inset-4 rounded-2xl border border-brand-primary/20 pointer-events-none"
          >
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-primary/40" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-primary/40" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-primary/40" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-primary/40" />
          </div>

          {/* Layer 3: Central Processor Chip */}
          <div 
            style={{ transform: 'translateZ(24px)', transformStyle: 'preserve-3d' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-brand-accent-hover to-brand-accent rounded-2xl border border-brand-primary/30 shadow-xl flex flex-col items-center justify-center p-3 text-center"
          >
            {/* Metallic CPU cap */}
            <div className="absolute inset-1 rounded-xl bg-brand-accent/90 border border-brand-accent-hover/50 flex flex-col items-center justify-center">
              <Cpu className="w-8 h-8 text-brand-primary animate-pulse mb-1" />
              <span className="text-[10px] font-extrabold text-white font-mono tracking-wider">POWERSHINE</span>
              <span className="text-[7px] text-brand-primary font-mono tracking-widest uppercase">AUTO-CORE v2.5</span>
            </div>
          </div>

          {/* Layer 4: Upper Glass Shield & Active Floating Rings */}
          <div 
            style={{ transform: 'translateZ(45px)' }}
            className="absolute inset-6 rounded-2xl bg-white/5 backdrop-blur-2xs border border-white/20 shadow-lg flex items-center justify-center pointer-events-none"
          >
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-transparent to-brand-primary/5" />
              {/* Mini activity pulse graph in theme colors */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1 opacity-85">
                <Activity className="w-3.5 h-3.5 text-brand-primary" />
                <span className="text-[8px] text-emerald-100 font-mono font-bold">MONITOR ACTIVE</span>
              </div>
              <div className="absolute top-3 right-4 flex items-center gap-1 opacity-85">
                <Settings className="w-3.5 h-3.5 text-brand-primary animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-[8px] text-emerald-100 font-mono font-bold">DIAGNOSTIC RUN</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSearchSubmit }) => {
  const [heroSearch, setHeroSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      onSearchSubmit(heroSearch.trim());
    }
  };

  return (
    <div className="relative bg-brand-accent text-white overflow-hidden border-b border-brand-accent-hover min-h-[580px] flex items-center font-sans">
      
      {/* High-tech tech dotted grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-brand-accent/40 to-brand-accent pointer-events-none" />
      
      {/* Background Accent Gradients */}
      <div className="absolute top-12 left-1/3 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTA Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            
            {/* Top Quality Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 text-emerald-100/90 text-[11px] font-bold tracking-wider uppercase shadow-2xs backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span>Global Enterprise Repairs & Automation Spares</span>
            </div>

            {/* Headline */}
            <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              Minimizing Machinery Downtime With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-350">
                Precision Electronics Lab
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-emerald-100/85 text-sm md:text-base leading-relaxed max-w-xl font-normal">
              Enterprise engineering solutions for textile machinery PCB repairs, drive maintenance, and genuine spares. Avoid mill breakdowns with our 24–48 hour rapid turnaround.
            </p>

            {/* Quick Hero Search Input */}
            <form onSubmit={handleSearch} className="max-w-xl relative">
              <div className="flex items-center bg-brand-accent-hover border border-brand-accent-hover/40 focus-within:border-brand-primary rounded-xl overflow-hidden p-1.5 shadow-xl focus-within:ring-2 focus-within:ring-brand-primary/20 transition-all">
                <Search className="w-4 h-4 text-emerald-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search model or board type (e.g. ZAX9100, Yaskawa, VFD, HMI)..."
                  value={heroSearch}
                  onChange={e => setHeroSearch(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-emerald-100/55 text-xs md:text-sm px-3 py-1.5 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs rounded-lg transition-all shrink-0 flex items-center gap-1"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs md:text-sm shadow-lg hover:shadow-brand-primary/20 transition-all flex items-center gap-2"
              >
                <span>Request Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-transparent border border-brand-primary text-white hover:bg-brand-primary font-bold text-xs md:text-sm transition-all flex items-center gap-2"
              >
                <Wrench className="w-4 h-4 text-brand-primary group-hover:text-white" />
                <span>Send Board for Repair</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="px-4 py-3.5 rounded-xl bg-brand-accent-hover border border-brand-accent-hover/30 text-emerald-100 hover:bg-brand-accent hover:border-brand-primary transition-all flex items-center gap-2 font-mono text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>Hotline: {COMPANY_INFO.phonePrimary}</span>
              </a>
            </div>

            {/* Quick Check Highlights */}
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-emerald-100/75 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                <span>24-48 Hour Lab Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                <span>Full Simulation Load Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                <span>180-Day Comprehensive Warranty</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <Interactive3DProcessor />
          </motion.div>

        </div>
      </div>
    </div>
  );
};
