import { motion } from 'framer-motion'
import type { Testimonial } from '@/models/Testimonial'
import { useLanguage } from '@/context/LanguageContext'

interface TestimonialCardProps {
  testimonial: Testimonial
  featured?: boolean
}

export function TestimonialCard({ testimonial, featured = false }: TestimonialCardProps) {
  const { t } = useLanguage()
  if (featured) {
    return (
      <motion.div
        className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <svg className="absolute top-4 right-4 w-16 h-16 text-white/5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
        <div className="relative z-10">
          <p className="text-lg md:text-xl leading-relaxed font-medium italic mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div>
            <p className="font-display font-bold">{testimonial.name}</p>
            <p className="text-primary-200 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${testimonial.getCategoryColor()} mb-3`}>
        {t(`data.categories.testimonial.${testimonial.category}`)}
      </span>
      <p className="text-text-secondary leading-relaxed mb-4 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div>
          <p className="font-semibold text-sm text-text-primary">{testimonial.name}</p>
          <p className="text-xs text-text-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}
