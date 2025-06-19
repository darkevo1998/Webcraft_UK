import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

const WebsiteDesign = () => {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Your website will look perfect on all devices, from mobile phones to desktop computers.',
      icon: '📱'
    },
    {
      title: 'Modern UI/UX',
      description: 'Engaging user interfaces and intuitive user experiences that keep visitors coming back.',
      icon: '🎨'
    },
    {
      title: 'Custom Branding',
      description: 'We incorporate your brand colors, fonts, and style to create a cohesive look.',
      icon: '🎯'
    },
    {
      title: 'Fast Loading',
      description: 'Optimized performance ensures your website loads quickly and efficiently.',
      icon: '⚡'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We learn about your business, goals, and target audience to create the perfect design strategy.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our designers create mockups and wireframes for your approval before development begins.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We bring the designs to life with clean, efficient code and modern technologies.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'After thorough testing, we deploy your website and ensure everything runs smoothly.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Website Design Services | DRGAF</title>
        <meta name="description" content="Professional website design services in the UK. We create beautiful, responsive websites that engage your visitors and drive business growth." />
        <meta name="keywords" content="website design, web design UK, responsive design, custom websites" />
      </Helmet>

      <PageHeader 
        title="Website Design"
        subtitle="Creating beautiful, responsive websites that engage your visitors"
        bgImage="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modern Website Design for Your Business
            </h2>
            <p className="text-xl text-gray-600">
              We create stunning, responsive websites that not only look great but also drive results for your business. Our designs are modern, user-friendly, and optimized for all devices.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create a website that not only looks great but also drives results for your business.
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

export default WebsiteDesign; 