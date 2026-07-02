import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TimelineStep {
  number: number
  title: string
  description: string
  icon: string
}

interface TimelineProps {
  steps: TimelineStep[]
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />
      <div className="space-y-10 md:space-y-16">
        {steps.map((step, i) => (
          <TimelineItem key={step.number} step={step} index={i} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ step, index }: { step: TimelineStep; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative md:flex items-center">
      <div className={`hidden md:block w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 order-2'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display font-bold text-xl text-text-primary mb-2">{step.title}</h3>
          <p className="text-text-secondary leading-relaxed">{step.description}</p>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, type: 'spring' }}
      >
        <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-display font-bold text-lg shadow-lg">
          {step.number}
        </div>
      </motion.div>

      <div className={`md:hidden mt-4 ml-16 ${isLeft ? '' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display font-bold text-lg text-text-primary mb-1">{step.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
        </motion.div>
      </div>
    </div>
  )
}

export const missionTimelineSteps: TimelineStep[] = [
  { number: 1, title: 'Identify & Recruit', description: 'We identify passionate youth in Hyderabad communities and invite them to join our structured mentorship and character-building programs.', icon: 'search' },
  { number: 2, title: 'Educate & Train', description: 'Through workshops, study circles, and hands-on training, we equip youth with Islamic knowledge, leadership skills, and practical problem-solving abilities.', icon: 'book' },
  { number: 3, title: 'Mobilize for Action', description: 'Youth are organized into teams to plan and execute Dawah initiatives and community service projects that address real local needs.', icon: 'users' },
  { number: 4, title: 'Reflect & Grow', description: 'Regular feedback sessions, mentoring check-ins, and impact assessments ensure continuous personal and organizational growth.', icon: 'chart' },
]
