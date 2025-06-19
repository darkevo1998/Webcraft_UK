import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WebsiteDesign from './pages/WebsiteDesign';
import EcommerceSolutions from './pages/EcommerceSolutions';
import SEOOptimization from './pages/SEOOptimization';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
            <Route path="/services/seo-optimization" element={<SEOOptimization />} />
            <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
