import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggle } from './components/ThemeToggle';
import { Brain } from 'lucide-react';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <Brain className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold">NeuroGuide</span>
              </div>
              <div className="flex items-center gap-4">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <section className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">
                Understanding Neural Networks
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                A comprehensive guide to artificial intelligence and neural networks
              </p>
            </section>

            {/* Add more sections here */}
          </div>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;