# LLM Random Number Generation

This project demonstrates the use of OpenAI's GPT-4o-mini model to generate random numbers between 0
and 100. The project is built with Next.js and TypeScript.

## Features

-   Generates random numbers using OpenAI's API.
-   Visualizes the distribution of generated numbers.
-   Implements a strategy to create more randomness by distracting the model with topic summaries.

## How to Run

1. Clone the repository.
2. Install dependencies: `yarn`.
3. Create a `.env.local` file with your OpenAI API key.
4. Run the development server: `yarn dev`.
5. Open `http://localhost:3000` in your browser to see the results.

## Implementation Details

-   The project includes API routes to interact with OpenAI's API and retrieve generated numbers.
-   The frontend displays the results and visualizes the distribution using recharts.

## Enhancements

-   Experimented with the `temperature` parameter to increase randomness.
-   Created a method to generate numbers by counting tokens in randomly generated topic summaries.
