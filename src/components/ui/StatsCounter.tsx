import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: number
  label: string
  suffix?: string
}

interface StatsCounterProps {
  stats: StatItem[]
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const steps = 30
    const increment = value / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.floor(increment * step), value)
      setDisplayed(current)
      if (step >= steps) {
        setDisplayed(value)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{displayed}{suffix}</span>
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="text-center p-6 rounded-2xl bg-white border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <p className="font-display text-3xl md:text-4xl font-bold text-primary-600">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
