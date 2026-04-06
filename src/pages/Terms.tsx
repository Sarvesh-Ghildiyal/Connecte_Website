import React from 'react'

const SECTIONS = [
  {
    number: '01',
    title: 'AGREEMENT TO TERMS',
    content: [
      'By registering for and using Connecte, you agree to be bound by these Terms of Service and the WhatsApp Business Policy. Connecte is a software platform that integrates with Meta\'s WhatsApp Cloud API to provide messaging services.',
      'If you do not agree to these terms, you must not access or use our services. These terms apply to all visitors, users, and others who access the service.',
    ],
  },
  {
    number: '02',
    title: 'WHATSAPP CLOUD API INTEGRATION',
    content: [
      'Connecte operates as a platform layer on top of Meta\'s WhatsApp infrastructure. By using our service, you acknowledge:',
    ],
    bullets: [
      { bold: 'Direct Meta Relationship:', text: ' You must maintain a valid WhatsApp Business Account (WABA) in good standing with Meta.' },
      { bold: 'Platform Dependency:', text: ' Connecte is not responsible for service interruptions, delivery failures, or downtime caused by Meta\'s API infrastructure.' },
      { bold: 'Policy Compliance:', text: ' You must adhere to WhatsApp\'s Business and Commerce Policies at all times. Violations may result in account suspension by Meta or Connecte.' },
    ],
  },
  {
    number: '03',
    title: 'PRICING & BILLING',
    content: [
      'Our pricing model is designed for maximum transparency. You pay Meta\'s official conversation rates plus a fixed platform fee.',
    ],
    bullets: [
      { bold: 'Platform Markup:', text: ' We charge a flat 11% markup (1.11x multiplier) on all official Meta API conversation charges.' },
      { bold: 'No Hidden Fees:', text: ' Unless specified in a dedicated enterprise plan, we do not charge per-agent fees or monthly "dashboard" subscriptions.' },
      { bold: 'Billing Cycles:', text: ' Billing is handled as per your selected payment method and plan details provided in your dashboard.' },
    ],
  },
  {
    number: '04',
    title: 'USER RESPONSIBILITIES (OPT-IN)',
    content: [
      'As a sender of WhatsApp messages, you are the Data Controller for your customer information. You are legally responsible for:',
    ],
    bullets: [
      { bold: 'Valid Opt-ins:', text: ' Obtaining explicit consent from customers before messaging them via WhatsApp.' },
      { bold: 'Opt-out Management:', text: ' Immediately honoring customer requests to stop receiving messages.' },
      { bold: 'Legal Compliance:', text: ' Adhering to India\'s Digital Personal Data Protection (DPDP) Act 2023 and other applicable data laws.' },
    ],
  },
  {
    number: '05',
    title: 'DATA PROCESSING ROLES',
    content: [
      'To provide the service, we act as a Data Processor on your behalf. You (the User) remain the Data Controller for your customers\' personal data.',
      'We process message content and metadata strictly to facilitate transmission and provide dashboard analytics as described in our Privacy Policy.',
    ],
  },
  {
    number: '06',
    title: 'PROHIBITED CONDUCT',
    content: [
      'Connecte maintains a zero-tolerance policy for abuse. You agree not to use the service for:',
    ],
    bullets: [
      { bold: 'Spamming:', text: ' Sending unsolicited messages to users who have not opted in.' },
      { bold: 'Illegal Content:', text: ' Transmitting content that is fraudulent, defamatory, or violates intellectual property rights.' },
      { bold: 'Misrepresentation:', text: ' Impersonating other businesses or providing false information during Meta verification.' },
    ],
  },
  {
    number: '07',
    title: 'MEDIA RETENTION',
    content: [
      'By default, Meta retains media files for 30 days via their Cloud API. Connecte is not responsible for the loss of media files after this 30-day window unless you are on a plan that specifically includes extended media storage on Connecte\'s infrastructure.',
    ],
  },
  {
    number: '08',
    title: 'LIMITATION OF LIABILITY',
    content: [
      'Connecte and its officers shall not be liable for any indirect, incidental, special, or consequential damages resulting from:',
      '1. Your use or inability to use the WhatsApp Business API. 2. Actions taken by Meta to suspend or ban your WhatsApp Business Account. 3. Unauthorized access to your account due to weak authentication practices on your part.',
    ],
  },
  {
    number: '09',
    title: 'TERMINATION',
    content: [
      'You may terminate your account at any time via the dashboard or by emailing ghildiyalsarvesh@gmail.com. Upon termination, we will delete your account data and API access tokens within 30 days.',
      'We reserve the right to suspend accounts found in violation of these terms or Meta\'s policies.',
    ],
  },
  {
    number: '10',
    title: 'CONTACT',
    content: [
      'For any legal inquiries regarding these Terms of Service, please contact our legal team:',
    ],
    contact: {
      email: 'ghildiyalsarvesh@gmail.com',
      location: 'CONNECTE | INDIA',
    },
  },
]

const TermsPage: React.FC = () => {
  return (
    <main>
      {/* Header — matching Privacy style */}
      <section className="pt-16 md:pt-24 pb-10 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-[500px]">
          <div className="w-8 h-[3px] bg-primary mb-8" />
          <h1 className="font-heading text-[48px] sm:text-[60px] md:text-[72px] font-bold leading-[0.95] tracking-[-0.04em] text-foreground uppercase">
            Terms <br />of Service
          </h1>
          <p className="text-[11px] font-body uppercase tracking-[0.15em] text-muted mt-6">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-[500px] space-y-16">
          {SECTIONS.map((section) => (
            <div key={section.number}>
              <h2 className="text-[11px] font-body uppercase tracking-[0.15em] text-primary font-bold mb-6">
                {section.number} . {section.title}
              </h2>

              <div className="space-y-5">
                {section.content.map((para, i) => (
                  <p key={i} className="text-[15px] font-body text-foreground leading-[1.7]">
                    {para}
                  </p>
                ))}
              </div>

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

export default TermsPage
