import type { Metadata } from 'next'
import { Playfair_Display, Inter, Tajawal } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: '/al-saad-logo.png',
    apple: '/al-saad-logo.png',
  },
  title: 'Al-Saad Construction — آل سعد للإنشاءات',
  description:
    'For over three decades, Al-Saad has shaped Alexandria\'s skyline with precision, ambition, and an uncompromising standard of excellence.',
  keywords: [
    'Al-Saad Construction',
    'آل سعد للإنشاءات',
    'Alexandria',
    'Egypt',
    'Construction',
    'Real Estate',
    'Residential Towers',
  ],
  authors: [{ name: 'Al-Saad Construction' }],
  openGraph: {
    title: 'Al-Saad Construction — آل سعد للإنشاءات',
    description:
      'For over three decades, Al-Saad has shaped Alexandria\'s skyline with precision, ambition, and an uncompromising standard of excellence.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${tajawal.variable}`}>
      <body>{children}</body>
    </html>
  )
}
