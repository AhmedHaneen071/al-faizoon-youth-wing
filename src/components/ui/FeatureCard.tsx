import { motion } from 'framer-motion'
import type { FeatureCardModel } from '@/models/FeatureCard'

interface FeatureCardProps {
  feature: FeatureCardModel
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-border p-8 hover:border-primary-200 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className={`w-14 h-14 rounded-2xl ${feature.accentColor} flex items-center justify-center mb-5`}>
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.getIconSvg()} />
        </svg>
      </div>
      <h3 className="font-display font-bold text-xl text-text-primary mb-3">
        {feature.title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}
