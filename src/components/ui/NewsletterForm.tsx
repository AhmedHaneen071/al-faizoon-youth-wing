import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FormSubmissionService } from '@/services/FormSubmissionService'
import { NotificationService } from '@/services/NotificationService'
import { useLanguage } from '@/context/LanguageContext'

export function NewsletterForm() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    try {
      const formService = FormSubmissionService.getInstance()
      await formService.submit('newsletter', { email })
      NotificationService.getInstance().success(t('newsletter.success'))
      setEmail('')
    } catch {
      NotificationService.getInstance().error(t('newsletter.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={t('newsletter.placeholder')}
          required
          className={`w-full px-5 py-3.5 rounded-2xl border-2 bg-white text-text-primary outline-none transition-all duration-300 text-sm
            ${focused ? 'border-primary-500 shadow-lg shadow-primary-500/10' : 'border-border'}`}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={focused ? { boxShadow: '0 0 0 3px rgba(13, 148, 136, 0.15)' } : {}}
          transition={{ duration: 0.3 }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-2xl hover:bg-primary-700 transition-colors disabled:opacity-50 text-sm cursor-pointer"
      >
        {loading ? t('newsletter.subscribing') : t('newsletter.subscribe')}
      </button>
    </form>
  )
}
