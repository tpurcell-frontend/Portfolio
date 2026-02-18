import type { VercelRequest, VercelResponse } from '@vercel/node';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  messages: Message[];
  system: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { messages, system }: RequestBody = req.body;

  if (!messages || !system) {
    res.status(400).json({ error: 'Missing messages or system prompt' });
    return;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system,
        messages,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      res.status(response.status).json({ error });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Anthropic API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
