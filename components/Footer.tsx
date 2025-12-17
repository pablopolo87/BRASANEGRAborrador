import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-neutral-950 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3">
                BRASA NEGRA
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                El refugio perfecto para los amantes de la carne y el buen vino en el corazón de Sierra Nevada.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <MapPin size={18} className="text-orange-400" />
                </div>
                <span className="text-sm">Plaza de Pradollano, Hotel Meliá Sierra Nevada</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Phone size={18} className="text-green-400" />
                </div>
                <span className="text-sm">Cenas: 20:00 - 23:30 (Temporada)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <a href="#inicio" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Inicio</a>
              <a href="#sobre-nosotros" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Sobre Nosotros</a>
              <a href="#carta" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Carta</a>
              <a href="#galeria" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Galería</a>
              <a href="#qr-codes" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Códigos QR</a>
              <a href="#contacto" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Contacto</a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Síguenos</h4>
            <div className="flex flex-col gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Instagram size={18} className="text-white" />
                </div>
                <span className="text-sm">@brasanegrasierranevada</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <span className="text-sm">info@brasanegra.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Restaurante Brasa Negra. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6 text-xs text-gray-600">
              <span>KravenSolutions by Pablo López ©</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
