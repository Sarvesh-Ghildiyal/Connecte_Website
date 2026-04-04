import React from 'react'
import Logo from './Logo'

/**
 * Site footer — unified footer that matches across all page mockups.
 * Layout: Logo left | nav links center | copyright right
 */
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-white" role="contentinfo">
      <div className="max-w-page mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Center: copyright + links */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[14px] font-body text-muted">
              © 2024 Connecte Technologies. Built in India.
            </span>
          </div>

          {/* Right: footer nav links */}
          <nav className="flex flex-wrap items-center gap-5" aria-label="Footer navigation">
            {[
              { label: 'Twitter', href: 'https://twitter.com/connecte' },
              { label: 'LinkedIn', href: 'https://linkedin.com/company/connecte' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-body text-muted hover:text-foreground transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
