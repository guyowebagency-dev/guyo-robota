import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "We Research Users",
    desc: "A quick deep-dive into your users, goals, and product. We map the flows and problems to solve. No 40-page questionnaires."
  },
  {
    num: "02",
    title: "We Design The Experience",
    desc: "We design wireframes, UI, and prototypes in stages — with clickable previews at each step so nothing surprises you."
  },
  {
    num: "03",
    title: "We Hand Off And Support",
    desc: "You get dev-ready files plus a design system, and we stay on. A product your team can build exactly as designed."
  }
];

const ProcessSection: React.FC = () => {
  return (
    <div className="py-28 px-6 bg-transparent relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF00]/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-2 text-[#00FF00] font-mono text-[12px] font-bold tracking-[0.25em] uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[#00FF00]/10 border border-[#00FF00]/20">
            <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
            OUR PROCESS
          </div>
          <h2 className="font-monument text-3xl sm:text-4xl md:text-[44px] tracking-tight mb-5 text-white uppercase leading-[1.15]">
            FROM <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00FF00] to-white">IDEA</span> TO SHIPPED, <br className="hidden sm:inline" /> WITHOUT THE <span className="text-[#00FF00]">HEADACHE</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Great UX doesn't just look good — it makes your product the obvious choice.
          </p>
        </div>

        {/* Desktop Winding Roadmap Diagram (>= 1024px) */}
        <div className="hidden lg:block relative w-full max-w-[1000px] mx-auto aspect-[1000/620] my-8">
          {/* SVG Diagram Layer */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            viewBox="0 0 1000 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FF00" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#39FF14" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00FF00" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00FF00" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Vertical Faint Drop Guidelines */}
            <line x1="380" y1="50" x2="380" y2="440" stroke="url(#dropGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="880" y1="260" x2="880" y2="580" stroke="url(#dropGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="200" y1="500" x2="200" y2="620" stroke="url(#dropGrad)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Main Winding Roadmap Curve */}
            <motion.path
              d="M 380 50 C 650 60, 880 130, 880 260 C 880 390, 420 400, 200 500 C 90 550, 150 600, 320 620"
              stroke="url(#curveGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0.2 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Waypoint 1 (380, 50) */}
            <g className="origin-[380px_50px]">
              <circle cx="380" cy="50" r="18" fill="#00FF00" fillOpacity="0.15" className="animate-ping origin-center" style={{ animationDuration: '3s' }} />
              <circle cx="380" cy="50" r="10" fill="#00FF00" fillOpacity="0.3" />
              <circle cx="380" cy="50" r="5" fill="#00FF00" />
            </g>

            {/* Waypoint 2 (880, 260) */}
            <g className="origin-[880px_260px]">
              <circle cx="880" cy="260" r="18" fill="#00FF00" fillOpacity="0.15" className="animate-ping origin-center" style={{ animationDuration: '3s', animationDelay: '1s' }} />
              <circle cx="880" cy="260" r="10" fill="#00FF00" fillOpacity="0.3" />
              <circle cx="880" cy="260" r="5" fill="#00FF00" />
            </g>

            {/* Waypoint 3 (200, 500) */}
            <g className="origin-[200px_500px]">
              <circle cx="200" cy="500" r="18" fill="#00FF00" fillOpacity="0.15" className="animate-ping origin-center" style={{ animationDuration: '3s', animationDelay: '2s' }} />
              <circle cx="200" cy="500" r="10" fill="#00FF00" fillOpacity="0.3" />
              <circle cx="200" cy="500" r="5" fill="#00FF00" />
            </g>
          </svg>

          {/* Step Text Block 01 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute left-[3%] top-[4%] w-[32%] text-left"
          >
            <span className="font-mono text-sm text-[#00FF00] font-bold tracking-widest block mb-1.5">01</span>
            <h3 className="text-2xl font-bold text-white mb-2.5 tracking-tight font-sans">{steps[0].title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{steps[0].desc}</p>
          </motion.div>

          {/* Step Text Block 02 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute left-[52%] top-[38%] w-[32%] text-left"
          >
            <span className="font-mono text-sm text-[#00FF00] font-bold tracking-widest block mb-1.5">02</span>
            <h3 className="text-2xl font-bold text-white mb-2.5 tracking-tight font-sans">{steps[1].title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{steps[1].desc}</p>
          </motion.div>

          {/* Step Text Block 03 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute left-[24%] top-[76%] w-[34%] text-left"
          >
            <span className="font-mono text-sm text-[#00FF00] font-bold tracking-widest block mb-1.5">03</span>
            <h3 className="text-2xl font-bold text-white mb-2.5 tracking-tight font-sans">{steps[2].title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{steps[2].desc}</p>
          </motion.div>
        </div>

        {/* Mobile / Tablet View (< 1024px) */}
        <div className="lg:hidden relative border-l-2 border-[#00FF00]/40 pl-8 ml-4 space-y-12 my-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative group text-left"
            >
              {/* Waypoint Dot */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-[#00FF00] flex items-center justify-center shadow-[0_0_12px_rgba(0,255,0,0.6)]">
                <div className="w-2 h-2 rounded-full bg-[#00FF00]" />
              </div>

              <span className="text-xs font-mono text-[#00FF00] font-bold tracking-widest block mb-1">{step.num}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans tracking-tight">{step.title}</h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
