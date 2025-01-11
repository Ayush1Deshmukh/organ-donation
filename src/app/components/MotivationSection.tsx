import React from 'react';
import { Shield, Clock, Heart, Users, ChartBar, PhoneCall } from 'lucide-react';

export default function MotivationSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Making Organ Donation
            <span className="block text-blue-700 mt-2">Safe and Accessible</span>
          </h2>
          
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Our advanced digital registry system ensures a transparent, secure, and 
            efficient organ donation process, connecting donors with recipients seamlessly.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Patient Safety Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Safety First</h3>
            <p className="text-gray-600">
              Our system maintains the highest medical standards with strict verification 
              protocols and comprehensive health screening processes.
            </p>
          </div>

          {/* Quick Matching Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <ChartBar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Matching</h3>
            <p className="text-gray-600">
              Our intelligent matching system considers multiple medical criteria to ensure 
              the best possible donor-recipient compatibility.
            </p>
          </div>

          {/* 24/7 Support Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <PhoneCall className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Medical Support</h3>
            <p className="text-gray-600">
              Our dedicated medical team is available around the clock to provide 
              assistance and answer any questions you may have.
            </p>
          </div>

          {/* Real-time Updates Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Updates</h3>
            <p className="text-gray-600">
              Stay informed with instant notifications about matching opportunities 
              and procedure status updates through our secure platform.
            </p>
          </div>

          {/* Nationwide Network Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nationwide Network</h3>
            <p className="text-gray-600">
              Connect with leading transplant centers and medical professionals 
              across the country through our extensive healthcare network.
            </p>
          </div>

          {/* Secure Records Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Records</h3>
            <p className="text-gray-600">
              Your medical information is protected with state-of-the-art security 
              measures, ensuring complete confidentiality and privacy.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Heart className="w-5 h-5 mr-2" />
              Become a Donor
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}