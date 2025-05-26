import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Name - Personal Brand',
  description: 'Connect with me on social media and explore my digital presence.',
  keywords: 'personal brand, social media, professional profile',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}