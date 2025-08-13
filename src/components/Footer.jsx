import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">HT</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Harsha Tours</h3>
                <p className="text-gray-400 text-sm">& Travels</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted travel partner for creating unforgettable memories and amazing experiences across the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">YouTube</span>
                🎥
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">{t('home')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">{t('about')}</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-green-400 transition-colors">{t('packages')}</Link></li>
              <li><Link to="/dream-scheme" className="text-gray-300 hover:text-green-400 transition-colors">{t('dreamScheme')}</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">{t('gallery')}</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/packages?category=domestic" className="text-gray-300 hover:text-green-400 transition-colors">Domestic Tours</Link></li>
              <li><Link to="/packages?category=international" className="text-gray-300 hover:text-green-400 transition-colors">International Tours</Link></li>
              <li><Link to="/packages?category=honeymoon" className="text-gray-300 hover:text-green-400 transition-colors">Honeymoon Packages</Link></li>
              <li><Link to="/packages?category=group" className="text-gray-300 hover:text-green-400 transition-colors">Group Tours</Link></li>
              <li><Link to="/enquiry" className="text-gray-300 hover:text-green-400 transition-colors">Custom Packages</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-green-400 transition-colors">{t('faqs')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123, MG Road, Brigade Road<br />
                    Bangalore, Karnataka - 560001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-green-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div>
                  <a href="mailto:info@harshatours.com" className="text-gray-300 hover:text-green-400 transition-colors">
                    info@harshatours.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-gray-300 text-sm">
                Mon - Sat: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Harsha Tours & Travels. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;