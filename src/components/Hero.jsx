"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="gradient-bg hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect with Top Armenian Tech Talent</h1>
            <p className="text-xl text-blue-100 mb-8">KapTek bridges US startups and SMEs with Armenia's exceptional tech professionals through premium recruitment and Employer of Record services.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Hire Talent Now
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 fade-in">
            {/* <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Team collaboration"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-xl"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
} 