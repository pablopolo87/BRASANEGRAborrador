import React, { useEffect, useState } from 'react';
import { getWeatherData, WeatherData } from '../services/weatherService';
import { MapPin, Info, CloudSnow, Thermometer, Droplets, Wind, RefreshCw } from 'lucide-react';

export const InfoSection: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherData();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchWeather();

    // Update weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Weather Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg">
                <CloudSnow size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Estado en Directo</h3>
                <p className="text-orange-300 text-sm font-medium">Tiempo en Pradollano</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-neutral-700 rounded-2xl"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-neutral-700 rounded w-24"></div>
                      <div className="h-4 bg-neutral-700 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-4 bg-neutral-700 rounded"></div>
                    <div className="h-4 bg-neutral-700 rounded"></div>
                  </div>
                </div>
              ) : error || !weather ? (
                <div className="text-center py-8">
                  <RefreshCw className="mx-auto mb-4 text-gray-400" size={32} />
                  <p className="text-gray-400 font-medium">No se pudo cargar el tiempo</p>
                  <p className="text-gray-500 text-sm mt-1">Inténtalo de nuevo más tarde</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                        <img
                          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                          alt={weather.description}
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-white mb-1">{weather.temperature}°C</p>
                        <p className="text-gray-300 capitalize font-medium">{weather.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{weather.location}</p>
                      <p className="text-orange-300 text-sm flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        En vivo
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Droplets size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{weather.humidity}%</p>
                        <p className="text-gray-400 text-xs">Humedad</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="p-2 bg-gray-500/20 rounded-lg">
                        <Wind size={18} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{weather.windSpeed} km/h</p>
                        <p className="text-gray-400 text-xs">Viento</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Brasa Negra Bodeguita
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Somos el refugio perfecto para los amantes de la carne y el buen vino.
                Nuestra brasa es el corazón de la cocina, donde elaboramos los mejores cortes con paciencia y maestría.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Ubicación</h4>
                  <p className="text-gray-300 leading-relaxed">Plaza de Pradollano, Hotel Meliá Sierra Nevada</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
                  <Info size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Horario</h4>
                  <p className="text-gray-300 leading-relaxed">Cenas: 20:00 - 23:30<br/><span className="text-orange-300 font-medium">Todos los días en temporada</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
