import React, { useState, useEffect } from 'react';
import { Play, Pause, CheckCircle, ArrowRight, Clock, Target, Layers, Sparkles } from 'lucide-react';

interface RoutineScenario {
  id: string;
  tabLabel: string;
  currentTask: {
    title: string;
    description: string;
    time: string;
    duration: number; // minutes
    category: string;
  };
  nextTask: {
    title: string;
    time: string;
    duration: string;
  };
  upcomingTasks: Array<{
    title: string;
    time: string;
  }>;
}

const SCENARIOS: RoutineScenario[] = [
  {
    id: 'trabalho',
    tabLabel: 'Trabalho / Foco',
    currentTask: {
      title: 'Elaboração do Relatório & Análise de Dados',
      description: 'Foco total sem notificações. Janela de produtividade principal.',
      time: '10:00 - 11:30',
      duration: 90,
      category: 'Trabalho Focado',
    },
    nextTask: {
      title: 'Pausa para Hidratação & Alongamento',
      time: '11:30 - 11:45',
      duration: '15 min',
    },
    upcomingTasks: [
      { title: 'Reunião de Alinhamento com a Equipe', time: '11:45 - 12:30' },
      { title: 'Almoço & Descanso', time: '12:30 - 13:30' },
    ],
  },
  {
    id: 'estudos',
    tabLabel: 'Estudos / Concursos',
    currentTask: {
      title: 'Resolução de Questões & Revisão Ativa',
      description: 'Módulo 4: Direito Constitucional. Caderno de erros e anotações.',
      time: '14:00 - 15:30',
      duration: 90,
      category: 'Estudo Ativo',
    },
    nextTask: {
      title: 'Intervalo Pomodoro & Café',
      time: '15:30 - 15:45',
      duration: '15 min',
    },
    upcomingTasks: [
      { title: 'Leitura de Jurisprudência & Artigos', time: '15:45 - 17:00' },
      { title: 'Flashcards de Fixação', time: '17:00 - 17:30' },
    ],
  },
  {
    id: 'saude',
    tabLabel: 'Saúde & Hábitos',
    currentTask: {
      title: 'Treino de Força & Mobilidade',
      description: 'Série B: membros superiores + 15 min esteira moderada.',
      time: '18:00 - 19:15',
      duration: 75,
      category: 'Atividade Física',
    },
    nextTask: {
      title: 'Banho Restaurador & Jantar Leve',
      time: '19:15 - 20:00',
      duration: '45 min',
    },
    upcomingTasks: [
      { title: 'Organizar ambiente do dia seguinte', time: '20:00 - 20:20' },
      { title: 'Leitura Noturna & Higiene do Sono', time: '21:00 - 21:45' },
    ],
  },
];

interface ModoAgoraSectionProps {
  onOpenCheckout: () => void;
}

export const ModoAgoraSection: React.FC<ModoAgoraSectionProps> = ({ onOpenCheckout }) => {
  const [activeScenarioId, setActiveScenarioId] = useState('trabalho');
  const [status, setStatus] = useState<'idle' | 'running' | 'done'>('running');
  const [timerSeconds, setTimerSeconds] = useState(2540); // ~42 mins left

  const currentScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (status === 'running' && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status, timerSeconds]);

  const handleSwitchTab = (id: string) => {
    setActiveScenarioId(id);
    setStatus('running');
    setTimerSeconds(2540);
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="modo-agora" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-t border-slate-200">
      
      {/* Visual background lights */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-100/60 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase mb-3 border border-emerald-200">
            <Sparkles className="h-3.5 w-3.5" />
            <span>O grande diferencial do aplicativo</span>
          </div>
          
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance leading-tight">
            E se seu dia simplesmente dissesse o que vem agora?
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
            Em vez de ficar decidindo o que priorizar entre 20 pendências, o Modo Agora assume o volante mental. Ele isola a tarefa presente e mostra com precisão o próximo passo.
          </p>
        </div>

        {/* Interactive Scenario Tabs (Functional Filter Buttons) */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-2xl bg-white p-1.5 border border-slate-200 shadow-sm">
            {SCENARIOS.map((scenario) => {
              const isActive = scenario.id === activeScenarioId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleSwitchTab(scenario.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {scenario.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulated App Experience - Large Visual Container */}
        <div className="mt-10 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/60 relative">
            
            {/* Top Bar of the App View */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">
                    Visão Ativa em Tempo Real
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Modo Agora · {currentScenario.currentTask.category}
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                <div className="text-right">
                  <div className="text-[11px] text-slate-500 font-semibold">Progresso de Hoje</div>
                  <div className="text-sm font-bold text-emerald-600">
                    {status === 'done' ? '75% concluído' : '62% concluído'}
                  </div>
                </div>
                <div className="h-8 w-8 rounded-full border-2 border-emerald-500/40 bg-emerald-50 flex items-center justify-center text-xs font-bold text-emerald-700">
                  {status === 'done' ? '75%' : '62%'}
                </div>
              </div>
            </div>

            {/* Central Stage: MODO AGORA CARD */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-white border-2 border-blue-500/40 p-6 sm:p-8 shadow-sm">
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                  <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                  <span>AGORA</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  <Clock className="h-4 w-4" />
                  <span>{currentScenario.currentTask.time}</span>
                </div>
              </div>

              {/* Task Title & Notes */}
              <div className="mt-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {currentScenario.currentTask.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                  {currentScenario.currentTask.description}
                </p>
              </div>

              {/* Functional Interactive Panel */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                
                {/* Timer Display */}
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Tempo Restante do Bloco
                  </div>
                  <div className="font-mono text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight mt-0.5">
                    {status === 'done' ? 'CONCLUÍDO!' : formatTimer(timerSeconds)}
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex items-center gap-3">
                  {status === 'idle' && (
                    <button
                      onClick={() => setStatus('running')}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/25 cursor-pointer"
                    >
                      <Play className="h-4 w-4 fill-current" />
                      <span>COMEÇAR</span>
                    </button>
                  )}

                  {status === 'running' && (
                    <>
                      <button
                        onClick={() => setStatus('idle')}
                        className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer shadow-sm"
                        title="Pausar"
                      >
                        <Pause className="h-4 w-4" />
                        <span>Pausar</span>
                      </button>

                      <button
                        onClick={() => setStatus('done')}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 active:scale-95 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span>CONCLUIR</span>
                      </button>
                    </>
                  )}

                  {status === 'done' && (
                    <button
                      onClick={() => {
                        setStatus('running');
                        setTimerSeconds(2540);
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 active:scale-95 transition-all cursor-pointer shadow-md shadow-blue-600/20"
                    >
                      <span>Reiniciar Simulação</span>
                    </button>
                  )}
                </div>

              </div>

            </div>

            {/* A SEGUIR (Next Up Task) */}
            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-bold uppercase tracking-wider text-slate-700">
                  A SEGUIR (Próxima Tarefa)
                </span>
                <span className="font-mono font-medium text-slate-500">{currentScenario.nextTask.time}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                  <span className="text-base font-bold text-slate-900">
                    {currentScenario.nextTask.title}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg w-fit">
                  Duração estimada: {currentScenario.nextTask.duration}
                </div>
              </div>
            </div>

            {/* Upcoming Queue */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {currentScenario.upcomingTasks.map((task, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-700"
                >
                  <span className="font-semibold truncate mr-2">{task.title}</span>
                  <span className="text-slate-500 font-mono shrink-0">{task.time}</span>
                </div>
              ))}
            </div>

            {/* Bottom Value takeaway */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero esforço para saber qual é o próximo passo. O app cuida do fluxo.</span>
              </div>
              <a
                href="https://pay.kiwify.com.br/OeRLnBX" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                <span>Garantir acesso por R$ 49,90</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
