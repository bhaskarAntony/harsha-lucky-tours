import React, { useState } from 'react';
import { CalendarIcon, GiftIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '../contexts/LanguageContext';

const DreamScheme = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDestination: ''
  });

  const dreamPackages = [
    {
      destination: 'Shirdi Sai Darshan',
      couples: 5,
      image: 'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3 Days 2 Nights',
      includes: ['Accommodation', 'Transportation', 'Darshan', 'Meals'],
      drawDate: '2025-02-15'
    },
    {
      destination: 'Vaishno Devi Yatra',
      couples: 3,
      image: 'https://images.pexels.com/photos/8078195/pexels-photo-8078195.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4 Days 3 Nights',
      includes: ['Helicopter Service', 'Hotel Stay', 'Prasadam', 'Guide'],
      drawDate: '2025-02-28'
    },
    {
      destination: 'Thailand Paradise',
      couples: 2,
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 Days 5 Nights',
      includes: ['Flight', '5-Star Hotels', 'Island Tours', 'All Meals'],
      drawDate: '2025-03-15'
    },
    {
      destination: 'Leh Ladakh Adventure',
      couples: 4,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8 Days 7 Nights',
      includes: ['Flights', 'Hotels', 'Bike Rental', 'Permits'],
      drawDate: '2025-03-30'
    },
    {
      destination: 'Andaman Blue Waters',
      couples: 3,
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '7 Days 6 Nights',
      includes: ['Flights', 'Resort Stay', 'Water Sports', 'Island Hopping'],
      drawDate: '2025-04-15'
    },
    {
      destination: 'Sri Lanka Cultural',
      couples: 2,
      image: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 Days 5 Nights',
      includes: ['Flights', 'Hotels', 'Temple Tours', 'Safari'],
      drawDate: '2025-04-30'
    },
    {
      destination: 'Nepal Spiritual Journey',
      couples: 4,
      image: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5 Days 4 Nights',
      includes: ['Transportation', 'Hotels', 'Temple Visits', 'Guide'],
      drawDate: '2025-05-15'
    },
    {
      destination: 'Kashmir Paradise',
      couples: 3,
      image: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 Days 5 Nights',
      includes: ['Flights', 'Houseboat', 'Shikara Ride', 'All Meals'],
      drawDate: '2025-05-30'
    }
  ];

  const winners = [
    {
      name: 'Rajesh & Priya Kumar',
      destination: 'Kerala Backwaters',
      month: 'December 2024',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      testimonial: 'We never expected to win! The Kerala trip was absolutely magical. Thank you Harsha Tours!'
    },
    {
      name: 'Suresh & Lakshmi Reddy',
      destination: 'Goa Beach Holiday',
      month: 'November 2024',
      image: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=150',
      testimonial: 'Amazing experience! The resort was fantastic and the arrangements were perfect.'
    },
    {
      name: 'Venkat & Savitha Sharma',
      destination: 'Rajasthan Royal Tour',
      month: 'October 2024',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
      testimonial: 'The palaces were breathtaking! Best vacation of our lives. Highly recommended!'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for registering for Dream Scheme! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      preferredDestination: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('dreamScheme')}</h1>
            <p className="text-xl text-green-100 mb-8">Win Amazing Tour Packages Through Our Lucky Draw System</p>
            <div className="flex justify-center space-x-8 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-green-100">Winners So Far</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-green-100">Destinations</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold">Monthly</div>
                <div className="text-green-100">Lucky Draws</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('howItWorks')}</h2>
            <p className="text-xl text-gray-600">Simple steps to win your dream vacation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Register</h3>
              <p className="text-gray-600">Fill out the registration form to join Dream Scheme</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Wait for Draw</h3>
              <p className="text-gray-600">Monthly lucky draws are conducted for various destinations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Get Selected</h3>
              <p className="text-gray-600">Winners are selected randomly and notified immediately</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Enjoy Trip</h3>
              <p className="text-gray-600">Pack your bags and enjoy your free dream vacation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Lucky Draws */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Lucky Draws</h2>
            <p className="text-xl text-gray-600">Amazing destinations waiting for lucky winners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dreamPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={pkg.image}
                  alt={pkg.destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.couples} Couples
                    </span>
                    <UserGroupIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{pkg.destination}</h3>
                  <p className="text-gray-600 mb-3">{pkg.duration}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.includes.map((item, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{pkg.drawDate}</span>
                    </div>
                    <TrophyIcon className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Dream Scheme Today!</h2>
            <p className="text-xl text-gray-600">Register now and get a chance to win amazing packages</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder={t('name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('phone')}
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <select
                name="preferredDestination"
                value={formData.preferredDestination}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Preferred Destination</option>
                <option value="domestic">Domestic Destinations</option>
                <option value="international">International Destinations</option>
                <option value="spiritual">Spiritual Destinations</option>
                <option value="adventure">Adventure Destinations</option>
              </select>
            </div>
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-6"
            ></textarea>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
              >
                <GiftIcon className="h-6 w-6 inline-block mr-2" />
                Register for Dream Scheme
              </button>
            </div>
            
            <p className="text-sm text-gray-600 text-center mt-4">
              * Registration is completely free. Winners will be selected through transparent lucky draw process.
            </p>
          </form>
        </div>
      </section>

      {/* Winners Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Winners</h2>
            <p className="text-xl text-gray-600">Congratulations to our lucky winners!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{winner.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{winner.destination}</p>
                <p className="text-sm text-gray-600 mb-3">{winner.month}</p>
                <p className="text-gray-700 italic">"{winner.testimonial}"</p>
                <div className="flex justify-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DreamScheme;