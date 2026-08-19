import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.product.id === product.id);

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:border-brand-primary/50">
      
      {/* Product Image Container */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-transparent transition-colors" />
        
        {/* Brand Tag Badge */}
        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-brand-accent/95 text-white font-bold text-[11px] tracking-wide border border-brand-accent-hover/30">
          {product.brand}
        </div>

        {/* Model Tag */}
        {product.model && (
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-brand-primary text-white font-mono font-bold text-[10px] tracking-tight shadow-xs">
            {product.model}
          </div>
        )}

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-brand-accent/40 backdrop-blur-2xs transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="px-3.5 py-1.5 rounded-lg bg-white text-brand-accent font-bold text-xs shadow-md hover:bg-brand-primary-light hover:text-brand-primary flex items-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-brand-primary" />
            <span>View Technical Details</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary bg-brand-primary-light px-2 py-0.5 rounded border border-brand-primary/20">
              {product.category.replace(/-/g, ' ')}
            </span>
            {product.inStock && (
              <span className="text-[10px] font-semibold text-brand-primary bg-brand-primary-light px-1.5 py-0.5 rounded">
                Ready to Ship
              </span>
            )}
          </div>

          <h3
            onClick={() => onViewDetails(product)}
            className="text-sm font-bold text-slate-900 line-clamp-2 hover:text-brand-primary cursor-pointer transition-colors leading-snug"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
            {product.shortDesc}
          </p>
        </div>

        {/* Specifications Preview Pill List */}
        {product.specifications && (
          <div className="pt-3 border-t border-slate-100 space-y-1.5">
            {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center text-[11px] font-medium">
                <span className="text-slate-500 truncate max-w-[120px]">{key}:</span>
                <span className="font-bold text-slate-800 truncate max-w-[140px] text-right">{val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions Bar */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 py-2.5 px-2.5 rounded-lg border border-slate-200 hover:border-brand-primary text-slate-700 hover:text-brand-primary font-bold text-xs text-center transition-colors bg-slate-50 hover:bg-brand-primary-light"
          >
            Details
          </button>

          <button
            onClick={() => addToCart(product, 1)}
            className={`flex-1 py-2.5 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs ${
              isInCart
                ? 'bg-brand-accent text-brand-primary hover:bg-brand-accent-hover'
                : 'bg-brand-primary hover:bg-brand-primary-hover text-white'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-brand-primary" />
                <span>In Cart</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Enquiry</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
