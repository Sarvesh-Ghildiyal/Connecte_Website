import React from 'react'

interface LogoProps {
  className?: string
}

/**
 * Connecte Logo — uses the actual logo.svg from /svg/ + "Connecte" wordmark.
 * Matches the mockup exactly: green icon + bold "Connecte" text.
 */
const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <a href="/" className={`flex items-center gap-2 no-underline ${className}`} aria-label="Connecte Home">
      <img src="/svg/connecte.svg" alt="Connecte" width={24} height={24} />
      <span className="font-heading font-bold text-lg text-foreground">
        Connecte
      </span>
    </a>
  )
}

export default Logo
