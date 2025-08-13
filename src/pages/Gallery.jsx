import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    // Kerala
    { id: 1, src: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'kerala', title: 'Kerala Backwaters', description: 'Serene backwaters of Alleppey' },
    { id: 2, src: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'kerala', title: 'Houseboat Cruise', description: 'Luxury houseboat experience' },
    { id: 3, src: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'kerala', title: 'Spice Plantations', description: 'Aromatic spice gardens' },
    
    // Goa
    { id: 4, src: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'goa', title: 'Goa Beaches', description: 'Golden beaches of Goa' },
    { id: 5, src: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'goa', title: 'Beach Resort', description: 'Luxury beach resorts' },
    { id: 6, src: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'goa', title: 'Water Sports', description: 'Exciting water activities' },
    
    // Rajasthan
    { id: 7, src: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'rajasthan', title: 'Rajasthan Palaces', description: 'Magnificent royal palaces' },
    { id: 8, src: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'rajasthan', title: 'Desert Safari', description: 'Camel rides in Thar desert' },
    { id: 9, src: 'https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'rajasthan', title: 'Jaipur City', description: 'Pink city architecture' },
    
    // Himachal
    { id: 10, src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'himachal', title: 'Mountain Views', description: 'Breathtaking Himalayan views' },
    { id: 11, src: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'himachal', title: 'Hill Stations', description: 'Cool mountain retreats' },
    { id: 12, src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'himachal', title: 'Adventure Sports', description: 'Thrilling mountain activities' },
    
    // International
    { id: 13, src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'international', title: 'Thailand Beaches', description: 'Pristine Thai beaches' },
    { id: 14, src: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'international', title: 'Nepal Mountains', description: 'Majestic Nepalese peaks' },
    { id: 15, src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'international', title: 'Sri Lanka', description: 'Pearl of Indian Ocean' },
    
    // Andaman
    { id: 16, src: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'andaman', title: 'Crystal Waters', description: 'Clear blue waters of Andaman' },
    { id: 17, src: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'andaman', title: 'Beach Activities', description: 'Fun beach activities' },
    { id: 18, src: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'andaman', title: 'Island Hopping', description: 'Exploring different islands' },
    
    // Kashmir
    { id: 19, src: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'kashmir', title: 'Kashmir Valley', description: 'Paradise on Earth' },
    { id: 20, src: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'kashmir', title: 'Shikara Rides', description: 'Traditional boat rides' },
    { id: 21, src: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'kashmir', title: 'Snow Mountains', description: 'Snow-capped peaks' }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'kerala', name: 'Kerala' },
    { id: 'goa', name: 'Goa' },
    { id: 'rajasthan', name: 'Rajasthan' },
    { id: 'himachal', name: 'Himachal' },
    { id: 'kashmir', name: 'Kashmir' },
    { id: 'andaman', name: 'Andaman' },
    { id: 'international', name: 'International' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-green-100">Explore the beauty of destinations through our captured moments</p>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-20 rounded-full p-2">
                  <span className="text-white text-xl">🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <span className="text-6xl">📷</span>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-5xl max-h-full p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">{galleryImages.length}+</div>
              <div className="text-green-100">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-green-100">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-green-100">Happy Moments</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-green-100">Years Capturing</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Create Your Own Memories?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you capture moments like these on your next adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/packages"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
            >
              View Packages
            </a>
            <a
              href="/enquiry"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;