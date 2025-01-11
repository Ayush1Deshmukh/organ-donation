"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does blockchain ensure the security of my medical information?',
    answer: 'Blockchain technology uses advanced cryptography to secure your data. Each piece of information is encrypted and distributed across a network of computers, making it extremely difficult for unauthorized parties to access or tamper with your medical information.',
  },
  {
    question: 'Can I choose who receives my donated organs?',
    answer: 'While you cannot directly choose the recipient, you can specify certain criteria or preferences. The allocation of organs is primarily based on medical urgency, compatibility, and other factors determined by healthcare professionals and our smart contract system to ensure fair distribution.',
  },
  {
    question: 'How does the matching process work?',
    answer: 'Our platform uses smart contracts to automatically match donors with compatible recipients based on various factors such as blood type, tissue type, medical urgency, and geographical location. This ensures a fair and efficient allocation process.',
  },
  {
    question: 'Is my personal information visible on the blockchain?',
    answer: 'No, your personal information is not directly stored on the blockchain. We use a system of encrypted identifiers to protect your privacy while still maintaining the transparency and integrity of the donation process.',
  },
  {
    question: 'How can I track the status of my donation or transplant?',
    answer: "Once registered, you'll have access to a secure dashboard where you can view real-time updates on your donation or transplant status. You'll receive notifications at each stage of the process, from matching to final transplantation.",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 shadow-md rounded-lg p-6"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-blue-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
