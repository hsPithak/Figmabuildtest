import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#2D4A3E]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C9A869] rounded-full flex items-center justify-center">
            <span className="text-[#F5F3EF] text-lg sm:text-xl">🌿</span>
          </div>
          <h1 className="text-[#F5F3EF] text-lg sm:text-2xl tracking-wide">The Canopy Retreat</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button
            onClick={() => scrollToSection('story')}
            className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection('rooms')}
            className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors"
          >
            Rooms
          </button>
          <button
            onClick={() => scrollToSection('amenities')}
            className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors"
          >
            Amenities
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('hero')}
            className="bg-[#C9A869] text-[#2D4A3E] px-5 xl:px-6 py-2 rounded hover:bg-[#D4B87A] transition-colors"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#F5F3EF] p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#2D4A3E] border-t border-[#F5F3EF]/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('story')}
              className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors text-left py-2"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors text-left py-2"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors text-left py-2"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#F5F3EF] hover:text-[#C9A869] transition-colors text-left py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-[#C9A869] text-[#2D4A3E] px-6 py-3 rounded hover:bg-[#D4B87A] transition-colors text-center"
            >
              Book Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
