/* This is the main page component for the app. It serves as the entry point for the user interface,
where users can search for weather information by city. The component contains a Search component for input and a WeatherData component to display fetched weather data. It also manages state for weather data, error messages, and handles the search operation by calling the fetchWeather API. */

'use client'

import type { NextPage } from 'next'
import { useState } from 'react'
import Search from './components/Search'
import WeatherData, { WeatherInfo } from './components/WeatherData'
import { fetchWeather } from './api/api'

const Home: NextPage = () => {
  const [weather, setWeather] = useState<WeatherInfo | null>(null) // State for storing weather data
  const [error, setError] = useState<string | null>(null) // State for storing error messages

  const handleSearch = async (city: string) => {
    setError(null) // Resetting error state on new search
    try {
      const data = await fetchWeather(city) // Fetch weather data for the specified city
      setWeather({
        // Setting the weather state with the fetched data
        temperature: data.current.temp_c.toString(),
        humidity: data.current.humidity.toString(),
        windSpeed: data.current.wind_kph.toString(),
        city: data.location.name,
        country: data.location.country
      })
    } catch (error) {
      console.error('Failed to fetch weather data', error)
      setWeather(null) // Reset weather data on error
      if (error instanceof Error) {
        setError(error.message) // Set error message for display
      } else {
        setError('Failed to fetch weather data') // Default error message
      }
    }
  }

  return (
    // Main component layout with Search and WeatherData components
    <div className="bg-gray-50 lg:flex items-center justify-center h-screen">
      <div className="p-8 lg:p-12 lg:flex items-center justify-center bg-white lg:w-9/12 lg:min-h-64 shadow-md rounded-md text-gray-700">
        <div className="text-center w-full">
          <h1 className="text-3xl mb-12">Weather App</h1>
          <Search onSearch={handleSearch} />
          {error ? <div className="text-red-500">{error}</div> : <WeatherData weather={weather} />}
        </div>
      </div>
    </div>
  )
}

export default Home
