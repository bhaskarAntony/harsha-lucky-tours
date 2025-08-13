import React from 'react';
import { CheckCircleIcon, UsersIcon, GlobeAltIcon, TruckIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: UsersIcon, number: '10,000+', label: 'Happy Customers' },
    { icon: GlobeAltIcon, number: '50+', label: 'Destinations' },
    { icon: TruckIcon, number: '500+', label: 'Successful Tours' },
    { icon: CheckCircleIcon, number: '15+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Harsha Kumar',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'With 15+ years in travel industry, Harsha founded the company with a vision to make travel accessible and memorable for everyone.'
    },
    {
      name: 'Priya Sharma',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Priya ensures smooth operations and customer satisfaction with her attention to detail and management expertise.'
    },
    {
      name: 'Rajesh Reddy',
      position: 'Tour Manager',
      image: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Rajesh leads our tour operations with extensive knowledge of destinations and customer service excellence.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best experience for our customers.'
    },
    {
      icon: '🌟',
      title: 'Quality Service',
      description: 'We maintain the highest standards in accommodation, transportation, and tour guidance.'
    },
    {
      icon: '💯',
      title: 'Transparency',
      description: 'Clear pricing, honest communication, and transparent processes in all our dealings.'
    },
    {
      icon: '🤝',
      title: 'Trust & Reliability',
      description: 'Building long-term relationships through consistent, reliable, and trustworthy service.'
    },
    {
      icon: '🌍',
      title: 'Cultural Respect',
      description: 'Promoting responsible tourism that respects local cultures and environments.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Continuously improving our services through innovative approaches and technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about')}</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Creating unforgettable travel experiences since 2009. We are passionate about helping you discover the world's most beautiful destinations with comfort and style.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Harsha Tours & Travels was founded in 2009 with a simple yet powerful vision: to make travel dreams come true for everyone. What started as a small travel agency in Bangalore has now grown into one of the most trusted names in the travel industry.
                </p>
                <p>
                  Our founder, Harsha Kumar, started this journey after experiencing the transformative power of travel. He believed that everyone deserves to explore the world's beauty, create lasting memories, and experience different cultures without worrying about the complexities of travel planning.
                </p>
                <p>
                  Over the years, we have expanded our services to include domestic and international tour packages, customized itineraries, and our unique Dream Scheme lucky draw system. We have helped thousands of families and individuals create unforgettable memories while exploring incredible destinations.
                </p>
                <p>
                  Today, we continue to innovate and improve our services, always keeping our customers' satisfaction and safety as our top priorities. Our experienced team of travel professionals works tirelessly to ensure that every journey with us becomes a cherished memory.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional travel experiences that exceed our customers' expectations while promoting responsible tourism and cultural understanding. We strive to make travel accessible, safe, and memorable for all.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading travel company that transforms lives through meaningful travel experiences. We envision a world where everyone has the opportunity to explore, discover, and connect with different cultures and destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your amazing travel experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-green-100">Recognition for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-bold mb-2">Best Travel Agency</h3>
              <p className="text-green-100">Karnataka Tourism Awards 2023</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-bold mb-2">Customer Choice Award</h3>
              <p className="text-green-100">TripAdvisor 2022</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-lg font-bold mb-2">Excellence in Service</h3>
              <p className="text-green-100">Travel Industry Council 2021</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-bold mb-2">Innovative Tourism</h3>
              <p className="text-green-100">India Tourism Awards 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you create memories that will last a lifetime. Contact us today to plan your perfect vacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/packages"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
            >
              View Packages
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;