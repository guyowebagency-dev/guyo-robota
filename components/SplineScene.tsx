import React, { Suspense, lazy, Component, ReactNode, useEffect, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('Spline 3D Scene failed to load or parse binary buffer, falling back to interactive canvas:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// Interactive geometric neon particles canvas fallback
function InteractiveCanvasFallback({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth || window.innerWidth
      height = canvas.height = canvas.offsetHeight || window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Particle nodes for high-tech geometric network
    const numParticles = 45
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      })
    }

    let mouseX = width / 2
    let mouseY = height / 2

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse subtle attraction
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 180) {
          p.x += (dx / dist) * 0.2
          p.y += (dy / dist) * 0.2
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#00FF00'
        ctx.shadowBlur = 10
        ctx.shadowColor = '#00FF00'
        ctx.fill()
        ctx.shadowBlur = 0

        // Connect nearby particles with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const pdx = p2.x - p.x
          const pdy = p2.y - p.y
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy)

          if (pdist < 140) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            const alpha = (1 - pdist / 140) * 0.25
            ctx.strokeStyle = `rgba(0, 255, 0, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className || ''}`}>
      <canvas ref={canvasRef} className="w-full h-full block opacity-70" />
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    let isMounted = true
    setIsLoaded(false)
    setHasError(false)

    if (!scene) {
      setHasError(true)
      return
    }

    // Pre-check if scene URL is accessible and returns HTTP 200 binary data
    fetch(scene, { method: 'GET' })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: Scene resource unavailable`)
        }
        const contentType = res.headers.get('content-type') || ''
        if (contentType.includes('xml') || contentType.includes('html')) {
          throw new Error('Scene resource returned error payload instead of binary model')
        }
        if (isMounted) {
          setIsLoaded(true)
        }
      })
      .catch((err) => {
        console.warn('Spline scene unavailable, rendering interactive fallback canvas:', err.message)
        if (isMounted) {
          setHasError(true)
        }
      })

    return () => {
      isMounted = false
    }
  }, [scene])

  if (hasError || !isLoaded) {
    return <InteractiveCanvasFallback className={className} />
  }

  return (
    <SplineErrorBoundary fallback={<InteractiveCanvasFallback className={className} />}>
      <Suspense fallback={<InteractiveCanvasFallback className={className} />}>
        <Spline
          scene={scene}
          className={className}
          onError={() => setHasError(true)}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}

