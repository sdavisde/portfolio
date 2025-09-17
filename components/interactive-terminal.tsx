'use client'

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { motion } from 'framer-motion'

interface TerminalEntry {
  type: 'command' | 'output' | 'hint'
  prompt?: string
  text: string
  id: string
}

interface CommandResponse {
  output: string[]
}

export interface InteractiveTerminalRef {
  executeCommand: (command: string) => void
}

interface InteractiveTerminalProps {
  onCommandExecute?: (command: string) => void
}

const commands: Record<string, CommandResponse> = {
  help: {
    output: [
      'Available commands:',
      '  whoami         - Display user information',
      '  experience     - Show work experience',
      '  skills         - Display technical skills',
      '  projects       - List featured projects',
      '  about          - Learn more about me',
      '  contact        - Get contact information',
      '  pwd            - Show current directory',
      '  date           - Show current date',
      '  clear          - Clear terminal',
      '',
      'Try typing any of these commands!',
    ],
  },
  whoami: {
    output: ['Sean Davis - Software Engineer, Guitarist, Dad'],
  },
  experience: {
    output: [
      '',
      '=== WORK EXPERIENCE ===',
      '',
      '📍 Legends - Senior Software Engineer (2022 - Present)',
      '   • Led technical operations for $100M+ annual revenue e-commerce platform',
      '   • Architected multi-tenant Next.js theme system reducing maintenance costs by 90%',
      '   • Implemented regression testing frameworks cutting production issues by 95%',
      '   • Managed team of 10 offshore developers',
      '   • Served global sports brands including Real Madrid, Borussia Dortmund',
      '',
      '📍 Reynolds and Reynolds - Software Engineer (2020 - 2022)',
      '   • Built high-performance APIs and responsive interfaces',
      '   • Developed accessibility-compliant systems for 10K+ users',
      '   • Implemented modern React patterns and TypeScript best practices',
      '   • Collaborated on automotive industry solutions',
      '',
    ],
  },
  skills: {
    output: [
      '',
      '=== TECHNICAL SKILLS ===',
      '',
      '🚀 Frontend Mastery',
      '   • Next.js - 15+ production apps, 95+ Lighthouse scores',
      '   • TypeScript - 100% type coverage, zero runtime errors',
      '   • React - 5+ years, component libraries',
      '   • Tailwind CSS - Utility-first styling',
      '',
      '⚙️  Backend & Database',
      '   • Node.js - RESTful & GraphQL APIs',
      '   • PostgreSQL - Optimized queries, migrations',
      '   • Supabase - Real-time, auth, storage',
      '   • Java - Enterprise applications',
      '',
      '💳 E-commerce & Payments',
      '   • Stripe, PayPal, Apple Pay integration',
      '   • Global commerce (15+ languages, RTL)',
      '   • Performance optimization (sub-2s load times)',
      '   • 99.9% uptime maintenance',
      '',
      '🔧 DevOps & Tools',
      '   • CI/CD pipelines (Vercel, AWS)',
      '   • Docker containerization',
      '   • Git version control',
      '   • Testing frameworks (Jest, Cypress)',
      '',
    ],
  },
  projects: {
    output: [
      '',
      '=== FEATURED PROJECTS ===',
      '',
      '🏆 Real Madrid Official Store',
      '   E-commerce platform for global sports brand',
      '   Led frontend development handling millions of global fans with',
      '   seamless checkout flows and multilingual support.',
      '   Tech: Next.js, TypeScript, Stripe, Contentful',
      '',
      '🤖 QueryBase',
      '   AI-powered knowledge base for creating developer documentation',
      '   and FAQs with intelligent search and content generation.',
      '   Tech: AI, Next.js, Supabase, Tailwind',
      '',
      '⚡ Worklog',
      '   Rust-based AI KPI tracking CLI tool for tracking productivity',
      '   metrics with AI insights and performance analytics.',
      '   Tech: Rust, AI, CLI, Performance',
      '',
      '🏕️  Dusty Trails Tres Dias',
      '   Complete management system for nonprofit organization with',
      '   user management, events, and donations.',
      '   Tech: Full-stack, Database, Auth, Management',
      '',
    ],
  },
  about: {
    output: [
      '',
      '=== ABOUT ME ===',
      '',
      "I'm a software engineer passionate about building scalable,",
      'efficient, and human-centered applications. With over 4 years',
      "of experience, I've worked on everything from high-traffic",
      'e-commerce platforms to personal projects that solve real-world',
      'problems.',
      '',
      'My approach focuses on clarity, efficiency, and human-centered',
      'design. I believe in writing clean, maintainable code and',
      "creating experiences that users love. Whether it's optimizing",
      'a checkout flow for millions of users or building a simple CLI',
      'tool, I bring the same attention to detail and commitment to',
      'quality.',
      '',
      "When I'm not coding, you'll find me exploring new technologies,",
      'contributing to open source projects, or working on personal',
      'initiatives that combine my technical skills with my interests',
      'in AI, productivity tools, and community impact.',
      '',
      '💭 "Let\'s build something amazing together!"',
      '',
    ],
  },
  contact: {
    output: [
      '',
      '=== CONTACT INFORMATION ===',
      '',
      '📧 Email: sdavisde@gmail.com',
      '💼 LinkedIn: linkedin.com/in/sean-davis-dan/',
      '🐙 GitHub: github.com/sdavisde',
      '🌍 Location: Remote - Based out of College Station, TX',
    ],
  },
  pwd: {
    output: ['/home/sean-davis'],
  },
  date: {
    output: [new Date().toLocaleString()],
  },
}

const hints = [
  'Try typing "help" to see available commands',
  'Type "experience" to see my work history',
  'Use "skills" to view my technical expertise',
  'Try "projects" to see my featured work',
  'Type "about" to learn more about me',
  'Use "contact" to get in touch',
]

const InteractiveTerminal = forwardRef<InteractiveTerminalRef, InteractiveTerminalProps>(
  ({ onCommandExecute }, ref) => {
    const [entries, setEntries] = useState<TerminalEntry[]>([
      {
        type: 'hint',
        text: 'Try typing "help" to see available commands',
        id: 'hint-0',
      },
    ])
    const [currentInput, setCurrentInput] = useState('')
    const [showCursor, setShowCursor] = useState(true)
    const [hintIndex, setHintIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)

    // Cursor blink effect
    useEffect(() => {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 530)
      return () => clearInterval(interval)
    }, [])

    // Auto-focus input and cycle hints
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }

      // Cycle hints every 5 seconds if no commands have been entered
      const hintTimer = setInterval(() => {
        const hasCommands = entries.some((entry) => entry.type === 'command')
        if (!hasCommands) {
          const nextIndex = (hintIndex + 1) % hints.length
          setHintIndex(nextIndex)
          setEntries([
            {
              type: 'hint',
              text: hints[nextIndex],
              id: `hint-${Date.now()}`,
            },
          ])
        }
      }, 5000)

      return () => clearInterval(hintTimer)
    }, [hintIndex, entries])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        executeCommand(currentInput.trim())
        setCurrentInput('')
      }
    }

    const executeCommand = (command: string) => {
      if (!command) return

      const newEntries: TerminalEntry[] = []

      // Add the command entry
      newEntries.push({
        type: 'command',
        prompt: 'guest@sean-davis:~$',
        text: command,
        id: `cmd-${Date.now()}`,
      })

      // Handle special commands
      if (command.toLowerCase() === 'clear') {
        setEntries([
          {
            type: 'hint',
            text: 'Terminal cleared. Type "help" for available commands.',
            id: `hint-${Date.now()}`,
          },
        ])
        return
      }

      // Commands that should open modal (detailed content)
      const modalCommands = ['experience', 'skills', 'projects', 'about', 'contact']

      // Commands that should display inline in terminal
      const inlineCommands = ['help', 'whoami', 'pwd', 'date']

      if (modalCommands.includes(command.toLowerCase())) {
        // Add brief output and trigger modal
        newEntries.push({
          type: 'output',
          text: `Opening ${command} details...`,
          id: `output-${Date.now()}`,
        })

        // Trigger modal callback after a brief delay to ensure terminal state is updated
        setTimeout(() => {
          if (onCommandExecute) {
            onCommandExecute(command.toLowerCase())
          }
        }, 100)
      } else {
        // Handle inline commands and other commands normally
        const response = commands[command.toLowerCase()]
        if (response) {
          response.output.forEach((line, index) => {
            newEntries.push({
              type: 'output',
              text: line,
              id: `output-${Date.now()}-${index}`,
            })
          })
        } else {
          newEntries.push({
            type: 'output',
            text: `Command not found: ${command}. Type "help" for available commands.`,
            id: `error-${Date.now()}`,
          })
        }
      }

      setEntries((prev) => [...prev.filter((e) => e.type !== 'hint'), ...newEntries])

      // Auto-scroll to bottom after adding entries
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }, 100)
    }

    // Expose executeCommand method to parent components
    useImperativeHandle(ref, () => ({
      executeCommand,
    }))

    const handleContainerClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    return (
      <div
        ref={terminalRef}
        className='font-mono text-sm min-h-[200px] max-h-[400px] w-full cursor-text overflow-y-auto'
        onClick={handleContainerClick}
      >
        {/* Previous entries */}
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {entry.type === 'command' && (
              <div className='text-primary'>
                <span className='text-muted-foreground'>{entry.prompt}</span>
                <span className='ml-1'>{entry.text}</span>
              </div>
            )}
            {entry.type === 'output' && <div className='text-white ml-0 mb-1'>{entry.text}</div>}
            {entry.type === 'hint' && <div className='text-muted-foreground italic mb-1'>{entry.text}</div>}
          </motion.div>
        ))}

        {/* Current input line */}
        <div className='text-primary flex items-center min-h-[20px]'>
          <span className='text-muted-foreground shrink-0'>guest@sean-davis:~$</span>
          <span className='ml-1 break-all'>{currentInput}</span>
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity shrink-0`}>_</span>
        </div>

        {/* Hidden input for capturing keystrokes */}
        <input
          ref={inputRef}
          type='text'
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className='opacity-0 absolute -left-[9999px] pointer-events-none'
          style={{ position: 'fixed' }}
          autoComplete='off'
          autoCapitalize='off'
          autoCorrect='off'
          spellCheck='false'
        />
      </div>
    )
  }
)

InteractiveTerminal.displayName = 'InteractiveTerminal'

export default InteractiveTerminal
