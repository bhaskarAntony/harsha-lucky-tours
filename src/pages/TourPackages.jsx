import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, FunnelIcon, MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

const TourPackages = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Kerala Backwaters',
      category: 'domestic',
      image: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹20,000',
      duration: '5 Days 4 Nights',
      location: 'Kerala',
      description: 'Experience the serene backwaters of Kerala with luxury houseboat stays.',
      rating: 4.8,
      group: '2-6 people'
    },
    {
      id: 2,
      name: 'Goa Beach Paradise',
      category: 'domestic',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹15,000',
      duration: '4 Days 3 Nights',
      location: 'Goa',
      description: 'Relax on pristine beaches and enjoy vibrant nightlife in Goa.',
      rating: 4.6,
      group: '2-8 people'
    },
    {
      id: 3,
      name: 'Rajasthan Royal Heritage',
      category: 'domestic',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹25,000',
      duration: '7 Days 6 Nights',
      location: 'Rajasthan',
      description: 'Discover the royal heritage and magnificent palaces of Rajasthan.',
      rating: 4.9,
      group: '2-10 people'
    },
    {
      id: 4,
      name: 'Himachal Hill Stations',
      category: 'domestic',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹18,000',
      duration: '6 Days 5 Nights',
      location: 'Himachal Pradesh',
      description: 'Escape to the cool mountains and enjoy scenic beauty of Himachal.',
      rating: 4.7,
      group: '2-8 people'
    },
    {
      id: 5,
      name: 'Thailand Adventure',
      category: 'international',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹45,000',
      duration: '6 Days 5 Nights',
      location: 'Thailand',
      description: 'Explore Thailand\'s culture, beaches, and vibrant cities.',
      rating: 4.8,
      group: '2-6 people'
    },
    {
      id: 6,
      name: 'Andaman Islands',
      category: 'domestic',
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹30,000',
      duration: '7 Days 6 Nights',
      location: 'Andaman & Nicobar Islands',
      description: 'Pristine beaches and crystal clear waters await you in Andaman.',
      rating: 4.9,
      group: '2-4 people'
    },
    {
      id: 7,
      name: 'Nepal Cultural Tour',
      category: 'international',
      image: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹22,000',
      duration: '5 Days 4 Nights',
      location: 'Nepal',
      description: 'Discover ancient temples and stunning mountain views in Nepal.',
      rating: 4.6,
      group: '2-8 people'
    },
    {
      id: 8,
      name: 'Kashmir Paradise',
      category: 'domestic',
      image: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹28,000',
      duration: '6 Days 5 Nights',
      location: 'Kashmir',
      description: 'Experience heaven on earth with Kashmir\'s breathtaking beauty.',
      rating: 4.9,
      group: '2-6 people'
    },
    {
      id: 9,
      name: 'Sri Lanka Explorer',
      category: 'international',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹35,000',
      duration: '8 Days 7 Nights',
      location: 'Sri Lanka',
      description: 'Explore the pearl of the Indian Ocean with rich culture and nature.',
      rating: 4.7,
      group: '2-8 people'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Packages' },
    { value: 'domestic', label: 'Domestic' },
    { value: 'international', label: 'International' },
    { value: 'honeymoon', label: 'Honeymoon' },
    { value: 'group', label: 'Group Tours' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-20000', label: 'Under ₹20,000' },
    { value: '20000-30000', label: '₹20,000 - ₹30,000' },
    { value: '30000-50000', label: '₹30,000 - ₹50,000' },
    { value: '50000+', label: 'Above ₹50,000' }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = parseInt(pkg.price.replace('₹', '').replace(',', ''));
      if (selectedPriceRange === '0-20000') matchesPrice = price < 20000;
      else if (selectedPriceRange === '20000-30000') matchesPrice = price >= 20000 && price <= 30000;
      else if (selectedPriceRange === '30000-50000') matchesPrice = price >= 30000 && price <= 50000;
      else if (selectedPriceRange === '50000+') matchesPrice = price > 50000;
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('packages')}</h1>
          <p className="text-xl text-green-100">Discover amazing destinations with our carefully crafted tour packages</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <FunnelIcon className="h-5 w-5 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>

            {/* Price Filter */}
            <div className="relative">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <FunnelIcon className="h-5 w-5 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-gray-600">
          Showing {filteredPackages.length} packages
          {searchTerm && ` for "${searchTerm}"`}
        </p>
      </div>

      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {pkg.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ {pkg.rating}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pkg.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.group}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                    <span className="text-gray-600 text-sm ml-1">per person</span>
                  </div>
                  <Link
                    to={`/package/${pkg.id}`}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
                  >
                    {t('viewDetails')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No packages found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourPackages;