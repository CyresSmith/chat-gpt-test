import Button from '@/components/shared/button';
import { NumberState } from '@/store/numbersStore';
import { Topic } from '@/store/summaryNumbersStore';
import { ReactNode } from 'react';
import Chart from './Chart';

type Props = {
    actionButton: ReactNode;
    numbers: NumberState[];
    temperature: number;
    topics?: Topic[];
    isLoading: boolean;
    setTemperature: (number: number) => void;
};

const NumbersSection = ({
    actionButton,
    numbers,
    temperature,
    topics,
    setTemperature,
    isLoading,
}: Props) => {
    const changeTemperature = (number: number) => {
        const newTemperature = +(temperature + number).toFixed(1);
        setTemperature(newTemperature);
    };

    return (
        <section className="flex flex-col gap-6">
            <div>
                <div
                    className="grid
                mobile:grid-cols-1 mobile:gap-3
                tablet:grid-cols-1 tablet:gap-5
                desktop:grid-cols-2 desktop:gap-10"
                >
                    {actionButton}

                    <div className="flex flex-col gap-3 mobile:content-center">
                        <h5 className=" mobile:text-center">Temperature:</h5>

                        <div className="flex items-center gap-3 mobile:justify-between">
                            <Button
                                disabled={isLoading || temperature < 0.2}
                                onClick={() => changeTemperature(-0.1)}
                            >
                                -
                            </Button>

                            <span className=" min-w-8 text-center">{temperature}</span>

                            <Button
                                className=" min-w-11"
                                disabled={isLoading || temperature === 2}
                                onClick={() => changeTemperature(+0.1)}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Chart numbers={numbers} />

            {topics && (
                <>
                    <h3 className="text-xl capitalize">Last generated topics</h3>

                    {topics.length > 0 ? (
                        <div className="grid grid-cols-2 grid-rows-1 gap-6 overflow-auto">
                            {topics.map(({ content, theme }) => (
                                <div key={theme} className="flex flex-col gap-3">
                                    <h4 className="text-xl capitalize">{theme}</h4>

                                    <p>{content}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No topics yet!</p>
                    )}
                </>
            )}
        </section>
    );
};

export default NumbersSection;
