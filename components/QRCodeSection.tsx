import React from 'react';
import { QrCode, Smartphone, Download, Share2 } from 'lucide-react';

interface QRCodeItem {
  title: string;
  description: string;
  url: string;
  color: string;
}

export const QRCodeSection: React.FC = () => {
  const qrCodes: QRCodeItem[] = [
    {
      title: "Carta del Restaurante",
      description: "Accede a nuestro menú completo con información de alérgenos",
      url: "/Cartas%20Espan%CC%83ol%20ale%CC%81rgenos%20nuevo%202025%20traz.pdf",
      color: "blue"
    },
    {
      title: "Reservar Mesa",
      description: "Haz tu reserva online de forma rápida y sencilla",
      url: "https://www.covermanager.com/reservation/module_restaurant/restaurante-brasanegra-bodeguita/spanish?source=INSTAGRAM",
      color: "orange"
    },
    {
      title: "Síguenos en Instagram",
      description: "Descubre nuestras fotos y novedades",
      url: "https://www.instagram.com/brasanegrasierranevada",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        border: "border-blue-500/50",
        hover: "hover:border-blue-400"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        border: "border-orange-500/50",
        hover: "hover:border-orange-400"
      },
      pink: {
        bg: "from-pink-500 to-orange-500",
        border: "border-pink-500/50",
        hover: "hover:border-pink-400"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="qr-codes" className="py-20 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
            Códigos QR
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Acceso rápido desde tu móvil</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {qrCodes.map((item, index) => {
            const colors = getColorClasses(item.color);
            const fullUrl = item.url.startsWith('http') ? item.url : `${window.location.origin}${item.url}`;

            return (
              <div key={index} className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
                <div className="text-center space-y-6">
                  {/* QR Code */}
                  <div className="relative">
                    <div className={`p-4 bg-gradient-to-br ${colors.bg} rounded-2xl inline-block shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(fullUrl)}&bgcolor=ffffff&color=000000&format=png`}
                        alt={`QR Code ${item.title}`}
                        className="w-32 h-32 bg-white rounded-lg"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-neutral-900 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => window.open(fullUrl, '_blank')}
                      className={`flex items-center gap-2 px-4 py-2 bg-white/10 border ${colors.border} ${colors.hover} rounded-xl text-white text-sm font-medium transition-all duration-300 hover:bg-white/20`}
                    >
                      <Smartphone size={16} />
                      Abrir
                    </button>
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(fullUrl)}`;
                        link.download = `QR_${item.title.replace(/\s+/g, '_')}.png`;
                        link.click();
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 hover:border-white/40 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:bg-white/20"
                    >
                      <Download size={16} />
                      Descargar
                    </button>
                  </div>

                  {/* URL Display */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 break-all">{fullUrl}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Print Instructions */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Share2 size={20} className="text-orange-400" />
              <h3 className="text-white font-semibold">Para Uso en el Restaurante</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Imprime estos códigos QR y colócalos en mesas, cartas físicas o puntos estratégicos del restaurante.
              Tus clientes podrán acceder fácilmente al menú, hacer reservas o seguirte en redes sociales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
