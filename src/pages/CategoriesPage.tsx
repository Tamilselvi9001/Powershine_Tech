import React from 'react';
import { CATEGORIES } from '../data/categories';
import { BRANDS } from '../data/services';
import { PRODUCTS } from '../data/products';
import { Layers, ChevronRight, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CategoriesPageProps {
  onSelectCategory: (catId: string) => void;
  onNavigate: (tab: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onSelectCategory,
  onNavigate
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 font-sans selection:bg-brand-primary selection:text-white">
      
      {/* Header Banner */}
      <div className="bg-brand-accent text-white rounded-2xl p-10 md:p-14 shadow-2xl border border-brand-accent-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary font-bold text-[10px] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Electronics Taxonomy</span>
          </div>
          <h1 className="text-3.5xl md:text-5.5xl font-extrabold text-white tracking-tight leading-none">
            Categories & OEM Brands
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl font-normal">
            Explore our specialized categories for Tsudakoma looms, Toyota airjet looms, Picanol rapier looms, Staubli jacquards, and industrial automation drives.
          </p>
        </div>
      </div>

      {/* Main Categories Grid */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/60 pb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
              Inventory Portfolio
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-3">
              Hardware Component Divisions
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary-hover transition-colors shrink-0 uppercase tracking-widest"
          >
            <span>View All Stock</span>
            <ArrowRight className="w-4 h-4 text-brand-primary" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map(cat => {
            const productCount = PRODUCTS.filter(
              p => p.category === cat.id || p.category === cat.slug
            ).length;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between hover:border-brand-primary/50"
              >
                <div>
                  <div className="aspect-16/9 bg-slate-100 overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/80 via-brand-accent/20 to-transparent" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-brand-primary text-white font-extrabold text-[10px] shadow-sm font-mono tracking-wider">
                      {productCount > 0 ? `${productCount} Items` : 'In Stock'}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-base font-bold leading-tight group-hover:text-brand-primary transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {cat.description}
                    </p>

                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                          Instrumentation Scope:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {cat.subcategories.map((sub, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-250">
                  <span>Explore Division</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* OEM Machinery Brands Showcase */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-8 md:p-10 space-y-8 shadow-xs">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
            OEM Compatibility
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-3">
            Supported Machinery & Automation Brands
          </h2>
          <p className="text-xs text-slate-600 mt-2 font-normal">
            Specialized component repairs and spare solutions for leading Japanese, European, and Taiwanese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 hover:bg-brand-primary-light/40 hover:border-brand-primary/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-mono font-black text-slate-900 text-base">{brand.logoText}</p>
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                </div>
                <p className="text-[10px] uppercase font-bold text-brand-primary tracking-widest mt-1">{brand.category}</p>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
