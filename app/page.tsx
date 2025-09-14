'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ExternalLink, MapPin, Calendar, Code, Palette, Zap, Users, Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '@/components/ui/link-button'
import TerminalWindow from '@/components/terminal-window'
import { socialMediaConfig } from '@/lib/social'

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  const skillsData = [
    {
      category: 'Frontend Mastery',
      icon: Code,
      skills: [
        {
          name: 'Next.js',
          achievement: 'Built 15+ production apps',
          metric: '95+ Lighthouse scores',
        },
        {
          name: 'TypeScript',
          achievement: '100% type coverage',
          metric: 'Zero runtime errors',
        },
        {
          name: 'React',
          achievement: '5+ years experience',
          metric: 'Component libraries',
        },
      ],
      color: 'emerald',
    },
    {
      category: 'E-commerce Expertise',
      icon: Users,
      skills: [
        {
          name: 'Payment Integration',
          achievement: 'Stripe, PayPal, Apple Pay',
          metric: '25% cart recovery',
        },
        {
          name: 'Global Commerce',
          achievement: '15+ languages, RTL',
          metric: 'Millions of users',
        },
        {
          name: 'Performance',
          achievement: 'Sub-2s load times',
          metric: '99.9% uptime',
        },
      ],
      color: 'blue',
    },
    {
      category: 'Design & UX',
      icon: Palette,
      skills: [
        {
          name: 'Responsive Design',
          achievement: 'Mobile-first approach',
          metric: 'All device types',
        },
        {
          name: 'Accessibility',
          achievement: 'WCAG 2.1 AA compliant',
          metric: 'Screen reader tested',
        },
        {
          name: 'Animation',
          achievement: 'Framer Motion expert',
          metric: 'Smooth 60fps',
        },
      ],
      color: 'teal',
    },
    {
      category: 'Backend & Tools',
      icon: Zap,
      skills: [
        {
          name: 'Node.js',
          achievement: 'API development',
          metric: 'RESTful & GraphQL',
        },
        {
          name: 'Database',
          achievement: 'PostgreSQL, MongoDB',
          metric: 'Optimized queries',
        },
        {
          name: 'DevOps',
          achievement: 'CI/CD pipelines',
          metric: 'Vercel, AWS',
        },
      ],
      color: 'cyan',
    },
  ]

  const socialLinks = socialMediaConfig

  const projects = [
    {
      title: 'Real Madrid Official Store',
      description:
        "Led frontend development for Real Madrid's e-commerce platform, handling millions of global fans with seamless checkout flows and multilingual support.",
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Contentful'],
      image: '/rm-preview.png',
      link: 'https://shop.realmadrid.com/',
      // github: '#',
      featured: true,
    },
    {
      title: 'Borussia Dortmund Fan Experience',
      description:
        'Built interactive fan engagement platform with real-time match updates, merchandise integration, and social features.',
      tech: ['Microservices', 'Next.js', 'Auth SSO', 'PostgreSQL'],
      image: '/bvb-preview.png',
      link: 'https://shop.bvb.de/',
      // github: '#',
      featured: true,
    },
    {
      title: 'Bible Recall',
      description: 'Memorization app designed to help users learn and retain Bible verses through spaced repetition.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Auth'],
      image: '/biblerecall.png',
      link: 'https://biblerecall.app/',
      github: 'https://github.com/sdavisde/biblerecall-v2',
      featured: false,
    },
    {
      title: 'QueryBase',
      description: 'AI-powered knowledge base for creating developer documentation and FAQs.',
      tech: ['AI', 'Next.js', 'Supabase', 'Tailwind'],
      image: '/querybase-preview.png',
      link: 'https://querybase-ten.vercel.app/',
      github: 'https://github.com/sdavisde/querybase',
      featured: false,
    },
  ]

  return (
    <main className='min-h-screen bg-background text-white overflow-hidden'>
      <section
        id='home'
        className='py-20 px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <Image
            src='/sean-davis.png'
            alt='Sean Davis'
            width={400}
            height={400}
            style={{
              filter: 'grayscale(80%)',
            }}
          />
          <h1 className='text-4xl font-bold'>Sean Davis</h1>
          <p className='text-lg text-muted-foreground'>
            I'm a frontend engineer specializing in Next.js, TypeScript, and e-commerce solutions.
          </p>
        </div>
      </section>
      <section
        id='skills'
        className='py-20 px-6'
      >
        <TerminalWindow>
          <p>Skills</p>
        </TerminalWindow>
      </section>
    </main>
  )
}
