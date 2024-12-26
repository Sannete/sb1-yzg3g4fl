import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InvestmentPlans from './components/InvestmentPlans';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <InvestmentPlans />
      
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Emerald Mars</h3>
              <p className="text-gray-300">Your trusted platform for cryptocurrency investments. We make digital asset investment accessible, secure, and profitable.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Investment Plans</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">Have questions? Our support team is here to help 24/7.</p>
              <button className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">
                Get Support
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Emerald Mars. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;