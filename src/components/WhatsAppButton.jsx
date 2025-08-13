import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your tour packages. Please provide more information.");
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <span className="text-2xl">💬</span>
      </div>
    </button>
  );
};

export default WhatsAppButton;