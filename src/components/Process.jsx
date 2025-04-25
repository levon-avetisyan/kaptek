export default function Process() {
  return (
    <div id="process" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our streamlined approach to connecting you with top talent
          </p>
        </div>
        
        <div className="mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-0 left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-lg font-medium text-gray-900">Needs Assessment</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We start by deeply understanding your technical requirements, team culture, and business objectives.
                    </p>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-600 border-4 border-white shadow-md">
                      <span className="text-xl font-bold">1</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:order-last md:text-left">
                    <h3 className="text-lg font-medium text-gray-900">Talent Sourcing</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our network and proprietary methods identify candidates matching your exact needs.
                    </p>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12 md:order-first">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-600 border-4 border-white shadow-md">
                      <span className="text-xl font-bold">2</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-lg font-medium text-gray-900">Technical Screening</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Rigorous technical evaluations ensure candidates meet your standards before you see them.
                    </p>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-600 border-4 border-white shadow-md">
                      <span className="text-xl font-bold">3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:order-last md:text-left">
                    <h3 className="text-lg font-medium text-gray-900">Client Interviews</h3>
                    <p className="mt-2 text-base text-gray-500">
                      You interview only the most qualified candidates who've passed our technical vetting.
                    </p>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12 md:order-first">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-600 border-4 border-white shadow-md">
                      <span className="text-xl font-bold">4</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-lg font-medium text-gray-900">Onboarding & Support</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We handle all employment logistics and provide ongoing support for successful integration.
                    </p>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-600 border-4 border-white shadow-md">
                      <span className="text-xl font-bold">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 