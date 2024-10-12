import './globals.css'

export const metadata = {
  title: 'Country Info App',
  description: 'Explore countries and their information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Country Info App</h1>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}