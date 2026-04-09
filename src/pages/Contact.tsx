import React, { useState } from 'react'
import Button from '../components/Button'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      })
      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        // Intentionally not resetting 'submitted' back to false so the button stays green
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[520px] mx-auto">
          {/* Heading — centered, large */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-[-0.04em] text-foreground mb-5">
              Talk to the people building it.
            </h1>
            <p className="text-[16px] text-muted font-body leading-relaxed">
              No support tickets. No runarounds. Reach out directly to the founders for technical help, sales, or just to chat about WhatsApp API.
            </p>
          </div>

          {/* Contact Cards — per mockup: 2 cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {/* Email Card */}
            <a
              href="mailto:founders@connecte.in"
              className="flex flex-col items-center justify-center p-6 bg-surface rounded text-center no-underline hover:bg-surface-dark transition-colors group"
            >
              <svg className="mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="1" stroke="#71717A" strokeWidth="1.5" />
                <path d="M2 7L12 13L22 7" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="text-[13px] text-muted font-body mb-1">Email Us</p>
              <p className="text-[15px] font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                founders@connecte.in
              </p>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/916396597003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-surface rounded text-center no-underline hover:bg-surface-dark transition-colors group"
            >
              <svg className="mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="#25D366" strokeWidth="1.5" />
              </svg>
              <p className="text-[13px] text-muted font-body mb-1">Direct Message</p>
              <p className="text-[15px] font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                +91 6396 597 003
              </p>
            </a>
          </div>

          {/* "OR SEND A MESSAGE" divider — capitalized with lines */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] font-body uppercase tracking-[0.15em] text-muted font-medium">Or send a message</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-[13px] font-body font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Satoshi Nakamoto"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={submitted}
                className="w-full px-4 py-3 bg-surface border border-transparent rounded text-[15px] font-body text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[13px] font-body font-medium text-foreground mb-2">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="satoshi@bitcoin.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={submitted}
                className="w-full px-4 py-3 bg-surface border border-transparent rounded text-[15px] font-body text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[13px] font-body font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="How can we help you build?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                disabled={submitted}
                className="w-full px-4 py-3 bg-surface border border-transparent rounded text-[15px] font-body text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors resize-none disabled:opacity-50"
              />
            </div>

            <Button 
              type="submit" 
              variant={submitted ? "primary" : "dark"} 
              size="full" 
              arrow={!submitted}
              disabled={isSubmitting || submitted}
              className={submitted ? "pointer-events-none" : ""}
            >
              {submitted ? 'Message Sent ✓' : isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
