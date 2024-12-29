import HeroSection from './components/HeroSection'
import MotivationSection from './components/MotivationSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQsSection from './components/FAQsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MotivationSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQsSection />
    </div>
  )
}

