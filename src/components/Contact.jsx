"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    // Show success message or redirect
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:pr-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Let's Talk About Your Needs
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Whether you're looking to hire your first Armenian developer or build an entire remote team, we're here to help.
            </p>
            <div className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                    <span className="text-xl">✉️</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    <a href="mailto:contact@kaptek.co" className="hover:text-blue-600">contact@kaptek.co</a>
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                    <span className="text-xl">📍</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Headquarters</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Yerevan, Armenia (Serving US clients remotely)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <div className="mt-1">
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name" 
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" 
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email" 
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" 
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <div className="mt-1">
                  <input 
                    type="text" 
                    name="company" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization" 
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
                <div className="mt-1">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 