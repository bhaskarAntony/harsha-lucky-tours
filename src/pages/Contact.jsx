import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-100">Get in touch with us for all your travel needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Assistance</option>
                  <option value="dream-scheme">Dream Scheme</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Address</h3>
                    <p className="text-gray-600">
                      123, MG Road, Brigade Road<br />
                      Bangalore, Karnataka - 560001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:+919876543210" className="block text-green-600 hover:text-green-700">
                        +91 98765 43210 (Primary)
                      </a>
                      <a href="tel:+919876543211" className="block text-green-600 hover:text-green-700">
                        +91 98765 43211 (Secondary)
                      </a>
                      <a href="tel:+918012345678" className="block text-green-600 hover:text-green-700">
                        +91 80123 45678 (Emergency)
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Addresses</h3>
                    <div className="space-y-1">
                      <a href="mailto:info@harshatours.com" className="block text-green-600 hover:text-green-700">
                        info@harshatours.com
                      </a>
                      <a href="mailto:booking@harshatours.com" className="block text-green-600 hover:text-green-700">
                        booking@harshatours.com
                      </a>
                      <a href="mailto:support@harshatours.com" className="block text-green-600 hover:text-green-700">
                        support@harshatours.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                      <p className="text-sm text-green-600 mt-1">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span>📞</span>
                  <span>Call Now</span>
                </a>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Follow us on Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-700 text-2xl">📘</a>
                  <a href="#" className="text-pink-600 hover:text-pink-700 text-2xl">📷</a>
                  <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🐦</a>
                  <a href="#" className="text-red-600 hover:text-red-700 text-2xl">🎥</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-green-50 to-green-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-gray-600">
              Located in the heart of Bangalore, our office is easily accessible by public transport and has ample parking space.
            </p>
          </div>
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            {/* Replace this with actual Google Maps embed */}
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-gray-600">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500 mt-2">
                Meanwhile, you can find us at: 123, MG Road, Brigade Road, Bangalore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;