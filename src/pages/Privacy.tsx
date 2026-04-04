import React from 'react'

const SECTIONS = [
  {
    number: '01',
    title: 'INTRODUCTION',
    content: [
      'At Connecte, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website, mobile application, and other online services or when you otherwise interact with us.',
      'By using our services, you consent to the collection and use of information as described in this policy. We prioritize transparency and security in all our data handling processes.',
    ],
  },
  {
    number: '02',
    title: 'INFORMATION WE COLLECT',
    content: [
      'We collect information you provide directly to us. For example, we collect information when you create an account, subscribe to our newsletter, or communicate with us.',
    ],
    bullets: [
      { bold: 'Account Information:', text: ' Name, email address, phone number, and password.' },
      { bold: 'Payment Information:', text: ' We use third-party payment processors to process payments made through the services. We do not store your credit card information.' },
      { bold: 'Usage Information:', text: ' Details of your interactions with our platform, including message metadata and frequency.' },
    ],
  },
  {
    number: '03',
    title: 'USE OF INFORMATION',
    content: [
      'We use the information we collect to provide, maintain, and improve our services, including to:',
    ],
    callouts: [
      {
        title: 'PRIMARY PURPOSE',
        text: 'To provide the Connecte platform functionality and personalize your user experience.',
        highlighted: false,
      },
      {
        title: 'COMMUNICATION',
        text: 'Send you technical notices, updates, security alerts, and support messages.',
        highlighted: true,
      },
    ],
  },
  {
    number: '04',
    title: 'SHARING OF INFORMATION',
    content: [
      'We may share information about you as follows or as otherwise described in this Privacy Policy:',
      'With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf; in response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.',
    ],
    emphasis: 'Connecte does not sell your personal data to third-party advertisers or data brokers for their own marketing purposes.',
  },
  {
    number: '05',
    title: 'DATA SECURITY',
    content: [
      'We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. Our infrastructure is designed with "Security-First" principles, utilizing industry-standard encryption protocols.',
    ],
  },
  {
    number: '06',
    title: 'CONTACT US',
    content: [
      'If you have any questions about this Privacy Policy, please contact us at:',
    ],
    contact: {
      email: 'privacy@connecte.in',
      location: 'BANGALORE, INDIA',
    },
  },
]

const PrivacyPage: React.FC = () => {
  return (
    <main>
      {/* Header — matches privacy mockup: green accent bar, massive uppercase heading */}
      <section className="pt-16 md:pt-24 pb-10 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-[500px]">
          {/* Green accent bar */}
          <div className="w-8 h-[3px] bg-primary mb-8" />
          <h1 className="font-heading text-[48px] sm:text-[60px] md:text-[72px] font-bold leading-[0.95] tracking-[-0.04em] text-foreground uppercase">
            Privacy<br />Policy
          </h1>
          <p className="text-[11px] font-body uppercase tracking-[0.15em] text-muted mt-6">
            Effective date: June 1, 2024
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-[500px] space-y-16">
          {SECTIONS.map((section) => (
            <div key={section.number}>
              {/* Section heading — numbered, uppercase, green, spaced */}
              <h2 className="text-[11px] font-body uppercase tracking-[0.15em] text-primary font-bold mb-6">
                {section.number} . {section.title}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-5">
                {section.content.map((para, i) => (
                  <p key={i} className="text-[15px] font-body text-foreground leading-[1.7]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Bullet points with "/" prefix — matching mockup */}
              {section.bullets && (
                <div className="mt-6 space-y-4">
                  {section.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-primary font-bold text-sm mt-0.5 flex-shrink-0">/</span>
                      <p className="text-[14px] font-body text-foreground leading-[1.6]">
                        <strong>{bullet.bold}</strong>{bullet.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Callout blocks */}
              {section.callouts && (
                <div className="mt-8 space-y-0">
                  {section.callouts.map((callout, i) => (
                    <div
                      key={i}
                      className={`p-6 ${
                        callout.highlighted
                          ? 'bg-surface border-l-[3px] border-primary'
                          : 'bg-surface'
                      }`}
                    >
                      <h3 className="text-[11px] font-body uppercase tracking-[0.1em] font-bold text-foreground mb-2">
                        {callout.title}
                      </h3>
                      <p className="text-[14px] font-body text-muted leading-relaxed">
                        {callout.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Emphasis / italic block */}
              {section.emphasis && (
                <div className="mt-8 p-6 bg-surface border-l-[3px] border-primary">
                  <p className="text-[14px] font-body text-foreground italic leading-[1.6]">
                    {section.emphasis}
                  </p>
                </div>
              )}

              {/* Contact info */}
              {section.contact && (
                <div className="mt-8">
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-[18px] font-heading font-bold text-foreground underline underline-offset-4 decoration-1 hover:text-primary transition-colors"
                  >
                    {section.contact.email}
                  </a>
                  <p className="text-[11px] font-body uppercase tracking-[0.1em] text-muted mt-2">
                    {section.contact.location}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* End of document marker */}
          <div className="border-t border-border pt-6 flex justify-between text-[10px] text-muted font-body uppercase tracking-[0.15em]">
            <span>End of document</span>
            <span>2024 / CNCT / v1</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPage
