export async function fetchChatResponse(question: string): Promise<string> {
  try {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    console.log('API response:', data); // optional for debugging

    // Correctly extract nested string
    const message = data?.output?.output;
    return typeof message === 'string' ? message.trim() : 'No response';
  } catch (error) {
    console.error('Fetch error:', error);
    return 'Something went wrong.';
  }
}
