import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

interface CartDrawerProps {
  onOpenEnquiryModal: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenEnquiryModal }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, totalCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-600 text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white leading-tight">Product Enquiry Cart</h2>
                <p className="text-xs text-slate-300">
                  {totalCount === 0 ? 'No products selected' : `${totalCount} item(s) ready for quote request`}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4 space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Your Enquiry Cart is empty</h3>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Browse our product catalogue, select the required PLC, drive, HMI, or textile card, and add them here to request a quotation.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  Browse Product Catalogue
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600 pb-2 border-b border-slate-100">
                  <span>Selected Products ({cartItems.length})</span>
                  <button
                    onClick={clearCart}
                    className="text-rose-600 hover:text-rose-700 font-medium hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                {cartItems.map(item => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3 relative group"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 rounded-lg object-cover bg-white border border-slate-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-100/80 px-1.5 py-0.2 rounded">
                          {item.product.brand}
                        </span>
                        {item.product.model && (
                          <span className="text-[10px] font-mono text-slate-600 font-semibold truncate">
                            {item.product.model}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs font-bold text-slate-900 truncate mt-0.5">
                        {item.product.name}
                      </h4>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center border border-slate-300 rounded-md bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-slate-600 hover:bg-slate-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-slate-600 hover:bg-slate-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-500 hover:text-rose-600 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {cartItems.length > 0 && (
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct Factory Quotation</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  Submitting this cart will send a formal quote request to Powershine Tech engineers in Tiruppur.
                </p>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
