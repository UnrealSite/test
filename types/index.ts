export type Language = 'en' | 'ru' | 'fr' | 'es' | 'de';

export type Theme = 'light' | 'dark';

export interface NetworkExample {
  name: string;
  description: Record<Language, string>;
  url: string;
  type: 'free' | 'paid';
  pricing?: string;
  features: string[];
}

export interface Section {
  title: Record<Language, string>;
  content: Record<Language, string>;
}