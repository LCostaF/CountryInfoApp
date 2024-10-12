'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function CountryInfo({ params }) {
  const [countryInfo, setCountryInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/country/${params.countryCode}`)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching country info:', error)
        setLoading(false)
      })
  }, [params.countryCode])

  if (loading) return <div>Loading...</div>
  if (!countryInfo || Object.keys(countryInfo).length === 0 || countryInfo.error) {
    return <div>Information not available</div>
  }

  function extractCountryName(flagUrl) {
    let startIndex = flagUrl.indexOf('Flag_of_');
    if (startIndex === -1) return null;
    let countryPart = flagUrl.substring(startIndex + 'Flag_of_'.length);
    let endIndex = countryPart.indexOf('.svg');
    if (endIndex !== -1) {
      countryPart = countryPart.substring(0, endIndex);
    }
    countryPart = decodeURIComponent(countryPart);
    countryPart = countryPart.replace(/_/g, ' ');
    return countryPart;
  }

  const commonName = extractCountryName(countryInfo.flagUrl);

  const chartData = {
    labels: countryInfo.populationData?.map(d => d.year) || [],
    datasets: [
      {
        label: 'Population',
        data: countryInfo.populationData?.map(d => d.value) || [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{commonName}</h2>
        {countryInfo.flagUrl && (
          <Image src={countryInfo.flagUrl} alt={`Flag of ${commonName}`} width={60} height={40} className="rounded shadow" />
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Border Countries</h3>
        {countryInfo.borderCountries && countryInfo.borderCountries.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {countryInfo.borderCountries.map(country => (
              <li key={country.countryCode} className="bg-white shadow rounded-lg p-2">
                <Link href={`/country/${country.countryCode}`} className="text-blue-600 hover:underline">
                  {country.commonName}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No border countries found.</p>
        )}
      </div>

      {countryInfo.populationData && countryInfo.populationData.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Population Over Time</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
          </div>
        </div>
      )}
    </div>
  )
}