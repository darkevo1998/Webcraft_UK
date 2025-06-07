import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <>
    <Helmet>
      <title>DRGAF | Premium Website Building Services</title>
      <meta name="description" content="DRGAF offers modern, responsive website building services for UK customers. £1000 per website plus £50-200 per month for hosting, domain, email, and more." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Hero />
    <Services />
    <section className="py-24 bg-gradient-to-b from-tesco-blue-primary to-tesco-blue-secondary text-tesco-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-tesco-3xl md:text-tesco-4xl font-tesco-bold mb-4">Ready to Transform Your Online Presence?</h2>
        <p className="text-tesco-xl text-tesco-gray-light mb-12 max-w-2xl mx-auto font-tesco-normal">
          Choose the perfect plan for your business needs
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-time Package */}
          <div className="bg-tesco-white rounded-tesco shadow-tesco p-8 transform hover:scale-105 transition-all duration-300">
            <div className="bg-tesco-red text-tesco-white text-tesco-sm font-tesco-semibold py-1 px-4 rounded-full inline-block mb-6">
              One-time Payment
            </div>
            <h3 className="text-tesco-2xl font-tesco-bold text-tesco-blue-primary mb-4">Website Development</h3>
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-tesco-4xl font-tesco-bold text-tesco-blue-primary">£1000</span>
            </div>
            <ul className="text-left text-tesco-gray-dark space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-tesco-red mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">Custom Design & Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-tesco-red mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">Mobile Responsive Layout</span>
              </li>
              <li className="flex items-start">
                <span className="text-tesco-red mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">SEO Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-tesco-red mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">Content Management System</span>
              </li>
            </ul>
            <a href="/contact" className="block w-full py-4 bg-tesco-blue-primary text-tesco-white text-tesco-base font-tesco-semibold rounded-tesco hover:bg-tesco-blue-secondary transition-all duration-300">
              Get Started
            </a>
          </div>

          {/* Monthly Package */}
          <div className="bg-tesco-white rounded-tesco shadow-tesco p-8 transform hover:scale-105 transition-all duration-300">
            <div className="bg-tesco-blue-secondary text-tesco-white text-tesco-sm font-tesco-semibold py-1 px-4 rounded-full inline-block mb-6">
              Monthly Subscription
            </div>
            <h3 className="text-tesco-2xl font-tesco-bold text-tesco-blue-primary mb-4">Ongoing Support</h3>
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-tesco-4xl font-tesco-bold text-tesco-blue-primary">£50</span>
              <span className="text-tesco-base text-tesco-gray-dark ml-2">- £200</span>
              <span className="text-tesco-sm text-tesco-gray-dark ml-2">/month</span>
            </div>
            <ul className="text-left text-tesco-gray-dark space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-tesco-blue-secondary mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">Premium Hosting</span>
              </li>
              <li className="flex items-start">
                <span className="text-tesco-blue-secondary mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">Domain Registration</span>
              </li>
              <li className="flex items-start">
                <span className="text-tesco-blue-secondary mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">Business Email Setup</span>
              </li>
              <li className="flex items-start">
                <span className="text-tesco-blue-secondary mr-3">✓</span>
                <span className="text-tesco-base font-tesco-normal">24/7 Technical Support</span>
              </li>
            </ul>
            <a href="/contact" className="block w-full py-4 bg-tesco-blue-primary text-tesco-white text-tesco-base font-tesco-semibold rounded-tesco hover:bg-tesco-blue-secondary transition-all duration-300">
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
    <Testimonials />
  </>
);

export default Home; 