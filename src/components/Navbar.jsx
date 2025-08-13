import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), path: '/' },
    { 
      name: t('packages'), 
      path: '/packages',
      dropdown: [
        { name: 'Domestic Tours', path: '/packages?category=domestic' },
        { name: 'International Tours', path: '/packages?category=international' },
        { name: 'Honeymoon Packages', path: '/packages?category=honeymoon' },
        { name: 'Group Tours', path: '/packages?category=group' }
      ]
    },
    { name: t('dreamScheme'), path: '/dream-scheme' },
    { name: t('about'), path: '/about' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('blog'), path: '/blog' },
    { name: t('contact'), path: '/contact' }
  ];

  const toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={toggleSidebar} className="p-2">
            <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">HT</span>
            </div>
            <span className={`font-bold text-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Harsha Tours
            </span>
          </Link>
          <button onClick={toggleLanguage} className="p-2">
            <div className="flex items-center space-x-1">
              <GlobeAltIcon className={`h-5 w-5 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              <span className={`text-xs font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {language.toUpperCase()}
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">HT</span>
              </div>
              <div>
                <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                  Harsha Tours
                </span>
                <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                  & Travels
                </p>
              </div>
            </Link>

            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-green-600 ${
                      location.pathname === item.path
                        ? 'text-green-600'
                        : isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {item.dropdown && openDropdown === index && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  <GlobeAltIcon className="h-4 w-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
                
                <Link
                  to="/enquiry"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
                >
                  {t('enquiry')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;