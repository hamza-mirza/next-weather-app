import { useState } from 'react'

interface Props {
  onSearch: (city: string) => void
}

const Search = ({ onSearch }: Props) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (city.trim() !== '') onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
