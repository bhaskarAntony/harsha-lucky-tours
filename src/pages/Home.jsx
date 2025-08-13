import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: t('heroTitle'),
      subtitle: t('heroSubtitle')
    },
    {
      image: 'https://images.pexels.com/photos/1483648/pexels-photo-1483648.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Experience Luxury Travel',
      subtitle: 'Premium accommodations and personalized service for unforgettable journeys'
    },
    {
      image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Adventure Awaits',
      subtitle: 'Discover breathtaking landscapes and create memories that last a lifetime'
    }
  ];

  const featuredDestinations = [
    {
      name: 'Goa',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful beaches and vibrant nightlife',
      price: '₹15,000'
    },
    {
      name: 'Kerala',
      image: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Backwaters and spice plantations',
      price: '₹20,000'
    },
    {
      name: 'Rajasthan',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Royal palaces and desert adventures',
      price: '₹25,000'
    },
    {
      name: 'Himachal Pradesh',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mountain retreats and adventure sports',
      price: '₹18,000'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      rating: 5,
      comment: 'Amazing experience with Harsha Tours! The Kashmir package was perfectly organized and the service was exceptional.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Won the Kerala houseboat package through Dream Scheme. It was a dream come true! Highly recommended.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Suresh Reddy',
      location: 'Hyderabad',
      rating: 5,
      comment: 'Excellent service and affordable prices. The Goa trip was fantastic with family.',
      image: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const upcomingDraws = [
    { destination: 'Shirdi', date: '2025-02-15', couples: 5 },
    { destination: 'Vaishno Devi', date: '2025-02-28', couples: 3 },
    { destination: 'Thailand', date: '2025-03-15', couples: 2 },
    { destination: 'Leh Ladakh', date: '2025-03-30', couples: 4 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Destinations to Visit in South India',
      excerpt: 'Discover the hidden gems and popular attractions in South India...',
      image: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-15'
    },
    {
      id: 2,
      title: 'Travel Tips for First-Time International Travelers',
      excerpt: 'Essential tips and tricks to make your international travel smooth...',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-10'
    },
    {
      id: 3,
      title: 'Budget Travel Guide for Indian Destinations',
      excerpt: 'How to explore India without breaking the bank...',
      image: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-05'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <img
            src={heroSlides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dream-scheme"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
            >
              {t('joinDreamScheme')}
            </Link>
            <Link
              to="/packages"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all transform hover:scale-105"
            >
              {t('viewPackages')}
            </Link>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('aboutCompany')}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('aboutDescription')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-600">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Tour Packages</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
              </div>
              <Link
                to="/about"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
              >
                {t('learnMore')}
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Us"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Scheme Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('dreamSchemeTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('dreamSchemeDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('step1')}</h3>
              <p className="text-gray-600">Sign up for our exclusive Dream Scheme and become eligible for monthly draws</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('step2')}</h3>
              <p className="text-gray-600">Participate in monthly lucky draws for various domestic and international destinations</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('step3')}</h3>
              <p className="text-gray-600">Win amazing tour packages and create unforgettable memories with your loved ones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600">Discover our most popular travel destinations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{destination.price}</span>
                    <Link
                      to="/packages"
                      className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      {t('viewDetails')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('whyChooseUs')}</h2>
            <p className="text-xl text-gray-600">What makes us your perfect travel partner</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: t('affordable'), desc: 'Best prices guaranteed with flexible payment options' },
              { icon: '🕐', title: t('support247'), desc: 'Round-the-clock customer support for all your needs' },
              { icon: '🚗', title: t('luxuryVehicles'), desc: 'Comfortable and well-maintained vehicles for your journey' },
              { icon: '👨‍🏫', title: t('expertGuides'), desc: 'Professional and experienced tour guides' },
              { icon: '🎯', title: t('customizable'), desc: 'Tailor-made packages according to your preferences' },
              { icon: '🛡️', title: t('safetyFirst'), desc: 'Your safety and security is our top priority' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('testimonials')}</h2>
            <p className="text-xl text-green-100">What our customers say about us</p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                  <div className="flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">"{testimonials[currentTestimonial].comment}"</p>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white text-green-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white text-green-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Draws */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('upcomingDraws')}</h2>
            <p className="text-xl text-gray-600">Don't miss these upcoming lucky draws</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingDraws.map((draw, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <MapPinIcon className="h-6 w-6 text-green-600" />
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {draw.couples} Couples
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{draw.destination}</h3>
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span>{draw.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('quickEnquiry')}</h2>
            <p className="text-xl text-gray-600">Get in touch with us for your dream vacation</p>
          </div>
          
          <form className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder={t('name')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder={t('email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder={t('phone')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder={t('destination')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <textarea
              placeholder={t('message')}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-6"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
              >
                {t('submit')}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('latestBlogs')}</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest travel insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-green-600 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;