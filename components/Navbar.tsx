import React, { useState, useEffect } from 'react';
import { RESERVATION_URL } from '../constants';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with Modern Styling */}
        <div className="text-white font-serif font-bold text-2xl tracking-wider z-50 hover:text-orange-300 transition-colors duration-300 cursor-pointer">
            BRASA NEGRA
        </div>

        {/* Desktop Menu with Enhanced Styling */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#inicio" className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group">
            INICIO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#sobre-nosotros" className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group">
            SOBRE NOSOTROS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#carta" className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group">
            CARTA
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group">
            RESERVAS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#galeria" className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group">
            GALERÍA
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#qr-codes" className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group">
            CÓDIGOS QR
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contacto" className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group">
            CONTACTO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Modern CTA Button */}
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white text-sm font-semibold tracking-wide uppercase rounded-full shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 border border-orange-500/20"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-xl z-40 animate-fade-in">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">INICIO</a>
            <a href="#sobre-nosotros" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">SOBRE NOSOTROS</a>
            <a href="#carta" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">CARTA</a>
            <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">RESERVAS</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">GALERÍA</a>
            <a href="#qr-codes" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">CÓDIGOS QR</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">CONTACTO</a>
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-orange-700 text-white font-bold rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              RESERVAR MESA
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
