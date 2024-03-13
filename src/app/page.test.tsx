import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import Home from './page'
import { fetchWeather } from './api/api'
jest.mock('./api/api')

const mockedFetchWeather = fetchWeather as jest.MockedFunction<typeof fetchWeather>

describe('Home page', () => {
  it('displays weather data after a successful search', async () => {
    mockedFetchWeather.mockResolvedValue({
      current: {
        temp_c: 20,
        humidity: 70,
        wind_kph: 10
      },
      location: {
        name: 'London',
        country: 'United Kingdom'
      }
    })

    render(<Home />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'London' } })
    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => expect(screen.getByText(/London, United Kingdom/i)).toBeInTheDocument())
    expect(screen.getByText(/20°C/i)).toBeInTheDocument()
    expect(screen.getByText(/70%/i)).toBeInTheDocument()
    expect(screen.getByText(/10 km\/h/i)).toBeInTheDocument()
  })
})
