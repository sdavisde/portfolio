'use client'

import { useState, useEffect, useRef } from 'react'
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

const commands: Record<string, CommandResponse> = {
  help: {
    output: [
      'Available commands:',
      '  whoami     - Display user information',
      '  cat roles.txt - Show my roles',
      '  ls skills/ - List technical skills',
      '  pwd        - Show current directory',
      '  date       - Show current date',
      '  clear      - Clear terminal',
      '',
      'Try typing any of these commands!',
    ],
  },
  whoami: {
    output: ['Sean Davis'],
  },
  'cat roles.txt': {
    output: ['> Software Engineer', '> Guitarist', '> Dad'],
  },
  'ls skills/': {
    output: [
      'next.js      typescript.ts    react.jsx',
      'node.js      tailwind.css     framer-motion.js',
      'python.py    postgres.sql     docker.yml',
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
  'Type "whoami" to learn about me',
  'Use "ls skills/" to see my technical skills',
]

export default function InteractiveTerminal() {
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

    // Find and execute command
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

    setEntries((prev) => [...prev.filter((e) => e.type !== 'hint'), ...newEntries])
  }

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div
      className='font-mono text-sm min-h-[200px] w-lg cursor-text'
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
