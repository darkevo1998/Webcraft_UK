import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

const SEOOptimization = () => {
  const services = [
    {
      title: 'Keyword Research',
      description: 'In-depth analysis of relevant keywords to target your ideal audience.',
      icon: '🔍'
    },
    {
      title: 'On-Page SEO',
      description: 'Optimization of meta tags, content, and structure for better rankings.',
      icon: '📝'
    },
    {
      title: 'Technical SEO',
      description: 'Improving site speed, mobile-friendliness, and technical performance.',
      icon: '⚙️'
    },
    {
      title: 'Content Strategy',
      description: 'Creating valuable, engaging content that ranks well and converts.',
      icon: '📚'
    }
  ];

  const benefits = [
    {
      title: 'Increased Visibility',
      description: 'Rank higher in search results and reach more potential customers.',
      icon: '👁️'
    },
    {
      title: 'Targeted Traffic',
      description: 'Attract visitors who are actively looking for your products or services.',
      icon: '🎯'
    },
    {
      title: 'Better ROI',
      description: 'Organic traffic is free and often converts better than paid advertising.',
      icon: '💰'
    },
    {
      title: 'Long-term Results',
      description: 'SEO improvements provide lasting benefits for your business.',
      icon: '📈'
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Optimization Services | DRGAF</title>
        <meta name="description" content="Professional SEO services in the UK. We help businesses improve their search engine rankings and drive more organic traffic to their websites." />
        <meta name="keywords" content="SEO, search engine optimization, UK SEO services, website optimization" />
      </Helmet>

      <PageHeader 
        title="SEO Optimization"
        subtitle="Improve your search rankings and drive more organic traffic"
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert SEO Services
            </h2>
            <p className="text-xl text-gray-600">
              We help businesses improve their search engine rankings and drive more organic traffic to their websites. Our comprehensive SEO strategies are designed to deliver long-term results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits of SEO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Improve Your Search Rankings?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create an SEO strategy that drives more organic traffic to your website.
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

export default SEOOptimization; 