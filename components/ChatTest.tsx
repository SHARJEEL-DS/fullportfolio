'use client';

import { useState } from 'react';
import { fetchChatResponse } from '../lib/useChatApi';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const reply = await fetchChatResponse(input);
    setMessages([...newMessages, { role: 'assistant', content: reply }]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
      >
        💬
      </button>

      {/* Chat Topup Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-2xl shadow-2xl p-4 flex flex-col z-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">Chat with AI</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500">✖</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 border p-2 rounded">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="mt-2 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-2 rounded-l"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
