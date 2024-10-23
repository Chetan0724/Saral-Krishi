import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const predefinedResponses = {
    "hello": "Hi there! How can I help you?",
    "what is your name?": "I am a simple chatbot.",
    "how can I use this service?": "You can ask me questions related to our services.",
    "what is the price of the product?": "The price of the product is 1000 rupees.",
    "chetan": "Chetan is a farmer from Barwaha.",
    "aryan": "Aryan is a farmer from Dabra."
  };

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');

      // Get response from predefined dataset
      const botResponse = getResponseFromDataset(input);
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }
  };

  // New function to get response from predefined dataset
  const getResponseFromDataset = (userInput) => {
    return predefinedResponses[userInput.toLowerCase()] || "Sorry, I don't understand that.";
  };

  return (
    <div className="bg-blue-50 rounded-lg p-5 shadow-md">
      <div className="bg-blue-600 text-white p-3 rounded-md text-center">
        <h2>Chatbot</h2>
      </div>
      <div className="max-h-72 overflow-y-auto my-3">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-md my-1 ${msg.sender === 'user' ? 'bg-green-200 self-end' : 'bg-red-200'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-md mr-2 focus:border-blue-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
