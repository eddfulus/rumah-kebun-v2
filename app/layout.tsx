import type { Metadata } from 'next'
/* import { GeistSans } from 'geist/font/sans'
 */
import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Rumah Kebun',
  description: 'A garden house project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}