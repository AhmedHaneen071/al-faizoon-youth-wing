import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '@/Logo-01.svg'

export function StartupLoader({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.img
              src={logoSvg}
              alt="Al-Faizoon Youth Wing"
              className="h-40 w-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}
