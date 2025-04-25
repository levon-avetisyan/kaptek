"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="ml-2 text-xl font-semibold text-gray-900">KapTek</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="#services" className="nav-link text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link href="#process" className="nav-link text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Our Process
            </Link>
            <Link href="#projects" className="nav-link text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Projects
            </Link>
            <Link href="#about" className="nav-link text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link href="#contact" className="nav-link text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <Link href="#contact" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <span className="text-xl">✕</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="#services" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#process" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Process
          </Link>
          <Link 
            href="#projects" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="#about" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="#contact" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="#contact" 
            className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
} 