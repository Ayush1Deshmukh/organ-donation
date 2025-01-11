import { Shield, Zap, Users, Bell, Lock, RefreshCwIcon as Refresh } from 'lucide-react'

const features = [
  {
    name: 'Secure Registration',
    description: 'Register as a donor or recipient with blockchain-backed security.',
    icon: Shield,
  },
  {
    name: 'Transparent Process',
    description: 'Every step of the donation process is recorded on the blockchain for full transparency.',
    icon: Zap,
  },
  {
    name: 'Donor Anonymity',
    description: 'Protect donor identity while ensuring secure and verifiable donations.',
    icon: Users,
  },
  {
    name: 'Real-time Updates',
    description: 'Get instant notifications on organ availability and transplant status.',
    icon: Bell,
  },
  {
    name: 'Smart Contract Powered',
    description: 'Automated, fair, and efficient organ allocation through smart contracts.',
    icon: Lock,
  },
  {
    name: 'Interoperability',
    description: 'Seamless integration with existing healthcare systems and databases.',
    icon: Refresh,
  },
]

export default function FeaturesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Organ Donation Registry
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Transplant Management System
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
            Transforming organ donation and transplantation through secure blockchain technology and healthcare innovation.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-teal-700"
          >
            Register as a Donor
          </a>
        </div>
      </div>
    </div>
  )
}
