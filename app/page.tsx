'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  Palette,
  Zap,
  Users,
  Icon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '@/components/ui/link-button'

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
        { name: 'Next.js', achievement: 'Built 15+ production apps', metric: '95+ Lighthouse scores' },
        { name: 'TypeScript', achievement: '100% type coverage', metric: 'Zero runtime errors' },
        { name: 'React', achievement: '5+ years experience', metric: 'Component libraries' },
      ],
      color: 'emerald',
    },
    {
      category: 'E-commerce Expertise',
      icon: Users,
      skills: [
        { name: 'Payment Integration', achievement: 'Stripe, PayPal, Apple Pay', metric: '25% cart recovery' },
        { name: 'Global Commerce', achievement: '15+ languages, RTL', metric: 'Millions of users' },
        { name: 'Performance', achievement: 'Sub-2s load times', metric: '99.9% uptime' },
      ],
      color: 'blue',
    },
    {
      category: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'Responsive Design', achievement: 'Mobile-first approach', metric: 'All device types' },
        { name: 'Accessibility', achievement: 'WCAG 2.1 AA compliant', metric: 'Screen reader tested' },
        { name: 'Animation', achievement: 'Framer Motion expert', metric: 'Smooth 60fps' },
      ],
      color: 'teal',
    },
    {
      category: 'Backend & Tools',
      icon: Zap,
      skills: [
        { name: 'Node.js', achievement: 'API development', metric: 'RESTful & GraphQL' },
        { name: 'Database', achievement: 'PostgreSQL, MongoDB', metric: 'Optimized queries' },
        { name: 'DevOps', achievement: 'CI/CD pipelines', metric: 'Vercel, AWS' },
      ],
      color: 'cyan',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sdavisde',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sean-davis-dan/',
    },
    {
      icon: Mail,
      href: 'mailto:sdavisde@gmail.com',
    },
  ]

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
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden'>
      {/* Animated background */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div
          className='absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl'
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out',
          }}
        />
        <motion.div
          // className='absolute w-64 h-64 bg-teal-500/10 rounded-full blur-2xl'
          style={{ y }}
          initial={{ x: '100vw', y: '20vh' }}
          animate={{ x: '80vw', y: '10vh' }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
        />
      </div>

      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              // className='text-xl font-bold'
            >
              Sean Davis
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center relative px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent'>
              Sean Davis
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Frontend Engineer crafting delightful user experiences with{' '}
              <span className='text-emerald-400'>Next.js</span> and <span className='text-blue-400'>TypeScript</span>.
              Specialized in full-stack e-commerce solutions for global brands.
            </p>
          </motion.div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <LinkButton
              size='lg'
              href='#professional-experience'
              className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 cursor-pointer'
            >
              View My Work <ArrowRight className='ml-2 h-4 w-4' />
            </LinkButton>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border border-white/20 bg-transparent text-white hover:bg-white/10 h-10 px-6 py-3 cursor-pointer'
            >
              Download Resume
            </a>
          </div>

          <div className='mt-16 flex justify-center space-x-6'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors'
              >
                <link.icon className='h-6 w-6' />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section
        id='about'
        className='py-20 px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold mb-6'>About Me</h2>
            <p className='text-xl text-gray-300 mb-6'>
              Frontend Software Engineer with a strong foundation in <strong>Next.js</strong>,{' '}
              <strong>TypeScript</strong>, and <strong>Microservices</strong>. Dedicated to building scalable and
              maintainable web applications. At Legends Hospitality, designed frontend monitoring infrastructure,
              reducing mean-time-to-recovery by <em>50%</em> for global deployments via Azure DevOps. Recognized for
              having a <em>growth mindset</em>, being confident with new ideas, and desiring a collaborative approach to
              team development.
            </p>
          </motion.div>
          <h3 className='text-2xl font-semibold mb-6'>Technical Skills</h3>

          <div className='max-w-4xl mx-auto gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              // className='space-y-6'
            >
              <div className='grid md:grid-cols-2 gap-8 w-full'>
                {skillsData.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    // className='space-y-4'
                  >
                    <div className='flex items-center space-x-3 mb-4'>
                      <div className={`p-2 rounded-lg bg-${category.color}-500/20`}>
                        <category.icon className={`h-6 w-6 text-${category.color}-400`} />
                      </div>
                      <h3 className='text-xl font-semibold'>{category.category}</h3>
                    </div>

                    <div className='space-y-3'>
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          // className='bg-white/5 rounded-lg p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-300'
                        >
                          <div className='flex justify-between items-start mb-2'>
                            <h4 className='font-medium text-white'>{skill.name}</h4>
                            <span
                              className={`text-xs px-2 py-1 rounded-full bg-${category.color}-500/20 text-${category.color}-300`}
                            >
                              Expert
                            </span>
                          </div>
                          <p className='text-sm text-gray-300 mb-1'>{skill.achievement}</p>
                          <p className='text-xs text-gray-400'>{skill.metric}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className='py-20 px-6 bg-black/20'
      >
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // className='text-center mb-16'
          >
            <h2
              id='professional-experience'
              className='text-4xl font-bold mb-6'
            >
              Professional Experience
            </h2>
            <p className='text-xl text-gray-300 mb-6'>Building world-class experiences for global sports brands</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // className='max-w-4xl mx-auto'
          >
            <Card className='bg-white/5 border-white/10 text-white'>
              <CardHeader>
                <div className='flex items-start justify-between'>
                  <div>
                    <CardTitle className='text-2xl mb-2'>Software Engineer (Frontend)</CardTitle>
                    <CardDescription className='text-emerald-400 text-lg'>Legends</CardDescription>
                  </div>
                  <Badge
                    variant='secondary'
                    className='bg-emerald-600/20 text-emerald-300'
                  >
                    <Calendar className='h-3 w-3 mr-1' />
                    May 2023 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center text-gray-300 mb-4'>
                  <MapPin className='h-4 w-4 mr-2' />
                  Dallas, TX (Remote)
                </div>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Designed & delivered a custom multi-tenant theming system and Material UI-based component library
                    (Q1-Q4 2024), enabling deep style overrides and wholesale component replacement.
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Onboarded 10 store fronts and reduced time-to-implement new features by 90%. Built and maintained a
                    client configuration tool in our CMS, managing client branding and feature flags for 10 tenants;
                    integrated into a bi-weekly sprint cycle to ensure rapid, low-risk releases.
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Architected frontend monitoring infrastructure (browser & server-side), cutting
                    mean-time-to-recovery by 50% and providing real-time insights for production debugging.
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Scaled globally by configuring Azure DevOps CI/CD pipelines and App Service deployments across three
                    regions + Front Door CDN, supporting peak traffic of 200k requests/hour with &lt;1s p95 response
                    times.
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Led technical knowledge sharing through daily 1:1 mentorship, extensive code reviews, and quarterly
                    lunch-and-learns (20+ engineers), driving team adoption of best practices in Next.js, TypeScript,
                    Tailwind CSS, Playwright, and Jest.
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Partnered with clients in 30+ training sessions to onboard platform users, accelerating go-live
                    timelines and reducing support tickets via self-service configuration and documentation.
                  </li>
                </ul>
                <div className='flex flex-wrap gap-2 mt-6'>
                  {['Next.js', 'TypeScript', 'Azure', 'Stripe', 'Contentful', 'Microservices'].map((tech) => (
                    <Badge
                      key={tech}
                      variant='outline'
                      className='border-emerald-400/30 text-emerald-300'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Ecommerce Style */}
      <section
        id='projects'
        className='py-20 px-6'
      >
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold mb-6'>Project Store</h2>
            <p className='text-xl text-gray-300 mb-6'>Browse my collection of previous work</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                // whileHover={{ y: -8, scale: 1.02 }}
                // className={`group ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <Card className='bg-white/5 border-white/10 text-white overflow-hidden h-full hover:bg-white/10 transition-all duration-300 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/10'>
                  <div className='relative overflow-hidden'>
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={500}
                      height={300}
                      className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Product-style badges */}
                    <div className='absolute top-3 left-3 flex flex-col gap-2'>
                      {project.featured && <Badge className='bg-emerald-600 text-white shadow-lg'>⭐ Featured</Badge>}
                      <Badge className='bg-black/70 text-white backdrop-blur-sm'>{project.tech[0]}</Badge>
                    </div>

                    {/* Quick action buttons */}
                    <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <Button
                        size='sm'
                        variant='secondary'
                        className='bg-white/90 text-black hover:bg-white p-2'
                      >
                        <ExternalLink className='h-4 w-4' />
                      </Button>
                      {project.github && (
                        <Button
                          size='sm'
                          variant='secondary'
                          className='bg-white/90 text-black hover:bg-white p-2'
                        >
                          <Github className='h-4 w-4' />
                        </Button>
                      )}
                    </div>

                    {/* "On Sale" style overlay for featured projects */}
                    {project.featured && (
                      <div className='absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-red-500 text-white px-2 py-1 rounded text-xs font-bold'>LIVE PROJECT</div>
                      </div>
                    )}
                  </div>

                  <CardContent className='p-4'>
                    {/* Product title and "price" */}
                    <div className='flex justify-between items-start mb-2'>
                      <h3 className='font-semibold text-lg group-hover:text-emerald-400 transition-colors line-clamp-2'>
                        {project.title}
                      </h3>
                      <div className='text-right ml-2'>
                        <div className='text-emerald-400 font-bold text-lg'>{project.featured ? '★★★★★' : '★★★★☆'}</div>
                        <div className='text-xs text-gray-400'>{project.featured ? 'Enterprise' : 'Personal'}</div>
                      </div>
                    </div>

                    {/* Product description */}
                    <p className='text-gray-300 text-sm mb-3 line-clamp-2'>{project.description}</p>

                    {/* Tech stack as "product features" */}
                    <div className='flex flex-wrap gap-1 mb-4'>
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant='outline'
                          className='border-emerald-400/30 text-emerald-300 text-xs'
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant='outline'
                          className='border-gray-400/30 text-gray-400 text-xs'
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* "Add to cart" style buttons */}
                    <div className='space-y-2'>
                      <LinkButton
                        className='w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors'
                        size='sm'
                        href={project.link}
                        linkProps={{
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }}
                      >
                        <ExternalLink className='h-4 w-4 mr-2' />
                        View Live Demo
                      </LinkButton>
                      {project.github && (
                        <Button
                          variant='outline'
                          className='w-full border-white/20 text-white hover:bg-white/10 transition-colors'
                          size='sm'
                        >
                          <Github className='h-4 w-4 mr-2' />
                          View Source Code
                        </Button>
                      )}
                    </div>

                    {/* Product stats */}
                    <div className='flex justify-between items-center mt-3 pt-3 border-t border-white/10 text-xs text-gray-400'>
                      <span className='flex items-center'>
                        <Users className='h-3 w-3 mr-1' />
                        {project.featured ? '1M+ users' : 'Personal'}
                      </span>
                      <span className='flex items-center'>
                        <Zap className='h-3 w-3 mr-1' />
                        {project.featured ? 'Production' : 'Demo'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 px-6 bg-black/20'
      >
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold mb-6'>Let's Work Together</h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can create
              something amazing together.
            </p>
            <LinkButton
              href='mailto:sdavisde@gmail.com'
              className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3'
              linkProps={{
                target: '_blank',
                rel: 'noopener noreferrer',
              }}
            >
              <Mail className='mr-2 h-5 w-5' />
              Get In Touch
            </LinkButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-6 border-t border-white/10'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 mb-4 md:mb-0'>2025 Sean Davis. Built with Next.js and Tailwind CSS.</p>
          <div className='flex space-x-6'>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='text-gray-400 hover:text-white transition-colors'
              >
                <link.icon className='h-5 w-5' />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
