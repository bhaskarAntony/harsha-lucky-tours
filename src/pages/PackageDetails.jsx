import React from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, ClockIcon, UserGroupIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const PackageDetails = () => {
  const { id } = useParams();

  // Mock package data - in real app, this would come from API
  const packageData = {
    1: {
      name: 'Kerala Backwaters Paradise',
      image: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: '₹20,000',
      duration: '5 Days 4 Nights',
      location: 'Kerala',
      rating: 4.8,
      description: 'Experience the serene backwaters of Kerala with luxury houseboat stays, traditional cuisine, and breathtaking natural beauty.',
      highlights: [
        'Luxury houseboat accommodation',
        'Traditional Kerala cuisine',
        'Backwater cruise',
        'Spice plantation visit',
        'Kathakali dance show'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Arrival in Cochin',
          description: 'Arrive at Cochin airport/railway station. Transfer to hotel. Evening visit to Chinese Fishing Nets and local markets.',
          activities: ['Airport/Station pickup', 'Hotel check-in', 'Chinese Fishing Nets', 'Fort Kochi exploration']
        },
        {
          day: 'Day 2',
          title: 'Cochin to Alleppey',
          description: 'After breakfast, drive to Alleppey. Board luxury houseboat and enjoy backwater cruise.',
          activities: ['Houseboat boarding', 'Backwater cruise', 'Traditional lunch', 'Village visits']
        },
        {
          day: 'Day 3',
          title: 'Alleppey to Kumarakom',
          description: 'Morning cruise to Kumarakom. Visit bird sanctuary and enjoy resort amenities.',
          activities: ['Bird sanctuary visit', 'Resort activities', 'Ayurvedic massage', 'Cultural programs']
        },
        {
          day: 'Day 4',
          title: 'Kumarakom to Thekkady',
          description: 'Drive to Thekkady. Visit spice plantations and enjoy elephant ride.',
          activities: ['Spice plantation tour', 'Elephant ride', 'Periyar wildlife sanctuary', 'Boat ride']
        },
        {
          day: 'Day 5',
          title: 'Departure',
          description: 'After breakfast, transfer to Cochin airport/railway station for departure.',
          activities: ['Hotel checkout', 'Shopping time', 'Departure transfer']
        }
      ],
      includes: [
        'Accommodation in luxury hotels/houseboat',
        'All meals (breakfast, lunch, dinner)',
        'Transportation in AC vehicle',
        'Professional guide',
        'All entrance fees',
        'Boat rides and cruises',
        'Cultural show tickets'
      ],
      excludes: [
        'Flight/train tickets',
        'Personal expenses',
        'Tips and gratuities',
        'Travel insurance',
        'Camera fees',
        'Extra activities not mentioned'
      ]
    }
    // Add more packages as needed
  };

  const pkg = packageData[id] || packageData[1]; // Default to first package if not found

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Image */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{pkg.name}</h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {pkg.duration}
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  2-6 People
                </div>
                <div className="flex items-center">
                  ⭐ {pkg.rating} Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{pkg.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Package Highlights</h3>
                <ul className="space-y-2">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-6">
                    <div className="flex items-center mb-2">
                      <CalendarIcon className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-600">{day.day}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{day.title}</h3>
                    <p className="text-gray-700 mb-3">{day.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {day.activities.map((activity, actIndex) => (
                        <span
                          key={actIndex}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2" />
                  Includes
                </h3>
                <ul className="space-y-2">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <XCircleIcon className="h-6 w-6 text-red-600 mr-2" />
                  Excludes
                </h3>
                <ul className="space-y-2">
                  {pkg.excludes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600">{pkg.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Travelers
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </form>

                <div className="mt-6 space-y-3">
                  <a
                    href="/enquiry"
                    className="w-full block text-center border-2 border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-all"
                  >
                    Customize Package
                  </a>
                  
                  <div className="text-center">
                    <a
                      href="tel:+919876543210"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      📞 Call for Best Price
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Package Features</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Free Cancellation
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      24/7 Support
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Best Price Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Goa Beach Holiday',
                image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
                price: '₹15,000',
                duration: '4 Days'
              },
              {
                name: 'Rajasthan Royal Tour',
                image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400',
                price: '₹25,000',
                duration: '7 Days'
              },
              {
                name: 'Himachal Adventure',
                image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400',
                price: '₹18,000',
                duration: '6 Days'
              }
            ].map((relatedPkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={relatedPkg.image}
                  alt={relatedPkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{relatedPkg.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">{relatedPkg.price}</span>
                    <span className="text-gray-600">{relatedPkg.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;