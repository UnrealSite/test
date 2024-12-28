import React from 'react';
import { Languages } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { Language } from '../types';

const languages: { code: Language; label: string; }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useApp();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Languages className="w-5 h-5" />
        <span>{languages.find(l => l.code === language)?.label}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}