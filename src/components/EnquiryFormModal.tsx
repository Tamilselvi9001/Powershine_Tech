import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { COMPANY_INFO } from '../data/company';
import {
  X,
  CheckCircle2,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  Loader2,
  Send,
  MessageSquare
} from 'lucide-react';

interface EnquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryFormModal: React.FC<EnquiryFormModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, clearCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [requirementNote, setRequirementNote] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) {
      setErrorMessage('Please provide your Name and Phone Number.');
      return;
    }

    if (cartItems.length === 0) {
      setErrorMessage('Your Enquiry Cart is empty. Please select at least one product.');
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    const payload = {
      customerName,
      companyName,
      phone,
      email,
      city,
      requirementNote,
      items: cartItems.map(item => ({
        productId: item.product.id,
        name: item.product.name,
        model: item.product.model,
        brand: item.product.brand,
        quantity: item.quantity
      }))
    };

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedEnquiryId(data.enquiryId || 'ENQ-2026-SUCCESS');
        clearCart();
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again or call us.');
      }
    } catch (err) {
      setErrorMessage(`Network error submitting request. You can also call us directly at ${COMPANY_INFO.phonePrimary}.`);
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmittedEnquiryId(null);
    setCustomerName('');
    setCompanyName('');
    setPhone('');
    setEmail('');
    setCity('');
    setRequirementNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-accent/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-auto">
        
        {/* Header */}
        <div className="p-4 bg-brand-accent text-white flex items-center justify-between border-b border-brand-accent-hover">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-primary rounded-lg text-white">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Submit Product Enquiry</h2>
              <p className="text-xs text-emerald-100/50">Powershine Tech Official Quote Request</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-emerald-100/50 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedEnquiryId ? (
          /* Confirmation Success View */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-brand-primary-light text-brand-primary border border-brand-primary/20 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-brand-primary-light border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold">
                Reference ID: {submittedEnquiryId}
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-3">
                Enquiry Submitted Successfully!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong className="text-slate-900">{customerName}</strong>. Your quotation request has been sent to our sales & technical support team in Tiruppur.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1">
              <p className="font-bold text-slate-900">What happens next?</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600 font-normal leading-relaxed">
                <li>Our technical engineer will review stock & technical availability.</li>
                <li>You will receive a formal quotation via WhatsApp & Email within 2–4 hours.</li>
                <li>For urgent breakdown assistance, call hotline <strong className="text-brand-primary font-bold">{COMPANY_INFO.phonePrimary}</strong>.</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Powershine Tech, I submitted Enquiry ID: ${submittedEnquiryId}. Please provide quick quote.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Track on WhatsApp</span>
              </a>

              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 rounded-xl bg-brand-accent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold text-xs transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-brand-accent text-brand-primary border border-brand-primary/40 font-bold text-xs">
                {errorMessage}
              </div>
            )}

            {/* Selected Items Summary Pill Box */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">Enquiry Items Summary ({cartItems.length}):</span>
                <span className="text-brand-primary font-bold">Ready to dispatch</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {cartItems.map(item => (
                  <span
                    key={item.product.id}
                    className="px-2.5 py-1 rounded bg-white border border-slate-200 text-[11px] font-bold text-slate-700 flex items-center gap-1"
                  >
                    <span className="font-extrabold text-brand-primary">{item.brand}</span>
                    <span className="truncate max-w-[120px]">{item.product.name}</span>
                    <span className="text-slate-500 font-bold">x{item.quantity}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Patel"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                  />
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Company / Mill Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Shree Krishna Weaving Mills"
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                  />
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile / Phone Number <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="+91 98250 00000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                  />
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="e.g. sales@yourmill.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                  />
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                City / Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Surat / Ahmedabad / Bhiwandi / Coimbatore"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                />
                <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Specific Requirement / Machine Breakdown Details
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  placeholder="Mention machine type (Tsudakoma, Toyota, Picanol), fault codes, or urgency..."
                  value={requirementNote}
                  onChange={e => setRequirementNote(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                />
                <FileText className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-brand-primary-light hover:text-brand-primary text-xs font-bold transition-all"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Submitting Quote Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit Official Quote Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
