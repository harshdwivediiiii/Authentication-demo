'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function InteractiveBackground({ isDarkMode }: { isDarkMode: boolean }) {
  const [hasMounted, setHasMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const circlePositions = [
    { x: useMotionValue(0), y: useMotionValue(0), lightColor: '#7F00FF', darkColor: '#9B6EFF', size: 600 },
    { x: useMotionValue(0), y: useMotionValue(0), lightColor: '#9A4DFF', darkColor: '#6E39B7', size: 700 },
    { x: useMotionValue(0), y: useMotionValue(0), lightColor: '#6A00E6', darkColor: '#4A00A6', size: 800 },
    { x: useMotionValue(0), y: useMotionValue(0), lightColor: '#B052FF', darkColor: '#8623D3', size: 500 },
  ]

  // Small floating circles
  const smallCircles = [
    { size: 150, lightColor: '#D953FF', darkColor: '#C639FF' },
    { size: 120, lightColor: '#8A2EFF', darkColor: '#5E00FF' },
    { size: 100, lightColor: '#A557FF', darkColor: '#7429C6' },
    { size: 130, lightColor: '#BC5BFF', darkColor: '#9A3DFF' },
  ]

  useEffect(() => {
    setHasMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      circlePositions.forEach((circle) => {
        circle.x.set(e.clientX + Math.random() * 100 - 50)  // Random slight offset
        circle.y.set(e.clientY + Math.random() * 100 - 50)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Auto-move the small circles
  const createMovement = () => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      directionX: Math.random() > 0.5 ? 1 : -1,
      directionY: Math.random() > 0.5 ? 1 : -1,
      speedX: Math.random() * 0.5 + 0.3,
      speedY: Math.random() * 0.5 + 0.3,
    }
  }

  const [floatingCircles, setFloatingCircles] = useState(smallCircles.map(createMovement))

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingCircles((prevCircles) =>
        prevCircles.map((circle) => {
          const newX = circle.x + circle.directionX * circle.speedX
          const newY = circle.y + circle.directionY * circle.speedY

          // Bounce the circles off screen edges
          if (newX > window.innerWidth || newX < 0) circle.directionX *= -1
          if (newY > window.innerHeight || newY < 0) circle.directionY *= -1

          return {
            ...circle,
            x: newX,
            y: newY,
          }
        })
      )
    }, 16) // Update at 60fps

    return () => clearInterval(interval)
  }, [])

  if (!hasMounted) return null  // Avoid rendering before hydration

  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden  bg-gray-100 dark:bg-black`}>
      {/* Large glowing circles */}
      {circlePositions.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none rounded-full blur-3xl"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            background: `radial-gradient(circle, ${isDarkMode ? circle.darkColor : circle.lightColor} 0%, transparent 80%)`,
            top: circle.y,
            left: circle.x,
            translateX: '-50%',
            translateY: '-50%',
            opacity: 0.2 + Math.random() * 0.3,  // Random opacity for variation
          }}
        />
      ))}

      {/* Small floating circles */}
      {floatingCircles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none rounded-full blur-lg"
          style={{
            width: `${smallCircles[index].size}px`,
            height: `${smallCircles[index].size}px`,
            background: `radial-gradient(circle, ${isDarkMode ? smallCircles[index].darkColor : smallCircles[index].lightColor} 0%, transparent 80%)`,
            top: circle.y,
            left: circle.x,
            translateX: '-50%',
            translateY: '-50%',
            opacity: 0.5 + Math.random() * 0.3,  // Random opacity for subtle glow
          }}
        />
      ))}
    </div>
  )
}
