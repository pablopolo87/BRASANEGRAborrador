import React, { useState } from 'react';
import { askSommelier } from '../services/geminiService';
import { Wine, Send, Loader2 } from 'lucide-react';

export const Sommelier: React.FC = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setThinking(true);
    setAnswer("");
    const response = await askSommelier(query);
    setAnswer(response || "Lo siento, no pude encontrar una respuesta.");
    setThinking(false);
  };

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-900/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-orange-900/20 p-4 rounded-full mb-6">
            <Wine className="text-orange-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Nuestro Sommelier Digital</h2>
          <p className="text-gray-400 mb-8">
            ¿No sabes qué vino pedir con tu chuletón? ¿Buscas una recomendación especial?
            Pregunta a nuestra IA experta (Powered by Gemini 3.0 Thinking Mode).
          </p>

          <div className="bg-black/40 backdrop-blur-md border border-neutral-700 rounded-lg p-6 shadow-xl">
            <form onSubmit={handleAsk} className="flex gap-2 mb-6">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej: ¿Qué vino tinto me recomiendas para el chuletón de buey?"
                className="flex-1 bg-neutral-800 border border-neutral-600 text-white rounded px-4 py-3 focus:border-orange-500 outline-none transition-colors placeholder-gray-500"
              />
              <button 
                type="submit" 
                disabled={thinking}
                className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {thinking ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                <span className="hidden md:inline">Consultar</span>
              </button>
            </form>

            {answer && (
              <div className="text-left bg-neutral-800/80 p-6 rounded border border-orange-900/30 animate-fade-in">
                <h4 className="text-orange-300 font-serif mb-2 text-lg">Recomendación:</h4>
                <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{answer}</p>
              </div>
            )}
            
            {thinking && (
               <div className="text-center py-4 text-orange-400 text-sm animate-pulse">
                 El Sommelier está pensando la mejor opción para ti...
               </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
