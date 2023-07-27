import axios from 'axios'
import { useState } from 'react'

const DisplayCountry = () => {
  const [countries, setCountries] = useState([])
  // isLoading is mostly used to make sure the example doesn't crash, we'll talk about it later
  const [isLoading, setIsLoading] = useState(true)

  const getCountriesWithFetch = async () => {
    if (isLoading) {
      const response = await fetch('https://restcountries.com/v3.1/name/Samoa')
      console.log(response)
      if (response.status === 200) {
        const parsed = await response.json()
        console.log(parsed)
        setCountries(parsed)
        setIsLoading(false)
      }
    }
  }

  const getCountriesWithAxios = async () => {
    if (isLoading) {
      const response = await axios.get('https://restcountries.com/v3.1/name/Samoa')
      console.log(response)
      if (response.status === 200) {
        console.log(response.data)
        setCountries(response.data)
        setIsLoading(false)
      }
    }
  }

  //getCountriesWithFetch()
  getCountriesWithAxios()

  return isLoading ? (
    <h1>Is loading...</h1>
  ) : (
    <>
      {countries.map(country => (
        <h2 key={country.name.official}>{country.name.common}</h2>
      ))}
    </>
  )
}

export default DisplayCountry
