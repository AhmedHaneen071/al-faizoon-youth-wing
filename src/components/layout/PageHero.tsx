import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle: string
  badge?: string
}

export function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-primary-50/30 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, #0d9488 1px, transparent 1px), radial-gradient(circle at 75% 75%, #0d9488 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              {badge}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
