import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Dumbbell, 
  Home, 
  Sparkles, 
  Heart, 
  Clock, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface Profile {
  id: string;
  label: string;
  icon: React.ElementType;
  title: string;
  headline: string;
  description: string;
  exampleRoutine: Array<{
    time: string;
    task: string;
    type: string;
  }>;
}

interface WhoIsItForSectionProps {
  onOpenCheckout: () => void;
}

export const WhoIsItForSection: React.FC<WhoIsItForSectionProps> = ({ onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState('estudos');

  const profiles: Profile[] = [
    {
      id: 'estudos',
      label: 'Estudos',
      icon: GraduationCap,
      title: 'Para quem estuda com seriedade',
      headline: 'Concursos, faculdade, vestibulares e certificações',
      description: 'Divida suas sessões de estudo em blocos com pausas programadas. O Modo Agora evita a exaustão e garante que você avance no edital sem procrastinar.',
      exampleRoutine: [
        { time: '08:00 - 09:30', task: 'Teoria & Anotações Ativas (Bloco 1)', type: 'Foco' },
        { time: '09:30 - 09:45', task: 'Pausa Estratégica & Café', type: 'Descanso' },
        { time: '09:45 - 11:15', task: 'Bateria de Questões & Caderno de Erros', type: 'Prática' },
        { time: '11:15 - 11:45', task: 'Flashcards & Revisão Espaçada', type: 'Fixação' },
      ],
    },
    {
      id: 'trabalho',
      label: 'Trabalho',
      icon: Briefcase,
      title: 'Para quem produz sob demanda',
      headline: 'Home office, autônomos, gestores e CLT',
      description: 'Proteja suas horas mais produtivas contra reuniões improdutivas e interrupções contínuas. Saiba exatamente qual entrega atacar a cada momento.',
      exampleRoutine: [
        { time: '09:00 - 10:30', task: 'Projeto Prioritário (Sem notificações)', type: 'Deep Work' },
        { time: '10:30 - 11:00', task: 'E-mails, Slack & Comunicação Rápida', type: 'Operacional' },
        { time: '11:00 - 12:00', task: 'Alinhamento & Reunião de Pauta', type: 'Reunião' },
        { time: '14:00 - 15:30', task: 'Execução Técnica & Relatórios', type: 'Foco' },
      ],
    },
    {
      id: 'treino',
      label: 'Treino',
      icon: Dumbbell,
      title: 'Para quem busca consistência física',
      headline: 'Musculação, corrida, natação ou esportes',
      description: 'Chega de deixar o treino para "quando sobrar tempo". Encaixe seus exercícios em um bloco reservado da sua rotina e mantenha a disciplina.',
      exampleRoutine: [
        { time: '06:30 - 07:00', task: 'Hidratação & Pré-treino Leve', type: 'Preparação' },
        { time: '07:00 - 08:00', task: 'Treino de Musculação & Força', type: 'Exercício' },
        { time: '08:00 - 08:20', task: 'Caminhada Moderada / Desaquecimento', type: 'Cardio' },
        { time: '08:20 - 08:50', task: 'Banho Restaurador & Café Completo', type: 'Recuperação' },
      ],
    },
    {
      id: 'casa',
      label: 'Casa',
      icon: Home,
      title: 'Para organizar o lar sem estresse',
      headline: 'Gestão doméstica, afazeres da família e compras',
      description: 'Mantenha o ambiente limpo e acolhedor sem gastar o fim de semana inteiro limpando. Distribua pequenas ações diárias com blocos leves.',
      exampleRoutine: [
        { time: '08:30 - 08:50', task: 'Arrumar quartos & Organização express', type: 'Ambiente' },
        { time: '12:00 - 12:30', task: 'Preparo do almoço balanceado', type: 'Alimentação' },
        { time: '17:30 - 18:00', task: 'Mercado / Hortifruti da semana', type: 'Família' },
        { time: '20:30 - 20:45', task: 'Louça lavada & Cozinha limpa para amanhã', type: 'Fechamento' },
      ],
    },
    {
      id: 'habitos',
      label: 'Hábitos',
      icon: Sparkles,
      title: 'Para construir rituais saudáveis',
      headline: 'Leitura, água, meditação e autocuidado',
      description: 'Hábitos funcionam melhor quando têm dia, horário e momento exatos para acontecer. Transforme boas intenções em práticas automáticas.',
      exampleRoutine: [
        { time: '07:00 - 07:15', task: 'Alongamento matinal & Copo de água', type: 'Ritual' },
        { time: '13:00 - 13:20', task: 'Leitura de desenvolvimento pessoal', type: 'Hábito' },
        { time: '16:00 - 16:10', task: 'Pausa para respiração consciente', type: 'Pausa' },
        { time: '21:30 - 22:00', task: 'Desconectar telas & Preparar o sono', type: 'Higiene' },
      ],
    },
    {
      id: 'rotina-pessoal',
      label: 'Rotina Pessoal',
      icon: Heart,
      title: 'Para quem quer paz de espírito',
      headline: 'Viver no seu próprio ritmo, sem sobrecarga',
      description: 'Recupere o controle sobre suas semanas. Equilibre trabalho, descanso, família e momentos de lazer sem a sensação de estar sempre atrasado.',
      exampleRoutine: [
        { time: '07:30 - 08:30', task: 'Manhã com calma (sem celular ao acordar)', type: 'Presença' },
        { time: '12:30 - 13:30', task: 'Almoço tranquilo sem pressa', type: 'Bem-estar' },
        { time: '18:30 - 19:30', task: 'Momento de lazer, hobby ou família', type: 'Conexão' },
        { time: '21:30 - 22:00', task: 'Reflexão do dia & Organizar o amanhã', type: 'Paz' },
      ],
    },
  ];

  const current = profiles.find((p) => p.id === activeTab) || profiles[0];
  const IconComponent = current.icon;

  return (
    <section className="relative py-24 lg:py-32 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Versatilidade Real
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Feito para se adaptar à sua realidade
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 text-balance">
            Seja para passar em um concurso público, bater metas no trabalho ou simplesmente viver com menos ansiedade.
          </p>
        </div>

        {/* Tab Buttons (Segmented Controls) */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {profiles.map((profile) => {
            const isTabActive = profile.id === activeTab;
            const TabIcon = profile.icon;
            return (
              <button
                key={profile.id}
                onClick={() => setActiveTab(profile.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isTabActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <TabIcon className="h-4 w-4" />
                <span>{profile.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Profile Showcase Box */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            
            {/* Left Description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100/80 px-3 py-1 rounded-md border border-emerald-200">
                <IconComponent className="h-4 w-4 text-emerald-600" />
                <span>{current.label}</span>
              </div>

              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                {current.title}
              </h3>

              <p className="mt-2 text-sm font-bold text-blue-700">
                {current.headline}
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="mt-8">
                <a
                  href="https://pay.cakto.com.br/4d3ugka_1134346"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  <span>Organizar minha rotina de {current.label.toLowerCase()}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: Simulated Routine Schedule Box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs text-slate-500">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span>Exemplo de Rotina: {current.label}</span>
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Estrutura Inteligente</span>
                </div>

                <div className="space-y-3">
                  {current.exampleRoutine.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs hover:border-slate-300 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                        <div>
                          <div className="font-bold text-slate-900">{item.task}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{item.time}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded border border-slate-200">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Você pode personalizar 100% dos seus blocos</span>
                  <span className="text-blue-600 font-bold">Flexibilidade total</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
