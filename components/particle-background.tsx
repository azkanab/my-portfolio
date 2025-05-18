"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  friction: number
  ease: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>(0)
  const [currentShape, setCurrentShape] = useState<"triangle" | "circle" | "square" | "random">("triangle")
  const shapeChangeInterval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      // Create many more particles - up to 2000 depending on screen size
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 500), 1000)

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.current.push({
          x,
          y,
          size: Math.random() * 2 + 0.5,
          baseX: x,
          baseY: y,
          density: Math.random() * 30 + 1,
          targetX: x,
          targetY: y,
          vx: 0,
          vy: 0,
          friction: 0.98, // Increased from 0.95 to slow down more
          ease: 0.003 + Math.random() * 0.004, // Reduced from 0.1 to make movement slower
        })
      }
    }

    const generateShape = (shape: "triangle" | "circle" | "square" | "random") => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.3

      particles.current.forEach((particle, i) => {
        let targetX, targetY

        if (shape === "circle") {
          // Circle formation
          const angle = (i / particles.current.length) * Math.PI * 2
          targetX = centerX + Math.cos(angle) * maxRadius * (0.2 + Math.random() * 0.8)
          targetY = centerY + Math.sin(angle) * maxRadius * (0.2 + Math.random() * 0.8)
        } else if (shape === "triangle") {
          // Triangle formation
          const segment = i % 3
          const offset = (i / particles.current.length) * maxRadius * 0.5

          if (segment === 0) {
            targetX = centerX
            targetY = centerY - maxRadius + offset
          } else if (segment === 1) {
            targetX = centerX - maxRadius * 0.866 + offset
            targetY = centerY + maxRadius * 0.5 - offset * 0.5
          } else {
            targetX = centerX + maxRadius * 0.866 - offset
            targetY = centerY + maxRadius * 0.5 - offset * 0.5
          }
        } else if (shape === "square") {
          // Square formation
          const side = i % 4
          const t = (i / particles.current.length) * 4
          const sidePos = t - Math.floor(t)

          if (side === 0) {
            targetX = centerX - maxRadius + sidePos * maxRadius * 2
            targetY = centerY - maxRadius
          } else if (side === 1) {
            targetX = centerX + maxRadius
            targetY = centerY - maxRadius + sidePos * maxRadius * 2
          } else if (side === 2) {
            targetX = centerX + maxRadius - sidePos * maxRadius * 2
            targetY = centerY + maxRadius
          } else {
            targetX = centerX - maxRadius
            targetY = centerY + maxRadius - sidePos * maxRadius * 2
          }
        } else {
          // Random formation
          targetX = Math.random() * canvas.width
          targetY = Math.random() * canvas.height
        }

        // Add some randomness to make it look more natural
        targetX += (Math.random() - 0.5) * 20
        targetY += (Math.random() - 0.5) * 20

        particle.targetX = targetX
        particle.targetY = targetY
      })
    }

    const updateParticles = () => {
      particles.current.forEach((particle) => {
        // Calculate direction to target
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y

        // Apply acceleration toward target with reduced speed
        particle.vx += dx * particle.ease * 0.5 // Added 0.5 multiplier to reduce speed
        particle.vy += dy * particle.ease * 0.5 // Added 0.5 multiplier to reduce speed

        // Apply friction
        particle.vx *= particle.friction
        particle.vy *= particle.friction

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particle positions
      updateParticles()

      // Draw particles
      particles.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        // Calculate opacity based on velocity - faster particles are brighter
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        const opacity = Math.min(0.8, Math.max(0.2, speed * 0.2))

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      })

      // Draw connections between nearby particles
      particles.current.forEach((particle, i) => {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particle.x - particles.current[j].x
          const dy = particle.y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 50) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 50)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      })

      animationFrameId.current = requestAnimationFrame(drawParticles)
    }

    window.addEventListener("resize", resizeCanvas)

    // Set up shape change interval
    shapeChangeInterval.current = setInterval(() => {
      const shapes: ("triangle" | "circle" | "square" | "random")[] = ["triangle", "circle", "square", "random"]
      const nextShape = shapes[(shapes.indexOf(currentShape) + 1) % shapes.length]
      setCurrentShape(nextShape)
      generateShape(nextShape)
    }, 8000) // Changed from 5000 to 8000 (8 seconds between transitions)

    window.addEventListener("resize", resizeCanvas)

    resizeCanvas()
    generateShape(currentShape)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId.current)
      if (shapeChangeInterval.current) {
        clearInterval(shapeChangeInterval.current)
      }
    }
  }, [currentShape])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full bg-black" style={{ pointerEvents: "none" }} />
  )
}
