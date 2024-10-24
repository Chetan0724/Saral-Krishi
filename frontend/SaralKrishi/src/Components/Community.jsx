import React from 'react';
// Importing social media icons
import whatsappIcon from '../assets/Socials/whatsapp.png';
import discordIcon from '../assets/Socials/discord.png';
import telegramIcon from '../assets/Socials/telegram.png';
import facebookIcon from '../assets/Socials/facebook.png';
import instagramIcon from '../assets/Socials/instagram.png';
import farmersImage from '../assets/farmerscom.jpg'

const Community = () => {
  return (
    <div className="container mx-auto p-4 flex items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Join Our Farmer Communities</h2>
        <p className="mb-4">Connect with fellow farmers and share your experiences. Join our social media channels:</p>
        <ul className="list-disc pl-5">
          <li className="mb-4">
            <a href="https://wa.me/your-whatsapp-link" className="flex items-center text-blue-500 hover:underline">
              <img src={whatsappIcon} alt="WhatsApp" className="mr-2 w-8 h-8" />
              <span className="bg-blue-500 text-white py-2 px-4 rounded">WhatsApp Channel</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="https://discord.gg/your-discord-link" className="flex items-center text-blue-500 hover:underline">
              <img src={discordIcon} alt="Discord" className="mr-2 w-8 h-8" />
              <span className="bg-blue-500 text-white py-2 px-4 rounded">Discord Group</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="https://t.me/your-telegram-link" className="flex items-center text-blue-500 hover:underline">
              <img src={telegramIcon} alt="Telegram" className="mr-2 w-8 h-8" />
              <span className="bg-blue-500 text-white py-2 px-4 rounded">Telegram Group</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="https://www.facebook.com/your-facebook-page" className="flex items-center text-blue-500 hover:underline">
              <img src={facebookIcon} alt="Facebook" className="mr-2 w-8 h-8" />
              <span className="bg-blue-500 text-white py-2 px-4 rounded">Facebook Community</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="https://www.instagram.com/your-instagram-page" className="flex items-center text-blue-500 hover:underline">
              <img src={instagramIcon} alt="Instagram" className="mr-2 w-8 h-8" />
              <span className="bg-blue-500 text-white py-2 px-4 rounded">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-end">
        <img src={farmersImage} alt="Farmers Community" className="w-3/4 h-auto m-16" />
      </div>
    </div>
  );
};

export default Community;
