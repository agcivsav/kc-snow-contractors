import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black font-extrabold text-sm">RPM</span>
              </div>
              <div>
                <div className="font-extrabold text-white text-sm">RPM Equipment Leasing</div>
                <div className="text-xs text-yellow-400">Equipment Leasing</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium heavy equipment leasing — built for contractors, available year-round.
            </p>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Equipment</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/equipment/compact-wheel-loader" className="hover:text-yellow-400 transition-colors">CASE 321F Wheel Loader</Link></li>
              <li><Link href="/equipment/skid-steer" className="hover:text-yellow-400 transition-colors">CASE SV280B Skid Steer</Link></li>
              <li><Link href="/quote" className="hover:text-yellow-400 transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Rentals */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Rental Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/off-season-equipment-rental-kansas-city" className="hover:text-yellow-400 transition-colors">Off-Season Rentals</Link></li>
              <li><Link href="/spring-equipment-rental" className="hover:text-yellow-400 transition-colors">Spring Rentals</Link></li>
              <li><Link href="/summer-equipment-rental" className="hover:text-yellow-400 transition-colors">Summer Rentals</Link></li>
              <li><Link href="/fall-equipment-rental" className="hover:text-yellow-400 transition-colors">Fall Rentals</Link></li>
              <li><Link href="/contractor-program" className="hover:text-yellow-400 transition-colors">Contractor Program</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Get in Touch</Link></li>
              <li><Link href="/how-it-works" className="hover:text-yellow-400 transition-colors">How It Works</Link></li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mt-1">Serving our local service area</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} RPM Equipment Leasing. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link href="/rent-wheel-loader-kansas-city" className="hover:text-gray-300">Wheel Loader Rental KC</Link>
            <Link href="/rent-skid-steer-kansas-city" className="hover:text-gray-300">Skid Steer Rental KC</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
