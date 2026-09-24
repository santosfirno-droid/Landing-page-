import React, { useState } from 'react';
import { 
  CalendarDays, 
  Sparkles, 
  Repeat, 
  HeartHandshake, 
  Timer, 
  BarChart3, 
  Calendar, 
  Check, 
  Clock, 
  Play, 
  Flame,
  ArrowRight
} from 'lucide-react';

interface FeatureCard {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  mockup: React.ReactNode;
}

interface FeaturesSectionProps {
  onOpenCheckout: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenCheckout }) => {
  const [selectedFeature, setSelectedFeature] = useState('hoje');

  const features: FeatureCard[] = [
    {
      id: 'hoje',
      icon: CalendarDays,
      title: 'Hoje',
      subtitle: 'Sua visão central do dia',
      badge: 'Painel Diário',
      description: 'Veja todo o cronograma do dia organizado cronologicamente, com horários, pausas e status em tempo real.',
      mockup: (
        <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-2.5 text-xs shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="font-bold text-slate-900">Cronograma de Hoje</span>
            <span className="text-emerald-600 font-bold">4/6 Concluídas</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-800">
            <div className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span className="line-through text-slate-500 font-medium">07:30 · Café & Leitura</span>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">Feito</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-blue-50 border border-blue-200 text-slate-900 font-semibold">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-bold">09:00 · Trabalho Focado: Projeto</span>
            </div>
            <span className="text-[10px] text-blue-700 font-bold bg-white px-2 py-0.5 rounded border border-blue-200">Agora</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>11:00 · Pausa & Hidratação</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">Próximo</span>
          </div>
        </div>
      ),
    },
    {
      id: 'modo-agora',
      icon: Sparkles,
      title: 'Modo Agora',
      subtitle: 'O diferencial exclusivo',
      badge: 'Foco Absoluto',
      description: 'O aplicativo isola o que você deve fazer neste momento exato, exibindo tempo restante e a próxima atividade sem distrações.',
      mockup: (
        <div className="rounded-2xl bg-gradient-to-b from-blue-50/80 to-white border-2 border-blue-500/40 p-4 text-xs shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-blue-600 text-white font-extrabold px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
              MODO AGORA
            </span>
            <span className="font-mono text-emerald-600 font-black">24:18 restante</span>
          </div>
          <div className="text-sm font-extrabold text-slate-900 mb-1">
            Redação do Relatório Mensal
          </div>
          <div className="text-[11px] text-slate-600 mb-3">
            Janela de foco profundo. Mantenha as notificações desativadas.
          </div>
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span>A seguir: 11:30 · Almoço com a família</span>
            <span className="text-blue-600 font-bold">Em execução</span>
          </div>
        </div>
      ),
    },
    {
      id: 'rotinas',
      icon: Repeat,
      title: 'Rotinas',
      subtitle: 'Modelos prontos e adaptáveis',
      badge: 'Automação',
      description: 'Crie estruturas de rotinas para dias de semana, fins de semana ou períodos de estudo intensivo com flexibilidade total.',
      mockup: (
        <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-2 text-xs shadow-sm">
          <div className="text-slate-900 font-bold mb-2">Suas Rotinas Salvas</div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <div className="font-bold text-slate-900">Dias Úteis · Foco & Trabalho</div>
              <div className="text-[10px] text-slate-500">Segunda a Sexta · 7 blocos estruturados</div>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">Ativa</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between opacity-80">
            <div>
              <div className="font-bold text-slate-700">Fim de Semana · Leveza & Família</div>
              <div className="text-[10px] text-slate-500">Sábado e Domingo · 4 blocos flexíveis</div>
            </div>
            <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Agendada</span>
          </div>
        </div>
      ),
    },
    {
      id: 'habitos',
      icon: HeartHandshake,
      title: 'Hábitos',
      subtitle: 'Constância sem aplicativos extras',
      badge: 'Rituais',
      description: 'Integre hábitos diários (beber água, leitura, exercício) diretamente dentro dos blocos da sua rotina, garantindo execução prática.',
      mockup: (
        <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-2 text-xs shadow-sm">
          <div className="flex items-center justify-between text-slate-900 font-bold mb-2">
            <span>Hábitos de Hoje</span>
            <span className="text-emerald-600 font-bold">3/4 Cumpridos</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/60 border border-emerald-200">
            <span className="text-slate-700 font-medium">Beber 2.5L de água</span>
            <Check className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/60 border border-emerald-200">
            <span className="text-slate-700 font-medium">Leitura diária (20 páginas)</span>
            <Check className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50/80 border border-blue-200">
            <span className="text-slate-900 font-bold">30 min de caminhada ou treino</span>
            <span className="text-[10px] text-blue-700 font-bold">Pendente às 18h</span>
          </div>
        </div>
      ),
    },
    {
      id: 'cronometro',
      icon: Timer,
      title: 'Cronômetro',
      subtitle: 'Foco guiado pelo relógio',
      badge: 'Temporizador',
      description: 'Acompanhe a duração de cada bloco de trabalho ou estudo com cronômetro integrado, pausas controladas e feedback silencioso.',
      mockup: (
        <div className="rounded-2xl bg-white border border-slate-200 p-4 text-center text-xs shadow-sm">
          <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-1">
            Bloco de Produtividade
          </div>
          <div className="font-mono text-3xl font-black text-emerald-600 my-2">
            35:00
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold flex items-center gap-1.5 shadow-sm">
              <Play className="h-3 w-3 fill-current" />
              <span>Em Foco</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
              Pausa de 5 min
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'progresso',
      icon: BarChart3,
      title: 'Progresso',
      subtitle: 'Avanço visual e sustentável',
      badge: 'Métricas Reais',
      description: 'Acompanhe a evolução da sua consistência semanal, porcentagem de tarefas finalizadas e ritmo sustentável sem ansiedade.',
      mockup: (
        <div className="rounded-2xl bg-white border border-slate-200 p-4 text-xs space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">Consistência Semanal</span>
            <span className="text-emerald-600 font-bold">5 dias no ritmo</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-1">
                <div 
                  className={`w-full h-8 rounded-md flex items-center justify-center font-bold ${
                    i < 5 ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {i < 5 ? '✓' : '—'}
                </div>
                <span className="text-slate-500 font-semibold">{day}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between pt-1 text-[11px] text-slate-500">
            <span>Ritmo do mês: <strong className="text-slate-900">Consistente</strong></span>
            <span>Taxa de conclusão: <strong className="text-emerald-600">88%</strong></span>
          </div>
        </div>
      ),
    },
    {
      id: 'calendario',
      icon: Calendar,
      title: 'Calendário',
      subtitle: 'Sem conflitos de horários',
      badge: 'Planejamento',
      description: 'Visualize seus dias futuros, distribua compromissos especiais e mantenha a rotina sincronizada sem sobreposições confusas.',
      mockup: (
        <div className="rounded-2xl bg-white border border-slate-200 p-4 text-xs space-y-2.5 shadow-sm">
          <div className="flex items-center justify-between font-bold text-slate-900 pb-2 border-b border-slate-200">
            <span>Visão Semanal de Rotinas</span>
            <span className="text-blue-600 font-bold">Setembro</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900">Segunda a Sexta</span>
              <span className="text-[11px] text-slate-600">Rotina Padrão (Trabalho + Estudos)</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900">Sábado</span>
              <span className="text-[11px] text-slate-600">Rotina de Bem-estar & Casa</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentFeature = features.find((f) => f.id === selectedFeature) || features[0];
  const CurrentIcon = currentFeature.icon;

  return (
    <section id="recursos" className="relative py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Ferramentas pensadas para o seu dia
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Tudo o que você precisa em um único lugar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Sem dezenas de botões inúteis. Cada função foi criada para transformar a sua intenção em ação prática.
          </p>
        </div>

        {/* Feature Selector Tabs (Horizontal scrolling on mobile) */}
        <div className="mt-12 flex overflow-x-auto pb-4 pt-1 justify-start md:justify-center no-scrollbar gap-2">
          {features.map((item) => {
            const isSelected = item.id === selectedFeature;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedFeature(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Feature Showcase Box */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            
            {/* Details Side */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                <CurrentIcon className="h-4 w-4 text-emerald-600" />
                <span>{currentFeature.badge}</span>
              </div>
              
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentFeature.title} — {currentFeature.subtitle}
              </h3>
              
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {currentFeature.description}
              </p>

              <div className="mt-8">
                <a
                  href="https://pay.cakto.com.br/4d3ugka_1134346"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  <span>Garantir o aplicativo por R$ 49,90</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Mockup Preview Side */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 shadow-md">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-3 mb-4 border-b border-slate-200">
                  <span className="font-bold text-slate-700">Interface Real do Aplicativo</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Versão Oficial</span>
                </div>
                {currentFeature.mockup}
              </div>
            </div>

          </div>
        </div>

        {/* 7 Cards Grid View for Quick Scan */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  feature.id === selectedFeature
                    ? 'border-blue-500 bg-blue-50/70 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">
                    {feature.badge}
                  </span>
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">{feature.title}</h4>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
