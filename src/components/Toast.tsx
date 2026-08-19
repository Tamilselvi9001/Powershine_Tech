import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, X, ShoppingBag } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast, setIsCartOpen, totalCount } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 right-4 md:right-6 z-50 max-w-sm w-full bg-slate-900 text-white rounded-xl shadow-2xl border border-emerald-500/30 p-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="p-2 bg-emerald-600/20 text-emerald-400 rounded-lg shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-emerald-400">Enquiry Cart Updated</p>
          <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">{toastMessage}</p>
          <button
            onClick={() => {
              clearToast();
              setIsCartOpen(true);
            }}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            View Enquiry Cart ({totalCount} items)
          </button>
        </div>
        <button
          onClick={clearToast}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
