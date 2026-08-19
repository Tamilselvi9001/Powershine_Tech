import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import {
  X,
  Loader2,
  Send,
  Bot,
  User,
  Sparkles
} from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export const ChatbaseWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState<Message[]>([
    {
      role: 'assistant',
      text: `Welcome to Powershine Tech's technical portal. How can we support your weaving looms or VFD motor controllers today?`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || loading) return;

    const userText = inputMessage.trim();
    setInputMessage('');
    setChatLog(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });

      if (!response.ok) {
        throw new Error('API server returned an error');
      }

      const data = await response.json();
      if (data.success && data.reply) {
        setChatLog(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        throw new Error(data.error || 'Unknown response payload');
      }
    } catch (err) {
      setChatLog(prev => [
        ...prev,
        {
          role: 'assistant',
          text: `Powershine Tech offers 24-48 hour PCB repair, PLC automation, and drive overhauls. Please call hotline ${COMPANY_INFO.phonePrimary} or submit a quote request.`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 font-sans selection:bg-brand-primary selection:text-white">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group px-4 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white shadow-2xl border-2 border-white flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95"
          aria-label="Open Powershine AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-accent rounded-full animate-ping" />
          </div>
          <span className="text-xs font-bold tracking-wide">Powershine AI Assistant</span>
        </button>
      ) : (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-3.5 bg-brand-accent text-white flex items-center justify-between border-b border-brand-accent-hover">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white flex items-center gap-1">
                  <span>Powershine Tech Assistant</span>
                  <Sparkles className="w-3 h-3 text-brand-primary" />
                </h3>
                <p className="text-[10px] text-brand-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                  Online • Technical Support
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-emerald-100/50 hover:text-white rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded bg-brand-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-2.5 rounded-xl text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-primary text-white rounded-br-none shadow-2xs font-semibold'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-2xs font-normal'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded bg-brand-accent-hover text-emerald-100/70 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <Loader2 className="w-4 h-4 animate-spin text-brand-primary" />
                <span>Powershine AI thinking...</span>
              </div>
            )}
          </div>

          {/* Quick Action Badges */}
          <div className="p-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[10px]">
            {[
              'PCB Repair Time?',
              'Tsudakoma Spares',
              'Yaskawa Drive Price',
              'Tiruppur Office Address'
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => setInputMessage(q)}
                className="px-2 py-1 rounded bg-slate-100 hover:bg-brand-primary-light text-slate-700 hover:text-brand-primary border border-slate-200 shrink-0 font-medium"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-2 bg-slate-100 border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about products, repairs, or quotes..."
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <button
              type="submit"
              disabled={loading || !inputMessage.trim()}
              className="p-2 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
