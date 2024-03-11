'use client'

import type { NextPage } from 'next'
import { useState } from 'react'
import Search from './components/Search' // Ensure correct path based on Next.js folder structure
import WeatherData, { WeatherInfo } from './components/WeatherData' // Ensure correct path
import { fetchWeather } from './api/api' // Ensure correct path

// Define a list of popular cities
const popularCities = [
  { name: 'New York', country: 'USA' },
  { name: 'London', country: 'UK' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'Paris', country: 'France' },
  { name: 'Sydney', country: 'Australia' }
]

const Home: NextPage = () => {
  const [weather, setWeather] = useState<WeatherInfo | null>(null)

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeather(city)
      setWeather({
        temperature: data.current.temp_c.toString(),
        humidity: data.current.humidity.toString(),
        windSpeed: data.current.wind_kph.toString(),
        city: data.location.name,
        country: data.location.country
      })
    } catch (error) {
      console.error('Failed to fetch weather data', error)
      setWeather(null)
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      <div>
        <h2>Popular Cities</h2>
        <ul>
          {popularCities.map((city, index) => (
            <li
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => handleSearch(city.name)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      </div>
      <WeatherData weather={weather} />
    </div>
  )
}

export default Home
