import React from 'react';
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'

interface HeroProps {
  onOpenForm: () => void
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center py-24 px-4">
      <Spotlight fill="#00FF00" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background -z-20 opacity-30"></div>
      
      {/* Central Spline Robot Behind Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
        <div className="w-full h-full max-w-5xl opacity-80 mix-blend-screen md:opacity-95">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full pointer-events-none">
        {/* Centered Content */}
        <p className="font-mono text-[#00FF00] text-[11px] sm:text-[12px] tracking-[0.25em] mb-4 uppercase font-semibold pointer-events-auto">
          Websites That Convert
        </p>
        
        <h1 className="font-monument text-[26px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15] mb-6 tracking-tight text-white uppercase max-w-3xl pointer-events-auto">
          GET MORE CLIENTS <br className="hidden sm:inline" />
          WITH A <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00FF00] to-white">WEBSITE THAT SELLS FOR YOU</span>
        </h1>
        
        <p className="text-zinc-400 text-sm sm:text-base md:text-[17px] leading-[1.6] mb-12 font-normal max-w-2xl pointer-events-auto">
          We design high-converting websites for serious businesses 
          that want more clients, more trust, and real growth — 
          without tech headaches or guesswork.
        </p>
        
        {/* Central CTA */}
        <div className="flex flex-col items-center gap-3 pointer-events-auto">
          <button 
            onClick={onOpenForm}
            className="group relative bg-[#00FF00] text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest green-glow-hover transition-all duration-300 hover:scale-105 active:scale-95"
          >
            GET MY WEBSITE BUILT
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
          </button>
          <p className="text-zinc-500 font-mono text-[12px] sm:text-[13px] opacity-70">
            Free strategy call • No pressure • Honest advice
          </p>
        </div>
      </div>
    </main>
  )
}

export default Hero;
