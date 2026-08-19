import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Loader2,
  ArrowUpRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg('Please fill in your Name, Phone Number, and Message.');
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, subject, message })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg('Your message has been sent to Powershine Tech. We will contact you shortly.');
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMsg(data.error || 'Failed to submit contact message.');
      }
    } catch (err) {
      setErrorMsg(`Network error. You can also call us directly at ${COMPANY_INFO.phonePrimary}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 font-sans selection:bg-brand-primary selection:text-white">
      
      {/* Header Banner */}
      <div className="bg-brand-accent text-white rounded-2xl p-10 md:p-14 shadow-2xl border border-brand-accent-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-l-2 border-brand-primary pl-3">
            Tiruppur Engineering Center
          </span>
          <h1 className="text-3.5xl md:text-5.5xl font-extrabold text-white tracking-tight leading-none">
            Contact Powershine Tech
          </h1>
          <p className="text-emerald-100/80 text-xs md:text-sm leading-relaxed max-w-xl font-normal">
            For technical inquiries, industrial card repair estimates, or loom spare part quote verifications, contact our lab engineers directly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info & Map Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-l-3 border-brand-primary pl-3.5">
              Office Details
            </h2>

            <div className="space-y-4 text-xs font-medium text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">{COMPANY_INFO.name}</p>
                  <p className="text-slate-600 mt-1 leading-relaxed font-normal">
                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.area},<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                <Phone className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-0.5">Hotline Support:</p>
                  <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="text-brand-primary font-bold font-mono hover:underline">
                    {COMPANY_INFO.phonePrimary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                <Mail className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-0.5">Email Communications:</p>
                  <a href={`mailto:${COMPANY_INFO.emailSales}`} className="text-slate-700 hover:text-slate-900 hover:underline">
                    {COMPANY_INFO.emailSales}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                <Clock className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-0.5">Operating Hours:</p>
                  <p className="text-slate-600 font-normal">{COMPANY_INFO.businessHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Powershine Tech, I need technical assistance.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Google Maps Preview */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 bg-brand-accent text-white text-xs font-bold flex items-center justify-between gap-1.5 border-b border-brand-accent-hover">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                <span>Laboratory Location Map</span>
              </div>
              <a
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-accent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-[10px] font-bold transition-all uppercase tracking-wider"
              >
                <span>Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <iframe
              src={COMPANY_INFO.address.googleMapsEmbedUrl}
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Powershine Tech Location Map"
            />
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Request Technical Advisory</h2>
          <p className="text-xs text-slate-600 mb-8 font-normal">
            Fill in the parameters below. A qualified electronic diagnostics specialist will follow up with stock verifications and repair price guidelines.
          </p>

          {successMsg ? (
            <div className="p-8 rounded-2xl bg-brand-primary-light border border-brand-primary/20 text-brand-primary text-center space-y-4 shadow-2xs">
              <CheckCircle2 className="w-12 h-12 text-brand-primary mx-auto" />
              <h3 className="text-lg font-bold tracking-tight">Message Logged Successfully</h3>
              <p className="text-xs text-brand-primary leading-relaxed font-normal">{successMsg}</p>
              <button
                onClick={() => setSuccessMsg(null)}
                className="mt-2 px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-brand-accent text-brand-primary border border-brand-primary/40 font-bold shadow-2xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[10px]">
                    Your Name <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full pl-3.5 pr-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[10px]">
                    Phone / Mobile Number <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder={COMPANY_INFO.phonePrimary}
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full pl-3.5 pr-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[10px]">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="e.g. info@yourmill.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full pl-3.5 pr-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[10px]">Company / Mill Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Surat Weaving Pvt Ltd"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      className="w-full pl-3.5 pr-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-600 mb-1.5 uppercase tracking-wider text-[10px]">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Repair quote for Tsudakoma main control PCB"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-600 mb-1.5 uppercase tracking-wider text-[10px]">
                  Breakdown Details / Spare Requirement <span className="text-brand-primary">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="State the machinery model, fault code description, or PCB board part numbers..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Advisory Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
