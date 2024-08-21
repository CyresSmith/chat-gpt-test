'use client';

import { useSummaryNumbersStore } from '@/store/summaryNumbersStore';
import GenerateSummaryNumbersButton from '../components/generateSummaryNumbersButton';
import NumbersSection from '../components/numbersSection';

const Page = () => {
    const { numbers, topics, temperature, setTemperature, isLoading } = useSummaryNumbersStore();

    return (
        <NumbersSection
            actionButton={<GenerateSummaryNumbersButton />}
            numbers={numbers}
            topics={topics}
            temperature={temperature}
            setTemperature={setTemperature}
            isLoading={isLoading}
        />
    );
};

export default Page;
