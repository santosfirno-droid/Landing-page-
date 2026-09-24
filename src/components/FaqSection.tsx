import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'É assinatura ou pagamento mensal?',
      answer:
        'Não! Não é assinatura e não tem mensalidade. Você paga uma única vez o valor de R$ 49,90 e tem acesso vitalício ao aplicativo, com todas as funções e atualizações inclusas.',
    },
    {
      question: 'Tem alguma mensalidade oculta?',
      answer:
        'Nenhuma. Ao adquirir o Minha Rotina Aí, o acesso é permanente e intransferível. Você nunca mais será cobrado por ele.',
    },
    {
      question: 'Funciona no celular?',
      answer:
        'Sim, perfeitamente! O aplicativo é mobile-first e foi projetado para uma experiência impecável em qualquer smartphone (Android ou iPhone), além de funcionar com excelência em tablets e computadores.',
    },
    {
      question: 'Preciso instalar algo pesado da loja de aplicativos?',
      answer:
        'Não precisa ocupar espaço na memória do seu aparelho. O Minha Rotina Aí é um aplicativo web progressivo moderno (PWA). Você acessa direto pelo navegador e pode adicionar o ícone à sua tela inicial com um toque, funcionando exatamente como um app nativo.',
    },
    {
      question: 'Posso criar minhas próprias rotinas personalizadas?',
      answer:
        'Sim! Você tem controle total. Pode criar rotinas para dias de semana, fins de semana, períodos de provas, treinos ou viagens. Cada bloco de tempo pode ter o nome, a duração e os detalhes que fizerem sentido para você.',
    },
    {
      question: 'Meus dados e histórico ficam salvos?',
      answer:
        'Sim! Todas as suas rotinas, blocos concluídos e hábitos ficam vinculados à sua conta individual segura. Ao acessar em outro dispositivo, tudo já estará atualizado em tempo real.',
    },
    {
      question: 'Posso usar para estudar e passar em concursos?',
      answer:
        'Com certeza! Muitos dos nossos usuários utilizam o Minha Rotina Aí para organizar ciclos de estudos, bater editais de concursos e faculdade. O Modo Agora é perfeito para manter o foco em uma matéria por vez sem dispersão.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Perguntas Frequentes
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Tire todas as suas dúvidas
          </h2>
          <p className="mt-3 text-base text-slate-600 text-balance">
            Tudo o que você precisa saber de forma clara e transparente antes de começar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-slate-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 text-left text-base font-bold text-slate-900 transition-colors hover:text-blue-600 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600 bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
