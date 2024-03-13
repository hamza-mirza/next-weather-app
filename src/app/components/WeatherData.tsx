import React from 'react'

export interface WeatherInfo {
  temperature: string
  humidity: string
  windSpeed: string
  city: string
  country: string
}

const WeatherData: React.FC<{ weather: WeatherInfo | null }> = ({ weather }) => {
  if (!weather) return <div>No data to display</div>
  const { temperature, humidity, windSpeed, city, country } = weather
  return (
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
