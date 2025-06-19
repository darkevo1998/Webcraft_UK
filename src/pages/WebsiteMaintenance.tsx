import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

const WebsiteMaintenance = () => {
  const services = [
    {
      title: 'Regular Updates',
      description: 'Keep your website running smoothly with regular software and plugin updates.',
      icon: '🔄'
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and protection against threats and vulnerabilities.',
      icon: '🛡️'
    },
    {
      title: 'Performance Optimization',
      description: 'Regular speed and performance checks to ensure optimal user experience.',
      icon: '⚡'
    },
    {
      title: 'Backup Management',
      description: 'Automated backups to protect your website data and content.',
      icon: '💾'
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '£49',
      period: '/month',
      features: [
        'Weekly Updates',
        'Security Monitoring',
        'Monthly Backups',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      price: '£99',
      period: '/month',
      features: [
        'Daily Updates',
        'Advanced Security',
        'Weekly Backups',
        'Priority Support',
        'Performance Optimization'
      ]
    },
    {
      name: 'Enterprise',
      price: '£199',
      period: '/month',
      features: [
        'Real-time Updates',
        'Premium Security',
        'Daily Backups',
        '24/7 Support',
        'Advanced Optimization',
        'Content Updates'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Website Maintenance Services | DRGAF</title>
        <meta name="description" content="Professional website maintenance services in the UK. Keep your website secure, updated, and performing at its best with our comprehensive maintenance plans." />
        <meta name="keywords" content="website maintenance, website support, UK web maintenance, website updates" />
      </Helmet>

      <PageHeader 
        title="Website Maintenance"
        subtitle="Keep your website secure, updated, and performing at its best"
        bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Website Maintenance
            </h2>
            <p className="text-xl text-gray-600">
              Keep your website secure, updated, and performing at its best with our comprehensive maintenance services. We handle everything from regular updates to security monitoring.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Maintenance Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="block w-full mt-8 py-3 px-6 bg-blue-600 text-white text-center font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Keep Your Website Running Smoothly?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose a maintenance plan that fits your needs and let us handle the technical details.
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

export default WebsiteMaintenance; 