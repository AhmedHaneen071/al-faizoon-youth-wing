import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { StartupLoader } from '@/components/ui/StartupLoader'
import { LanguageModal } from '@/components/ui/LanguageModal'
import { LanguageProvider } from '@/context/LanguageContext'

function BootSequence() {
  const [phase, setPhase] = useState<'loader' | 'language' | 'app'>('loader')

  return (
    <LanguageProvider>
      {phase === 'loader' && (
        <StartupLoader onDone={() => setPhase('language')} />
      )}
      {phase === 'language' && (
        <LanguageModal onComplete={() => setPhase('app')} />
      )}
      {phase === 'app' && <App />}
    </LanguageProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BootSequence />
  </StrictMode>,
)
