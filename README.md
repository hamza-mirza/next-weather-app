# Weather App

## Introduction

This weather App is a simple application built with Next.js that allows users to search for current weather information by city. Utilising the WeatherAPI, it displays temperature, humidity, wind speed, and location data.

## Approach

The development approach focused on simplicity, modularity, and usability. The application is structured into components, each with a distinct responsibility, promoting reusability and maintainability.

### Components

- **Search**: A form component allowing users to input a city name and submit a search request.
- **WeatherData**: Displays the weather information. It renders differently based on the availability of data, ensuring a good user experience even when no data is present.
- **API Integration**: The `fetchWeather` function abstracts the API request, encapsulating the logic for fetching weather data and handling errors.

### State Management

The application uses React's `useState` hook for local state management, sufficient for the app's scale and complexity. This approach keeps the component re-rendering logic straightforward and efficient.

## Decision Making

- **Next.js for SSR and SEO**: Next.js was chosen for its server-side rendering capabilities, enhancing the app's performance and search engine optimisation.
- **Axios for API Calls**: Axios is used for its simplicity and wide adoption in making HTTP requests. Its promise-based API integrates seamlessly with async/await syntax for readability.
- **Environmental Variables**: API keys are stored in environmental variables (`NEXT_PUBLIC_WEATHER_API_KEY`) to enhance security and configurability.

## Considerations for a Real-World App

While the application meets the basic requirements, several enhancements could be made for real-world use:

- **Error Handling**: Improve user feedback on errors, potentially using a notification system or more detailed error messages to enhance user experience.
- **Loading State**: Introduce a more interactive loading indicator or skeleton screens for a smoother experience during data fetching.
- **Responsive Design**: Further improve the UI and UX for different devices and screen sizes, ensuring accessibility and usability.
- **Testing**: Expand testing coverage to include integration and end-to-end tests, ensuring reliability and robustness.
- **Feature Expansion**: Add more features like forecast information, weather maps, or user preferences for units (Celsius vs. Fahrenheit).
- **Rate Limiting and Caching**: Implement rate limiting and response caching strategies to optimize API usage and improve performance.
