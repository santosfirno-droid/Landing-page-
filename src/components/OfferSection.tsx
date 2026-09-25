import React from 'react';
import { Check, ShieldCheck, ArrowRight, Zap, CreditCard, Sparkles } from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  const benefits = [
    'Aplicativo completo',
    'Modo Agora',
    'Rotinas',
    'Tarefas e hábitos',
    'Cronômetro',
    'Progresso',
    'Calendário',
    'Dados sincronizados',
  ];

  return (
    <section id="oferta" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden border-t border-slate-200">
      
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-100/60 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200 uppercase tracking-widest mb-3">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span>Condição Exclusiva de Lançamento</span>
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl text-balance">
            Organize sua rotina hoje.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Tudo o que você precisa para assumir o controle do seu dia por menos que uma pizza.
          </p>
        </div>

        {/* Master Pricing Card */}
        <div className="mt-14 mx-auto max-w-2xl">
          <div className="relative rounded-3xl border-2 border-blue-600/40 bg-white p-8 sm:p-12 shadow-2xl shadow-blue-500/10">
            
            {/* Top Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Minha Rotina Aí · Licença Pessoal
                </span>
                <div className="text-xl font-black text-slate-900 mt-0.5">
                  ACESSO VITALÍCIO
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl w-fit">
                <Zap className="h-3.5 w-3.5 text-emerald-600" />
                <span>Pague uma vez · Use para sempre</span>
              </div>
            </div>

            {/* Price Presentation */}
            <div className="mt-8 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 justify-center sm:justify-start">
                <div className="font-display text-5xl sm:text-6xl font-black tracking-tight text-slate-900">
                  R$ 49,90
                </div>
                <div className="text-sm font-bold text-emerald-700 mt-1 sm:mt-0 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 w-fit">
                  Pagamento único
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                Você paga uma vez. <span className="text-slate-900 font-extrabold">Não é assinatura.</span> Sem renovações automáticas nem cobranças surpresas.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                O que está incluso na sua licença:
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-slate-800">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="https://pay.kiwify.com.br/OeRLnBX" target="_blank" rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-4 px-6 text-base sm:text-lg font-bold text-white shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:from-blue-700 hover:to-blue-700 active:scale-[0.99] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>QUERO O MINHA ROTINA AÍ</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Guarantee and Security Notice */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Garantia incondicional de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-blue-600 shrink-0" />
                <span className="font-medium">Pix imediato ou Cartão de Crédito</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
