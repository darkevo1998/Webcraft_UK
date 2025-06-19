import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

const EcommerceSolutions = () => {
  const features = [
    {
      title: 'Secure Payments',
      description: 'Multiple payment gateways with SSL encryption for safe transactions.',
      icon: '🔒'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time stock tracking and automated inventory updates.',
      icon: '📦'
    },
    {
      title: 'Mobile Shopping',
      description: 'Optimized mobile experience for shopping on any device.',
      icon: '🛒'
    },
    {
      title: 'Analytics & Reports',
      description: 'Detailed insights into sales, customer behavior, and performance.',
      icon: '📊'
    }
  ];

  const platforms = [
    {
      name: 'Shopify',
      description: 'Perfect for businesses of all sizes with easy setup and management.',
      icon: '🛍️'
    },
    {
      name: 'WooCommerce',
      description: 'Flexible WordPress-based solution with extensive customization options.',
      icon: '🌐'
    },
    {
      name: 'Custom Solutions',
      description: 'Tailored e-commerce platforms built specifically for your needs.',
      icon: '⚡'
    }
  ];

  return (
    <>
      <Helmet>
        <title>E-commerce Solutions | DRGAF</title>
        <meta name="description" content="Professional e-commerce solutions in the UK. We build secure, scalable online stores that drive sales and grow your business." />
        <meta name="keywords" content="e-commerce, online store, UK e-commerce, shopify, woocommerce" />
      </Helmet>

      <PageHeader 
        title="E-commerce Solutions"
        subtitle="Building powerful online stores that drive sales"
        bgImage="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Powerful E-commerce Solutions
            </h2>
            <p className="text-xl text-gray-600">
              We build secure, scalable online stores that not only look great but also drive sales and grow your business. Our e-commerce solutions are designed to provide the best shopping experience for your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our E-commerce Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Selling Online?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's build an e-commerce platform that drives sales and grows your business.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommerceSolutions; 