'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/countries')
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Countries</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map(country => (
          <li key={country.countryCode} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Link href={`/country/${country.countryCode}`} className="text-blue-600 hover:underline">
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}