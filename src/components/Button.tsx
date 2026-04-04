import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'full'
  href?: string
  arrow?: boolean
  children: React.ReactNode
}

/**
 * Reusable Button component with 3 variants matching the design system.
 * - primary: green background (#25D366), white text
 * - dark: black background, white text
 * - outline: transparent with border
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    dark: 'bg-accent text-white hover:bg-foreground/90',
    outline: 'bg-transparent border border-border text-foreground hover:bg-surface',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded',
    md: 'px-6 py-3 text-[15px] rounded',
    lg: 'px-8 py-4 text-base rounded',
    full: 'px-6 py-3 text-[15px] rounded w-full',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {arrow && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}

export default Button
