import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  Flame,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  // Interactive mini-state inside the smartphone mockup
  const [isRunning, setIsRunning] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(1680); // 28 mins
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && secondsLeft > 0 && !isCompleted) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft, isCompleted]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleTimer = () => {
    if (isCompleted) {
      setIsCompleted(false);
      setSecondsLeft(1680);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const handleCompleteBlock = () => {
    setIsCompleted(true);
    setIsRunning(false);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/80">
      {/* Subtle Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-100/50 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Top Quiet Editorial Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase mb-4 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Aplicativo de Rotina & Execução Diária</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance leading-[1.08]">
              Pare de tentar lembrar de tudo.
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance font-normal">
              Saiba o que fazer agora, o que vem depois e quanto você já avançou.
            </p>

            {/* Offer highlight strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-sm font-semibold text-slate-700">
              <span className="font-extrabold text-blue-600 text-base">R$ 49,90</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Pagamento único
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-900 font-bold">Acesso vitalício</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Sem mensalidade</span>
            </div>

            {/* Primary Action & Trust Markers */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://pay.cakto.com.br/4d3ugka_1134346"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:from-blue-500 hover:to-blue-700 active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>QUERO ORGANIZAR MINHA ROTINA</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Micro Trust Proof */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-blue-600" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Smartphone className="h-4 w-4 text-slate-500" />
                <span>Celular, Tablet e Computador</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-[44px] bg-gradient-to-b from-blue-200/50 to-emerald-200/40 blur-xl opacity-75" />

              {/* Smartphone Outer Chassis */}
              <div className="relative rounded-[40px] border-[6px] border-slate-300 bg-white p-2 shadow-2xl shadow-slate-300/60 ring-1 ring-slate-200">
                
                {/* Speaker Notch / Dynamic Island */}
                <div className="relative mx-auto mb-2 flex h-5 w-28 items-center justify-center rounded-full bg-slate-900">
                  <div className="h-2 w-2 rounded-full bg-slate-700 mr-2" />
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-900 border border-blue-400/40" />
                </div>

                {/* Smartphone Screen Content */}
                <div className="rounded-[30px] bg-slate-50 p-4 text-left border border-slate-200 overflow-hidden select-none">
                  
                  {/* Mock Status Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        Hoje · Quarta-feira
                      </div>
                      <div className="text-sm font-extrabold text-slate-900">Minha Rotina</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        <Flame className="h-3 w-3 text-emerald-600" />
                        <span>68% Concluído</span>
                      </span>
                    </div>
                  </div>

                  {/* Day Progress Track */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                      <span>Progresso do dia</span>
                      <span className="font-bold text-slate-900">8 de 12 blocos</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500" 
                        style={{ width: isCompleted ? '75%' : '68%' }}
                      />
                    </div>
                  </div>

                  {/* FEATURED: MODO AGORA CARD */}
                  <div className="mt-4 rounded-2xl bg-white border-2 border-blue-500/50 p-4 shadow-md shadow-blue-900/5 relative overflow-hidden">
                    
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-2.5 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                        <span>MODO AGORA</span>
                      </div>
                      <span className="text-xs font-semibold text-blue-700">09:30 - 11:00</span>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-base font-bold text-slate-900">
                        Trabalho Focado: Projeto Principal
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Sem abas extras. Apenas execução sem interrupções.
                      </p>
                    </div>

                    {/* Timer & Controls */}
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-3 border border-slate-200">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Tempo restante</div>
                        <div className="font-mono text-2xl font-black tracking-tight text-emerald-600">
                          {isCompleted ? 'CONCLUÍDO' : formatTimer(secondsLeft)}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleToggleTimer}
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                          title={isRunning ? 'Pausar' : 'Iniciar'}
                        >
                          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
                        </button>
                        
                        <button
                          onClick={handleCompleteBlock}
                          disabled={isCompleted}
                          className={`flex h-10 px-3 items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isCompleted 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-slate-200 text-slate-800 hover:bg-slate-300 active:scale-95'
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>{isCompleted ? 'Feito' : 'Concluir'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Interactive hint */}
                    <div className="mt-2 text-center text-[10px] text-slate-400">
                      (Toque nos botões para testar a interface ao vivo)
                    </div>
                  </div>

                  {/* NEXT TASK PREVIEW */}
                  <div className="mt-3 rounded-xl bg-white border border-slate-200 p-3 shadow-sm">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span className="font-bold uppercase tracking-wider text-slate-600">A SEGUIR</span>
                      <span className="text-slate-500 font-mono">11:00 - 11:20</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-slate-800">Pausa Ativa, Água & Alongamento</span>
                      </div>
                      <span className="text-[11px] text-slate-500">20 min</span>
                    </div>
                  </div>

                  {/* NEXT 2 */}
                  <div className="mt-2 flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600">
                    <span className="font-medium">11:20 · Responder E-mails Importantes</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </div>

                </div>

                {/* Home Indicator Bar */}
                <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-slate-300" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
