import { NumberState } from '@/store/numbersStore';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props = { numbers: NumberState[] };

const Chart = ({ numbers }: Props) => {
    const numbersData = (numbers: NumberState[]) =>
        numbers.map((number, i) => ({
            request: i + 1,
            ...number,
        }));

    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart height={250} data={numbersData(numbers)} margin={{ right: 20 }}>
                <XAxis dataKey="request" tickCount={10} tick domain={[0, 1]} />
                <YAxis name="Number" type="number" domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#053136' }} />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="number"
                    stroke="#00e1ff"
                    label={{ fontSize: 15, fill: '#00e1ff', textAnchor: 'middle', dy: -15 }}
                />
                <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#fffb00"
                    label={{ fontSize: 15, fill: '#fffb00', textAnchor: 'middle', dy: -15 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
