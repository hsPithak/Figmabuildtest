import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#3A4B52] text-[#F5F3EF]">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C9A869] rounded-full flex items-center justify-center">
                  <span className="text-[#2D4A3E] text-lg sm:text-xl">🌿</span>
                </div>
                <h3 className="text-xl sm:text-2xl">The Canopy Retreat</h3>
              </div>
              <p className="text-sm sm:text-base text-[#F5F3EF]/70 mb-5 sm:mb-6 max-w-md">
                A secluded hillside sanctuary where modern luxury meets untouched nature. Experience the art of conscious hospitality.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5F3EF]/10 rounded-full flex items-center justify-center hover:bg-[#C9A869] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5F3EF]/10 rounded-full flex items-center justify-center hover:bg-[#C9A869] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F5F3EF]/10 rounded-full flex items-center justify-center hover:bg-[#C9A869] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base sm:text-lg mb-3 sm:mb-4 text-[#C9A869]">Contact</h4>
              <div className="space-y-2 sm:space-y-3">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm sm:text-base text-[#F5F3EF]/70 hover:text-[#C9A869] transition-colors">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:stay@canopyretreat.com" className="flex items-center gap-2 text-sm sm:text-base text-[#F5F3EF]/70 hover:text-[#C9A869] transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>stay@canopyretreat.com</span>
                </a>
                <div className="flex items-start gap-2 text-sm sm:text-base text-[#F5F3EF]/70">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                  <span>Hidden Valley Road<br />Tropical Highlands<br />Paradise Island</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg mb-3 sm:mb-4 text-[#C9A869]">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#" className="block text-sm sm:text-base text-[#F5F3EF]/70 hover:text-[#C9A869] transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-sm sm:text-base text-[#F5F3EF]/70 hover:text-[#C9A869] transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-sm sm:text-base text-[#F5F3EF]/70 hover:text-[#C9A869] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-sm sm:text-base text-[#F5F3EF]/70 hover:text-[#C9A869] transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="block text-sm sm:text-base text-[#F5F3EF]/70 hover:text-[#C9A869] transition-colors">
                  Sustainability
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-[#F5F3EF]/10 text-center text-[#F5F3EF]/50 text-xs sm:text-sm">
            <p>© 2024 The Canopy Retreat. All rights reserved. Crafted with care for conscious travelers.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
