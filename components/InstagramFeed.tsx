import React from 'react';
import { INSTAGRAM_URL } from '../constants';
import { Instagram } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4 mb-10 flex flex-col items-center">
        <Instagram className="text-orange-500 w-8 h-8 mb-4" />
        <h2 className="text-3xl font-serif text-white mb-2">@brasanegrasierranevada</h2>
        <a 
          href={INSTAGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white"
        >
          Síguenos en Instagram
        </a>
      </div>
      
      <div className="container mx-auto px-4 min-h-[400px]">
        {/* Elfsight Widget Div */}
        <div className="elfsight-app-c39183d6-3ba1-4ee8-ab11-93f909745c78" data-elfsight-app-lazy></div>
        
        {/* Fallback visual if widget doesn't load immediately or adblocker blocks it */}
        <div className="text-center text-gray-600 text-xs mt-4">
           Si no ves las fotos, <a href={INSTAGRAM_URL} className="underline" target="_blank" rel="noreferrer">haz clic aquí</a>.
        </div>
      </div>
    </section>
  );
};
