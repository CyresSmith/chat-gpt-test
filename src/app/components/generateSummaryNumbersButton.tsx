'use client';

import Button from '@/components/shared/button';
import { buildUrl, sendRequest } from '@/lib/helpers';
import { Topic, useSummaryNumbersStore } from '@/store/summaryNumbersStore';

const GenerateSummaryNumbersButton = () => {
    const { temperature, addNumbers, setTopics, isLoading, toggleLoading } =
        useSummaryNumbersStore();

    const generateSummaryNumbers = async () => {
        try {
            toggleLoading();

            const { numbers, topics } = await sendRequest<{ numbers: number[]; topics: Topic[] }>(
                buildUrl('generateSummaryNumbers'),
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ temperature }),
                }
            );

            addNumbers(numbers.map(number => ({ number, temperature })));
            setTopics(topics);
        } catch (error) {
            console.error('Error fetching number:', error);
        } finally {
            toggleLoading();
        }
    };

    return (
        <Button onClick={generateSummaryNumbers} disabled={isLoading} loading={isLoading}>
            Generate Summary Numbers
        </Button>
    );
};

export default GenerateSummaryNumbersButton;
