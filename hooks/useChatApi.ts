// hooks/useChatApi.ts
'use server';

import { generateResponse } from '../lib/chat'; // Assuming chat.ts is in lib folder

export async function fetchChatResponse(query: string): Promise<string> {
  try {
    return await generateResponse(query);
  } catch (error) {
    console.error('Chat API Error:', error);
    return 'Sorry, I encountered an error processing your request.';
  }
}