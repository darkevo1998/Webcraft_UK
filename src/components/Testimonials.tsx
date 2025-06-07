import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Boutique',
    text: 'DRGAF transformed our online presence. The new website is beautiful, easy to use, and has significantly increased our online sales.',
    image: '👩'
  },
  {
    name: 'Michael Brown',
    company: 'Tech Solutions Ltd',
    text: 'Professional service from start to finish. The team was responsive, knowledgeable, and delivered exactly what we needed.',
    image: '👨'
  },
  {
    name: 'Emma Wilson',
    company: 'Creative Studio',
    text: 'Outstanding work on our e-commerce platform. The attention to detail and ongoing support has been exceptional.',
    image: '👩'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-tesco-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-tesco-3xl md:text-tesco-4xl font-tesco-bold text-tesco-blue-primary mb-4">What Our Clients Say</h2>
          <p className="text-tesco-xl text-tesco-gray-dark max-w-2xl mx-auto font-tesco-normal">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-tesco-gray-light rounded-tesco p-8 shadow-tesco">
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <p className="text-tesco-base text-tesco-gray-dark mb-6 italic font-tesco-normal">"{testimonial.text}"</p>
              <div>
                <p className="font-tesco-bold text-tesco-blue-primary">{testimonial.name}</p>
                <p className="text-tesco-base text-tesco-gray-dark font-tesco-normal">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 