import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Menu } from './components/Menu';
import { QRCodeSection } from './components/QRCodeSection';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { RESERVATION_URL } from './constants';

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-gray-200">
      <Navbar />

      <main>
        <div id="inicio">
          <Hero />
        </div>

        {/* Sticky Reservation Button for Mobile */}
        <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-sm">
          <a
             href={RESERVATION_URL}
             target="_blank"
             rel="noopener noreferrer"
             className="block w-full bg-orange-700 text-white text-center py-4 rounded shadow-lg font-bold uppercase tracking-widest border border-orange-500"
          >
            Reservar Mesa
          </a>
        </div>

        <div id="sobre-nosotros">
          <InfoSection />
        </div>
        <div id="carta">
          <Menu />
        </div>
        <QRCodeSection />
        <div id="galeria">
          <ReviewsCarousel />
          <InstagramFeed />
        </div>
      </main>

      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
