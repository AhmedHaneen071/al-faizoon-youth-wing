import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  external?: boolean
}

const variants: Record<string, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  ghost: 'text-primary-600 hover:bg-primary-50',
}

const sizes: Record<string, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
}

export function Button({ children, variant = 'primary', size = 'md', href, to, external, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer'
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const target = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <motion.a
        href={href}
        {...target}
        className={cls}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  if (to) {
    return (
      <motion.div
        className={cls}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link to={to} className="w-full h-full flex items-center justify-center gap-2">
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}
