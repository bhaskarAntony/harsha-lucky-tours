import React from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, ClockIcon, UserIcon, ShareIcon } from '@heroicons/react/24/outline';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data
  const blogPost = {
    id: 1,
    title: 'Top 10 Must-Visit Destinations in South India',
    content: `
      <p>South India is a treasure trove of diverse experiences, from ancient temples and royal palaces to pristine beaches and lush backwaters. Whether you're a history buff, nature lover, or adventure seeker, South India has something magical waiting for you.</p>

      <h2>1. Kerala - God's Own Country</h2>
      <p>Kerala, known as "God's Own Country," is famous for its serene backwaters, spice plantations, and Ayurvedic treatments. The houseboat experience in Alleppey is truly unforgettable, offering a unique way to explore the interconnected rivers, lakes, and lagoons.</p>

      <h3>Must-visit places in Kerala:</h3>
      <ul>
        <li>Alleppey - Famous for houseboat cruises</li>
        <li>Munnar - Hill station with tea plantations</li>
        <li>Cochin - Historic port city with colonial charm</li>
        <li>Thekkady - Wildlife sanctuary and spice gardens</li>
        <li>Kovalam - Beautiful beaches and lighthouse</li>
      </ul>

      <h2>2. Goa - Beach Paradise</h2>
      <p>Goa needs no introduction. This coastal paradise offers golden beaches, vibrant nightlife, Portuguese architecture, and delicious seafood. From the bustling beaches of North Goa to the serene shores of South Goa, there's something for every type of traveler.</p>

      <h2>3. Rajasthan - Land of Kings</h2>
      <p>While technically in North-West India, Rajasthan's influence extends throughout the region. The royal palaces, magnificent forts, and colorful culture make it an essential destination. Cities like Jaipur, Udaipur, and Jodhpur showcase the grandeur of India's royal heritage.</p>

      <h2>4. Karnataka - Garden State</h2>
      <p>Karnataka offers a perfect blend of modern cities, ancient architecture, and natural beauty. Bangalore, the IT capital, contrasts beautifully with historic Mysore and the ruins of Hampi.</p>

      <h3>Karnataka highlights:</h3>
      <ul>
        <li>Mysore Palace - Magnificent royal architecture</li>
        <li>Hampi - UNESCO World Heritage Site</li>
        <li>Coorg - Coffee plantations and hill stations</li>
        <li>Gokarna - Peaceful beaches and temples</li>
      </ul>

      <h2>5. Tamil Nadu - Temple State</h2>
      <p>Tamil Nadu is renowned for its ancient Dravidian temples, classical music, and rich cultural heritage. The state offers everything from beach towns like Mahabalipuram to hill stations like Ooty.</p>

      <h2>Best Time to Visit South India</h2>
      <p>The best time to visit South India is during the winter months (October to March) when the weather is pleasant and comfortable for sightseeing. However, hill stations like Munnar and Ooty can be visited year-round.</p>

      <h2>Travel Tips for South India</h2>
      <ul>
        <li>Book accommodations in advance during peak season</li>
        <li>Try local cuisine - each state has unique flavors</li>
        <li>Respect local customs, especially when visiting temples</li>
        <li>Carry light cotton clothing and comfortable walking shoes</li>
        <li>Stay hydrated and use sunscreen</li>
      </ul>

      <h2>Conclusion</h2>
      <p>South India offers an incredible diversity of experiences within a relatively compact region. From the backwaters of Kerala to the beaches of Goa, from ancient temples to modern cities, every destination tells a unique story. Plan your South Indian adventure with Harsha Tours and create memories that will last a lifetime!</p>
    `,
    image: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Destinations',
    author: 'Harsha Kumar',
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['South India', 'Kerala', 'Goa', 'Karnataka', 'Tamil Nadu', 'Travel Guide']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Essential Travel Tips for First-Time International Travelers',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Travel Tips'
    },
    {
      id: 3,
      title: 'Budget Travel Guide: Exploring India Under ₹30,000',
      image: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Budget Travel'
    },
    {
      id: 4,
      title: 'Kerala Backwaters: A Complete Travel Guide',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Destinations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Image */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  {blogPost.author}
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {new Date(blogPost.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {blogPost.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Share Buttons */}
        <div className="flex items-center justify-between mb-8 bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <ShareIcon className="h-5 w-5" />
            <span>Share this article:</span>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors">
              Twitter
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Pinterest
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
          
          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt={blogPost.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">About {blogPost.author}</h3>
              <p className="text-gray-700 mb-4">
                Harsha Kumar is the founder of Harsha Tours & Travels with over 15 years of experience in the travel industry. 
                He has personally visited all the destinations featured in our packages and loves sharing his travel insights with fellow travelers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-600 hover:text-green-700">Follow on Twitter</a>
                <a href="#" className="text-green-600 hover:text-green-700">Connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-4">
                  <div className="text-xs text-green-600 font-medium mb-2">{post.category}</div>
                  <h3 className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
          <p className="text-green-100 mb-6">
            Subscribe to our newsletter for more travel tips and exclusive deals
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;