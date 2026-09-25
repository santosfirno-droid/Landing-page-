/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { ModoAgoraSection } from './components/ModoAgoraSection.tsx';
import { HowItWorksSection } from './components/HowItWorksSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { DifferenceSection } from './components/DifferenceSection.tsx';
import { WhoIsItForSection } from './components/WhoIsItForSection.tsx';
import { ProgressSection } from './components/ProgressSection.tsx';
import { PrivacySection } from './components/PrivacySection.tsx';
import { OfferSection } from './components/OfferSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CHECKOUT_URL = 'https://pay.kiwify.com.br/OeRLnBX';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 600px, hide if near offer section
      const scrolled = window.scrollY > 600;
      setShowStickyCta(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenCheckout = () => {
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header */}
      <Header onOpenCheckout={handleOpenCheckout} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Modo Agora Highlight Section */}
        <ModoAgoraSection onOpenCheckout={handleOpenCheckout} />

        {/* 5. How It Works Section */}
        <HowItWorksSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. Features Section */}
        <FeaturesSection onOpenCheckout={handleOpenCheckout} />

        {/* 7. Difference / Comparison Section */}
        <DifferenceSection onOpenCheckout={handleOpenCheckout} />

        {/* 8. Who Is It For Section */}
        <WhoIsItForSection onOpenCheckout={handleOpenCheckout} />

        {/* 9. Progress Tracking Section */}
        <ProgressSection />

        {/* 10. Privacy & Security Section */}
        <PrivacySection />

        {/* 11. Core Offer Section */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* 13. Final Call to Action */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Interactive Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />

      {/* Floating Bottom Quick Action (Strictly < 10% mobile viewport height) */}
      {showStickyCta && (
        <aside
          aria-label="Ação rápida de compra"
          className="fixed bottom-3 left-4 right-4 z-40 mx-auto max-w-xl animate-in slide-in-from-bottom-4 duration-300 pointer-events-none"
        >
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-3 px-4 shadow-2xl shadow-slate-900/10 backdrop-blur-lg pointer-events-auto">
            <div className="hidden sm:block">
              <div className="text-xs font-bold text-slate-900">Minha Rotina Aí</div>
              <div className="text-[11px] text-emerald-600 font-bold">R$ 49,90 · Vitalício</div>
            </div>
            <div className="block sm:hidden text-xs">
              <span className="font-extrabold text-slate-900">R$ 49,90</span>
              <span className="text-slate-500 font-medium"> · Vitalício</span>
            </div>
            <a
              href="https://pay.kiwify.com.br/OeRLnBX" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>COMEÇAR AGORA</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </aside>
      )}
    </div>
  );
}
