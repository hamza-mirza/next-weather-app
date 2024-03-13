import axios from 'axios'
import { fetchWeather } from './api'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('fetchWeather API call', () => {
  it('fetches weather data successfully from the API', async () => {
    const mockData = {
      data: {
        current: {
          temp_c: 20,
          humidity: 70,
          wind_kph: 10
        },
        location: {
          name: 'London',
          country: 'United Kingdom'
        }
      }
    }
    mockedAxios.get.mockResolvedValue(mockData)

    const response = await fetchWeather('London')
    expect(response).toEqual(mockData.data)
    expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining('London'))
  })
})
