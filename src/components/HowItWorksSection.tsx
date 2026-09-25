import React from 'react';
import { CalendarRange, Eye, LineChart, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenCheckout: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenCheckout }) => {
  const steps = [
    {
      number: '01',
      icon: CalendarRange,
      title: 'Monte sua rotina',
      tagline: 'Defina blocos no seu próprio ritmo.',
      description:
        'Distribua suas principais prioridades ao longo do dia com horários e durações realistas. Inclua pausas, estudos, trabalho, refeições e hábitos sem sobrecarregar sua mente.',
    },
    {
      number: '02',
      icon: Eye,
      title: 'Faça o que está na sua frente',
      tagline: 'O Modo Agora assume o foco.',
      description:
        'Esqueça a montanha de pendências. Quando você senta para produzir, o aplicativo exibe apenas a tarefa que deve ser executada agora, o tempo restante e o que vem a seguir.',
    },
    {
      number: '03',
      icon: LineChart,
      title: 'Acompanhe seu progresso',
      tagline: 'Sensação concreta de avanço.',
      description:
        'Conclua cada bloco com um toque. Veja a barra de progresso diária se preencher e encerre seu dia sabendo exatamente quanto você avançou, sem a culpa da rotina desorganizada.',
    },
  ];

  return (
    <section id="como-funciona" className="relative border-t border-slate-200 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Simplicidade na prática
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Como funciona em 3 passos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Sem sistemas complexos de 50 pastas, sem etiquetas confusas. Uma metodologia direta voltada para a ação.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
          
          {/* Connection line on desktop */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200 -z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm hover:border-slate-300 hover:bg-white hover:shadow-md transition-all"
              >
                {/* Step Top Header: Number and Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-black text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs font-bold text-emerald-700">
                  {step.tagline}
                </p>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <a
            href="https://pay.kiwify.com.br/OeRLnBX" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-50 border border-blue-200 px-6 py-3.5 text-sm font-bold text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-all cursor-pointer shadow-sm"
          >
            <span>Quero experimentar essa clareza no meu dia a dia</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
