'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Cardiac Care Patient',
    image: 'feedback.png',
    quote: 'The cardiac team provided exceptional care during my heart surgery. Their expertise and compassion made a difficult time much easier to handle.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Chief of Surgery',
    image: 'feedback.png',
    quote: 'Our state-of-the-art facilities and dedicated staff ensure that every patient receives the highest standard of care possible.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Emergency Room Patient',
    image: 'feedback.png',
    quote: 'The ER team acted swiftly and professionally during my crisis. I cannot thank them enough for their quick response and attention to detail.',
  },
  {
    name: 'James Wilson',
    role: 'Orthopedic Patient',
    image: 'feedback.png',
    quote: 'After my knee replacement surgery, the rehabilitation team helped me get back on my feet faster than I expected.',
  },
  {
    name: 'Dr. Lisa Park',
    role: 'Pediatric Specialist',
    image: 'feedback.png',
    quote: 'Working with children requires special care and attention. Our pediatric unit ensures every child feels safe and comfortable.',
  },
  {
    name: 'Robert Thompson',
    role: 'Cancer Survivor',
    image: 'feedback.png',
    quote: 'The oncology department provided not just medical treatment, but emotional support throughout my entire journey.',
  },
  {
    name: 'Maria Garcia',
    role: 'Maternity Patient',
    image: 'feedback.png',
    quote: 'The maternity ward staff made the birth of my first child a wonderful experience. Their expertise was truly reassuring.',
  },
  {
    name: 'Dr. David Cohen',
    role: 'Neurologist',
    image: 'feedback.png',
    quote: 'Our neurology department combines cutting-edge technology with compassionate care to achieve the best possible outcomes.',
  },
  {
    name: 'Patricia Lee',
    role: 'Physical Therapy Patient',
    image: 'feedback.png',
    quote: 'The physical therapy team developed a personalized recovery plan that helped me regain my strength and mobility.',
  },
]

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / cardsPerPage)

  const nextPage = () => {
    if (!isTransitioning && currentPage < totalPages - 1) {
      setIsTransitioning(true)
      setShowControls(false)
      setCurrentPage(prev => prev + 1)
      setTimeout(() => {
        setIsTransitioning(false)
        setShowControls(true)
      }, 500)
    }
  }

  const prevPage = () => {
    if (!isTransitioning && currentPage > 0) {
      setIsTransitioning(true)
      setShowControls(false)
      setCurrentPage(prev => prev - 1)
      setTimeout(() => {
        setIsTransitioning(false)
        setShowControls(true)
      }, 500)
    }
  }

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowControls(true)
    }, 500)

    return () => clearTimeout(initialTimer)
  }, [])

  const getVisibleTestimonials = () => {
    const start = currentPage * cardsPerPage
    return testimonials.slice(start, start + cardsPerPage)
  }

  return (
    <div ref={containerRef} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-12">
          Patient & Staff Testimonials
        </h2>
        
        <div className="relative">
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-blue-100">
                    <div className="flex items-center mb-6">
                      <img
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-50"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-blue-900">{testimonial.name}</h3>
                        <p className="text-sm text-blue-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showControls && !isTransitioning && (
            <>
              {currentPage > 0 && (
                <button
                  onClick={prevPage}
                  className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-800 rounded-full p-3 shadow-lg border border-blue-100 transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}
              {currentPage < totalPages - 1 && (
                <button
                  onClick={nextPage}
                  className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-800 rounded-full p-3 shadow-lg border border-blue-100 transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </>
          )}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentPage ? 'bg-blue-600' : 'bg-blue-200'
              }`}
              onClick={() => !isTransitioning && setCurrentPage(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </div>
  )
}