import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Boutique London',
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 