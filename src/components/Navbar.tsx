import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Gem, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-brand-900/90 backdrop-blur-sm z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Gem className="h-8 w-8 text-brand-400" />
            </div>
            <span className="ml-2 text-xl font-display font-bold text-white">Emerald Mars</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#" className="text-brand-100 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-brand-100 hover:text-white transition-colors">
                Plans
              </a>
              <a href="#" className="text-brand-100 hover:text-white transition-colors">
                About
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Sign Up
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-100 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-100 hover:text-white hover:bg-brand-800"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-100 hover:text-white hover:bg-brand-800"
              >
                Plans
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-100 hover:text-white hover:bg-brand-800"
              >
                About
              </a>
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}