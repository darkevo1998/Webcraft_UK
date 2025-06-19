import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Website Design',
      path: '/services/website-design',
      description: 'Modern, responsive designs that look great on all devices'
    },
    {
      title: 'E-commerce Solutions',
      path: '/services/ecommerce-solutions',
      description: 'Powerful online stores with secure payment processing'
    },
    {
      title: 'SEO Optimization',
      path: '/services/seo-optimization',
      description: 'Improve your search rankings and drive more traffic'
    },
    {
      title: 'Website Maintenance',
      path: '/services/website-maintenance',
      description: 'Keep your website secure and up-to-date'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-tesco-white shadow-tesco' : 'bg-tesco-blue-primary'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <span className="text-3xl">🌐</span>
            <div className="flex flex-col">
              <span className={`text-2xl font-tesco-bold ${isScrolled ? 'text-tesco-blue-primary' : 'text-tesco-white'}`}>DRGAF</span>
              <span className={`text-tesco-sm font-tesco-normal ${isScrolled ? 'text-tesco-gray-dark' : 'text-tesco-white'}`}>Building Digital Excellence</span>
            </div>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-10">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({isActive}) => 
                    `text-tesco-base font-tesco-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-tesco-red border-b-2 border-tesco-red'
                        : `${isScrolled ? 'text-tesco-gray-dark' : 'text-tesco-white'} hover:text-tesco-red hover:border-b-2 hover:border-tesco-red`
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group">
                <button
                  className={`flex items-center space-x-1 text-tesco-base font-tesco-medium transition-colors duration-200 ${
                    isScrolled ? 'text-tesco-gray-dark' : 'text-tesco-white'
                  } hover:text-tesco-red`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50">
                    {services.map((service, index) => (
                      <NavLink
                        key={index}
                        to={service.path}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="font-semibold text-gray-900">{service.title}</div>
                        <div className="text-sm text-gray-600">{service.description}</div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive}) => 
                    `text-tesco-base font-tesco-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-tesco-red border-b-2 border-tesco-red'
                        : `${isScrolled ? 'text-tesco-gray-dark' : 'text-tesco-white'} hover:text-tesco-red hover:border-b-2 hover:border-tesco-red`
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({isActive}) => 
                    `text-tesco-base font-tesco-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-tesco-red border-b-2 border-tesco-red'
                        : `${isScrolled ? 'text-tesco-gray-dark' : 'text-tesco-white'} hover:text-tesco-red hover:border-b-2 hover:border-tesco-red`
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-tesco-red text-tesco-white text-tesco-base font-tesco-semibold rounded-tesco hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-tesco hover:bg-opacity-10 transition-colors duration-200 ${
              isScrolled ? 'hover:bg-tesco-gray-dark' : 'hover:bg-tesco-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 ${isScrolled ? 'bg-tesco-gray-dark' : 'bg-tesco-white'} mb-1.5 transition-all duration-200`}></div>
            <div className={`w-6 h-0.5 ${isScrolled ? 'bg-tesco-gray-dark' : 'bg-tesco-white'} mb-1.5 transition-all duration-200`}></div>
            <div className={`w-6 h-0.5 ${isScrolled ? 'bg-tesco-gray-dark' : 'bg-tesco-white'} transition-all duration-200`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-tesco-gray-light">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                end
                className={({isActive}) => 
                  `px-4 py-3 rounded-tesco text-tesco-base font-tesco-medium ${
                    isActive 
                      ? 'bg-tesco-blue-secondary text-tesco-white' 
                      : 'text-tesco-gray-dark hover:bg-tesco-gray-light'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <div className="px-4">
                <button
                  className="w-full text-left px-4 py-3 rounded-tesco text-tesco-base font-tesco-medium text-tesco-gray-dark hover:bg-tesco-gray-light"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service, index) => (
                      <NavLink
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 rounded-tesco text-tesco-base text-tesco-gray-dark hover:bg-tesco-gray-light"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              <NavLink
                to="/about"
                className={({isActive}) => 
                  `px-4 py-3 rounded-tesco text-tesco-base font-tesco-medium ${
                    isActive 
                      ? 'bg-tesco-blue-secondary text-tesco-white' 
                      : 'text-tesco-gray-dark hover:bg-tesco-gray-light'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({isActive}) => 
                  `px-4 py-3 rounded-tesco text-tesco-base font-tesco-medium ${
                    isActive 
                      ? 'bg-tesco-blue-secondary text-tesco-white' 
                      : 'text-tesco-gray-dark hover:bg-tesco-gray-light'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 