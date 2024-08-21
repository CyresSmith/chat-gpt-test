import { randomTopic } from '@/lib/helpers';
import openai from '@/lib/openai';
import { Topic } from '@/store/summaryNumbersStore';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { temperature } = await request.json();

        const summaryResponse = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: `Write two five-sentence summaries about "${randomTopic()}" and "${randomTopic()}". 
                      The response should be in the following string format:
                      "[
                          { "theme": "Topic 1 theme", "content": "Summary of Topic 1" },
                          { "theme": "Topic 2 theme", "content": "Summary of Topic 2" }
                      ]"`,
                },
            ],
            model: 'gpt-4o-mini',
            max_tokens: 300,
        });

        let topics: Topic[] = [];

        const rawContent = summaryResponse.choices[0].message.content?.trim();

        if (rawContent) {
            topics = JSON.parse(rawContent);
        }

        const numberResponse = await openai.chat.completions.create({
            messages: [
                summaryResponse.choices[0].message,
                {
                    role: 'user',
                    content: `Now count the number of tokens in each of the summaries mod 10, and write a string only with two numbers. The string should be in the format 'X Y' where X and Y are a random valid number from 0 to 100 separated by a space. For example: '58 73'. Do not use code for choose number.`,
                },
            ],
            model: 'gpt-4o-mini',
            max_tokens: 10,
            temperature,
        });

        const numbers = numberResponse.choices[0].message.content
            ?.split(' ')
            .map((n: string) => parseInt(n));

        return NextResponse.json({ numbers: numbers ? numbers : [], topics }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error generating summary numbers' }, { status: 500 });
    }
}
