"use client"

import { useEffect, useRef } from "react"

export default function BackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let hue = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradientX = mouseX * canvas.width
      const gradientY = mouseY * canvas.height
      const radius = Math.max(canvas.width, canvas.height) * 0.8

      const gradient = ctx.createRadialGradient(gradientX, gradientY, 0, gradientX, gradientY, radius)

      hue = (hue + 0.1) % 360

      // Use very subtle colors
      gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.03)`)
      gradient.addColorStop(0.5, `hsla(${hue + 60}, 80%, 60%, 0.02)`)
      gradient.addColorStop(1, `hsla(${hue + 120}, 80%, 60%, 0.01)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none" />
}
