import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Signature Sweets',
  description: 'Experience our signature collection of premium handcrafted sweets.',
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
