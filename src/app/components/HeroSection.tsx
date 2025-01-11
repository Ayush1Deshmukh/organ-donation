import React from 'react';
import Link from 'next/link';
import { Heart, Users, Clock, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-white">
      {/* Main Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Saving Lives Together</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Transform Lives Through
                <span className="block text-blue-700 mt-2">Organ Donation</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl">
                Join our secure and transparent organ donation registry. Together, we can give the gift of life and create hope for those in need of transplants.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Become a Donor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                
                <Link
                  href="/need-transplant"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 rounded-lg text-base font-medium text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
                >
                  Need a Transplant
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[500px]">
              <img
                src="hero.png"
                alt="Medical team performing surgery"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">15,000+</h3>
            <p className="text-gray-600">Lives Saved Through Donations</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">50,000+</h3>
            <p className="text-gray-600">Registered Donors</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Support & Assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}