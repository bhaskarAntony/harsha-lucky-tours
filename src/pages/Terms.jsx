import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-green-100">Please read our terms and conditions carefully</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">Last updated: January 15, 2025</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. General Terms</h2>
            <p className="mb-6">
              These terms and conditions ("Terms") govern your use of Harsha Tours & Travels services. 
              By booking any tour package or service with us, you agree to be bound by these Terms. 
              Please read them carefully before making any booking.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Booking and Payment</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">2.1 Booking Confirmation</h3>
              <p className="mb-4">
                All bookings are subject to availability and confirmation. A booking is confirmed only after 
                receipt of the required advance payment and written confirmation from Harsha Tours & Travels.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">2.2 Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Advance payment: 25-50% of the total package cost (varies by destination)</li>
                <li>Balance payment: Due 7-15 days before departure date</li>
                <li>Full payment required for bookings made within 15 days of departure</li>
                <li>Payment can be made via cash, bank transfer, credit/debit card, or UPI</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Cancellation Policy</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">3.1 Cancellation Charges</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>45+ days before departure: 10% of total cost</li>
                <li>31-45 days before departure: 25% of total cost</li>
                <li>16-30 days before departure: 50% of total cost</li>
                <li>8-15 days before departure: 75% of total cost</li>
                <li>0-7 days before departure: 100% of total cost (no refund)</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-2">3.2 Special Conditions</h3>
              <p className="mb-4">
                For international packages, air tickets, train tickets, and hotel bookings made in advance, 
                cancellation charges as per the respective service provider's policy will apply in addition 
                to our standard charges.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Changes to Itinerary</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">4.1 Changes by Company</h3>
              <p className="mb-4">
                Harsha Tours & Travels reserves the right to modify itineraries due to weather conditions, 
                natural calamities, political situations, technical problems, or any other circumstances 
                beyond our control. In such cases, alternative arrangements of similar standard will be provided.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">4.2 Changes by Customer</h3>
              <p className="mb-4">
                Changes to confirmed bookings are subject to availability and additional charges. 
                Name changes, date changes, and destination changes will incur service fees plus 
                any difference in cost.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Travel Documentation</h2>
            <div className="mb-6">
              <p className="mb-4">
                Customers are responsible for ensuring they have all required travel documents including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Valid passport (for international travel)</li>
                <li>Required visas</li>
                <li>Health certificates and vaccinations as required</li>
                <li>Valid ID proofs for domestic travel</li>
                <li>Travel insurance (recommended for all trips)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Health and Safety</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">6.1 Health Requirements</h3>
              <p className="mb-4">
                Customers must declare any health conditions that may affect their travel. 
                We recommend consulting a doctor before traveling, especially for adventure activities 
                or travel to high-altitude destinations.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">6.2 Travel Insurance</h3>
              <p className="mb-4">
                We strongly recommend purchasing comprehensive travel insurance covering medical expenses, 
                trip cancellation, baggage loss, and other unforeseen circumstances.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Liability Limitations</h2>
            <div className="mb-6">
              <p className="mb-4">
                Harsha Tours & Travels acts as an intermediary between customers and service providers 
                (hotels, transport companies, airlines, etc.). Our liability is limited to the services 
                directly provided by us. We are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Acts of God, natural disasters, political disturbances</li>
                <li>Accidents, injuries, illness, or death during the trip</li>
                <li>Loss or damage to personal belongings</li>
                <li>Delays or changes by airlines, railways, or other service providers</li>
                <li>Services not directly provided by us</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Dream Scheme Terms</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">8.1 Eligibility</h3>
              <p className="mb-4">
                Dream Scheme registration is free and open to individuals above 18 years of age. 
                Registration does not guarantee winning any package.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">8.2 Lucky Draw Process</h3>
              <p className="mb-4">
                Lucky draws are conducted transparently through random selection. Winners will be 
                contacted within 48 hours of the draw. Decision of the management is final and binding.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">8.3 Winner Obligations</h3>
              <p className="mb-4">
                Winners must accept the package within 30 days of notification and travel within 
                the specified validity period. Packages cannot be transferred, exchanged for cash, 
                or modified significantly.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Complaints and Disputes</h2>
            <div className="mb-6">
              <p className="mb-4">
                Any complaints regarding services should be reported immediately during the trip for 
                prompt resolution. Post-trip complaints must be submitted in writing within 15 days 
                of trip completion.
              </p>
              
              <p className="mb-4">
                All disputes will be subject to the jurisdiction of Bangalore courts only.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Privacy Policy</h2>
            <div className="mb-6">
              <p className="mb-4">
                We respect your privacy and are committed to protecting your personal information. 
                Your details will be used only for trip-related communications and will not be 
                shared with third parties except as required for trip arrangements.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Force Majeure</h2>
            <div className="mb-6">
              <p className="mb-4">
                We shall not be liable for any failure to perform our obligations due to circumstances 
                beyond our reasonable control including but not limited to natural disasters, 
                government actions, terrorism, pandemic situations, or technical failures.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Information</h2>
            <div className="mb-6">
              <p className="mb-4">
                For any questions regarding these terms and conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Harsha Tours & Travels</strong></p>
                <p>123, MG Road, Brigade Road</p>
                <p>Bangalore, Karnataka - 560001</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: info@harshatours.com</p>
              </div>
            </div>

            <div className="border-t pt-6 text-sm text-gray-600">
              <p>
                By proceeding with booking any of our services, you acknowledge that you have read, 
                understood, and agree to be bound by these terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;