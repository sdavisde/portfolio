import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { socialMediaConfig } from '@/lib/social'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sean Davis Portfolio | Next.js & TypeScript Expert',
  description:
    'Portfolio of a frontend engineer specializing in Next.js, TypeScript, and e-commerce solutions. Experience with global brands like Real Madrid and Borussia Dortmund.',
  keywords: 'frontend engineer, Next.js, TypeScript, React, e-commerce, portfolio, web development',
  authors: [{ name: 'Sean Davis' }],
  openGraph: {
    title: 'Sean Davis Portfolio',
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
      <body className={`${inter.className} dark`}>{children}</body>

      {/* Footer */}
      <footer className='py-8 px-6 border-t border-border'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 mb-4 md:mb-0'>2025 Sean Davis. If something inspires you, share it.</p>
          <div className='flex space-x-6'>
            {socialMediaConfig.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </html>
  )
}
