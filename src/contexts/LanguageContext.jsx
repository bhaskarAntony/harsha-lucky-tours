import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    packages: 'Tour Packages',
    dreamScheme: 'Dream Scheme',
    enquiry: 'Enquiry',
    faqs: 'FAQs',
    contact: 'Contact Us',
    gallery: 'Gallery',
    blog: 'Blog',
    terms: 'Terms & Conditions',
    
    // Home Page
    heroTitle: 'Discover Amazing Destinations',
    heroSubtitle: 'Experience the world with Harsha Tours & Travels - Your gateway to unforgettable journeys',
    joinDreamScheme: 'Join Dream Scheme',
    viewPackages: 'View Packages',
    aboutCompany: 'About Harsha Tours',
    aboutDescription: 'With over 15 years of experience, Harsha Tours & Travels has been creating magical moments and unforgettable memories for thousands of travelers. We specialize in customized tour packages, luxury accommodations, and seamless travel experiences.',
    dreamSchemeTitle: 'How Dream Scheme Works',
    whyChooseUs: 'Why Choose Us',
    testimonials: 'Customer Testimonials',
    upcomingDraws: 'Upcoming Draw Dates',
    quickEnquiry: 'Quick Enquiry',
    latestBlogs: 'Latest Travel Tips',
    
    // Common
    learnMore: 'Learn More',
    bookNow: 'Book Now',
    viewDetails: 'View Details',
    submit: 'Submit',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    destination: 'Destination',
    travelDate: 'Travel Date',
    persons: 'Number of Persons',
    price: 'Price',
    duration: 'Duration',
    includes: 'Includes',
    excludes: 'Excludes',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    address: 'Address',
    
    // Dream Scheme
    dreamSchemeDesc: 'Join our exclusive Dream Scheme and get a chance to win amazing tour packages through our lucky draw system.',
    howItWorks: 'How It Works',
    step1: 'Register for Dream Scheme',
    step2: 'Participate in Monthly Draws',
    step3: 'Win Amazing Packages',
    
    // Package features
    affordable: 'Affordable Pricing',
    support247: '24x7 Customer Support',
    luxuryVehicles: 'Luxury Vehicles',
    expertGuides: 'Expert Guides',
    customizable: 'Customizable Packages',
    safetyFirst: 'Safety First',
  },
  kn: {
    // Navigation
    home: 'ಮುಖ್ಯ ಪುಟ',
    about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    packages: 'ಪ್ರವಾಸ ಪ್ಯಾಕೇಜುಗಳು',
    dreamScheme: 'ಡ್ರೀಮ್ ಸ್ಕೀಮ್',
    enquiry: 'ವಿಚಾರಣೆ',
    faqs: 'ಪ್ರಶ್ನೆಗಳು',
    contact: 'ಸಂಪರ್ಕಿಸಿ',
    gallery: 'ಗ್ಯಾಲರಿ',
    blog: 'ಬ್ಲಾಗ್',
    terms: 'ನಿಯಮಗಳು',
    
    // Home Page
    heroTitle: 'ಅದ್ಭುತ ಸ್ಥಳಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    heroSubtitle: 'ಹರ್ಷ ಟೂರ್ಸ್ & ಟ್ರಾವೆಲ್ಸ್ ಜೊತೆ ಜಗತ್ತನ್ನು ಅನುಭವಿಸಿ - ಮರೆಯಲಾಗದ ಪ್ರಯಾಣಗಳಿಗೆ ನಿಮ್ಮ ಗೇಟ್‌ವೇ',
    joinDreamScheme: 'ಡ್ರೀಮ್ ಸ್ಕೀಮ್‌ಗೆ ಸೇರಿ',
    viewPackages: 'ಪ್ಯಾಕೇಜುಗಳನ್ನು ನೋಡಿ',
    aboutCompany: 'ಹರ್ಷ ಟೂರ್ಸ್ ಬಗ್ಗೆ',
    aboutDescription: '15 ವರ್ಷಗಳ ಅನುಭವದೊಂದಿಗೆ, ಹರ್ಷ ಟೂರ್ಸ್ & ಟ್ರಾವೆಲ್ಸ್ ಸಾವಿರಾರು ಪ್ರಯಾಣಿಕರಿಗೆ ಮಾಂತ್ರಿಕ ಕ್ಷಣಗಳು ಮತ್ತು ಮರೆಯಲಾಗದ ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತಿದೆ.',
    dreamSchemeTitle: 'ಡ್ರೀಮ್ ಸ್ಕೀಮ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    whyChooseUs: 'ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸಬೇಕು',
    testimonials: 'ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯಗಳು',
    upcomingDraws: 'ಮುಂಬರುವ ಡ್ರಾ ದಿನಾಂಕಗಳು',
    quickEnquiry: 'ತ್ವರಿತ ವಿಚಾರಣೆ',
    latestBlogs: 'ಇತ್ತೀಚಿನ ಪ್ರವಾಸ ಸಲಹೆಗಳು',
    
    // Common
    learnMore: 'ಹೆಚ್ಚು ತಿಳಿಯಿರಿ',
    bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
    viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
    submit: 'ಸಲ್ಲಿಸಿ',
    name: 'ಹೆಸರು',
    email: 'ಇಮೇಲ್',
    phone: 'ಫೋನ್',
    message: 'ಸಂದೇಶ',
    destination: 'ಗಮ್ಯಸ್ಥಾನ',
    travelDate: 'ಪ್ರವಾಸ ದಿನಾಂಕ',
    persons: 'ವ್ಯಕ್ತಿಗಳ ಸಂಖ್ಯೆ',
    price: 'ಬೆಲೆ',
    duration: 'ಅವಧಿ',
    includes: 'ಒಳಗೊಂಡಿದೆ',
    excludes: 'ಹೊರಗಿದೆ',
    
    // Footer
    quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    contactInfo: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
    followUs: 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
    address: 'ವಿಳಾಸ',
    
    // Dream Scheme
    dreamSchemeDesc: 'ನಮ್ಮ ವಿಶೇಷ ಡ್ರೀಮ್ ಸ್ಕೀಮ್‌ಗೆ ಸೇರಿ ಮತ್ತು ನಮ್ಮ ಲಕ್ಕಿ ಡ್ರಾ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ಅದ್ಭುತ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜುಗಳನ್ನು ಗೆಲ್ಲುವ ಅವಕಾಶ ಪಡೆಯಿರಿ.',
    howItWorks: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    step1: 'ಡ್ರೀಮ್ ಸ್ಕೀಮ್‌ಗೆ ನೋಂದಾಯಿಸಿ',
    step2: 'ಮಾಸಿಕ ಡ್ರಾಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ',
    step3: 'ಅದ್ಭುತ ಪ್ಯಾಕೇಜುಗಳನ್ನು ಗೆಲ್ಲಿ',
    
    // Package features
    affordable: 'ಕೈಗೆಟುಕುವ ಬೆಲೆ',
    support247: '24x7 ಗ್ರಾಹಕ ಬೆಂಬಲ',
    luxuryVehicles: 'ಐಷಾರಾಮಿ ವಾಹನಗಳು',
    expertGuides: 'ತಜ್ಞ ಮಾರ್ಗದರ್ಶಕರು',
    customizable: 'ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕ ಪ್ಯಾಕೇಜುಗಳು',
    safetyFirst: 'ಸುರಕ್ಷತೆ ಮೊದಲು',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'kn' : 'en');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};