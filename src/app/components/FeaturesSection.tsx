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
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to save lives
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our Web3 Organ Donation Platform leverages blockchain technology to create a secure, transparent, and efficient system for organ donation and transplantation.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

