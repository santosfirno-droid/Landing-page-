import React from 'react';
import { X, Check, ArrowRight, Zap, ListX, Compass } from 'lucide-react';

interface DifferenceSectionProps {
  onOpenCheckout: () => void;
}

export const DifferenceSection: React.FC<DifferenceSectionProps> = ({ onOpenCheckout }) => {
  const commonListDrawbacks = [
    'Lista infinita de pendências que só aumenta e nunca acaba',
    'Sem contexto de horário: você não sabe quando terá tempo para executar',
    'Fadiga de decisão: você gasta energia escolhendo qual item fazer primeiro',
    'Gera culpa e ansiedade constante a cada item não concluído',
    'Não considera pausas, descanso nem seu ritmo biológico',
    'Geralmente abandonada na primeira semana por sobrecarga mental',
  ];

  const appBenefits = [
    'Modo Agora: sua atenção fica 100% no bloco atual, sem distrações',
    'Alocação temporal realista: tarefas com início, fim e pausas estruturadas',
    'Zero fadiga: o aplicativo diz exatamente o que vem agora e o que vem a seguir',
    'Sensação concreta de avanço a cada bloco concluído no cronômetro',
    'Integração natural entre trabalho, estudos, saúde e descanso',
    'Consistência sustentável dia após dia, sem frustração nem cobrança irreal',
  ];

  return (
    <section id="diferencial" className="relative py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            O porquê do método
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Não é apenas uma lista de tarefas.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Listas tradicionais acumulam desejos. O Minha Rotina Aí transforma o seu planejamento em ação calma e contínua.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          
          {/* Left: Common Task List */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 relative shadow-sm">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 border border-rose-200 text-rose-600">
                <ListX className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Lista Comum de Tarefas</h3>
                <p className="text-xs text-slate-500">O modelo tradicional que gera ansiedade</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {commonListDrawbacks.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 border border-rose-200 mt-0.5">
                    <X className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-rose-50/80 border border-rose-200 p-4 text-xs text-rose-800">
              <strong>Resultado comum:</strong> Sensação de correria o dia todo, pouca coisa realmente entregue e procrastinação crônica.
            </div>
          </div>

          {/* Right: Minha Rotina Aí */}
          <div className="rounded-3xl border-2 border-blue-500/60 bg-white p-6 sm:p-8 relative shadow-xl shadow-blue-500/10">
            
            {/* Corner Badge */}
            <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-3.5 py-1 text-[11px] font-extrabold text-white uppercase tracking-wider shadow-sm">
              Método Modo Agora
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Minha Rotina Aí</h3>
                <p className="text-xs text-emerald-700 font-bold">Execução sequencial sem estresse</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {appBenefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-slate-800 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-800">
              <strong>Resultado real:</strong> Clareza mental permanente, controle saudável do tempo e a tranquilidade de saber que o dia rendeu.
            </div>

          </div>

        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Pronto para trocar a ansiedade pela clareza?</h4>
            <p className="text-sm text-slate-600 mt-1">Acesso vitalício sem mensalidades por apenas R$ 49,90.</p>
          </div>
          <a
            href="https://pay.cakto.com.br/4d3ugka_1134346"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/25 cursor-pointer whitespace-nowrap"
          >
            <span>COMEÇAR COM O MODO AGORA</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
