export default function Testimonials() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Johnson" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">CTO, FinTech Startup</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic">
                  "KapTek found us an incredible senior React developer in just 3 weeks. The quality of candidates was outstanding and we saved about 50% compared to US hires."
                </p>
              </div>
              <div className="mt-4 flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Michael Chen" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CEO, SaaS Company</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic">
                  "The EOR service made expanding our team to Armenia completely seamless. KapTek handled all the legal and payroll complexities so we could focus on product development."
                </p>
              </div>
              <div className="mt-4 flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="David Rodriguez" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-900">David Rodriguez</h4>
                  <p className="text-sm text-gray-500">VP Engineering, HealthTech</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic">
                  "We've hired 8 engineers through KapTek over the past year. Their technical screening is rigorous - every candidate has been technically excellent and a great culture fit."
                </p>
              </div>
              <div className="mt-4 flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 