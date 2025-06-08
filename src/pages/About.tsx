import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

const About = () => {
  const coreValues = [
    {
      title: 'Local Commitment',
      description: 'We are deeply rooted in the UK, dedicated to serving our community with personalized care and understanding.',
      icon: '🏠'
    },
    {
      title: 'Transformative Design',
      description: 'We don\'t just build websites; we transform digital spaces with meticulous attention to detail, creating online experiences that inspire.',
      icon: '✨'
    },
    {
      title: 'Exceeding Expectations',
      description: 'We go beyond the basics, striving to surpass your vision through proactive communication and dedication to your complete satisfaction.',
      icon: '🎯'
    },
    {
      title: 'Value-Driven Solutions',
      description: 'We approach every project as an opportunity to build lasting value, providing effective and efficient solutions tailored to your unique needs.',
      icon: '💎'
    },
    {
      title: 'Open Communication',
      description: 'We prioritize clear and consistent communication throughout every phase of your project, ensuring transparency and peace of mind.',
      icon: '💬'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About DRGAF | UK's Trusted Web Development Company</title>
        <meta name="description" content="Learn about DRGAF, a leading UK web development company. We specialize in creating modern, responsive websites with a focus on quality, transparency, and customer satisfaction." />
        <meta name="keywords" content="UK web development company, about DRGAF, web design agency, responsive websites, UK web developers" />
        <meta property="og:title" content="About DRGAF | UK's Trusted Web Development Company" />
        <meta property="og:description" content="Learn about DRGAF, a leading UK web development company. We specialize in creating modern, responsive websites with a focus on quality, transparency, and customer satisfaction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgaf.co.uk/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DRGAF | UK's Trusted Web Development Company" />
        <meta name="twitter:description" content="Learn about DRGAF, a leading UK web development company. We specialize in creating modern, responsive websites with a focus on quality, transparency, and customer satisfaction." />
        <link rel="canonical" href="https://drgaf.co.uk/about" />
      </Helmet>
      
      <PageHeader 
        title="About Us"
        subtitle="Your Trusted Web Development Partner"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              DRGAF: Your Trusted Web Development Partner
            </h2>
            <p className="text-xl text-gray-600">
              We are a UK-based web development company dedicated to transforming businesses through meticulously crafted websites, proactive communication, and a commitment to finding effective solutions. We envision every project as an opportunity to build lasting value and create digital spaces that inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
                Since our founding, our core values of transparent pricing, quality workmanship, and customer care have remained central to our business. We began with a simple mission: to provide UK businesses with exceptional web development services.
              </p>
              <p className="text-gray-600">
                That commitment has driven our growth and shaped our approach to every project. With a focus on building lasting relationships, we've become a trusted name in the UK web development community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 