'use client'

import type { NextPage } from 'next'
import { useState } from 'react'
import Search from './components/Search'
import WeatherData, { WeatherInfo } from './components/WeatherData'
import { fetchWeather } from './api/api'

const Home: NextPage = () => {
  const [weather, setWeather] = useState<WeatherInfo | null>(null)

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeather(city)
      console.log(data)
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
      <WeatherData weather={weather} />
    </div>
  )
}

export default Home
