import React from 'react'

const SECTIONS = [
  {
    number: '01',
    title: 'INTRODUCTION',
    content: [
      'Connecte ("we", "our", "us") is a WhatsApp Business messaging platform that enables businesses to manage WhatsApp communications at scale. Our platform is built on Meta\'s WhatsApp Cloud API and Business Management API.',
      'This Privacy Policy explains what data we collect, how we use it, how we protect it, and your rights as a user of Connecte. By registering and using Connecte, you agree to the practices described in this policy.',
    ],
  },
  {
    number: '02',
    title: 'DATA WE COLLECT',
    content: [
      'When you use Connecte, we collect the following categories of information to ensure reliable service delivery and account security:',
    ],
    bullets: [
      { bold: 'Account data:', text: ' Business name and email address used during registration, along with hashed authentication credentials.' },
      { bold: 'WhatsApp integration data:', text: ' WABA ID, system access tokens (stored encrypted), phone number IDs, and profile information.' },
      { bold: 'Template data:', text: ' Message templates (content, variables, status) and Meta performance metrics (sent, delivered, read counts).' },
      { bold: 'Messaging data:', text: ' Message content, metadata, timestamps, and customer contact phone numbers. Media files are stored by Meta for 30 days.' },
      { bold: 'Analytics data:', text: ' Platform usage stats, API health status, and analytics used for dashboard reporting.' },
    ],
  },
  {
    number: '03',
    title: 'HOW WE USE YOUR DATA',
    content: [
      'We use your data primarily to provide the core messaging services via Meta\'s APIs and to route communications effectively through your Connecte dashboard.',
    ],
    bullets: [
      { bold: 'Productivity:', text: ' Displaying incoming and outgoing messages and analytics in your dashboard.' },
      { bold: 'Support:', text: ' Sending onboarding, product update, and support communications to your registered email.' },
      { bold: 'Optimization:', text: ' Improving platform performance, reliability, and feature sets based on usage patterns.' },
    ],
    emphasis: 'We do not sell your data, use your message content for advertising, or access your content except where strictly required for support with your consent.',
  },
  {
    number: '04',
    title: 'DATA STORAGE & PROTECTION',
    content: [
      'All data is stored on encrypted servers with access tokens encrypted at rest. Each business account is fully isolated—your data is never accessible to other customers.',
      'Note: Media files are stored by Meta on their infrastructure (ID-only reference). After 30 days, Meta may delete these files unless your plan includes extended storage.',
    ],
  },
  {
    number: '05',
    title: 'THIRD PARTIES',
    content: [
      'We share your data strictly with the following trusted third parties for core functionality:',
    ],
    callouts: [
      {
        title: 'META / WHATSAPP',
        text: 'Core requirement for WABA integration and messaging via the WhatsApp Cloud API.',
        highlighted: true,
      },
      {
        title: 'HUBSPOT',
        text: 'Used solely for onboarding, support communications, and product updates.',
        highlighted: false,
      },
    ],
  },
  {
    number: '06',
    title: "YOUR CUSTOMERS' DATA",
    content: [
      'You are the data controller for your customers\' info. Connecte acts as a data processor. You must obtain valid opt-in consent and comply with WhatsApp\'s Business Policy and local laws like India\'s DPDP Act 2023.',
    ],
  },
  {
    number: '07',
    title: 'DATA RETENTION',
    content: [
      'Account data is retained for the duration of your subscription and deleted within 30 days of closure. Message history is retained for 3 months by default (varies by plan).',
      'You may request deletion of your data at any time by contacting us: ghildiyalsarvesh@gmail.com.',
    ],
  },
  {
    number: '08',
    title: 'YOUR RIGHTS',
    content: [
      'As a user, you have the right to export your account data, request full deletion, update your info, or withdraw WhatsApp API access at any time via your Meta Business Portfolio.',
    ],
  },
  {
    number: '09',
    title: 'POLICY UPDATES',
    content: [
      'This policy will be updated as new features are added. You will be notified of any material changes via email at least 7 days before they take effect.',
    ],
  },
  {
    number: '10',
    title: 'CONTACT',
    content: [
      'For any privacy-related questions or requests, please reach out to us directly through the following channels:',
    ],
    contact: {
      email: 'ghildiyalsarvesh@gmail.com',
      location: 'INDIA | +91 7017348970',
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
            Effective date: March 2026
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
            <span>2026 / CNCT / v1</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPage
