import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Premium Recruitment</Link></li>
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Employer of Record</Link></li>
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Custom Development</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Our Process</Link></li>
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Why Armenia</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">LinkedIn</Link></li>
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Twitter</Link></li>
              <li><Link href="#" className="text-base text-gray-400 hover:text-white">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} KapTek. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <span>in</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <span>X</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <span>f</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 