import { TOPICS } from './constants';

export const randomTopic = () => TOPICS[Math.floor(Math.random() * TOPICS.length)];

export const buildUrl = (...paths: string[]) => `/api/${paths.join('/')}`;

export const sendRequest = async <T>(url: string, init?: RequestInit) => {
    const res = await fetch(url, init);

    if (!res.ok) throw new Error(await res.text());

    return (await res.json()) as T;
};
