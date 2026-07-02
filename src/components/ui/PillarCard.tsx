import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { Pillar } from '@/models/Pillar'
import { useLanguage } from '@/context/LanguageContext'

interface PillarCardProps {
  pillar: Pillar
  expanded?: boolean
}

const iconPaths: Record<string, ReactNode> = {
  'shield-check': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  'hand': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  ),
  'scale': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  ),
  'ear': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  ),
  'book-open': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
}

export function PillarCard({ pillar, expanded = false }: PillarCardProps) {
  const { t } = useLanguage()
  return (
    <motion.div
      className={`group relative bg-white rounded-2xl border-2 border-border transition-all duration-300 cursor-pointer
        ${pillar.getGradientBorder()}
        ${expanded ? 'p-8' : 'p-6'}
      `}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className={`w-12 h-12 rounded-xl ${pillar.getIconBg()} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {iconPaths[pillar.icon]}
        </svg>
      </div>

      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${pillar.getBadgeColor()} border mb-3`}>
        {t('pillarCard.pillar')} {pillar.order}
      </span>

      <h3 className="font-display font-bold text-xl text-text-primary mb-1">
        {pillar.name}
      </h3>
      <p className="text-sm text-primary-600 font-semibold mb-3">
        {pillar.arabicName}
      </p>

      <p className="text-text-secondary text-sm leading-relaxed">
        {expanded ? pillar.description : pillar.summary}
      </p>
    </motion.div>
  )
}
