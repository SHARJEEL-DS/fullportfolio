'use client';

import { useState, useRef, useEffect } from 'react';
import { fetchChatResponse } from '../lib/useChatApi';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const reply = await fetchChatResponse(input);
    setMessages([...newMessages, { role: 'assistant', content: reply }]);
    setIsLoading(false);
  };

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
        aria-label="Toggle Chat"
      >
        💬
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 flex flex-col z-50 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-gray-800 dark:text-gray-100">Chat with AI</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-2 p-2 rounded">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded text-sm whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-blue-100 dark:bg-blue-800 text-right text-blue-900 dark:text-blue-100'
                    : 'bg-gray-100 dark:bg-gray-800 text-left text-gray-800 dark:text-gray-200'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="text-sm text-gray-400 dark:text-gray-500 italic">AI is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="mt-2 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-l focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
