import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

const Sidebar = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    { name: t('home'), path: '/', icon: '🏠' },
    { name: t('packages'), path: '/packages', icon: '🎒' },
    { name: t('dreamScheme'), path: '/dream-scheme', icon: '🎯' },
    { name: t('about'), path: '/about', icon: 'ℹ️' },
    { name: t('gallery'), path: '/gallery', icon: '📸' },
    { name: t('blog'), path: '/blog', icon: '📝' },
    { name: t('faqs'), path: '/faqs', icon: '❓' },
    { name: t('contact'), path: '/contact', icon: '📞' },
    { name: t('terms'), path: '/terms', icon: '📋' }
  ];

  const closeSidebar = () => {
    document.getElementById('sidebar').classList.add('-translate-x-full');
  };

  return (
    <div
      id="sidebar"
      className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-600 to-green-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">HT</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Harsha Tours</h2>
              <p className="text-green-100 text-sm">& Travels</p>
            </div>
          </div>
          <button onClick={closeSidebar} className="p-2 text-white">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={closeSidebar}
              className={`flex items-center space-x-4 px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors ${
                location.pathname === item.path ? 'bg-green-50 text-green-600 border-r-4 border-green-600' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="p-6 border-t border-gray-200">
          <Link
            to="/contact"
            onClick={closeSidebar}
            className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all"
          >
            <PhoneIcon className="h-5 w-5" />
            <span>{t('contact')}</span>
          </Link>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Call Us Now</p>
            <a href="tel:+919876543210" className="text-green-600 font-bold text-lg">
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={closeSidebar}
        style={{ pointerEvents: document.getElementById('sidebar')?.classList.contains('-translate-x-full') ? 'none' : 'auto' }}
      ></div>
    </div>
  );
};

export default Sidebar;