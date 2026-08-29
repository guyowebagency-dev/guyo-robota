
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemAwareness from '../components/ProblemAwareness';
import SolutionSection from '../components/SolutionSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialCards from '../components/TestimonialCards';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import { SectionDivider, SolutionCurvedDivider } from '../components/SectionDividers';
import { WorthItTransition } from '../components/WorthItTransition';

import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleOpenForm = () => navigate('/qualify');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative selection:bg-[#00FF00] selection:text-black">
      <Navbar onOpenForm={handleOpenForm} />
      <main>
        <section id="hero">
          <Hero onOpenForm={handleOpenForm} />
        </section>
        
        <WorthItTransition title="The Challenge" subtitle="Problem Awareness" />
        
        <section id="problem">
          <ProblemAwareness />
        </section>
        
        <SolutionCurvedDivider label="the solution" />
        
        <section id="solution">
          <SolutionSection onOpenForm={handleOpenForm} />
        </section>
        
        <WorthItTransition title="Our Process" subtitle="Execution Roadmap" />
        
        <section id="process">
          <ProcessSection />
        </section>

        <SolutionCurvedDivider label="reviews" />

        <section id="testimonials">
          <TestimonialCards onOpenForm={handleOpenForm} />
        </section>
        
        <SectionDivider label="our services" />
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <WorthItTransition />
        
        <section id="faq">
          <FAQSection />
        </section>
        
        <SectionDivider label="get started" />
        
        <section id="contact">
          <FinalCTA onOpenForm={handleOpenForm} />
        </section>
      </main>
      
      <footer className="bg-black py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo className="h-12 w-auto text-white" />
          <p className="text-zinc-500 text-sm font-mono">© 2025 NEXTRISE WEB AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-[#00FF00] transition-colors text-sm">Privacy</a>
            <a href="#" className="text-zinc-400 hover:text-[#00FF00] transition-colors text-sm">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
