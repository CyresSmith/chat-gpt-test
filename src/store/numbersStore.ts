import { DEFAULT_TEMPERATURE } from '@/lib/constants';
import { create } from 'zustand';
import createSelectors from './selectors';

export type NumberState = { number: number; temperature: number };

interface NumbersState {
    numbers: NumberState[];
    temperature: number;
    isLoading: boolean;
    addNumber: (number: NumberState) => void;
    setTemperature: (temperature: number) => void;
    toggleLoading: () => void;
}

const numbersStore = create<NumbersState>()(set => ({
    numbers: [],
    temperature: DEFAULT_TEMPERATURE,
    isLoading: false,
    addNumber: (number: NumberState) => set(({ numbers }) => ({ numbers: [...numbers, number] })),
    setTemperature: (temperature: number) => set({ temperature }),
    toggleLoading: () => set(({ isLoading }) => ({ isLoading: !isLoading })),
}));

export const useNumbersStore = createSelectors(numbersStore);
