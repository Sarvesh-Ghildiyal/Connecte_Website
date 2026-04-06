import React, { useState, useMemo } from 'react'
import Button from '../components/Button'

/* ─── Pricing Calculator Logic (Current India Rates per Conversation) ─── */
const META_RATES = {
  marketing: 0.8631,
  utility: 0.115,
  authentication: 0.115,
}
const CONNECTE_MARKUP = 1.11

/* ─── FAQ Data ─── */
const FAQ_ITEMS = [
  {
    question: 'Do you charge per agent or user?',
    answer: 'No. We believe limiting seats is an outdated SaaS metric. Add your whole team, build complex routing, it costs the same. You only pay for the conversations you send.',
  },
  {
    question: 'How exactly does Meta pricing work?',
    answer: 'Meta charges per conversation, not per message. A conversation is a 24-hour window. Rates vary by category (utility, marketing, authentication) and country. We pass through the exact Meta cost and add our 11% markup. No surprises.',
  },
  {
    question: 'Are there any monthly minimums?',
    answer: 'No monthly minimums, no setup fees, no commitments. You pay only for the conversations you send. If you send zero conversations, you pay zero.',
  },
  {
    question: 'What happens if I send a lot of conversations?',
    answer: 'The more you send, the better it gets. Meta offers volume discounts on certain conversation categories, and we pass those savings directly to you. Our 11% markup stays flat regardless of volume.',
  },
]

const PricingPage: React.FC = () => {
  const [category, setCategory] = useState<keyof typeof META_RATES>('marketing')
  const [convCount, setConvCount] = useState(50000)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const min = 1000
  const max = 100000

  const costs = useMemo(() => {
    const metaCost = Math.round(convCount * META_RATES[category])
    const connecteMarkup = Math.round(metaCost * (CONNECTE_MARKUP - 1))
    const total = metaCost + connecteMarkup
    return { metaCost, connecteMarkup, total }
  }, [convCount, category])

  const formatNum = (n: number) => n.toLocaleString('en-IN')

  // Calculate percentage for the slider background
  const percent = ((convCount - min) / (max - min)) * 100

  return (
    <main>
      {/* Hero + Calculator — split layout matching mockup exactly */}
      <section className="py-12 md:py-20 lg:py-24 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-page mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
          {/* Left: Philosophy */}
          <div>
            <h1 className="font-heading text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.04em] text-foreground mb-8" style={{ fontStyle: 'italic' }}>
              Pay for what you send. That's it.
            </h1>

            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-4">
              Meta charges ₹X. We charge ₹X * 1.11. No hidden software fees.
            </p>

            <p className="text-[15px] text-muted font-body leading-relaxed mb-10">
              Most WhatsApp API providers hide their margins in complex tier structures, per-agent pricing, and opaque "platform fees". We think that's garbage. You pay the direct Meta cost for the message, plus a flat 11% markup for our infrastructure.
            </p>

            {/* Checkmarks — separated by a top border per mockup */}
            <div className="border-t border-border pt-8 space-y-5">
              {['Zero Setup Fees', 'Unlimited Agents', 'Full API Access'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="11" fill="#25D366" />
                    <path d="M7 11L10 14L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[15px] font-body text-foreground font-medium">{item}</span>
                </div>
              ))}

              <div className="pt-4">
                <a
                  href="/docs/Pricing-Explainer.pdf"
                  download
                  className="inline-flex items-center gap-2.5 text-[14px] font-body font-bold text-foreground hover:text-primary transition-colors group px-4 py-2 border border-border rounded hover:border-primary/30 hover:bg-surface"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download META Pricing Explainer (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Calculator card — surface bg, matches mockup */}
          <div className="bg-surface rounded p-8 lg:p-10 space-y-6">
            <div>
              <div className="flex flex-col gap-3 mb-8">
                <span className="text-[11px] font-body uppercase tracking-[0.1em] text-muted font-medium">Conversation Category</span>
                <div className="flex gap-2 p-1 bg-white border border-border rounded-lg">
                  {(['marketing', 'utility', 'authentication'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`flex-1 py-2 px-3 text-[13px] font-body font-semibold rounded-md transition-all ${
                        category === cat
                          ? 'bg-foreground text-white shadow-sm'
                          : 'text-muted hover:text-foreground'
                      }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <h2 className="font-heading text-lg font-bold text-foreground mb-1">
                Estimate your monthly cost
              </h2>
              <p className="text-[13px] text-muted font-body">
                Based on current {category} conversation rates in India.
              </p>
            </div>

            {/* Slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-body uppercase tracking-[0.1em] text-muted font-medium">Conversations per month</span>
                <span className="font-heading text-[32px] font-bold text-foreground leading-none tabular-nums min-w-[120px] text-right">
                  {formatNum(convCount)}
                </span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step="1000"
                value={convCount}
                onChange={(e) => setConvCount(Number(e.target.value))}
                className="w-full"
                aria-label="Conversations per month"
                style={{
                  background: `linear-gradient(to right, #121212 0%, #121212 ${percent}%, #E4E4E7 ${percent}%, #E4E4E7 100%)`
                }}
              />
              <div className="flex justify-between mt-2">
                <span className="text-[12px] text-muted font-body font-medium">1k</span>
                <span className="text-[12px] text-muted font-body font-medium">100k+</span>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-body text-muted">Meta conversation cost (est.)</span>
                <span className="text-[15px] font-body font-medium text-foreground tabular-nums">₹{formatNum(costs.metaCost)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-body text-primary font-semibold">Connecte Markup (11%)</span>
                <span className="text-[15px] font-body text-primary font-semibold tabular-nums">+ ₹{formatNum(costs.connecteMarkup)}</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-border/50 pt-6 flex items-end justify-between">
              <span className="text-[15px] font-body font-bold text-foreground">Total Estimated Cost</span>
              <div className="text-right">
                <span className="font-heading text-[40px] md:text-[48px] font-bold text-foreground leading-none tabular-nums">
                  ₹{formatNum(costs.total)}
                </span>
                <span className="text-[13px] text-muted font-body ml-1">/ month</span>
              </div>
            </div>

            <Button variant="primary" size="full">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-foreground text-center mb-14 tracking-[-0.03em]">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-border">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="py-6">
                <button
                  className="w-full flex items-center justify-between text-left cursor-pointer bg-transparent border-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-heading text-[15px] font-bold text-foreground pr-4">
                    {item.question}
                  </span>
                  <span className="text-xl text-muted flex-shrink-0 font-light">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${openFaq === index ? 'open' : ''}`}>
                  <div>
                    <p className="text-[14px] text-muted font-body leading-relaxed mt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PricingPage
