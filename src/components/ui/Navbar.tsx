import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/mission', label: 'Our Mission' },
  { path: '/contact', label: 'Contact' },
]

const mobileExtraLinks = [
  { path: '/social-media-design', label: 'Social Media Design' },
  { path: '/event-planning', label: 'Event Planning' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setResourcesOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center text-white font-display font-bold text-sm group-hover:bg-primary-700 transition-colors">
              AF
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg text-text-primary">Al-Faizoon</span>
              <span className="block text-xs text-text-muted -mt-1">Youth Wing Hyderabad</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-text-secondary hover:text-primary-600'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <div className="relative group">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="font-medium text-sm text-text-secondary hover:text-primary-600 transition-colors cursor-pointer"
              >
                Resources
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-border py-2"
                  >
                    {mobileExtraLinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2.5 text-sm text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="container max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-text-secondary hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-2 pt-2">
                <p className="px-4 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">Resources</p>
                {mobileExtraLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-text-secondary hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
