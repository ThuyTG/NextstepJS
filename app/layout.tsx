import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import TourGuide from '@/components/TourGuide'

export const metadata: Metadata = {
  title: 'NextStep Mini Project',
  description: 'A mini Next.js project with 4 pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='mdl-js'>
      <body>
        <TourGuide>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </TourGuide>
      </body>
    </html>
  )
}
