import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FinalCtaProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-200 text-center">
      
      {/* Visual background lights */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
          Seu próximo passo pode começar agora.
        </h2>

        <p className="mt-4 font-display text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-700">
          “Organize seu dia. Viva no seu ritmo.”
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <a
            href="https://pay.cakto.com.br/4d3ugka_1134346"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-700 active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>QUERO COMEÇAR</span>
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-semibold text-slate-600 mt-2">
            <span className="text-slate-900 font-extrabold text-base">R$ 49,90</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Acesso vitalício</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-700 font-medium">Pagamento único</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-blue-600" />
            <span>Acesso imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};
