
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-finpro-gold flex items-center justify-center mr-2">
                <span className="font-montserrat font-bold text-white text-xl">F</span>
              </div>
              <span className="font-montserrat font-bold text-2xl">
                Fin<span className="text-finpro-gold">pro</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              A premier networking community for finance professionals dedicated to excellence, 
              knowledge sharing, and creating valuable connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-gold transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-gold transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-gold transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-gold transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-finpro-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-finpro-gold transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-finpro-gold transition-colors duration-300">Events</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-finpro-gold transition-colors duration-300">Testimonials</Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-400 hover:text-finpro-gold transition-colors duration-300">Membership</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-finpro-gold transition-colors duration-300">Resources</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-finpro-gold"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-finpro-gold mr-3 mt-0.5" />
                <span className="text-gray-400">
                  350 Fifth Avenue, 21st Floor<br />
                  New York, NY 10118
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-finpro-gold mr-3" />
                <a href="tel:+12125551234" className="text-gray-400 hover:text-finpro-gold transition-colors duration-300">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-finpro-gold mr-3" />
                <a href="mailto:info@finpro.com" className="text-gray-400 hover:text-finpro-gold transition-colors duration-300">
                  info@finpro.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-finpro-gold"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on events and opportunities.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-gold"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-finpro-gold text-white font-semibold rounded-md hover:bg-finpro-gold/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Finpro. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-finpro-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-finpro-gold transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-finpro-gold transition-colors duration-300">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
