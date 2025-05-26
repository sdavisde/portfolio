import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Engineer Portfolio | Next.js & TypeScript Expert',
  description:
    'Portfolio of a frontend engineer specializing in Next.js, TypeScript, and e-commerce solutions. Experience with global brands like Real Madrid and Borussia Dortmund.',
  keywords: 'frontend engineer, Next.js, TypeScript, React, e-commerce, portfolio, web development',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Frontend Engineer Portfolio',
    description: 'Crafting delightful user experiences with Next.js and TypeScript',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
