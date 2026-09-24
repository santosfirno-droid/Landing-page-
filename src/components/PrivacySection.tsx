import React from 'react';
import { Lock, UserCheck, RefreshCw } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  const securityPillars = [
    {
      icon: UserCheck,
      title: 'Conta individual e exclusiva',
      description:
        'Seu perfil é 100% individual. Somente você tem acesso às suas rotinas, anotações de tarefas e histórico diário.',
    },
    {
      icon: Lock,
      title: 'Dados associados apenas à sua conta',
      description:
        'Suas informações não são compartilhadas, vendidas para terceiros nem usadas para anúncios. Sua rotina pertence unicamente a você.',
    },
    {
      icon: RefreshCw,
      title: 'Sincronização em tempo real',
      description:
        'Crie sua rotina no computador e execute no celular sem complicações. Todas as alterações ficam salvas e atualizadas instantaneamente na sua conta.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Segurança & Transparência
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Seus dados, sua privacidade. Sem letras miúdas.
          </h2>
          <p className="mt-3 text-base text-slate-600 text-balance">
            Acreditamos que um aplicativo de produtividade pessoal deve ser seguro, confiável e discreto.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {securityPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all hover:border-slate-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
