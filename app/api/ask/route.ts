import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { question } = body;

    const apiUrl = process.env.PROMPTLY_API_URL;
    const token = process.env.PROMPTLY_TOKEN;

    if (!apiUrl || !token) {
      console.error('Missing API URL or Token in env');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const response = await axios.post(
      apiUrl,
      {
        input: { question },
        stream: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    );

    return NextResponse.json({ output: response.data.output });
  } catch (error) {
    console.error('Backend API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch from Promptly' }, { status: 500 });
  }
}
