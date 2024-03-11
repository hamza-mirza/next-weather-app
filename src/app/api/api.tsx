import axios from 'axios'

const API_BASE_URL = 'https://api.weatherapi.com/v1/current.json'

export const fetchWeather = async (city: string) => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
  const url = `${API_BASE_URL}?key=${apiKey}&q=${city}&aqi=no`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw error
  }
}