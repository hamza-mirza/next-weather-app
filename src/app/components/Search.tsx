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
    <form
      className="mb-16 flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="w-full relative lg:w-4/12 mx-auto">
        <input
          className="border-b border-gray-800 pb-2 w-full block"
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button
          className="absolute right-0 top-0"
          type="submit"
        >
          &#128269;
        </button>
      </div>
    </form>
  )
}

export default Search
