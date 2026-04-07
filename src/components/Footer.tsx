import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

/**
 * Site footer — unified footer that matches across all page mockups.
 * Layout: Logo left | nav links center | copyright right
 */
const Footer: React.FC = () => {
  const links = [
    { label: 'Twitter', href: '#', external: false },
    { label: 'LinkedIn', href: '#', external: false },
    { label: 'Privacy Policy', href: '/privacy', external: false },
    { label: 'Terms of Service', href: '/terms', external: false },
  ]

  return (
    <footer className="border-t border-border bg-white" role="contentinfo">
      <div className="max-w-page mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[14px] font-body text-muted flex items-center gap-1">
              © 2026 Connecte. All rights reserved.
            </span>
          </div>

          {/* Right: footer nav links */}
          <nav className="flex flex-wrap items-center gap-5" aria-label="Footer navigation">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-body text-muted hover:text-foreground transition-colors no-underline"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[14px] font-body text-muted hover:text-foreground transition-colors no-underline"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
