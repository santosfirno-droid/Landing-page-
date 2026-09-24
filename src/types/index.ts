export interface RoutineBlock {
  id: string;
  title: string;
  category: 'foco' | 'estudo' | 'saude' | 'habito' | 'pausa' | 'casa';
  time: string;
  durationMinutes: number;
  status: 'concluido' | 'agora' | 'proximo' | 'pendente';
  notes?: string;
}

export interface UseCase {
  id: string;
  label: string;
  tagline: string;
  description: string;
  blocks: RoutineBlock[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
