import { generateNumber, generateSummariesAndNumbers } from '@/lib/openai';

export async function getNumber(temperature?: number): Promise<number | undefined> {
    try {
        return await generateNumber(temperature);
    } catch (error) {
        console.error(error);
    }
}

export async function getTwoNumbersWithSummaries(
    temperature?: number
): Promise<number[] | undefined> {
    try {
        return await generateSummariesAndNumbers(temperature);
    } catch (error) {
        console.error(error);
    }
}
