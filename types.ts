export enum AppView {
  HOME = 'HOME',
  BASICS = 'BASICS',
  RULES = 'RULES',
  GRAPH = 'GRAPH',
  QUIZ = 'QUIZ',
  AI_TUTOR = 'AI_TUTOR'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
