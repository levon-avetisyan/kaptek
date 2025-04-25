export default function Services() {
  return (
    <div id="services" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How We Help You Scale
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive solutions tailored for US-based startups and SMEs
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Premium Recruitment</h3>
              <p className="mt-2 text-base text-gray-500">
                We handle the entire hiring process from sourcing to technical screening, presenting you with only the best candidates.
              </p>
              <div className="mt-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Deep technical vetting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Cultural fit assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Competitive salary benchmarking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Employer of Record</h3>
              <p className="mt-2 text-base text-gray-500">
                Full legal employment infrastructure in Armenia so you can focus on managing your team, not paperwork.
              </p>
              <div className="mt-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Local legal compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Payroll & benefits administration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Tax & social security handling</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                <span className="text-xl">💻</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Custom Development</h3>
              <p className="mt-2 text-base text-gray-500">
                Need a complete project team? We assemble dedicated squads tailored to your technical requirements.
              </p>
              <div className="mt-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Full-stack development teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Specialized tech stack expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">✓</span>
                    <span>Agile project management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 