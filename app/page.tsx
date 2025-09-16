'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WhoamiTerminal from '@/components/terminals/whoami-terminal'
import ExperienceTerminal from '@/components/terminals/experience-terminal'
import SkillsTerminal from '@/components/terminals/skills-terminal'
import ProjectsTerminal from '@/components/terminals/projects-terminal'
import AboutTerminal from '@/components/terminals/about-terminal'
import ContactTerminal from '@/components/terminals/contact-terminal'
import { useMultipleScrollTriggers } from '@/hooks/use-scroll-triggered-animation'

export default function Portfolio() {
  // Create scroll triggers for each terminal
  const terminalTriggers = useMultipleScrollTriggers(6, {
    threshold: 0.1,
    rootMargin: '0px 0px -200px 0px',
  })

  const terminalConfigs = [
    {
      component: WhoamiTerminal,
      title: 'whoami',
      offset: {
        desktop: { x: 0, y: 0 },
        mobile: { x: 0, y: 0 },
      },
    },
    {
      component: ExperienceTerminal,
      title: 'experience',
      offset: {
        desktop: { x: 30, y: 40 },
        mobile: { x: 10, y: 15 },
      },
    },
    {
      component: SkillsTerminal,
      title: 'skills',
      offset: {
        desktop: { x: 60, y: 80 },
        mobile: { x: 20, y: 30 },
      },
    },
    {
      component: ProjectsTerminal,
      title: 'projects',
      offset: {
        desktop: { x: 90, y: 120 },
        mobile: { x: 30, y: 45 },
      },
    },
    {
      component: AboutTerminal,
      title: 'about',
      offset: {
        desktop: { x: 120, y: 160 },
        mobile: { x: 40, y: 60 },
      },
    },
    {
      component: ContactTerminal,
      title: 'contact',
      offset: {
        desktop: { x: 150, y: 200 },
        mobile: { x: 50, y: 75 },
      },
    },
  ]

  return (
    <main className='min-h-screen bg-background text-white overflow-x-hidden'>
      {/* Hero Background Section - Fixed at top */}
      <section className='fixed top-0 left-0 w-full h-screen flex items-center justify-center px-6 z-0'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-12 items-center'>
            <div className='flex-shrink-0'>
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
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-4'>Sean Davis</h1>
              <p className='text-xl text-muted-foreground'>Full Stack Developer & Software Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Terminal Stack */}
      <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10'>
        {terminalConfigs.map((config, index) => {
          const [, state] = terminalTriggers[index]
          const TerminalComponent = config.component

          // Use different offsets based on screen size
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
          const currentOffset = isMobile ? config.offset.mobile : config.offset.desktop

          return (
            <div
              key={config.title}
              className='absolute inset-0 flex items-center justify-center'
              style={{
                zIndex: 50 - index,
              }}
            >
              <div className='max-w-4xl w-full mx-4 px-2 sm:px-0'>
                <TerminalComponent
                  animate={true}
                  animationProps={{
                    initial: {
                      opacity: 0,
                      scale: 0.9,
                      x: currentOffset.x,
                      y: currentOffset.y,
                    },
                    animate: {
                      opacity: state.hasBeenVisible ? 1 : 0,
                      scale: state.hasBeenVisible ? 1 : 0.9,
                      x: currentOffset.x,
                      y: currentOffset.y,
                    },
                    transition: {
                      duration: 0.6,
                      delay: state.animationDelay / 1000,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                    style: {
                      filter: state.hasBeenVisible ? 'none' : 'blur(1px)',
                      boxShadow: state.hasBeenVisible
                        ? `${Math.abs(currentOffset.x) * 0.2}px ${
                            Math.abs(currentOffset.y) * 0.2
                          }px 25px rgba(0, 0, 0, 0.4)`
                        : '0 0 10px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Invisible scroll triggers */}
      <div
        className='relative z-0'
        style={{ height: '600vh' }}
      >
        {terminalConfigs.map((config, index) => {
          const [ref] = terminalTriggers[index]
          return (
            <div
              key={`trigger-${config.title}`}
              ref={ref}
              style={{ height: '100vh' }}
              className='w-full'
            />
          )
        })}
      </div>
    </main>
  )
}
