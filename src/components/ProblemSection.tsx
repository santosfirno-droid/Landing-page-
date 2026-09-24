import React from 'react';
import { BrainCircuit, Clock, HelpCircle, TrendingDown, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: BrainCircuit,
      title: 'Esquecer tarefas importantes',
      subtitle: 'O cérebro não foi feito para ser um depósito de pendências.',
      description: 'Você anota coisas em notas avulsas, mensagens para si mesmo ou papéis de rascunho. Quando o momento certo chega, você simplesmente esquece de olhar.',
    },
    {
      icon: Clock,
      title: 'Perder a noção dos horários',
      subtitle: 'O dia voa e suas prioridades ficam pelo caminho.',
      description: 'Você começa uma tarefa rápida e, quando se dá conta, já se passaram três horas. O tempo escorre e o que realmente importava para o seu dia não saiu do lugar.',
    },
    {
      icon: HelpCircle,
      title: 'Não saber por onde começar',
      subtitle: 'A clássica paralisia causada por listas infinitas.',
      description: 'Olhar para uma lista com 25 tarefas misturadas causa fadiga de decisão antes mesmo de você abrir o computador. O resultado quase sempre é a procrastinação.',
    },
    {
      icon: TrendingDown,
      title: 'Não acompanhar o próprio progresso',
      subtitle: 'A sensação injusta de que você trabalhou sem sair do lugar.',
      description: 'Você passa o dia inteiro ocupado, mas chega ao fim da tarde com a frustração de não ter certeza do que realmente concluiu e do quanto avançou.',
    },
  ];

  return (
    <section className="relative border-y border-slate-200/80 bg-slate-50/80 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            A rotina sem estrutura
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Por que organizar a rotina parece tão cansativo?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            O problema não é sua força de vontade. É tentar tomar decisões constantes sobre o que fazer a cada hora do dia.
          </p>
        </div>

        {/* 4 Friction Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 border border-rose-200/80 text-rose-600 group-hover:scale-105 transition-all">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs font-bold text-rose-700">
                  {item.subtitle}
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition Bridge */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 border border-blue-200 text-blue-600 mb-3 animate-bounce">
            <ArrowDown className="h-5 w-5" />
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-800">
            Existe um jeito mais inteligente e tranquilo de viver o seu dia.
          </p>
        </div>

      </div>
    </section>
  );
};
