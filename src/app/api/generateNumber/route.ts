import openai from '@/lib/openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { temperature } = await request.json();

        const response = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content:
                        'Reply with a random valid number from 0 to 100. For example: 58. Do not use code for this.',
                },
            ],
            model: 'gpt-4o-mini',
            temperature,
        });

        const number = response.choices[0].message.content?.trim();
        return NextResponse.json({ number: number ? +number : 0 }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error generating number' }, { status: 500 });
    }
}
