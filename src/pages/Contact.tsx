import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("PmAf-7UWDf9wN4xD_");

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      if (!form.current) return;

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: 'sales@drgaf.co.uk',
        to_email: 'sales@drgaf.co.uk',
        phone: formData.phone,
        message: formData.message,
        to_name: 'DRGAF Sales',
        reply_to: formData.email
      };

      const result = await emailjs.send(
        'service_j0vfm8t',
        'template_zj5lpyb',
        templateParams
      );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact DRGAF | Get a Free Website Development Quote</title>
        <meta name="description" content="Contact DRGAF for professional website development services. Get a free quote for your project. Call us at +44 08003317779 or fill out our contact form for a quick response." />
        <meta name="keywords" content="contact DRGAF, website development quote, UK web developer contact, free consultation" />
        <meta property="og:title" content="Contact DRGAF | Get a Free Website Development Quote" />
        <meta property="og:description" content="Contact DRGAF for professional website development services. Get a free quote for your project. Call us at +44 08003317779 or fill out our contact form for a quick response." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgaf.co.uk/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact DRGAF | Get a Free Website Development Quote" />
        <meta name="twitter:description" content="Contact DRGAF for professional website development services. Get a free quote for your project. Call us at +44 08003317779 or fill out our contact form for a quick response." />
        <link rel="canonical" href="https://drgaf.co.uk/contact" />
      </Helmet>

      <PageHeader 
        title="Contact Us"
        subtitle="Ready to discuss your project? Get in touch with our team today for a free estimate."
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+44 08003317779</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9:00am - 5:00pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">sales@drgaf.co.uk</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">72 Dalziel Tower, Dalziel Estate, Motherwell</p>
                    <p className="text-sm text-gray-500">Our office location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Have a project in mind? Get a free estimate.</h2>
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                      <p>{error}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">First Name</label>
                      <input
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">Last Name</label>
                      <input
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
                    <input
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
                    <input
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-6 bg-tesco-blue-primary text-tesco-white font-tesco-semibold rounded-tesco hover:bg-tesco-blue-secondary transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 