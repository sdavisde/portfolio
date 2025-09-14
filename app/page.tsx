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
import WhoamiTerminal from '@/components/terminals/whoami-terminal'
import ExperienceTerminal from '@/components/terminals/experience-terminal'
import SkillsTerminal from '@/components/terminals/skills-terminal'
import ProjectsTerminal from '@/components/terminals/projects-terminal'
import AboutTerminal from '@/components/terminals/about-terminal'
import ContactTerminal from '@/components/terminals/contact-terminal'
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
      {/* Intro Section */}
      <section
        id='home'
        className='py-20 px-6'
      >
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
                  // boxShadow: '0 0 15px 5px rgba(0, 0, 0, 0.5)',
                }}
              />
            </div>
            <div className='flex-1'>
              <WhoamiTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className='py-20 px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Experience</h2>
          <ExperienceTerminal />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id='skills'
        className='py-20 px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Skills</h2>
          <SkillsTerminal />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id='projects'
        className='py-20 px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Projects</h2>
          <ProjectsTerminal />
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-20 px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>About</h2>
          <AboutTerminal />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Contact</h2>
          <ContactTerminal />
        </div>
      </section>
    </main>
  )
}
