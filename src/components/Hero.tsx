import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-tesco-blue-primary/90 to-tesco-blue-secondary/90"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-tesco-4xl md:text-tesco-4xl font-tesco-bold mb-6 text-tesco-white">
            Building Digital Dreams.<br />
            Exceeding Expectations.
          </h1>
          <p className="text-tesco-xl md:text-tesco-2xl mb-8 text-tesco-gray-light font-tesco-normal">
            Transform your online presence with our expert web development services. 
            Modern designs, seamless functionality, and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="inline-block px-8 py-4 bg-tesco-red text-tesco-white text-tesco-lg font-tesco-semibold rounded-tesco shadow-tesco hover:bg-opacity-90 transition text-center">
              Start Your Project
            </a>
update            <a href="tel:+4408003317779" className="inline-block px-8 py-4 bg-tesco-white text-tesco-blue-primary text-tesco-lg font-tesco-semibold rounded-tesco shadow-tesco hover:bg-tesco-gray-light transition text-center">
              Call Us: +44 08003317779
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 