import React from 'react';
import { ClipboardCheck, Stethoscope, UserCheck, Hospital, Heart } from 'lucide-react';

const medicalSteps = [
  {
    name: 'Medical Evaluation',
    description: 'Complete a thorough medical assessment with our healthcare team to determine eligibility.',
    icon: Stethoscope,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Registration & Consent',
    description: 'Register in our secure system and provide necessary medical documentation and consent forms.',
    icon: ClipboardCheck,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Compatibility Testing',
    description: 'Undergo comprehensive testing to ensure the best possible donor-recipient match.',
    icon: UserCheck,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    name: 'Medical Center Coordination',
    description: 'Work with our network of transplant centers to schedule and prepare for the procedure.',
    icon: Hospital,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

export default function HowItWorksSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Journey to
            <span className="block text-blue-700 mt-2">Saving Lives</span>
          </h2>
          
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            We guide you through every step of the organ donation process with dedicated 
            medical support and care.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100" />
            
            {/* Steps */}
            <div className="space-y-16">
              {medicalSteps.map((step, index) => (
                <div key={step.name} className="relative">
                  <div className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}>
                    {/* Number Circle - Centered on the line */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className="w-10 h-10 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center">
                        <span className="text-lg font-bold text-blue-600">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                        {/* Mobile Number (visible only on small screens) */}
                        <div className="lg:hidden absolute -left-4 top-6 w-8 h-8 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                        </div>
                        
                        <div className={`absolute -top-4 ${index % 2 === 0 ? 'right-8' : 'left-8'} w-12 h-12 ${step.bgColor} rounded-lg flex items-center justify-center`}>
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{step.name}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Have questions about the donation process?
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Speak with a Coordinator
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}