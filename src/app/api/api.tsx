/* The fetchWeather function makes an API call to the WeatherAPI service to retrieve current weather information based on the city name. It uses axios for HTTP requests and manages both successful responses and errors by returning data or throwing errors accordingly. */

import axios from 'axios'

const API_BASE_URL = 'https://api.weatherapi.com/v1/current.json'

export const fetchWeather = async (city: string) => {
  const apiKey = 'cefc3c3ee56347e3b4a14451241103'
  const url = `${API_BASE_URL}?key=${apiKey}&q=${city}&aqi=no` // Constructing URL with query parameters

  try {
    const response = await axios.get(url) // Making the API call
    return response.data // Returning the response data on success
  } catch (error) {
    // Handling errors, distinguishing between Axios errors and others
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to fetch weather data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
