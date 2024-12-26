import React from 'react';
import { Shield, TrendingUp, Clock, Wallet } from 'lucide-react';

const features = [
  {
    name: 'Secure Platform',
    description: 'Bank-grade security measures to protect your investments and personal data.',
    icon: Shield
  },
  {
    name: 'High Returns',
    description: 'Competitive investment plans with attractive returns on your investments.',
    icon: TrendingUp
  },
  {
    name: '24/7 Trading',
    description: 'Trade and monitor your investments around the clock from anywhere.',
    icon: Clock
  },
  {
    name: 'Easy Deposits',
    description: 'Multiple payment options for seamless deposits and withdrawals.',
    icon: Wallet
  }
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Emerald Mars
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the future of cryptocurrency investment with our cutting-edge platform.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}