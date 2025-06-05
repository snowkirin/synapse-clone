export type Locale = 'ko' | 'en';

export const messages = {
  ko: {
    button: '버튼',
    todos: '할 일',
    loading: '로딩 중...',
    error: '오류: ',
  },
  en: {
    button: 'Button',
    todos: 'Todos',
    loading: 'Loading...',
    error: 'Error: ',
  },
} as const;

export function getMessages(locale: string) {
  return messages[locale as Locale] ?? messages.ko;
}
