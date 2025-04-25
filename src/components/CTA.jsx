import Link from 'next/link';

export default function CTA() {
  return (
    <div className="gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to build your dream team?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Let's discuss how KapTek can help you access Armenia's top tech talent with minimal hassle and maximum results.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 