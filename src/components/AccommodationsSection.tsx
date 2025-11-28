import { ArrowRight, Users, Maximize } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AccommodationsSection() {
  const rooms = [
    {
      name: "Sky Villa",
      description: "Our pinnacle offering with private infinity pool, panoramic valley views, and an outdoor rain shower. Perfect for couples seeking ultimate privacy.",
      image: "https://images.unsplash.com/photo-1762255121620-3ca4c551404c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGJlZHJvb20lMjBuYXR1cmFsfGVufDF8fHx8MTc2NDMwMTU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      size: "120 sqm",
      guests: "2 Guests",
      features: ["Private Pool", "Valley View", "King Bed"]
    },
    {
      name: "Treetop Suite",
      description: "Elevated sanctuaries nestled among the canopy with floor-to-ceiling windows and a suspended meditation deck that hovers above the forest.",
      image: "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdWl0ZSUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3NjQzMDE1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      size: "85 sqm",
      guests: "2 Guests",
      features: ["Canopy View", "Meditation Deck", "Queen Bed"]
    },
    {
      name: "Garden Room",
      description: "Ground-level retreats with direct access to private gardens, outdoor soaking tubs, and stone-carved interiors that blend seamlessly with nature.",
      image: "https://images.unsplash.com/photo-1632830025328-cce71800b9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGdhcmRlbiUyMHJvb218ZW58MXx8fHwxNzY0MzAxNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      size: "70 sqm",
      guests: "2 Guests",
      features: ["Private Garden", "Soaking Tub", "King Bed"]
    }
  ];

  return (
    <section id="rooms" className="py-16 sm:py-20 md:py-24 bg-[#2D4A3E]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#C9A869] tracking-widest text-xs sm:text-sm">ACCOMMODATIONS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-3 sm:mt-4 text-[#F5F3EF]">
              Your Private Sanctuary
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 text-[#F5F3EF]/80 max-w-2xl mx-auto px-4">
              Each space is a masterpiece of design, thoughtfully crafted to frame the natural beauty that surrounds you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-[#F5F3EF] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group"
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 text-[#2D4A3E]">
                    {room.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-[#3A4B52]">
                    <div className="flex items-center gap-1">
                      <Maximize className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{room.guests}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#3A4B52] mb-3 sm:mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-[#2D4A3E]/10 text-[#2D4A3E] rounded-full text-xs sm:text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-[#C9A869] hover:gap-4 transition-all text-sm sm:text-base">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
