
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import Logo from '../components/Logo';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
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
        <div className="flex items-center justify-center mb-16">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#00FF00] flex items-center justify-center text-[#00FF00] font-bold bg-[#00FF00]/10 shadow-[0_0_20px_rgba(0,255,0,0.4)] relative">
              <span className="text-xl">✓</span>
            </div>
            <span className="text-[#00FF00] text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Your Info</span>
          </div>
          <div className="w-20 h-[1px] bg-[#00FF00]/30 mx-4 mb-8"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#00FF00] flex items-center justify-center text-[#00FF00] font-bold bg-[#00FF00]/10 shadow-[0_0_20px_rgba(0,255,0,0.4)] relative">
              <span className="text-xl">✓</span>
            </div>
            <span className="text-[#00FF00] text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Review</span>
          </div>
          <div className="w-20 h-[1px] bg-[#00FF00]/30 mx-4 mb-8"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#00FF00] flex items-center justify-center text-[#00FF00] font-bold bg-black shadow-[0_0_20px_rgba(0,255,0,0.4)] relative">
              <span className="text-xl">3</span>
              <div className="absolute inset-0 rounded-full bg-[#00FF00]/10 animate-pulse"></div>
            </div>
            <span className="text-[#00FF00] text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Book Call</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-[#00FF00] font-mono text-[11px] tracking-[0.4em] uppercase mb-4 font-black">Final Step</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Choose a Time That Works for You</h1>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Pick a date and time below. You'll receive an instant confirmation email with your Google Meet link.
          </p>
        </motion.div>

        {/* Expectation Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { title: '15 Minutes', subtitle: 'Short and focused', icon: '📅' },
            { title: 'Free Strategy', subtitle: 'We map your exact plan', icon: '🎯' },
            { title: 'Google Meet', subtitle: 'Join from anywhere', icon: '💻' }
          ].map((item) => (
            <div key={item.title} className="bg-[#111111] border border-white/5 rounded-2xl p-6 text-center">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Calendly Embed */}
        <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden min-h-[700px]">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/nextrisewebdesign/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=00ff00" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>

        <p className="mt-12 text-center text-zinc-600 text-sm font-medium">
          🔒 Your booking is confirmed instantly. Check your email for the Google Meet link.
        </p>
      </main>
    </div>
  );
};

export default BookingPage;
