import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { useCart } from '../context/CartContext';
import {
  X,
  Plus,
  Minus,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Share2
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectProduct
}) => {
  if (!product) return null;

  const { addToCart, cartItems } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const isInCart = cartItems.some(item => item.product.id === product.id);

  const galleryImages = [
    product.image,
    ...(product.gallery || [])
  ].filter((v, i, a) => a.indexOf(v) === i);

  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 3);

  const whatsappText = encodeURIComponent(
    `Hello Powershine Tech, I would like to inquire about:
Product: ${product.name}
Brand: ${product.brand}
Model: ${product.model || 'N/A'}
Quantity: ${quantity}`
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-accent/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 relative my-auto">
        
        {/* Sticky Header Close */}
        <div className="sticky top-0 right-0 z-20 bg-white/95 backdrop-blur-xs border-b border-slate-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-brand-primary text-white uppercase tracking-wider">
              {product.brand}
            </span>
            {product.model && (
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-brand-primary-light border border-brand-primary/20 text-brand-primary uppercase tracking-wider">
                Model: {product.model}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-brand-primary rounded-lg hover:bg-brand-primary-light transition-colors"
              title="Copy share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Gallery Column */}
          <div className="space-y-4">
            <div className="aspect-4/3 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 relative group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-brand-accent/80 text-white text-[10px] uppercase font-bold tracking-wider">
                Powershine Component
              </div>
            </div>

            {/* Thumbnail Selector */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImage === img ? 'border-brand-primary ring-2 ring-brand-primary/30' : 'border-slate-200 opacity-70'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality & Service Guarantee Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-brand-primary font-bold">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span>Powershine Quality & Warranty Guarantee</span>
              </div>
              <ul className="space-y-1 text-slate-600 pl-6 list-disc font-normal leading-relaxed">
                <li>100% Bench Tested under simulated load prior to dispatch</li>
                <li>OEM verified or certified Japanese/European replacement</li>
                <li>24-48 hours express courier delivery across India</li>
              </ul>
            </div>
          </div>

          {/* Product Specs & Add-to-Enquiry Column */}
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary-light border border-brand-primary/20 px-2.5 py-1 rounded">
                {product.category.replace(/-/g, ' ')}
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-3 leading-tight tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">
                {product.fullDesc}
              </p>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="p-4 rounded-xl bg-brand-primary-light/60 border border-brand-primary/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Required Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate-600 hover:bg-slate-100"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate-600 hover:bg-slate-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  onClick={() => addToCart(product, quantity)}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    isInCart
                      ? 'bg-brand-accent text-brand-primary hover:bg-brand-accent-hover'
                      : 'bg-brand-primary hover:bg-brand-primary-hover text-white'
                  }`}
                >
                  {isInCart ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                      <span>Added to Enquiry Cart</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Enquiry Cart</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-bold text-xs md:text-sm bg-brand-accent hover:bg-brand-accent-hover text-brand-primary border border-brand-primary/20 flex items-center justify-center gap-2 transition-all shrink-0"
                >
                  <MessageSquare className="w-4 h-4 text-brand-primary" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>

            {/* Specifications Table */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-primary" />
                Technical Specifications
              </h3>
              <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <div key={idx} className={`p-2.5 flex justify-between gap-4 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <span className="font-semibold text-slate-600 w-2/5">{key}</span>
                    <span className="font-bold text-slate-800 w-3/5 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications List */}
            {product.applications && product.applications.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-brand-primary" />
                  Industrial Applications
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Footer Section */}
        {relatedProducts.length > 0 && (
          <div className="bg-slate-50 border-t border-slate-200 p-6 rounded-b-2xl">
            <h3 className="text-sm font-bold text-slate-900 mb-4">
              Related Products & Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectProduct(rel);
                    setSelectedImage(rel.image);
                  }}
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-brand-primary/60 cursor-pointer transition-all flex items-center gap-3 group"
                >
                  <img src={rel.image} className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 group-hover:text-brand-primary truncate">
                      {rel.name}
                    </p>
                    <p className="text-[11px] text-slate-600">{rel.brand}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-primary shrink-0 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
