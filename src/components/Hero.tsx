import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Building Digital Dreams.<br />
            Exceeding Expectations.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Transform your online presence with our expert web development services. 
            Modern designs, seamless functionality, and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition text-center">
              Start Your Project
            </a>
            <a href="tel:+441234567890" className="inline-block px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition text-center">
              Call Us: +44 123 456 7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 