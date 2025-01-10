import HeroSection from './components/HeroSection'
import MotivationSection from './components/MotivationSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQsSection from './components/FAQsSection'
import Navbar from '/src/components/Navbar.tsx'
import Footer from '/src/components/Footer.tsx'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MotivationSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQsSection />
      <Footer />
    </div>
  )
}

