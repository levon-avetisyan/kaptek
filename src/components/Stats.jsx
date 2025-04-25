export default function Stats() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why KapTek</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Bridging the Talent Gap
          </p>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <span className="text-xl">%</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">40-60% Savings</h3>
              <p className="mt-2 text-base text-gray-500">
                Compared to US hiring costs with comparable talent quality
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">2-4 Weeks</h3>
              <p className="mt-2 text-base text-gray-500">
                Average time to hire for most technical roles
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <span className="text-xl">★</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Top 5%</h3>
              <p className="mt-2 text-base text-gray-500">
                We screen for only the top tier of Armenian tech talent
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <span className="text-xl">🌎</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">100% Remote</h3>
              <p className="mt-2 text-base text-gray-500">
                Seamless integration with your existing remote teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 