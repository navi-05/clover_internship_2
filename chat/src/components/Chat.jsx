// src/components/Chat.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Replace with your server URL

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Listening for incoming messages from the server
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up on component unmount
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      // Emitting a message to the server
      socket.emit('message', input);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
