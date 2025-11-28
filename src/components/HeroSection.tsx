import { Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758778689622-b756560264ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmZpbml0eSUyMHBvb2wlMjBzdW5zZXQlMjByZXNvcnR8ZW58MXx8fHwxNzY0MzAxNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury infinity pool at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative w-full py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 text-[#F5F3EF] px-4">
              Embrace Tranquility
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 text-[#F5F3EF]/90 px-4">
              Where modern luxury meets untouched nature in perfect harmony
            </p>

            {/* Booking Widget */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-4 sm:p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <label className="text-[#3A4B52] text-sm mb-2">Check In</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4A3E] flex-shrink-0" />
                    <input
                      type="date"
                      className="flex-1 outline-none text-[#3A4B52] text-sm sm:text-base min-w-0"
                      defaultValue="2024-12-15"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[#3A4B52] text-sm mb-2">Check Out</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4A3E] flex-shrink-0" />
                    <input
                      type="date"
                      className="flex-1 outline-none text-[#3A4B52] text-sm sm:text-base min-w-0"
                      defaultValue="2024-12-18"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:col-span-2 md:col-span-1">
                  <label className="text-[#3A4B52] text-sm mb-2">Guests</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4A3E] flex-shrink-0" />
                    <select className="flex-1 outline-none text-[#3A4B52] bg-transparent text-sm sm:text-base">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 sm:mt-6 bg-[#C9A869] text-white py-3 sm:py-4 rounded hover:bg-[#D4B87A] transition-colors text-base sm:text-lg">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
