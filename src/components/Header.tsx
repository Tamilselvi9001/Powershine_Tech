import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import {
  Phone,
  Mail,
  Clock,
  Search,
  ShoppingBag,
  Menu,
  X,
  Cpu,
  ShieldCheck,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onSelectProduct }) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchResults = searchQuery.trim().length >= 2
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.model && p.model.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/95 border-b border-slate-200/80 shadow-2xs">
      {/* Top Utility Contact Bar */}
      <div className="bg-brand-accent text-emerald-100/80 text-[11px] py-2.5 px-4 border-b border-brand-accent-hover tracking-wide font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="flex items-center gap-2 hover:text-brand-primary transition-colors duration-200 group"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary group-hover:scale-105 transition-transform" />
              <span className="font-bold text-slate-100 font-mono">{COMPANY_INFO.phonePrimary}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.emailSales}`}
              className="hidden sm:flex items-center gap-2 hover:text-brand-primary transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-600/80" />
              <span>{COMPANY_INFO.emailSales}</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-emerald-200/60">
              <Clock className="w-3.5 h-3.5 text-brand-primary" />
              <span>{COMPANY_INFO.businessHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <div className="hidden md:flex items-center gap-1.5 text-brand-primary font-bold text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
              <span>Tiruppur Quality Certified Works</span>
            </div>
            <button
              onClick={() => handleNavClick('admin')}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-accent-hover hover:bg-brand-accent text-emerald-100 text-[10px] font-bold tracking-wider uppercase transition-colors border border-brand-accent-hover/40"
            >
              <UserCheck className="w-3 h-3 text-brand-primary" />
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group h-10 shrink-0"
          >
            <img 
              src="/logo.png" 
              alt="Powershine Tech Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            />
          </button>

          {/* Search Bar - Desktop */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products by model or brand..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full pl-9 pr-8 py-2.5 text-xs bg-slate-50 hover:bg-slate-100/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all shadow-3xs"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            </div>

            {/* Instant Search Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden divide-y divide-slate-100">
                <div className="px-3.5 py-2 bg-brand-primary-light text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                  Instant Results
                </div>
                {searchResults.map(prod => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      setSearchQuery('');
                      setIsSearchFocused(false);
                    }}
                    className="w-full p-3 flex items-center gap-3.5 text-left hover:bg-brand-primary-light transition-colors duration-150"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-10 h-10 object-cover rounded-lg bg-slate-100 shrink-0 border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{prod.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {prod.brand} {prod.model ? `• ${prod.model}` : ''}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-brand-primary shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions & Enquiry Cart Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-4.5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              aria-label="Open Product Enquiry Cart"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Enquiry Cart</span>
              {totalCount > 0 && (
                <span className="ml-1 px-2 py-0.5 text-[10px] font-black bg-brand-accent text-white rounded-full">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-brand-primary-light hover:text-brand-primary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          </div>
          {searchResults.length > 0 && (
            <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden divide-y divide-slate-100 z-50 relative">
              {searchResults.map(prod => (
                <button
                  key={prod.id}
                  onClick={() => {
                    onSelectProduct(prod);
                    setSearchQuery('');
                  }}
                  className="w-full p-3.5 text-left flex items-center gap-3 text-xs hover:bg-brand-primary-light"
                >
                  <img src={prod.image} className="w-9 h-9 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 truncate">{prod.name}</p>
                    <p className="text-[10px] text-slate-500">{prod.brand}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 mt-5 pt-1 border-t border-slate-100">
          {[
            { id: 'home', label: 'Home' },
            { id: 'products', label: 'Product Catalogue' },
            { id: 'categories', label: 'Categories' },
            { id: 'services', label: 'Repairs & Services' },
            { id: 'brands', label: 'Brands Supported' },
            { id: 'about', label: 'Our Story' },
            { id: 'contact', label: 'Get in Touch' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`py-2 text-[11px] font-bold uppercase tracking-widest border-b-2 transition-all duration-200 ${
                activeTab === item.id || (item.id === 'categories' && activeTab === 'brands')
                  ? 'border-brand-primary text-brand-primary font-extrabold'
                  : 'border-transparent text-slate-600 hover:text-brand-primary hover:border-brand-primary/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-accent text-white border-t border-brand-accent-hover p-5 space-y-4 animate-in slide-in-from-top-3 duration-250">
          <div className="flex flex-col gap-1.5">
            {[
              { id: 'home', label: 'Home' },
              { id: 'products', label: 'Product Catalogue' },
              { id: 'categories', label: 'Product Categories' },
              { id: 'services', label: 'Repair & Services' },
              { id: 'brands', label: 'Supported Brands' },
              { id: 'about', label: 'Our Story' },
              { id: 'contact', label: 'Get in Touch' },
              { id: 'admin', label: 'Admin Portal' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-brand-primary text-white'
                    : 'text-emerald-100/85 hover:bg-brand-accent-hover'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-brand-accent-hover text-[11px] text-emerald-100/75 space-y-2">
              <p className="font-semibold text-emerald-400 uppercase tracking-widest text-[9px]">Direct Hotline:</p>
              <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="block text-white font-bold font-mono text-sm">
                {COMPANY_INFO.phonePrimary}
              </a>
              <p className="text-[10px] text-emerald-100/60">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}, India</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
