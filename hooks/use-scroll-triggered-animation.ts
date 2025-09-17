import { useState, useEffect, useRef, RefObject } from 'react'

interface ScrollTriggerOptions {
  threshold?: number
  rootMargin?: string
}

interface ScrollTriggerState {
  isVisible: boolean
  hasBeenVisible: boolean
  animationDelay: number
  hasUserScrolled: boolean
}

export function useScrollTriggeredAnimation(
  options: ScrollTriggerOptions = {}
): [RefObject<HTMLDivElement | null>, ScrollTriggerState] {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options
  const [state, setState] = useState<ScrollTriggerState>({
    isVisible: false,
    hasBeenVisible: false,
    animationDelay: 0,
    hasUserScrolled: false,
  })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Track if user has scrolled from the top
    const handleScroll = () => {
      const scrolled = window.scrollY > 50 // Buffer to account for small movements
      setState((prev) => ({
        ...prev,
        hasUserScrolled: scrolled,
      }))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setState((prev) => ({
          ...prev,
          isVisible,
          hasBeenVisible: prev.hasBeenVisible || isVisible,
        }))
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold, rootMargin])

  return [ref, state]
}

export function useMultipleScrollTriggers(
  count: number,
  options: ScrollTriggerOptions = {}
): Array<[RefObject<HTMLDivElement>, ScrollTriggerState]> {
  const triggers = Array.from({ length: count }, (_, index) => {
    const [ref, state] = useScrollTriggeredAnimation(options)
    return [ref, { ...state, animationDelay: index * 200 }] as [RefObject<HTMLDivElement>, ScrollTriggerState]
  })

  return triggers
}
