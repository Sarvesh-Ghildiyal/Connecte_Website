import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/Button'

type Audience = 'exploring' | 'switching'

const HERO_CONTENT: Record<Audience, { heading: string; subtext: string; cta: string; ctaHref: string }> = {
  exploring: {
    heading: 'Your Customer Engagement Messaging Platform',
    subtext: 'Make it easy for people to connect with your business by meeting them where they already are: on WhatsApp.',
    cta: 'Get Started Free',
    ctaHref: '/contact',
  },
  switching: {
    heading: 'Tired of Monthly Subscriptions to use Meta APIs ?',
    subtext: 'Simple and transparent pricing—Meta charges you ₹X for messaging. We charge ₹X × 1.11. No hidden software fees, no per-agent costs.',
    cta: 'Compare Pricing',
    ctaHref: '/pricing',
  },
}

const BENEFITS = [
  {
    icon: '/svg/home1.svg',
    title: 'No Markup BS',
    description: 'We charge exactly what Meta charges, plus a flat 1.11x platform fee. No hidden software costs, no per-agent fees.',
  },
  {
    icon: '/svg/home2.svg',
    title: 'Built by Devs',
    description: 'We Reserached, Analyzed and Delievered. Tailored for you to increase your lead conversions via personalized branding.',
  },
  {
    icon: '/svg/home3.svg',
    title: 'Meta Verified',
    description: 'Official WhatsApp Business API integration. Guaranteed uptime and direct access to new features as they launch.',
  },
]

const HomePage: React.FC = () => {
  const [audience, setAudience] = useLocalStorage<Audience>('connecte-audience', 'exploring')
  const content = HERO_CONTENT[audience]

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-14 pb-12 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-page mx-auto text-center">
          {/* Audience Toggle — pill-shaped, 40px height per spec */}
          <div className="inline-flex items-center bg-surface rounded-full p-1 mb-4" role="tablist" aria-label="Audience selection">
            <button
              role="tab"
              aria-selected={audience === 'exploring'}
              onClick={() => setAudience('exploring')}
              className={`px-6 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 cursor-pointer h-10 hover:scale-[1.03] hover:shadow-md active:scale-95 ${
                audience === 'exploring'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              Exploring WhatsApp
            </button>
            <button
              role="tab"
              aria-selected={audience === 'switching'}
              onClick={() => setAudience('switching')}
              className={`px-6 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 cursor-pointer h-10 hover:scale-[1.03] hover:shadow-md active:scale-95 ${
                audience === 'switching'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              Switching providers
            </button>
          </div>

          {/* New Greeting Line */}
          <div className="mb-4">
            <span className="text-primary font-heading font-bold text-[13px] uppercase tracking-[0.2em] animate-fade-in">
              Hello Businesses,
            </span>
          </div>

          {/* Dynamic Hero Heading — 72px DM Sans per spec */}
          <h1
            key={audience}
            className="font-heading text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] text-foreground max-w-[800px] mx-auto mb-6"
          >
            {content.heading}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-[17px] text-muted max-w-xl mx-auto mb-6 font-body leading-relaxed">
            {content.subtext}
          </p>

          {/* CTA row */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Button variant="primary" href={content.ctaHref} arrow>
              {content.cta}
            </Button>
            <span className="text-sm text-muted font-body">No credit card required</span>
          </div>

          {/* Video Embed — 1024px max, 16:9, 1px border, 4px radius per spec */}
          <div className="relative max-w-[1024px] mx-auto rounded border border-border overflow-hidden aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
              {/* Play button — white circle with dark play icon */}
              <div className="relative flex flex-col items-center gap-6">
                <button
                  className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-105 transition-all cursor-pointer opacity-50 grayscale"
                  aria-label="Play intro video"
                  disabled
                >
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L17 11L1 21V1Z" fill="#121212" />
                  </svg>
                </button>
                <div className="flex flex-col items-center gap-1.5 animate-pulse">
                  <span className="text-white/40 font-heading text-xs font-bold uppercase tracking-[0.2em]">HEAR FROM OUR TEAM</span>
                  <span className="text-white font-heading text-xl md:text-2xl font-bold tracking-tight">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid — 3 columns per mockup */}
      <section className="py-20 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-page mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              {/* Icon — 48x48 box matching the SVGs */}
              <div className="mb-5">
                <img src={benefit.icon} alt="" width={48} height={48} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted font-body leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
