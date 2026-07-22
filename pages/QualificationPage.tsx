
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { getSupabase } from '../lib/supabase';

import Logo from '../components/Logo';

const QualificationPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    industry: '',
    phoneNumber: '',
    revenue: '',
    challenge: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from('qualification_forms')
        .insert([
          {
            full_name: formData.fullName,
            business_name: formData.businessName,
            industry: formData.industry,
            phone_number: formData.phoneNumber,
            revenue: formData.revenue,
            challenge: formData.challenge,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      console.log('Form submitted to Supabase successfully');
      // Navigate to result page with form data
      navigate('/result', { state: { formData } });
    } catch (error) {
      console.error('Full error object:', error);
      let message = 'An unknown error occurred';
      
      if (error && typeof error === 'object') {
        if ('message' in error && typeof error.message === 'string') {
          message = error.message;
        } else if ('details' in error && typeof error.details === 'string') {
          message = error.details;
        }
      } else if (error instanceof Error) {
        message = error.message;
      }
      
      console.error('Error submitting form:', message);
      alert(`Submission Error: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="w-12 h-12 rounded-full border-2 border-[#00FF00] flex items-center justify-center text-[#00FF00] font-bold bg-black shadow-[0_0_20px_rgba(0,255,0,0.4)] relative">
              <span className="text-xl">1</span>
              <div className="absolute inset-0 rounded-full bg-[#00FF00]/10 animate-pulse"></div>
            </div>
            <span className="text-[#00FF00] text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Your Info</span>
          </div>
          <div className="w-20 h-[1px] bg-zinc-800 mx-4 mb-8"></div>
          <div className="flex flex-col items-center opacity-30">
            <div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center text-zinc-500 font-bold bg-black">
              <span className="text-xl">2</span>
            </div>
            <span className="text-zinc-500 text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Review</span>
          </div>
          <div className="w-20 h-[1px] bg-zinc-800 mx-4 mb-8"></div>
          <div className="flex flex-col items-center opacity-30">
            <div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center text-zinc-500 font-bold bg-black">
              <span className="text-xl">3</span>
            </div>
            <span className="text-zinc-500 text-[11px] font-mono tracking-[0.2em] mt-4 uppercase font-black">Book Call</span>
          </div>
        </div>

        {/* Form Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[600px] mx-auto"
        >
          <div className="mb-12">
            <p className="text-[#00FF00] font-mono text-[11px] tracking-[0.2em] uppercase mb-3 font-bold">Qualification Form</p>
            <h1 className="text-[38px] font-bold mb-3 tracking-tight leading-[1.15]">Tell Us About Your Business</h1>
            <p className="text-zinc-500 text-base leading-relaxed max-w-xl mb-10">
              This takes 2 minutes. We use this to make sure we can actually help you before we speak.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-[22px]">
            <div className="space-y-[22px]">
              {/* Full Name */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-zinc-200">Full Name *</label>
                <input 
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-[14px] text-white placeholder:text-zinc-800 focus:border-[#00FF00]/30 focus:outline-none transition-all focus:bg-[#151515] text-[15px]"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-zinc-200">Business Name *</label>
                <input 
                  required
                  type="text"
                  placeholder="Business Name"
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-[14px] text-white placeholder:text-zinc-800 focus:border-[#00FF00]/30 focus:outline-none transition-all focus:bg-[#151515] text-[15px]"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-zinc-200">Industry *</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Tourism, Real Estate, Construction..."
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-[14px] text-white placeholder:text-zinc-800 focus:border-[#00FF00]/30 focus:outline-none transition-all focus:bg-[#151515] text-[15px]"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-zinc-200">Phone Number *</label>
                <input 
                  required
                  type="tel"
                  placeholder="+254 7XX XXX XXX"
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-[14px] text-white placeholder:text-zinc-800 focus:border-[#00FF00]/30 focus:outline-none transition-all focus:bg-[#151515] text-[15px]"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>

              {/* Revenue */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-zinc-200">What's your average monthly revenue? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Under KES 50,000",
                    "KES 50,000 – 150,000",
                    "KES 150,000 – 500,000",
                    "KES 500,000+"
                  ].map((option) => (
                    <label 
                      key={option}
                      className={`flex items-center justify-center px-[18px] py-[14px] rounded-lg border cursor-pointer transition-all text-center text-[14px] font-medium ${
                        formData.revenue === option 
                          ? 'bg-[#00FF00]/10 border-[#00FF00] text-white shadow-[0_0_30px_rgba(0,255,0,0.1)]' 
                          : 'bg-[#1A1A1A] border-white/5 text-zinc-500 hover:border-white/20'
                      }`}
                    >
                      <input 
                        type="radio"
                        name="revenue"
                        required
                        className="hidden"
                        value={option}
                        checked={formData.revenue === option}
                        onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                  <label 
                    className={`col-span-full flex items-center justify-center px-[18px] py-[14px] rounded-lg border cursor-pointer transition-all text-center text-[14px] font-medium ${
                      formData.revenue === "Prefer not to say" 
                        ? 'bg-[#00FF00]/10 border-[#00FF00] text-white shadow-[0_0_30px_rgba(0,255,0,0.1)]' 
                        : 'bg-[#1A1A1A] border-white/5 text-zinc-500 hover:border-white/20'
                    }`}
                  >
                    <input 
                      type="radio"
                      name="revenue"
                      required
                      className="hidden"
                      value="Prefer not to say"
                      checked={formData.revenue === "Prefer not to say"}
                      onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    />
                    <span>Prefer not to say</span>
                  </label>
                </div>
              </div>

              {/* Challenge */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-zinc-200">What's your biggest challenge right now? (Optional)</label>
                <textarea 
                  placeholder="e.g. I struggle to get new clients online, my competitors have better websites..."
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-[14px] text-white placeholder:text-zinc-800 focus:border-[#00FF00]/30 focus:outline-none transition-all focus:bg-[#151515] min-h-[120px] resize-none text-[15px]"
                  value={formData.challenge}
                  onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#00FF00] text-black py-4 rounded-md font-bold text-[15px] tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(0,255,0,0.3)] uppercase ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Analyse My Business →'
                )}
              </button>

              <p className="mt-4 text-center text-zinc-600 text-[13px] flex items-center justify-center gap-2 font-medium">
                <span className="text-zinc-700">🔒</span> Your information is private and never shared.
              </p>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default QualificationPage;
