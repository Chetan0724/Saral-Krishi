import React from 'react';

const Community = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Join Our Farmer Communities</h2>
      <p className="mb-4">Connect with fellow farmers and share your experiences. Join our social media channels:</p>
      <ul className="list-disc pl-5">
        <li>
          <a href="https://wa.me/your-whatsapp-link" className="text-blue-500 hover:underline">WhatsApp Channel</a>
        </li>
        <li>
          <a href="https://discord.gg/your-discord-link" className="text-blue-500 hover:underline">Discord Group</a>
        </li>
        <li>
          <a href="https://t.me/your-telegram-link" className="text-blue-500 hover:underline">Telegram Group</a>
        </li>
        <li>
          <a href="https://www.facebook.com/your-facebook-page" className="text-blue-500 hover:underline">Facebook Community</a>
        </li>
        <li>
          <a href="https://www.instagram.com/your-instagram-page" className="text-blue-500 hover:underline">Instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default Community;
