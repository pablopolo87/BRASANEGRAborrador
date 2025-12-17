import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Download, Eye, QrCode, Smartphone, BookOpen } from 'lucide-react';
import { DigitalMenuViewer } from './DigitalMenuViewer';

export const Menu: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const menuPdfUrl = './Cartas%20Espan%CC%83ol%20ale%CC%81rgenos%20nuevo%202025%20traz.pdf';

  return (
    <section id="carta" className="py-20 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
            Nuestra Carta
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Sabores auténticos de la sierra</p>
        </div>

        {/* Menu Access Section */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif text-white mb-2">Accede a Nuestra Carta Completa</h3>
              <p className="text-gray-400">Descarga o visualiza nuestro menú con información de alérgenos</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Menu Actions */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsViewerOpen(true)}
                  className="group flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 w-full"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Carta Digital</h4>
                    <p className="text-gray-400 text-sm">Explora página por página</p>
                  </div>
                </button>

                <a
                  href={menuPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Eye size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Ver Carta Online</h4>
                    <p className="text-gray-400 text-sm">Visualiza en tu navegador</p>
                  </div>
                </a>

                <a
                  href={menuPdfUrl}
                  download="Carta_Brasa_Negra_2025.pdf"
                  className="group flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Download size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Descargar PDF</h4>
                    <p className="text-gray-400 text-sm">Guarda para más tarde</p>
                  </div>
                </a>
              </div>

              {/* QR Code Section */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <QrCode size={20} className="text-orange-400" />
                  <h4 className="text-white font-semibold">Código QR</h4>
                </div>
                <div className="bg-white p-4 rounded-2xl inline-block shadow-lg">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.origin + '/Cartas%20Espan%CC%83ol%20ale%CC%81rgenos%20nuevo%202025%20traz.pdf')}`}
                    alt="QR Code para Carta"
                    className="w-32 h-32"
                  />
                </div>
                <p className="text-gray-400 text-sm">Escanea para acceder a la carta</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Smartphone size={14} />
                  <span>Compatible con todos los dispositivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MENU_ITEMS.map((section, idx) => (
            <div key={idx} className="bg-neutral-800/50 p-8 rounded-sm border border-neutral-800 hover:border-orange-900/50 transition-colors">
              <h3 className="text-2xl font-serif text-orange-200 mb-6 border-b border-orange-900/30 pb-2">
                {section.category}
              </h3>
              <ul className="space-y-6">
                {section.items.map((item, i) => (
                  <li key={i} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-lg font-medium group-hover:text-orange-400 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-orange-300 font-serif">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 italic">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                * Nota: Los precios e ingredientes pueden variar según temporada y mercado. Disponemos de carta de alérgenos.
            </p>
        </div>
      </div>

      {/* Digital Menu Viewer Modal */}
      <DigitalMenuViewer isOpen={isViewerOpen} onClose={() => setIsViewerOpen(false)} />
    </section>
  );
};
