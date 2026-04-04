import React from 'react'

const ROADMAP_ITEMS = [
  {
    quarter: 'Q3 2024',
    title: 'Automated Webhooks',
    description: 'Direct integration capabilities for custom CRM workflows. Listen to incoming messages, status updates, and build your own logic without middleware.',
    active: true,
  },
  {
    quarter: 'Q4 2024',
    title: 'Advanced Template Management',
    description: 'Sync and manage Meta templates directly from the Connecte dashboard. Create, submit for approval, and track template quality metrics seamlessly.',
    active: false,
  },
  {
    quarter: 'Q1 2025',
    title: 'Multi-Agent Inbox',
    description: 'Shared inbox features for growing sales teams. Assign chats, leave internal notes, and manage high-volume customer support collaboratively.',
    active: false,
  },
  {
    quarter: 'Q2 2025',
    title: 'Native Analytics Pipeline',
    description: 'Export your WhatsApp engagement data directly to your data warehouse (Snowflake, BigQuery, Redshift) with zero-ETL pipelines.',
    active: false,
  },
]

const AboutPage: React.FC = () => {
  return (
    <main>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-page mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Mission Statement — sticky on scroll */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.04em] text-foreground mb-8">
              To make WhatsApp Business accessible to every Indian SMB.
            </h1>

            <p className="text-[16px] text-muted font-body leading-relaxed mb-8">
              No reseller fluff, no opaque margins. Just transparent pricing and powerful, engineer-built tools for builders and businesses.
            </p>

            {/* Green accent bar — exactly as shown in mockup */}
            <div className="w-14 h-1 bg-primary" />
          </div>

          {/* Right: Roadmap timeline */}
          <div>
            <h2 className="font-heading text-[24px] md:text-[28px] font-bold text-foreground mb-2 tracking-[-0.02em]">
              What we're building next.
            </h2>
            <p className="text-[14px] text-muted font-body mb-14">
              Our public roadmap. We ship fast and transparently.
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
