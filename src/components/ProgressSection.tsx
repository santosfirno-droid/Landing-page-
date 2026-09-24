import React from 'react';
import { BarChart3, TrendingUp, CheckCircle, Clock, CalendarCheck, Shield } from 'lucide-react';

export const ProgressSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Evolução Tangível
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Acompanhe seu progresso com clareza. Sem culpa.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            O aplicativo registra cada bloco executado, dando a você a certeza visual de quanto você avançou no dia e na semana.
          </p>
        </div>

        {/* Visual Progress Dashboard Mockup */}
        <div className="mt-14 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50">
            
            {/* Top Dashboard Status Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="text-xs uppercase font-bold text-slate-400">
                  Painel de Acompanhamento
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  Sua Semana em Números Reais
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>Ritmo Sustentável Ativo</span>
                </span>
              </div>
            </div>

            {/* Metrics Triad */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="flex items-center justify-between text-slate-500 text-xs font-bold">
                  <span>Blocos Concluídos Hoje</span>
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="font-display text-3xl font-black text-slate-900 mt-2">
                  8 <span className="text-sm font-semibold text-slate-500">/ 10 blocos</span>
                </div>
                <div className="mt-2 text-[11px] text-emerald-700 font-bold">
                  80% do cronograma cumprido
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="flex items-center justify-between text-slate-500 text-xs font-bold">
                  <span>Tempo de Foco Real</span>
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div className="font-display text-3xl font-black text-slate-900 mt-2">
                  4h 45m
                </div>
                <div className="mt-2 text-[11px] text-blue-700 font-bold">
                  Horas líquidas de trabalho & estudo
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="flex items-center justify-between text-slate-500 text-xs font-bold">
                  <span>Dias no Ritmo</span>
                  <CalendarCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="font-display text-3xl font-black text-slate-900 mt-2">
                  5 dias
                </div>
                <div className="mt-2 text-[11px] text-slate-600 font-bold">
                  Segunda a Sexta cumpridos
                </div>
              </div>

            </div>

            {/* Visual Weekly Chart Mockup */}
            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6 text-xs">
                <span className="font-bold text-slate-900 uppercase tracking-wider">
                  Cumprimento Diário de Blocos
                </span>
                <span className="text-slate-500 font-semibold">Semana Atual</span>
              </div>

              {/* Bar Chart Representation */}
              <div className="grid grid-cols-7 items-end gap-3 sm:gap-6 h-40 pt-4 px-2">
                {[
                  { day: 'Seg', percent: 90, label: '9/10' },
                  { day: 'Ter', percent: 100, label: '10/10' },
                  { day: 'Qua', percent: 80, label: '8/10' },
                  { day: 'Qui', percent: 85, label: '9/10' },
                  { day: 'Sex', percent: 70, label: '7/10' },
                  { day: 'Sáb', percent: 50, label: 'Pausa' },
                  { day: 'Dom', percent: 40, label: 'Leve' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center h-full justify-end gap-2">
                    <span className="text-[10px] text-slate-500 font-mono hidden sm:block">
                      {item.label}
                    </span>
                    <div className="w-full max-w-[40px] rounded-t-lg bg-slate-200 h-full flex items-end overflow-hidden">
                      <div
                        className={`w-full rounded-t-lg transition-all duration-700 ${
                          idx < 5 
                            ? 'bg-gradient-to-t from-blue-600 to-emerald-500' 
                            : 'bg-slate-300'
                        }`}
                        style={{ height: `${item.percent}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom philosophy text */}
            <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 leading-relaxed">
              <Shield className="h-4 w-4 text-blue-600 shrink-0" />
              <span>
                <strong className="text-slate-900">Sem cobranças irreais:</strong> O progresso no Minha Rotina Aí não pune imprevistos. Se um dia sair do planejado, você simplesmente retoma no próximo bloco.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
