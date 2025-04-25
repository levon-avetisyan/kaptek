import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'FinTech Mobile App',
      description: 'A comprehensive mobile banking solution built with React Native by our Armenian development team.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      category: 'Mobile Development'
    },
    {
      id: 2,
      title: 'Healthcare Analytics Platform',
      description: 'An AI-powered healthcare data platform developed by our team of data scientists and ML engineers.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['Python', 'TensorFlow', 'AWS'],
      category: 'Data Science'
    },
    {
      id: 3,
      title: 'E-commerce Solution',
      description: 'A scalable e-commerce platform built with modern web technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      category: 'Web Development'
    },
  ];

  return (
    <div id="projects" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Successful Projects Delivered
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            See how our talented Armenian engineers have helped businesses across various industries.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="bg-white overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 w-full relative">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  
                  <p className="text-base text-gray-500 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      View Case Study
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 