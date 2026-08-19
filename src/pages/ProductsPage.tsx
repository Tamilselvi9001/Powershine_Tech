import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { Search, Layers, Cpu, X } from 'lucide-react';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (catId: string | null) => void;
  initialSearchQuery?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
  initialSearchQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'brand'>('featured');

  const uniqueBrands = useMemo(() => {
    const brands = PRODUCTS.map(p => p.brand);
    return Array.from(new Set(brands)).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (selectedCategoryFilter && selectedCategoryFilter !== 'ALL') {
        const catObj = CATEGORIES.find(c => c.id === selectedCategoryFilter);
        if (catObj && product.category !== catObj.id && product.category !== catObj.slug) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrand !== 'ALL' && product.brand !== selectedBrand) {
        return false;
      }

      // Keyword search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesModel = product.model ? product.model.toLowerCase().includes(q) : false;
        const matchesDesc = product.shortDesc.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);

        if (!matchesName && !matchesBrand && !matchesModel && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'brand') return a.brand.localeCompare(b.brand);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategoryFilter, selectedBrand, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12 font-sans selection:bg-brand-primary selection:text-white">
      
      {/* Header Banner */}
      <div className="bg-brand-accent text-white rounded-2xl p-10 md:p-14 shadow-2xl border border-brand-accent-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-hover border border-brand-accent-hover/40 text-brand-primary font-bold text-[10px] uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise Inventory Catalogue</span>
          </div>
          <h1 className="text-3.5xl md:text-5.5xl font-extrabold text-white tracking-tight leading-none">
            Instrumentation & Spare Parts
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl font-normal">
            Browse our verified inventory compatible with premium machinery brands. Add items to your Enquiry Cart for rapid diagnostics and quote turnaround.
          </p>
        </div>
      </div>

      {/* Search & Filter Controls Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Keyword Search Input */}
          <div className="md:col-span-5 relative">
            <input
              type="text"
              placeholder="Search by model or board type (e.g. ZAX9100, Yaskawa)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <div className="md:col-span-4 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 shrink-0">Brand:</span>
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              className="w-full py-3 px-3.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary font-semibold"
            >
              <option value="ALL">All OEM Brands ({uniqueBrands.length})</option>
              {uniqueBrands.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="md:col-span-3 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 shrink-0">Sort:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full py-3 px-3.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary font-semibold"
            >
              <option value="featured">Featured First</option>
              <option value="name">Product Name (A-Z)</option>
              <option value="brand">Brand Name</option>
            </select>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1.5 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 shrink-0 mr-2">
            Sector:
          </span>
          <button
            onClick={() => setSelectedCategoryFilter('ALL')}
            className={`px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all border ${
              !selectedCategoryFilter || selectedCategoryFilter === 'ALL'
                ? 'bg-brand-accent text-white border-brand-accent-hover/40 shadow-md'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200/60'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>

          {CATEGORIES.map(cat => {
            const isSelected = selectedCategoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(isSelected ? 'ALL' : cat.id)}
                className={`px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all border ${
                  isSelected
                    ? 'bg-brand-primary text-white border-brand-primary/20 shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200/60'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Tags Bar */}
      {((selectedCategoryFilter && selectedCategoryFilter !== 'ALL') || selectedBrand !== 'ALL' || searchQuery) ? (
        <div className="flex items-center gap-2 flex-wrap text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Active Filters:</span>
          {selectedCategoryFilter && selectedCategoryFilter !== 'ALL' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-primary-light text-brand-primary font-bold border border-brand-primary/20">
              Category: {CATEGORIES.find(c => c.id === selectedCategoryFilter)?.name || selectedCategoryFilter}
              <X className="w-3.5 h-3.5 cursor-pointer hover:text-brand-accent" onClick={() => setSelectedCategoryFilter('ALL')} />
            </span>
          )}
          {selectedBrand !== 'ALL' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-accent text-white font-bold">
              Brand: {selectedBrand}
              <X className="w-3.5 h-3.5 cursor-pointer hover:text-brand-primary" onClick={() => setSelectedBrand('ALL')} />
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-bold border border-slate-200">
              Search: "{searchQuery}"
              <X className="w-3.5 h-3.5 cursor-pointer hover:text-slate-950" onClick={() => setSearchQuery('')} />
            </span>
          )}
          <button
            onClick={() => {
              setSelectedCategoryFilter('ALL');
              setSelectedBrand('ALL');
              setSearchQuery('');
            }}
            className="text-brand-primary hover:text-brand-primary-hover underline font-bold text-xs ml-2 uppercase tracking-wider"
          >
            Clear Filters
          </button>
        </div>
      ) : null}

      {/* Product Results Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-16 text-center space-y-4 shadow-xs">
          <Layers className="w-12 h-12 text-slate-350 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">No components match selected criteria</h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
            Adjust search keywords or select a different category filter. Alternatively, contact our engineering desk for specific custom card requests.
          </p>
          <button
            onClick={() => {
              setSelectedCategoryFilter('ALL');
              setSelectedBrand('ALL');
              setSearchQuery('');
            }}
            className="px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider"
          >
            Reset Catalog Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onViewDetails={onSelectProduct}
            />
          ))}
        </div>
      )}

    </div>
  );
};
