import { Sparkles, UtensilsCrossed, Trees, Waves } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AmenitiesSection() {
  const amenities = [
    {
      icon: Sparkles,
      title: "Canopy Spa",
      description: "Holistic treatments using indigenous botanicals in treatment rooms suspended among the treetops.",
      image: "https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzcyUyMHJlc29ydHxlbnwxfHx8fDE3NjQzMDE1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: UtensilsCrossed,
      title: "Forest Table",
      description: "Farm-to-table dining featuring locally-sourced ingredients and sunset tasting menus on the open terrace.",
      image: "https://images.unsplash.com/photo-1513772457252-c0417654a2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGVsZWdhbnR8ZW58MXx8fHwxNzY0MjI1NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Trees,
      title: "Nature Experiences",
      description: "Guided forest treks, sunrise meditation sessions, and private waterfall excursions led by local naturalists.",
      image: "https://images.unsplash.com/photo-1725101500102-eb5cd23448f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG5hdHVyZSUyMGV4Y3Vyc2lvbnxlbnwxfHx8fDE3NjQzMDE1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Waves,
      title: "Infinity Wellness",
      description: "Multiple heated pools, yoga pavilions, and a state-of-the-art fitness sanctuary with panoramic views.",
      image: "https://images.unsplash.com/photo-1758778689622-b756560264ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmZpbml0eSUyMHBvb2wlMjBzdW5zZXQlMjByZXNvcnR8ZW58MXx8fHwxNzY0MzAxNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="amenities" className="py-16 sm:py-20 md:py-24 bg-[#F5F3EF]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#C9A869] tracking-widest text-xs sm:text-sm">AMENITIES & WELLNESS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-3 sm:mt-4 text-[#2D4A3E]">
              Curated Experiences
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 text-[#3A4B52] max-w-2xl mx-auto px-4">
              Every moment at The Canopy Retreat is designed to restore, inspire, and reconnect you with yourself.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80">
                  <ImageWithFallback
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C9A869] rounded-full flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D4A3E]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl">
                        {amenity.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
