import React from 'react'

const WhyConnectePage: React.FC = () => {
  return (
    <main>
      {/* Hero — centered, large heading */}
      <section className="pt-16 md:pt-20 pb-8 px-6 md:px-12 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-[-0.04em] text-foreground mb-5">
            The Builder's Manifesto
          </h1>
          <p className="text-[16px] text-muted font-body leading-relaxed max-w-xl mx-auto">
            The story of how a policy update and a desire to help an NGO turned into a SaaS.
          </p>
        </div>
      </section>

      {/* Hero Image — B&W, full reading-width */}
      <section className="px-6 md:px-12 lg:px-16 mb-16">
        <div className="max-w-reading mx-auto">
          <div className="aspect-[16/10] bg-gray-800 rounded overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center">
              <span className="text-xs text-white/30 font-body tracking-wider uppercase">Founders at work</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body — 680px max-width, editorial typography */}
      <section className="px-6 md:px-12 lg:px-16 pb-24">
        <article className="max-w-reading mx-auto space-y-7">
          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            The story of Connecte didn't start in a boardroom. An NGO named <strong>DHAD</strong> reached out to me because they were struggling with Meta's April 2025 policy updates. Because they were using an unregistered tool, their important messages were going straight to spam.
          </p>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            They couldn't afford the exorbitant software out there, so they asked me if I could build a custom solution for them.
          </p>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            At the time, I was an intern at Wingify, learning about the SaaS world and dreaming of building something of my own one day. I looked around the market and saw companies charging heavy monthly subscription fees <em>on top</em> of what Meta already charged for the API. It's a great way to make money, but it felt really unfair to smaller businesses.
          </p>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            I thought: <em>Why just build a small tool for DHAD? Why not build a full platform for anyone else dealing with this?</em> Helping others and building a business don't have to be opposites. So, I built Connecte.
          </p>

          {/* Quote Block — green left border, DM Sans bold */}
          <blockquote className="border-l-[4px] border-primary pl-6 py-4 my-14">
            <p className="font-heading text-[20px] md:text-[22px] font-bold text-foreground leading-[1.4]">
              "We dropped the subscription fees completely. We aren't here to squeeze you—we built this to show that software can be good without being predatory."
            </p>
          </blockquote>

          {/* Infrastructure & The 11% */}
          <h2 className="font-heading text-[28px] md:text-[32px] font-bold text-foreground pt-10 tracking-[-0.03em]">
            Why 11%? To keep the lights on.
          </h2>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            With Connecte, you pay a flat <strong>1.11x markup</strong> on Meta's base rates. I'll be completely honest with you: that 11% isn't for us to get rich. It's the exact amount we need to sustain the platform.
          </p>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            Right now, we run on free tiers and lean infrastructure. But as more people use Connecte, server costs go up. That 11% goes straight into paying for reliable servers so the platform doesn't go down when you actually need it.
          </p>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            We are a new team, which means we actually care about our early users. We take every single client seriously, because every business that trusts us helps prove that this model actually works.
          </p>

          {/* Author signature — with avatar placeholder, matching mockup */}
          <div className="border-t border-border pt-8 mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                <span className="text-sm font-heading font-bold text-muted">C</span>
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-[14px]">The Connecte Team</p>
                <p className="text-[13px] text-muted font-body">Founders & Engineers</p>
              </div>
            </div>
            <a
              href="/about"
              className="text-[14px] font-body text-primary hover:text-primary-dark transition-colors no-underline font-medium inline-flex items-center gap-1"
            >
              See our future roadmap
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </article>
      </section>
    </main>
  )
}

export default WhyConnectePage
