import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690199827629-552c41f6450f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGx1eHVyeSUyMHJlc29ydCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQzMDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="The Canopy Retreat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2D4A3E]/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-[#F5F3EF] px-4">
          Ready to Escape?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-[#F5F3EF]/90 max-w-2xl mx-auto px-4">
          Your sanctuary awaits. Begin your journey to The Canopy Retreat and discover a new definition of luxury.
        </p>
        <button className="bg-[#C9A869] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-lg hover:bg-[#D4B87A] transition-colors text-base sm:text-lg shadow-2xl">
          Check Availability Now
        </button>
      </div>
    </section>
  );
}
