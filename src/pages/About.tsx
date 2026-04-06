import React from 'react'

const ROADMAP_ITEMS = [
  {
    quarter: 'Phase 1 / Beta',
    title: 'Platform Foundation',
    description: 'Currently in beta testing. Our primary goal is benchmarking platform stability and onboarding our first anchor users.',
    active: true,
  },
  {
    quarter: 'Phase 2 / Near Term',
    title: 'Meta Tech Provider Status',
    description: 'Securing rigorous approval as an official Meta Tech Provider to ensure unparalleled reliability and trust for businesses scaling on our infrastructure.',
    active: false,
  },
  {
    quarter: 'Phase 3 / Mid Term',
    title: 'Advanced Workflows & Analytics Pricing',
    description: 'As we add advanced tools that actively help you get more leads and conversions, our pricing will evolve. The base messaging will always stay at 11%, but we\'ll take a small commission on the extra value we generate for you. This helps us fund the infrastructure needed for those features.',
    active: false,
  },
  {
    quarter: 'Phase 4 / Long Term',
    title: 'E-commerce Deep Integration',
    description: 'Building native WhatsApp Marketplace integrations with platforms like Shopify. Ultimately aiming to qualify as a premier Meta Solution Partner.',
    active: false,
  },
]

const AboutPage: React.FC = () => {
  return (
    <main>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-page mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Mission Statement */}
          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.04em] text-foreground">
              WhatsApp Business shouldn't be complicated or expensive.
            </h1>
            
            <p className="text-[16px] text-muted font-body leading-relaxed">
              No setup fees, no massive margins. Just direct access to the API, straightforward tools, and pricing that actually makes sense for your business.
            </p>
            
            <div className="w-14 h-[3px] bg-primary" />
          </div>

          {/* Right: Roadmap timeline */}
          <div>
            <h2 className="font-heading text-[24px] md:text-[28px] font-bold text-foreground mb-2 tracking-[-0.02em]">
              What we're building next.
            </h2>
            <p className="text-[14px] text-muted font-body mb-14">
              Our vision for the future of Connecte.
            </p>

            {/* Timeline */}
            <div className="space-y-14 relative">
              {/* Vertical line */}
              <div className="absolute left-[6px] top-3 bottom-3 w-px bg-border" />

              {ROADMAP_ITEMS.map((item) => (
                <div key={item.quarter} className="relative pl-10">
                  {/* Dot — filled green if active, hollow otherwise */}
                  <div className={`absolute left-0 top-[6px] w-[13px] h-[13px] rounded-full border-[2px] ${
                    item.active
                      ? 'bg-primary border-primary'
                      : 'bg-white border-border'
                  }`} />

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-muted block mb-1">
                      {item.quarter}
                    </span>
                    <h3 className="font-heading text-[18px] font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-muted font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
