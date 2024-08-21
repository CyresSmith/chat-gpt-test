import clsx from 'clsx';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ChatGPT Test',
    description: 'ChatGPT Test Assignment',
};

export interface LayoutProps {
    children: ReactNode;
    numbers: ReactNode;
    summaryNumbers: ReactNode;
    chart: ReactNode;
}

export default function RootLayout({ children, numbers, summaryNumbers, chart }: LayoutProps) {
    return (
        <html lang="en">
            <body className={clsx(nunito.className, ' bg-stone-800')}>
                <main className="min-h-screen flex flex-col align-middle py-10 px-36 text-slate-200 gap-10">
                    <h1 className="text-4xl text-center">Random Number Generation</h1>

                    <div className=" grid grid-cols-2 grid-rows-1 gap-6">
                        {numbers}
                        {summaryNumbers}
                    </div>

                    {children}
                </main>
            </body>
        </html>
    );
}
