import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

const FAQs = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: 'General',
      faqs: [
        {
          question: 'How long has Harsha Tours been in business?',
          answer: 'Harsha Tours & Travels has been serving customers since 2009, with over 15 years of experience in the travel industry. We have helped thousands of travelers create unforgettable memories.'
        },
        {
          question: 'What destinations do you cover?',
          answer: 'We offer tour packages to domestic destinations across India including Kerala, Goa, Rajasthan, Himachal Pradesh, Kashmir, and more. We also provide international packages to Thailand, Nepal, Sri Lanka, Dubai, Singapore, and many other countries.'
        },
        {
          question: 'Do you provide customized tour packages?',
          answer: 'Yes, absolutely! We specialize in creating customized tour packages based on your preferences, budget, and requirements. Our team will work with you to design the perfect itinerary for your dream vacation.'
        },
        {
          question: 'Are your tour guides experienced?',
          answer: 'All our tour guides are experienced, licensed, and knowledgeable about local culture, history, and attractions. They are carefully selected and trained to provide you with the best possible experience.'
        }
      ]
    },
    {
      category: 'Dream Scheme',
      faqs: [
        {
          question: 'What is the Dream Scheme?',
          answer: 'Dream Scheme is our unique lucky draw system where registered members get a chance to win amazing tour packages for free. We conduct monthly draws for various domestic and international destinations.'
        },
        {
          question: 'How do I register for Dream Scheme?',
          answer: 'Registration is completely free and simple. Fill out the registration form on our Dream Scheme page with your basic details. Once registered, you will be automatically entered into all upcoming lucky draws.'
        },
        {
          question: 'How are winners selected?',
          answer: 'Winners are selected through a transparent random draw process. The draws are conducted monthly, and winners are immediately notified via phone and email. The selection process is completely fair and unbiased.'
        },
        {
          question: 'What do I win if selected?',
          answer: 'Winners receive complete tour packages including accommodation, transportation, meals (as specified), and sightseeing. The exact inclusions depend on the specific package won.'
        }
      ]
    },
    {
      category: 'Booking & Payment',
      faqs: [
        {
          question: 'How do I book a tour package?',
          answer: 'You can book through our website, call us directly, visit our office, or send an enquiry. Our team will guide you through the booking process and help you choose the best package for your needs.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, bank transfers, credit/debit cards, UPI payments, and online banking. We also offer flexible payment options with advance booking and installment facilities.'
        },
        {
          question: 'Is advance payment required?',
          answer: 'Yes, we typically require an advance payment to confirm your booking. The amount varies depending on the package and destination. The remaining balance can be paid before departure.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'Cancellation charges vary based on the time of cancellation and the type of package. Generally, cancellations made 30+ days before departure have minimal charges, while last-minute cancellations may have higher charges. Please check the specific terms for your booking.'
        }
      ]
    },
    {
      category: 'Travel & Safety',
      faqs: [
        {
          question: 'Is travel insurance included?',
          answer: 'Travel insurance is included in most of our international packages. For domestic packages, it can be added as an optional extra. We highly recommend travel insurance for all trips.'
        },
        {
          question: 'What safety measures do you follow?',
          answer: 'We prioritize your safety with verified accommodations, experienced drivers, regular vehicle maintenance, emergency support, and 24/7 assistance. We also follow all COVID-19 safety protocols as required.'
        },
        {
          question: 'Do you provide 24/7 support during travel?',
          answer: 'Yes, we provide round-the-clock support during your travel. Our emergency helpline is always available for any assistance you might need during your trip.'
        },
        {
          question: 'What if there are changes in itinerary due to weather or other factors?',
          answer: 'In case of unforeseen circumstances like weather conditions, natural disasters, or government restrictions, we will make alternative arrangements to ensure your safety and provide the best possible experience.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100">Find answers to common questions about our services</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-3.5">
              <span className="text-gray-400">🔍</span>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-green-600">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                
                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                      className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-500 transform transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still have questions */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our friendly team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;