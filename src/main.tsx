import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { StartupLoader } from '@/components/ui/StartupLoader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StartupLoader>
      <App />
    </StartupLoader>
  </StrictMode>,
)
