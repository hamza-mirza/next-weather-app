/* The Search component provides a user interface for inputting a city name to search for weather information. It includes a form with a text input and a submit button. The component accepts a callback function as a prop, which is called with the city name when the form is submitted. */

import { useState } from 'react'

interface Props {
  onSearch: (city: string) => void // Prop for receiving the search handler function
}

const Search = ({ onSearch }: Props) => {
  const [city, setCity] = useState('') // State for storing the input value

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Preventing default form submission behavior
    if (city.trim() !== '') onSearch(city) // Calling the onSearch prop function if input is not empty
  }

  return (
    // Form layout with text input and submit button
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
          aria-label="Search"
        >
          &#128269;
        </button>
      </div>
    </form>
  )
}

export default Search
