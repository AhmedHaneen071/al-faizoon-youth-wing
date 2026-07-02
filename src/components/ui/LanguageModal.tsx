import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '@/Logo-01.svg'
import { useLanguage, type Language } from '@/context/LanguageContext'

interface LanguageModalProps {
  onComplete: () => void
}

export function LanguageModal({ onComplete }: LanguageModalProps) {
  const { setLanguage, t } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const select = (lang: Language) => {
    setLanguage(lang)
    setShow(false)
    setTimeout(onComplete, 400)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[110] bg-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="text-center px-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src={logoSvg} alt="Al-Faizoon Youth Wing" className="h-32 w-auto mx-auto mb-8" />

            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
              {t('language.title')}
            </h2>
            <p className="text-text-secondary mb-8">
              {t('language.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => select('en')}
                className="px-10 py-4 bg-primary-600 text-white font-display font-bold text-lg rounded-2xl hover:bg-primary-700 transition-colors cursor-pointer shadow-lg shadow-primary-600/20"
              >
                {t('language.english')}
              </button>
              <button
                onClick={() => select('ur')}
                className="px-10 py-4 bg-accent-500 text-white font-display font-bold text-lg rounded-2xl hover:bg-accent-600 transition-colors cursor-pointer shadow-lg shadow-accent-500/20"
                style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              >
                {t('language.urdu')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
