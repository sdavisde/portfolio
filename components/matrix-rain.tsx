'use client'

import { useEffect, useRef } from 'react'

interface MatrixRainProps {
  opacity?: number
  speed?: number
  density?: number
}

export default function MatrixRain({ opacity = 0.2, speed = 50, density = 0.8 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Matrix characters - mix of katakana, numbers, and symbols
    const matrixChars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?'
    const charArray = matrixChars.split('')

    let animationId: number
    let drops: number[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Calculate number of columns based on font size
      const fontSize = 14
      const columns = Math.floor(canvas.width / fontSize)

      // Reset drops array
      drops = []
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100 // Start drops at random positions above screen
      }
    }

    const draw = () => {
      // Black background with slight transparency for trail effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.04)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set font
      const fontSize = 14
      ctx.font = `${fontSize}px monospace`
      ctx.fillStyle = `rgba(156, 163, 175, ${opacity})` // Gray color

      const columns = Math.floor(canvas.width / fontSize)

      for (let i = 0; i < columns; i++) {
        // Pick random character
        const char = charArray[Math.floor(Math.random() * charArray.length)]

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Move drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > density) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    let lastTime = 0
    const targetFPS = 15 // Slower animation - adjust this to control speed

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= 1000 / targetFPS) {
        draw()
        lastTime = currentTime
      }
      animationId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate(0)

    // Handle window resize
    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [opacity, speed, density])

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 pointer-events-none z-0'
      style={{
        background: 'transparent',
      }}
    />
  )
}
