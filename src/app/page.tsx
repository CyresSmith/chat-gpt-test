import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Home = async ({ children }: Props) => {
    return <div>{children}</div>;
};

export default Home;
