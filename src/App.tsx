import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <AccommodationsSection />
        <AmenitiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
