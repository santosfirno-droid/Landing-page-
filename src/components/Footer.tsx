import React from 'react';
import { Clock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-500 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <span className="font-display text-base font-bold text-slate-900">Minha Rotina Aí</span>
              <p className="text-xs text-slate-500">Organize seu dia. Viva no seu ritmo.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 font-semibold">
            <a href="#como-funciona" className="hover:text-blue-600 transition-colors">Como Funciona</a>
            <a href="#modo-agora" className="hover:text-blue-600 transition-colors">Modo Agora</a>
            <a href="#recursos" className="hover:text-blue-600 transition-colors">Recursos</a>
            <a href="#oferta" className="hover:text-blue-600 transition-colors">Oferta</a>
            <a href="#duvidas" className="hover:text-blue-600 transition-colors">Dúvidas</a>
          </div>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500">
            © {currentYear} Minha Rotina Aí. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-slate-500">
            <span>Privacidade garantida</span>
            <span aria-hidden="true">·</span>
            <span>Termos de uso</span>
            <span aria-hidden="true">·</span>
            <span>Acesso vitalício</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
