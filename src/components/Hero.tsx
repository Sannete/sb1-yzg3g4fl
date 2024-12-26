import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { TrendingUp, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 animate-gradient">
      <Container className="relative z-10">
        <div className="pt-20 pb-32 lg:pt-32 lg:pb-44">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-tight">
                Smart Crypto Investment{' '}
                <span className="inline-block bg-gradient-to-r from-brand-200 to-brand-400 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-brand-100">
                Join thousands of investors who trust Emerald Mars for their cryptocurrency investments. 
                Start your journey today with our secure and intuitive platform.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Start Investing Now
                </Button>
                <Button variant="outline" size="lg">
                  View Investment Plans
                </Button>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
                {[
                  { label: 'Active Investors', value: '50K+' },
                  { label: 'Total Invested', value: '$100M+' },
                  { label: 'Success Rate', value: '97%' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-sm leading-6 text-brand-200">{stat.label}</dt>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-5 lg:mt-0">
              <div className="relative rounded-2xl bg-brand-800/50 backdrop-blur-sm border border-brand-700/50 p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-brand-800/50 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Market Overview</h3>
                    <span className="text-sm text-brand-300">Live</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      { name: 'Bitcoin', price: '$45,234.21', change: '+5.67%' },
                      { name: 'Ethereum', price: '$3,123.45', change: '+3.21%' },
                      { name: 'Solana', price: '$98.76', change: '+8.90%' },
                    ].map((crypto) => (
                      <div key={crypto.name} className="flex items-center justify-between p-3 rounded-lg bg-brand-800/50">
                        <span className="text-white">{crypto.name}</span>
                        <div className="text-right">
                          <div className="text-white">{crypto.price}</div>
                          <div className="text-sm text-green-400">{crypto.change}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}