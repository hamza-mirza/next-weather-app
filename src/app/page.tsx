'use client'

import type { NextPage } from 'next'
import { useState } from 'react'
import Search from './components/Search'
import WeatherData, { WeatherInfo } from './components/WeatherData'
import { fetchWeather } from './api/api'

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
    <div className="bg-gray-50 lg:flex items-center justify-center h-screen">
      <div className="p-8 lg:p-12 lg:flex items-center justify-center bg-white lg:w-9/12 lg:min-h-64 shadow-md rounded-md text-gray-700">
        <div className="text-center w-full">
          <h1 className="text-3xl mb-12">Weather App</h1>
          <Search onSearch={handleSearch} />
          <WeatherData weather={weather} />
        </div>
      </div>
    </div>
  )
}

export default Home
