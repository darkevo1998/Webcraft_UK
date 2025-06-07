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
              <a
                href="/contact"
                className="mx-4 px-6 py-3 bg-tesco-red text-tesco-white text-tesco-base font-tesco-semibold rounded-tesco hover:bg-opacity-90 transition-all duration-200 text-center"
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