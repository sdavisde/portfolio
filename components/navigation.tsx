'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
  activeSection: number
  onNavigate: (index: number) => void
}

const navItems = [
  { label: 'Home', icon: '🏠' },
  { label: 'whoami', icon: '👋' },
  { label: 'Experience', icon: '💼' },
  { label: 'Skills', icon: '⚡' },
  { label: 'Projects', icon: '🚀' },
  { label: 'About', icon: '🎸' },
  { label: 'Contact', icon: '📧' }
]

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after user scrolls 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (index: number) => {
    onNavigate(index)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-2"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="flex gap-1">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(index)}
            className={`
              relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeSection === index
                ? 'text-white bg-white/20'
                : 'text-white/60 hover:text-white hover:bg-white/10'
              }
            `}
            title={item.label}
          >
            <span className="hidden sm:inline">{item.label}</span>
            <span className="sm:hidden text-lg">{item.icon}</span>

            {activeSection === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-white/20 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}