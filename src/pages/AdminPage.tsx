import React, { useState, useEffect } from 'react';
import { EnquirySubmission } from '../types';
import {
  UserCheck,
  Lock,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Building,
  MapPin,
  RefreshCw,
  LogOut,
  ChevronDown,
  ShieldAlert,
  Loader2
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setToken(data.token);
        fetchEnquiries(data.token);
      } else {
        setErrorMsg(data.error || 'Invalid admin password.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to admin portal authentication server.');
    } finally {
      setLoading(false);
    }
  };

  const fetchEnquiries = async (authToken?: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/enquiries', {
        headers: { Authorization: `Bearer ${authToken || token}` }
      });
      const data = await res.json();
      if (res.ok && data.enquiries) {
        setEnquiries(data.enquiries);
      }
    } catch (err) {
      console.error('Error fetching admin enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/enquiries/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setEnquiries(prev =>
          prev.map(item => (item.id === id ? { ...item, status: newStatus as any } : item))
        );
      }
    } catch (err) {
      console.error('Failed to update status', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredEnquiries = enquiries.filter(enq => {
    if (statusFilter !== 'ALL' && enq.status !== statusFilter) return false;
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const matchesId = enq.id.toLowerCase().includes(q);
      const matchesName = enq.customerName.toLowerCase().includes(q);
      const matchesCompany = enq.companyName.toLowerCase().includes(q);
      const matchesPhone = enq.phone.toLowerCase().includes(q);
      const matchesCity = enq.city.toLowerCase().includes(q);
      if (!matchesId && !matchesName && !matchesCompany && !matchesPhone && !matchesCity) {
        return false;
      }
    }
    return true;
  });

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 p-6 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-6 font-sans">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-slate-900 text-emerald-400 rounded-xl flex items-center justify-center mx-auto shadow-md">
            <UserCheck className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-black text-slate-900">Powershine Admin Portal</h1>
          <p className="text-xs text-slate-600">
            Internal Portal for Managing Customer Product Enquiries & Quotations
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-medium">
              {errorMsg}
            </div>
          )}

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Admin Access Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="Enter admin portal password..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              />
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Default password configured in environment (powershine_admin_2026).
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
            <span>Login to Enquiry Dashboard</span>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 font-sans">
      
      {/* Admin Top Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4" />
            <span>Powershine Tech Internal Management</span>
          </div>
          <h1 className="text-2xl font-black text-white">Customer Enquiry Portal</h1>
          <p className="text-xs text-slate-300">
            Total Enquiries: {enquiries.length} | Live Surat Laboratory Dashboard
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchEnquiries()}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Log</span>
          </button>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3.5 py-2 rounded-xl bg-rose-900/80 hover:bg-rose-800 text-rose-200 text-xs font-bold border border-rose-800 flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Filter by Enquiry ID, Customer Name, Company, City, or Phone..."
            value={searchFilter}
            onChange={e => setSearchFilter(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-slate-700">Status:</span>
          {['ALL', 'New', 'Contacted', 'Quoted', 'Completed', 'Cancelled'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                statusFilter === st
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Enquiries Table / Cards */}
      {filteredEnquiries.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
          No customer enquiries match your search filter.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEnquiries.map(enq => (
            <div
              key={enq.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-emerald-400 font-mono font-bold text-xs">
                    {enq.id}
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {enq.customerName} {enq.companyName ? `(${enq.companyName})` : ''}
                    </h3>
                    <p className="text-[11px] text-slate-600">
                      Submitted on: {new Date(enq.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600">Status:</span>
                  <select
                    value={enq.status}
                    onChange={e => handleUpdateStatus(enq.id, e.target.value)}
                    disabled={updatingId === enq.id}
                    className={`py-1 px-3 text-xs font-bold rounded-lg border shadow-2xs ${
                      enq.status === 'New'
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : enq.status === 'Quoted'
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : enq.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : 'bg-slate-100 text-slate-800 border-slate-300'
                    }`}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Quoted">Quoted</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <a href={`tel:${enq.phone}`} className="font-bold hover:underline">
                    {enq.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{enq.email || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>{enq.city || 'N/A'}</span>
                </div>
              </div>

              {/* Requirement Note */}
              {enq.requirementNote && (
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs text-amber-950">
                  <strong className="font-bold">Requirement Note:</strong> {enq.requirementNote}
                </div>
              )}

              {/* Requested Items Table */}
              <div>
                <p className="text-xs font-bold text-slate-800 mb-2">Requested Products ({enq.items?.length || 0}):</p>
                <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                  {enq.items?.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-white flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                          {item.brand || 'OEM'}
                        </span>
                        <span className="font-bold text-slate-900">{item.name}</span>
                        {item.model && <span className="text-slate-500 font-mono">({item.model})</span>}
                      </div>
                      <span className="font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
