import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Why Connecte', path: '/why-connecte' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

/**
 * Sticky top navigation — matches all mockups:
 * Logo left, centered nav links, "Login" (home only) + "Book Demo" button right.
 * Active page link highlighted in green. Full-width bottom border.
 * Mobile: hamburger menu.
 */
const Navigation: React.FC = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white" role="navigation" aria-label="Main navigation">
      <div className="max-w-page mx-auto flex items-center justify-between px-6 md:px-12 h-[64px]">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links — centered */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <a
                key={link.path}
                href={link.path}
                className={`text-[14px] font-body font-medium transition-colors duration-150 no-underline ${
                  isActive ? 'text-primary' : 'text-foreground hover:text-muted'
                } ${location.pathname === '/privacy' ? 'uppercase tracking-wider' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Right side: Login + Book Demo */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="https://app.connecte.in/login" className="text-[14px] font-body text-foreground hover:text-muted no-underline transition-colors">
            Login
          </a>
          <Button
            variant={location.pathname === '/privacy' ? 'primary' : 'dark'}
            size="sm"
            href="/contact"
            arrow
          >
            {location.pathname === '/privacy' ? 'BOOK DEMO' : 'Book Demo'}
          </Button>
        </div>

        {/* Mobile hamburger — visible up to lg (1024px) */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-foreground transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Full-width separator line — visible in all mockups */}
      <div className="w-full h-px bg-border" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-6 py-6 space-y-5 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <a
                key={link.path}
                href={link.path}
                className={`block text-[17px] font-body no-underline ${
                  isActive ? 'text-primary font-semibold' : 'text-foreground'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          })}
          <div className="flex flex-col gap-4 pt-6 border-t border-border">
            <a href="https://app.connecte.in/login" className="text-[17px] font-body text-foreground no-underline text-center py-2">Login</a>
            <Button variant="dark" size="full" href="/contact" arrow>
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
