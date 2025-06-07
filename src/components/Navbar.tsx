import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <span className="text-3xl">🌐</span>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">DRGAF</span>
              <span className="text-sm text-gray-600">Building Digital Excellence</span>
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
                    `text-base font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive}) => 
                    `text-base font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
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
                    `text-base font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-200"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-200"></div>
            <div className="w-6 h-0.5 bg-gray-700 transition-all duration-200"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                end
                className={({isActive}) => 
                  `px-4 py-3 rounded-lg font-medium ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({isActive}) => 
                  `px-4 py-3 rounded-lg font-medium ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({isActive}) => 
                  `px-4 py-3 rounded-lg font-medium ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <a
                href="/contact"
                className="mx-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 