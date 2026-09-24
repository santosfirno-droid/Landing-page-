import React, { useState } from 'react';
import { Clock, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 p-0.5 shadow-sm transition-transform group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white">
              <Clock className="h-4.5 w-4.5 text-blue-600 transition-colors group-hover:text-emerald-600" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              Minha Rotina Aí
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="hover:text-blue-600 transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Como funciona
          </button>
          <button
            onClick={() => scrollToSection('modo-agora')}
            className="hover:text-blue-600 transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Modo Agora
          </button>
          <button
            onClick={() => scrollToSection('recursos')}
            className="hover:text-blue-600 transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollToSection('diferencial')}
            className="hover:text-blue-600 transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Diferencial
          </button>
          <button
            onClick={() => scrollToSection('duvidas')}
            className="hover:text-blue-600 transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Dúvidas
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <a
            href="https://pay.cakto.com.br/4d3ugka_1134346"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>COMEÇAR AGORA</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-3 text-base font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="flex items-center justify-between py-2.5 text-left border-b border-slate-100 hover:text-blue-600 cursor-pointer"
            >
              <span>Como funciona</span>
            </button>
            <button
              onClick={() => scrollToSection('modo-agora')}
              className="flex items-center justify-between py-2.5 text-left border-b border-slate-100 hover:text-blue-600 cursor-pointer"
            >
              <span>Modo Agora</span>
            </button>
            <button
              onClick={() => scrollToSection('recursos')}
              className="flex items-center justify-between py-2.5 text-left border-b border-slate-100 hover:text-blue-600 cursor-pointer"
            >
              <span>Recursos</span>
            </button>
            <button
              onClick={() => scrollToSection('diferencial')}
              className="flex items-center justify-between py-2.5 text-left border-b border-slate-100 hover:text-blue-600 cursor-pointer"
            >
              <span>Diferencial</span>
            </button>
            <button
              onClick={() => scrollToSection('duvidas')}
              className="flex items-center justify-between py-2.5 text-left border-b border-slate-100 hover:text-blue-600 cursor-pointer"
            >
              <span>Dúvidas</span>
            </button>
            <div className="pt-3">
              <a
                href="https://pay.cakto.com.br/4d3ugka_1134346"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/30 hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>COMEÇAR AGORA</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-2 text-center text-xs text-slate-500 font-medium">
                R$49,90 · Pagamento único · Acesso vitalício
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

