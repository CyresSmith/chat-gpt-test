'use client';

import { useNumbersStore } from '@/store/numbersStore';
import GenerateNumberButton from '../components/generateNumberButton';
import NumbersSection from '../components/numbersSection';

const Page = () => {
    const { numbers, temperature, setTemperature, isLoading } = useNumbersStore();

    return (
        <NumbersSection
            isLoading={isLoading}
            actionButton={<GenerateNumberButton />}
            numbers={numbers}
            temperature={temperature}
            setTemperature={setTemperature}
        />
    );
};

export default Page;
