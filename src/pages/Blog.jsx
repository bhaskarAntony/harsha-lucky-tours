import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Must-Visit Destinations in South India',
      excerpt: 'Discover the hidden gems and popular attractions that make South India a traveler\'s paradise. From beaches to backwaters, temples to hill stations.',
      image: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Destinations',
      author: 'Harsha Kumar',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Essential Travel Tips for First-Time International Travelers',
      excerpt: 'Planning your first international trip? Here\'s everything you need to know about documents, currency, culture, and staying safe abroad.',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Travel Tips',
      author: 'Priya Sharma',
      date: '2025-01-12',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Budget Travel Guide: Exploring India Under ₹30,000',
      excerpt: 'Learn how to maximize your travel experience in India without breaking the bank. Tips on accommodation, transportation, and local experiences.',
      image: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Budget Travel',
      author: 'Rajesh Reddy',
      date: '2025-01-10',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Kerala Backwaters: A Complete Travel Guide',
      excerpt: 'Everything you need to know about exploring Kerala\'s famous backwaters, from houseboat bookings to the best time to visit.',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Destinations',
      author: 'Lakshmi Iyer',
      date: '2025-01-08',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Goa Beyond Beaches: Hidden Cultural Treasures',
      excerpt: 'Discover the rich Portuguese heritage, ancient temples, and spice plantations that make Goa more than just a beach destination.',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Culture',
      author: 'Maria D\'Souza',
      date: '2025-01-05',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Rajasthan Royal Heritage: Palaces and Forts Guide',
      excerpt: 'Step into the royal world of Rajasthan with our comprehensive guide to the most magnificent palaces and historic forts.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Heritage',
      author: 'Vikram Singh',
      date: '2025-01-03',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 7,
      title: 'Himachal Pradesh: Best Hill Stations for Summer Escape',
      excerpt: 'Beat the heat with our guide to the most beautiful and accessible hill stations in Himachal Pradesh.',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hill Stations',
      author: 'Anita Sharma',
      date: '2025-01-01',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Thailand Travel Guide: From Bangkok to Islands',
      excerpt: 'Complete guide to Thailand covering bustling Bangkok, cultural temples, pristine beaches, and exotic islands.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'International',
      author: 'Suresh Kumar',
      date: '2024-12-28',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 9,
      title: 'Solo Travel Safety Tips for Women in India',
      excerpt: 'Comprehensive safety guide for women traveling solo in India, including destination recommendations and practical tips.',
      image: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Solo Travel',
      author: 'Kavya Nair',
      date: '2024-12-25',
      readTime: '8 min read',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'Destinations',
    'Travel Tips',
    'Budget Travel',
    'Culture',
    'Heritage',
    'Hill Stations',
    'International',
    'Solo Travel'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-green-100">Discover amazing destinations and get expert travel tips</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated with Latest Travel Tips</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and get the latest travel guides, tips, and exclusive deals delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;