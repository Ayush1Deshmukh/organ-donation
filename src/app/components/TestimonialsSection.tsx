'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Organ Recipient',
    image: '/testimonial-1.jpg',
    quote: 'Thanks to this platform, I received a life-saving kidney transplant. The transparency and efficiency of the process gave me peace of mind during a challenging time.',
  },
  {
    name: 'Michael Chen',
    role: 'Organ Donor',
    image: '/testimonial-2.jpg',
    quote: 'As a donor, I appreciate how this platform ensures my privacy while allowing me to make a meaningful impact. The blockchain technology adds an extra layer of trust to the process.',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Transplant Surgeon',
    image: '/testimonial-3.jpg',
    quote: 'This Web3 platform has revolutionized how we manage organ donations. The real-time updates and secure data sharing have significantly improved our ability to save lives.',
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(nextTestimonial, 5000)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What People Are Saying</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-all duration-500 ease-in-out ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-16 h-16 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-600">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

