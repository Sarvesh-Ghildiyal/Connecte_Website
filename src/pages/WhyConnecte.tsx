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
            We got tired of WhatsApp API platforms hiding their margins behind buzzwords.
            So we built the alternative.
          </p>
        </div>
      </section>

      {/* Hero Image — B&W, full reading-width */}
      <section className="px-6 md:px-12 lg:px-16 mb-16">
        <div className="max-w-reading mx-auto">
          <div className="aspect-[16/10] bg-gray-800 rounded overflow-hidden relative">
            {/* Placeholder for B&W image of founders */}
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
            The SaaS industry has a transparency problem, and nowhere is it more glaring
            than in the communication API space. For years, Indian SMBs and developers
            have been forced to navigate a labyrinth of resellers, opaque pricing models,
            and inflated margins just to send a simple WhatsApp message to their customers.
          </p>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            When we set out to build Connecte, we didn't want to create just another tool
            with a shiny dashboard and a hidden markup. We wanted to build a utility—a
            raw, powerful, direct connection to the Meta API, wrapped in a developer-first
            ethos that respects both your time and your intelligence.
          </p>

          {/* Quote Block — green left border, DM Sans bold */}
          <blockquote className="border-l-[4px] border-primary pl-6 py-4 my-14">
            <p className="font-heading text-[20px] md:text-[22px] font-bold text-foreground leading-[1.4]">
              "We believe that infrastructure should be invisible, pricing
              should be transparent, and the relationship between a builder
              and their tools should be honest."
            </p>
          </blockquote>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            Most platforms treat you like a mark, upcharging you on every conversation started
            and every contact stored, while providing little additional value beyond what
            the underlying API already offers. They wrap basic functionality in complex
            pricing tiers designed to confuse rather than clarify.
          </p>

          {/* The 1.11x Promise */}
          <h2 className="font-heading text-[28px] md:text-[32px] font-bold text-foreground pt-10 tracking-[-0.03em]">
            The 1.11x Promise
          </h2>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            We took a different approach. We looked at the base cost of the Meta API and
            asked: "What is the absolute minimum margin required to run a sustainable,
            high-quality service?" The answer was a flat 1.11x markup. No hidden fees. No
            per-agent licenses. No bullshit.
          </p>

          <p className="text-[17px] font-body text-foreground leading-[1.7]">
            You pay what Meta charges, plus a fraction to keep our servers running and
            our engineers fed. In return, you get a clean, reliable, and incredibly fast
            interface to manage your WhatsApp Business communication.
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
              Read the public roadmap
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
