import {Image} from 'next/image';

export default function About() {
  return (
    <div id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            {/* <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Team working"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-lg"
            /> */}
          </div>
          <div className="mt-12 lg:mt-0 lg:pl-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Armenia?
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Armenia has emerged as a hidden gem for tech talent, with a strong engineering culture, excellent technical education, and high English proficiency.
            </p>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      <span className="text-base">🎓</span>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-semibold">World-Class Education:</span> Armenia produces over 1,000 highly skilled IT graduates annually from top technical universities.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      <span className="text-base">🌎</span>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-semibold">Time Zone Advantage:</span> Overlapping work hours with US time zones enable real-time collaboration.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      <span className="text-base">💻</span>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-semibold">Technical Excellence:</span> Armenian engineers are known for strong fundamentals in mathematics and computer science.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 