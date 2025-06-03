import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <>
    <Helmet>
      <title>WebCraft UK | Premium Website Building Services</title>
      <meta name="description" content="WebCraft UK offers modern, responsive website building services for UK customers. £1000 per website plus £50-200 per month for hosting, domain, email, and more." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Hero />
    <Services />
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Online Presence?</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Pricing</h3>
          <ul className="text-left text-gray-800 space-y-4">
            <li className="flex items-center">
              <span className="text-2xl mr-2">💻</span>
              <div>
                <span className="font-bold text-xl">£1000</span> per website (one-time)
                <p className="text-sm text-gray-600">Includes design, development, and initial setup</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">🔄</span>
              <div>
                <span className="font-bold text-xl">£50-200</span> per month
                <p className="text-sm text-gray-600">Hosting, domain, email, and ongoing support</p>
              </div>
            </li>
          </ul>
        </div>
        <a href="/contact" className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
          Get Started Today
        </a>
      </div>
    </section>
    <Testimonials />
  </>
);

export default Home; 