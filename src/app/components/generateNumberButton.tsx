'use client';

import Button from '@/components/shared/button';
import { useNumbersStore } from '@/store/numbersStore';

const GenerateNumberButton = () => {
    const { temperature, addNumber, toggleLoading, isLoading } = useNumbersStore();

    const generateNumber = async () => {
        try {
            toggleLoading();

            const response = await fetch('/api/generateNumber', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ temperature }),
            });

            const data = await response.json();

            addNumber({ number: data.number, temperature });
        } catch (error) {
            console.error('Error fetching number:', error);
        } finally {
            toggleLoading();
        }
    };

    return (
        <Button disabled={isLoading} onClick={generateNumber} loading={isLoading}>
            Generate Number
        </Button>
    );
};

export default GenerateNumberButton;
