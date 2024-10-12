import { NextResponse } from 'next/server'

export async function GET(request) {
  const { pathname } = new URL(request.url)

  if (pathname.startsWith('/api/countries')) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/countries`)
    const data = await response.json()
    return NextResponse.json(data)
  }

  if (pathname.startsWith('/api/country/')) {
    const countryCode = pathname.split('/').pop()
    const response = await fetch(`${process.env.BACKEND_URL}/api/country/${countryCode}`)
    const data = await response.json()
    return NextResponse.json(data)
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 })
}