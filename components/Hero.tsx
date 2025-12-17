import React from 'react';
import { RESERVATION_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('./fondo.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Floating Elements for Modern Touch */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-orange-400/15 rounded-full blur-lg animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        {/* Elegant Badge */}
        <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium tracking-wider uppercase text-orange-200 shadow-lg">
          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></span>
          Sierra Nevada
        </div>

        {/* Main Title with Enhanced Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 tracking-tight drop-shadow-2xl bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent leading-none">
          BRASA NEGRA
        </h1>

        {/* Subtitle with Better Typography */}
        <p className="max-w-3xl text-xl md:text-2xl font-light text-gray-100 mb-12 leading-relaxed tracking-wide drop-shadow-md">
          Los sabores auténticos de la carne a la brasa en el corazón de la Sierra Nevada
        </p>

        {/* Modern Button Design */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-semibold tracking-wider uppercase transition-all duration-300 rounded-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
          >
            <span className="relative z-10">Reservar Ahora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#carta"
            className="group px-10 py-4 border-2 border-white/40 hover:border-white/60 text-white font-semibold tracking-wider uppercase transition-all duration-300 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 shadow-xl hover:shadow-white/10 transform hover:scale-105"
          >
            Ver Carta
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
