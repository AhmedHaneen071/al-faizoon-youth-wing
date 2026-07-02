import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { en } from '@/data/translations/en'
import { ur } from '@/data/translations/ur'

export type Language = 'en' | 'ur'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (path: string) => string
  dir: 'ltr' | 'rtl'
}

const translations: Record<Language, Record<string, any>> = { en, ur }

function resolve(obj: Record<string, any>, path: string): string {
  const keys = path.split('.')
  let current: any = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path
    current = current[key]
  }
  return typeof current === 'string' ? current : path
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'ur') return stored
    return 'en'
  })

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('lang', lang)
  }, [])

  useEffect(() => {
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const t = useCallback((path: string): string => {
    return resolve(translations[language], path)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ur' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
