'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Organ Recipient',
    image: 'feedback.png',
    quote: 'Thanks to this platform, I received a life-saving kidney transplant. The transparency and efficiency of the process gave me peace of mind during a challenging time.',
  },
  {
    name: 'Michael Chen',
    role: 'Organ Donor',
    image: 'feedback.png',
    quote: 'As a donor, I appreciate how this platform ensures my privacy while allowing me to make a meaningful impact. The blockchain technology adds an extra layer of trust to the process.',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Transplant Surgeon',
    image: 'feedback.png',
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
    <div ref={containerRef} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">
          Trusted by Patients, Donors, and Medical Professionals
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out ${
                  index === currentTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                <div className="flex flex-col lg:flex-row bg-gray-50 shadow-lg rounded-lg p-8">
                  <img
                    className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <h3 className="text-2xl font-semibold text-blue-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                    <p className="text-lg text-gray-700">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full p-3 shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full p-3 shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
