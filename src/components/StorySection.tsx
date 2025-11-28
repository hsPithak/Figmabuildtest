import { ImageWithFallback } from './figma/ImageWithFallback';

export function StorySection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1690199827629-552c41f6450f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGx1eHVyeSUyMHJlc29ydCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQzMDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Resort architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1744782996458-df62a31777aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQzMDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Interior design"
    },
    {
      src: "https://images.unsplash.com/photo-1761468698333-be031bca0c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMG5hdHVyZSUyMHZpZXd8ZW58MXx8fHwxNzY0MzAxNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Nature view"
    }
  ];

  return (
    <section id="story" className="py-16 sm:py-20 md:py-24 bg-[#F5F3EF]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-[#C9A869] tracking-widest text-xs sm:text-sm">OUR PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-[#2D4A3E]">
                A Sanctuary Above the World
              </h2>
              <p className="text-base sm:text-lg text-[#3A4B52] mb-4 sm:mb-6 leading-relaxed">
                Perched on a secluded hillside, The Canopy Retreat is more than a destination—it's a return to what matters. Here, modern architecture dissolves into lush tropical canopy, creating spaces where luxury and nature are inseparable.
              </p>
              <p className="text-base sm:text-lg text-[#3A4B52] mb-4 sm:mb-6 leading-relaxed">
                Every detail has been thoughtfully designed to honor the landscape while providing you with uncompromising comfort. From sustainable materials to expansive views, we invite you to experience a new standard of conscious luxury.
              </p>
              <p className="text-base sm:text-lg text-[#3A4B52] leading-relaxed">
                This is your escape. Your sanctuary. Your retreat.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 md:order-2">
              <div className="col-span-2">
                <ImageWithFallback
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <ImageWithFallback
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-44 sm:h-52 md:h-64 object-cover rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-44 sm:h-52 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
