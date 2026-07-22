
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from '../components/Logo';

const QualificationResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {
    fullName: 'Friend',
    businessName: 'your business',
    industry: 'your industry',
    revenue: 'KES 500,000+',
    challenge: ''
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00FF00] selection:text-black font-sans">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-background opacity-20 pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 py-8 px-6 md:px-12 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center">
          <div 
            className="cursor-pointer flex items-center gap-2" 
            onClick={() => navigate('/')}
          >
            <Logo className="h-10 w-auto text-white" />
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto py-16 px-6">
        {/* Step Indicators */}
        <div className="flex items-center justify-center mb-24">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#00FF00] flex items-center justify-center text-[#00FF00] font-bold bg-[#00FF00]/10 shadow-[0_0_20px_rgba(0,255,0,0.4)] relative">
              <span className="text-xl">✓</span>
            </div>
            <span className="text-[#00FF00] text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Your Info</span>
          </div>
          <div className="w-20 h-[1px] bg-[#00FF00]/30 mx-4 mb-8"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#00FF00] flex items-center justify-center text-[#00FF00] font-bold bg-black shadow-[0_0_20px_rgba(0,255,0,0.4)] relative">
              <span className="text-xl">2</span>
              <div className="absolute inset-0 rounded-full bg-[#00FF00]/10 animate-pulse"></div>
            </div>
            <span className="text-[#00FF00] text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Review</span>
          </div>
          <div className="w-20 h-[1px] bg-zinc-800 mx-4 mb-8"></div>
          <div className="flex flex-col items-center opacity-30">
            <div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center text-zinc-500 font-bold bg-black">
              <span className="text-xl">3</span>
            </div>
            <span className="text-zinc-500 text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Book Call</span>
          </div>
        </div>

        {/* Result Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-12 text-center">
            <p className="text-[#00FF00] font-mono text-[12px] tracking-[0.4em] uppercase mb-6 font-black">Qualification Result</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">You're a Strong Fit For What We Do.</h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF00]/10 border border-[#00FF00]/20 text-[#00FF00] font-mono text-xs uppercase tracking-widest font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF00]"></span>
              </span>
              Your business qualifies for our services.
            </div>
          </div>

          <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 space-y-8 relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF00]/5 blur-[100px] -mr-32 -mt-32"></div>

            <div className="relative z-10 space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                <span className="text-white font-bold">{formData.fullName}</span>, based on what you've shared about <span className="text-white font-bold">{formData.businessName}</span> in <span className="text-[#00FF00] font-bold">{formData.industry}</span>, you're exactly the kind of business NextRise Web Design was built for.
              </p>
              
              <p>
                Your business is at the stage where a professional website won't just improve your image — it will directly convert visitors into paying clients.
              </p>

              {formData.challenge && (
                <p>
                  The challenge you mentioned — <span className="text-[#00FF00] font-bold uppercase tracking-tight italic">"{formData.challenge}"</span> — is something we tackle at the core of every website we build.
                </p>
              )}

              <div className="pt-6 border-t border-white/5">
                <p className="mt-4 flex items-center gap-2 text-zinc-400 text-base italic">
                  <span>⏱</span> Time is money. The sooner your website is live, the sooner new clients find you.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-[#00FF00] text-black py-6 rounded-xl font-black text-xl tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-1 shadow-[0_20px_50px_rgba(0,255,0,0.3)] uppercase group"
              >
                <span className="flex items-center gap-3">👉 Continue — Book My Free Call</span>
                <span className="text-[10px] font-mono tracking-[0.1em] opacity-60">Free 15-minute call • No obligation • Google Meet</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {[
                  { label: '100% Free Call', icon: '✓' },
                  { label: 'No Sales Pressure', icon: '✓' },
                  { label: 'Real Actionable Advice', icon: '✓' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[#00FF00] font-bold">{item.icon}</span>
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <p className="mt-8 text-center text-[#00FF00] text-[11px] font-mono uppercase tracking-[0.2em] font-black">
                Customized for {formData.fullName} • {formData.industry}
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default QualificationResultPage;
