import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from './Search'

describe('Search Component', () => {
  test('renders input element', () => {
    render(<Search onSearch={() => {}} />)
    expect(screen.getByPlaceholderText(/Enter city name/i)).toBeInTheDocument()
  })

  test('calls onSearch prop when form is submitted', () => {
    const handleSearch = jest.fn()
    render(<Search onSearch={handleSearch} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'London' } })
    fireEvent.submit(screen.getByRole('button'))
    expect(handleSearch).toHaveBeenCalledWith('London')
  })
})
