import { type ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  containerClass?: string
  dark?: boolean
}

export function Section({ children, className = '', id, containerClass = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`${dark ? 'bg-primary-900 text-white' : 'bg-surface'} ${className}`}
    >
      <div className={`container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${containerClass}`}>
        {children}
      </div>
    </section>
  )
}

export function SectionTitle({ title, subtitle, center = true, light = false }: { title: string; subtitle?: string; center?: boolean; light?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <motion.h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-text-primary'}`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-4 text-lg md:text-xl max-w-3xl ${center ? 'mx-auto' : ''} ${light ? 'text-primary-200' : 'text-text-secondary'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerFadeIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      {children}
    </motion.div>
  )
}
