import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <>
    <Helmet>
      <title>DRGAF | Professional Website Development Services in UK</title>
      <meta name="description" content="Transform your online presence with DRGAF's expert website development services. Modern designs, responsive layouts, and ongoing support. Starting at £1000 with monthly maintenance options." />
      <meta name="keywords" content="website development, web design, UK web developer, responsive websites, business websites" />
      <meta property="og:title" content="DRGAF | Professional Website Development Services in UK" />
      <meta property="og:description" content="Transform your online presence with DRGAF's expert website development services. Modern designs, responsive layouts, and ongoing support." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://drgaf.co.uk" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DRGAF | Professional Website Development Services in UK" />
      <meta name="twitter:description" content="Transform your online presence with DRGAF's expert website development services. Modern designs, responsive layouts, and ongoing support." />
      <link rel="canonical" href="https://drgaf.co.uk" />
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
              <span className="text-tesco-4xl font-tesco-bold text-tesco-blue-primary">£999</span>
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
              <span className="text-tesco-4xl font-tesco-bold text-tesco-blue-primary">£49</span>
              <span className="text-tesco-base text-tesco-gray-dark ml-2">- £199</span>
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