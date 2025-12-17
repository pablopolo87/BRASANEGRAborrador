import React from 'react';
import { MOCK_REVIEWS, TRIPADVISOR_URL } from '../constants';
import { Star, ExternalLink } from 'lucide-react';
import { Review } from '../types';

export const ReviewsCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex justify-between items-end">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Opiniones Reales
            </h2>
            <p className="text-xl text-gray-400 font-light">Lo que dicen nuestros clientes en TripAdvisor</p>
          </div>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-white/10"
          >
            <span className="text-white font-medium">Ver todos</span>
            <ExternalLink size={16} className="text-orange-400 group-hover:text-orange-300 transition-colors" />
          </a>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>

        <div className="flex animate-scroll hover:pause w-max">
          {/* First set of reviews */}
          <div className="flex gap-8 px-6">
            {MOCK_REVIEWS.map((review) => (
              <ReviewCard key={`a-${review.id}`} review={review} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-8 px-6">
            {MOCK_REVIEWS.map((review) => (
              <ReviewCard key={`b-${review.id}`} review={review} />
            ))}
          </div>
          {/* Third set for extra smoothness */}
          <div className="flex gap-8 px-6">
            {MOCK_REVIEWS.map((review) => (
              <ReviewCard key={`c-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-[320px] md:w-[420px] flex-shrink-0 flex flex-col justify-between hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500 group shadow-2xl hover:shadow-orange-500/10 transform hover:scale-105">
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full border-2 border-orange-400/50 shadow-lg" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-neutral-900"></div>
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-base mb-1">{review.user}</h4>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < review.rating ? "#f59e0b" : "none"}
                className={i < review.rating ? "text-yellow-400" : "text-gray-600"}
              />
            ))}
            <span className="text-yellow-400 text-sm font-medium ml-2">{review.rating}.0</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <p className="text-gray-200 text-base leading-relaxed italic">"{review.text}"</p>
        <div className="absolute -top-2 -left-2 text-4xl text-orange-400/20 font-serif">"</div>
        <div className="absolute -bottom-4 -right-2 text-4xl text-orange-400/20 font-serif rotate-180">"</div>
      </div>
    </div>

    <div className="flex justify-between items-center pt-6 border-t border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-orange-300 font-medium text-sm">TripAdvisor</span>
      </div>
      <span className="text-gray-400 text-sm font-medium">{review.date}</span>
    </div>
  </div>
);
