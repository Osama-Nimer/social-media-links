import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Osama Nimer - Software Engineer & Full Stack Developer',
  description: 'Software Engineer and Full Stack Developer passionate about innovation and digital excellence.',
  keywords: 'software engineer, full stack developer, web development, react, next.js',
  authors: [{ name: 'Osama Nimer' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}