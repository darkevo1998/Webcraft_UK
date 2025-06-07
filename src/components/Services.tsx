import React from 'react';

const services = [
  {
    title: 'Website Design',
    description: 'Modern, responsive designs that look great on all devices. We create beautiful, user-friendly interfaces that engage your visitors.',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with secure payment processing, inventory management, and customer-friendly features.',
    icon: '🛍️',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive more organic traffic to your website with our proven SEO strategies.',
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80'
  },
  {
    title: 'Website Maintenance',
    description: 'Regular updates, security patches, and technical support to keep your website running smoothly.',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-tesco-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-tesco-3xl md:text-tesco-4xl font-tesco-bold text-tesco-blue-primary mb-4">Our Services</h2>
          <p className="text-tesco-xl text-tesco-gray-dark max-w-2xl mx-auto font-tesco-normal">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-tesco-white rounded-tesco shadow-tesco overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tesco-blue-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-tesco-xl font-tesco-bold text-tesco-blue-primary mb-3">{service.title}</h3>
                <p className="text-tesco-base text-tesco-gray-dark font-tesco-normal">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 