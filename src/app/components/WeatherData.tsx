/* The WeatherData component is responsible for displaying the weather information. It accepts weather data as a prop and renders details such as temperature, humidity, wind speed, and the location (city and country). If no weather data is provided, it shows a message indicating that there is no data to display. */

import React from 'react'

export interface WeatherInfo {
  temperature: string
  humidity: string
  windSpeed: string
  city: string
  country: string
}

const WeatherData: React.FC<{ weather: WeatherInfo | null }> = ({ weather }) => {
  if (!weather) return <div>No data to display</div> // Displaying a fallback message if no weather data is provided

  // Destructuring weather data for display
  const { temperature, humidity, windSpeed, city, country } = weather
  return (
    // Layout for displaying weather information
    <div className="lg:w-4/12 mx-auto">
      <p className="mb-8 font-bold">
        {city}, {country}
      </p>
      <div className="flex justify-between items-center flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-3">
        <div>
          <h3>Temperature:</h3>
          <p className="text-2xl">{temperature}°C</p>
        </div>
        <div>
          <h3>Humidity:</h3>
          <p className="text-2xl">{humidity}%</p>
        </div>
        <div>
          <h3>Wind Speed:</h3>
          <p className="text-2xl">{windSpeed} km/h</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherData
