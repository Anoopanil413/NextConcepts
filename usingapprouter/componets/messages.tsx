"use client"
// Filename: ChatApp.js

import React, { useState, useEffect } from "react";

function useChatMessages() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  // Simulate incoming messages (e.g., from an API)
  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((prevMessages) => [...prevMessages,`New message ${prevMessages.length + 1}`]);
    }, 2000); // New message every 2 seconds

    return () => clearInterval(timer);
  }, []);
  console.log("message in 1",messages,newMessage)

  return { messages, newMessage, setNewMessage };
}

function ChatApp() {
  const { messages, newMessage, setNewMessage } = useChatMessages();
  const deferredMessage = React.useDeferredValue(newMessage);

  return (
    <div className="ChatApp">
      <h1>Chat Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <p>Deferred Message: {deferredMessage}</p>
    </div>
  );
}

export default ChatApp;
