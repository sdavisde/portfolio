'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import InteractiveTerminal, { InteractiveTerminalRef } from '@/components/interactive-terminal'
import TerminalCommandIcons from '@/components/terminal-command-icons'
import MatrixRain from '@/components/matrix-rain'
import CommandModal from '@/components/command-modal'
import { commandContent } from '@/lib/command-content'
import { socialMediaConfig } from '@/lib/social'
import { Badge } from '@/components/ui/badge'

export default function Portfolio() {
  const terminalRef = useRef<InteractiveTerminalRef>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentCommand, setCurrentCommand] = useState('')

  const handleIconCommand = (command: string) => {
    if (terminalRef.current) {
      terminalRef.current.executeCommand(command)
    }
  }

  const handleTerminalCommand = (command: string) => {
    setCurrentCommand(command)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setCurrentCommand('')
  }
  return (
    <main className='min-h-screen bg-background text-white relative'>
      {/* Matrix Rain Background */}
      <MatrixRain
        opacity={0.15}
        density={0.7}
      />

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
              <h1 className='text-4xl lg:text-6xl font-bold mb-4'>Sean Davis</h1>
              <p className='text-muted-foreground flex items-center gap-2 mb-4'>
                <Badge className='bg-red-900'>Software Engineer</Badge>
                <Badge className='bg-green-900'>Guitarist</Badge>
                <Badge className='bg-blue-900'>Dad</Badge>
              </p>
              <p className='italic text-muted-foreground mb-4'>Try typing "help" or click the icons below</p>
              <div className='bg-black/40 border border-primary/20 rounded-lg p-6 backdrop-blur-sm w-full max-w-[600px] mx-auto lg:mx-0'>
                <InteractiveTerminal
                  ref={terminalRef}
                  onCommandExecute={handleTerminalCommand}
                />
                <TerminalCommandIcons onCommandClick={handleIconCommand} />
              </div>

              {/* Social Media Links */}
              <div className='flex justify-center lg:justify-start gap-4 mt-6'>
                {socialMediaConfig.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='p-3 bg-black/60 border border-primary/30 rounded-lg hover:border-primary/60 hover:bg-black/80 transition-all duration-200 text-muted-foreground hover:text-primary'
                    title={`${social.type.charAt(0).toUpperCase() + social.type.slice(1)}`}
                  >
                    <div className='w-5 h-5'>{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command Modal */}
      <CommandModal
        isOpen={modalOpen}
        onClose={closeModal}
        command={currentCommand}
        content={commandContent[currentCommand] || { title: '', sections: [] }}
      />
    </main>
  )
}
