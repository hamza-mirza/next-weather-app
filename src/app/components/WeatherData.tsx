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
    <div>
      <p>
        Displaying data for: {city}, {country}
      </p>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
    </div>
  )
}

export default WeatherData
