'use client'

import { useRef } from 'react'
import Image from 'next/image'
import InteractiveTerminal, { InteractiveTerminalRef } from '@/components/interactive-terminal'
import TerminalCommandIcons from '@/components/terminal-command-icons'
import MatrixRain from '@/components/matrix-rain'

export default function Portfolio() {
  const terminalRef = useRef<InteractiveTerminalRef>(null)

  const handleIconCommand = (command: string) => {
    if (terminalRef.current) {
      terminalRef.current.executeCommand(command)
    }
  }
  return (
    <main className='min-h-screen bg-background text-white relative'>
      {/* Matrix Rain Background */}
      <MatrixRain opacity={0.15} density={0.7} />

      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-12 items-center'>
            <div className='flex-shrink-0'>
              <div className='hud-corner-brackets hud-glow'>
                <div className='hud-corner-tl'></div>
                <div className='hud-corner-tr'></div>
                <div className='hud-corner-bl'></div>
                <div className='hud-corner-br'></div>
                <Image
                  src='/sean-davis.JPEG'
                  alt='Sean Davis'
                  width={350}
                  height={450}
                  className='rounded-lg'
                  style={{
                    filter: 'grayscale(50%)',
                  }}
                />
              </div>
            </div>
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-6'>Sean Davis</h1>
              <p className='italic text-muted-foreground mb-2'>Try typing commands or click the icons below</p>
              <div className='bg-black/40 border border-primary/20 rounded-lg p-6 backdrop-blur-sm w-full max-w-[600px] mx-auto lg:mx-0'>
                <InteractiveTerminal ref={terminalRef} />
                <TerminalCommandIcons onCommandClick={handleIconCommand} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
