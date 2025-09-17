'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CommandIcon {
  command: string
  icon: string
  label: string
  description: string
}

interface TerminalCommandIconsProps {
  onCommandClick: (command: string) => void
}

const commandIcons: CommandIcon[] = [
  {
    command: 'whoami',
    icon: '👤',
    label: 'Who Am I',
    description: 'Basic information about me'
  },
  {
    command: 'experience',
    icon: '💼',
    label: 'Experience',
    description: 'Work history and achievements'
  },
  {
    command: 'skills',
    icon: '⚡',
    label: 'Skills',
    description: 'Technical expertise and tools'
  },
  {
    command: 'projects',
    icon: '🚀',
    label: 'Projects',
    description: 'Featured work and applications'
  },
  {
    command: 'about',
    icon: '📖',
    label: 'About',
    description: 'Personal background and philosophy'
  },
  {
    command: 'contact',
    icon: '📧',
    label: 'Contact',
    description: 'Get in touch with me'
  }
]

export default function TerminalCommandIcons({ onCommandClick }: TerminalCommandIconsProps) {
  const [hoveredCommand, setHoveredCommand] = useState<string | null>(null)

  const handleIconClick = (command: string) => {
    onCommandClick(command)
  }

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-3 justify-center">
        {commandIcons.map((cmd) => (
          <button
            key={cmd.command}
            onClick={() => handleIconClick(cmd.command)}
            onMouseEnter={() => setHoveredCommand(cmd.command)}
            onMouseLeave={() => setHoveredCommand(null)}
            className="relative group"
          >
            <div className="w-12 h-12 bg-black/60 border border-primary/30 rounded-lg flex items-center justify-center text-xl hover:border-primary/60 hover:bg-black/80 transition-all duration-200">
              {cmd.icon}
            </div>

            {/* Tooltip */}
            {hoveredCommand === cmd.command && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 pointer-events-none z-50">
              <div className="bg-black/90 border border-primary/40 rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                <div className="text-white font-medium">{cmd.label}</div>
                <div className="text-muted-foreground">{cmd.description}</div>
                <div className="text-primary text-xs mt-1">Click to run: {cmd.command}</div>

                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/40"></div>
              </div>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="text-center mt-3">
        <p className="text-xs text-muted-foreground">
          Click icons to run commands or type them directly in the terminal
        </p>
      </div>
    </div>
  )
}