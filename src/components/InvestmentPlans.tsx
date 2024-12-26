import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '500',
    duration: '3 months',
    returns: '8%',
    features: [
      'Minimum deposit: $500',
      'Monthly returns',
      'Basic market analysis',
      '24/7 Support'
    ]
  },
  {
    name: 'Growth',
    price: '2500',
    duration: '6 months',
    returns: '12%',
    featured: true,
    features: [
      'Minimum deposit: $2,500',
      'Bi-weekly returns',
      'Advanced market analysis',
      'Priority support',
      'Portfolio diversification'
    ]
  },
  {
    name: 'Premium',
    price: '10000',
    duration: '12 months',
    returns: '15%',
    features: [
      'Minimum deposit: $10,000',
      'Weekly returns',
      'Expert market analysis',
      'VIP support',
      'Custom portfolio strategy',
      'Early access to new features'
    ]
  }
];

export default function InvestmentPlans() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Investment Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the investment plan that best suits your goals
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-lg shadow-lg divide-y divide-gray-200 ${plan.featured ? 'border-2 border-emerald-500' : 'border border-gray-200'}`}>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">minimum</span>
                </p>
                <p className="mt-1">
                  <span className="text-lg font-semibold text-emerald-600">{plan.returns}</span>
                  <span className="text-base font-medium text-gray-500"> returns/{plan.duration}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-6 w-6 text-emerald-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full px-4 py-2 rounded-md text-sm font-medium ${plan.featured ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-white text-emerald-600 border border-emerald-500 hover:bg-emerald-50'}`}>
                  Start Investing
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}