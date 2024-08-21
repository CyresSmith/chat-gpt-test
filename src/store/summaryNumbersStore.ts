import { DEFAULT_TEMPERATURE } from '@/lib/constants';
import { create } from 'zustand';
import { NumberState } from './numbersStore';
import createSelectors from './selectors';

export type Topic = {
    theme: string;
    content: string;
};

interface SummaryNumbersState {
    numbers: NumberState[];
    temperature: number;
    topics: Topic[];
    isLoading: boolean;
    addNumbers: (newNumbers: NumberState[]) => void;
    setTemperature: (temperature: number) => void;
    setTopics: (topics: Topic[]) => void;
    toggleLoading: () => void;
}

const summaryNumbersStore = create<SummaryNumbersState>()(set => ({
    numbers: [],
    temperature: DEFAULT_TEMPERATURE,
    topics: [],
    isLoading: false,
    addNumbers: (newNumbers: NumberState[]) =>
        set(({ numbers }) => ({
            numbers: [...numbers, ...newNumbers],
        })),
    setTemperature: (temperature: number) => set({ temperature }),
    setTopics: (topics: Topic[]) => set({ topics }),
    toggleLoading: () =>
        set(({ isLoading }) => ({
            isLoading: !isLoading,
        })),
}));

export const useSummaryNumbersStore = createSelectors(summaryNumbersStore);
