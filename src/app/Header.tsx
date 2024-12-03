'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#8B4513]">Ardhisasa</span>
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
              FAQs
            </Link>
            <Button variant="outline">
            <Link href="/login" >
              LOGIN
            </Link>

              </Button>
            {/* Register dropdown */}
            <div className="relative">
              <Button
                className="flex items-center space-x-2"
                onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)}
              >
                <span>REGISTER</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              {registerDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border">
                  <Link
                    href="/individual"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setRegisterDropdownOpen(false)}
                  >
                    Register as Individual
                  </Link>
                  <Link
                    href="/company"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setRegisterDropdownOpen(false)}
                  >
                    Register as Company
                  </Link>
                </div>
              )}
            </div>
          </nav>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 py-3 space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/faqs"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <div className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/login" >
                    LOGIN
                  </Link>
                </Button>
                {/* Register dropdown for mobile */}
                <div className="relative">
                  <Button
                    className="w-full justify-center"
                    onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)}
                  >
                    REGISTER
                  </Button>
                  {registerDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white border">
                      <Link
                        href="/individual"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setRegisterDropdownOpen(false)}
                      >
                        Register as Individual
                      </Link>
                      <Link
                        href="/company"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setRegisterDropdownOpen(false)}
                      >
                        Register as Company
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
