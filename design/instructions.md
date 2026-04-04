web application/stitch/projects/14902510795072018238/screens/74581812f90c485a93ceec22afbc673a
# Connecte - Capitol Lean

## Product Overview

**The Pitch:** Connecte is an honest, engineer-built WhatsApp Business SaaS platform for Indian SMBs. We strip away reseller fluff and opaque pricing, offering a powerful, transparent, and direct-to-builder tool for businesses tired of corporate runarounds.

**For:** Indian SMB owners and technical operators who value transparent pricing and direct relationships over marketing buzzwords. 

**Device:** desktop

**Design Direction:** Bright, airy, premium editorial SaaS. Massive typography, stark contrast, and generous whitespace to convey absolute confidence and engineering craft.

**Inspired by:** Linear, Vercel, Stripe (editorial layouts)

---

## Screens

- **Home:** Establishes credibility instantly with dynamic messaging, demo video, and Meta integration badge.
- **Pricing:** Stark, no-nonsense breakdown of transparent Meta pricing plus our flat 1.11x markup.
- **Why Connecte:** The builder's manifesto explaining the problem with current market leaders and our solution.
- **About:** Mission statement, anti-reseller stance, and public roadmap.
- **Contact:** Direct lines to the founders, emphasizing fast, builder-led support.

---

## Key Flows

**Audience Segmentation:** Dynamic value proposition adjustment

1. User is on **Home** -> sees an inline toggle: "I am: `Exploring WhatsApp` / `Switching providers`"
2. User clicks `Switching providers` -> Hero copy updates from "Start talking to your customers on WhatsApp" to "Stop overpaying for WhatsApp messaging. Switch to transparent pricing."
3. CTA updates to "Compare Pricing" leading to the Pricing page.

---

<details>
<summary>Design System</summary>

## Color Palette

- **Primary:** `#25D366` - Main CTAs, active states (WhatsApp Green)
- **Background:** `#FFFFFF` - Page background, pure white for airy feel
- **Surface:** `#F4F4F5` - Subtle cards, secondary sections
- **Text:** `#121212` - Headings, high-contrast primary text
- **Muted:** `#71717A` - Secondary text, borders, subtle dividers
- **Accent:** `#000000` - Dark mode buttons, secondary CTAs

## Typography

Distinctive, massive typography to anchor the editorial feel.

- **Headings:** `DM Sans`, 700, 48-72px, -0.04em tracking
- **Subheadings:** `DM Sans`, 500, 24px, -0.02em tracking
- **Body:** `Inter`, 400, 16px, 1.5 line-height
- **Small text:** `Inter`, 400, 14px
- **Buttons:** `DM Sans`, 600, 15px

**Style notes:** Minimal borders (`1px solid #E4E4E7`), no drop shadows, sharp corners (`4px` radius) or fully pill-shaped (`999px`) buttons. Visual hierarchy relies purely on typography size and whitespace, not boxes.

## Design Tokens

```css
:root {
  --color-primary: #25D366;
  --color-background: #FFFFFF;
  --color-surface: #F4F4F5;
  --color-text: #121212;
  --color-muted: #71717A;
  --color-accent: #000000;
  --font-heading: 'DM Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius-sm: 4px;
  --radius-pill: 999px;
  --spacing-md: 24px;
  --spacing-xl: 64px;
  --spacing-xxl: 120px;
}
```

</details>

---

<details>
<summary>Screen Specifications</summary>

### Home Page

**Purpose:** Convert visitors through extreme credibility and clear value props.

**Layout:** Massive centered hero, inline segmentation toggle, full-width video embed, 3-column benefits grid, Meta badge in footer.

**Key Elements:**
- **Navigation:** Logo left, links center, `Book Demo` (`#000000` background) right.
- **Audience Toggle:** Pill-shaped toggle, `40px` height. `Exploring WhatsApp` vs `Switching providers`.
- **Dynamic Hero:** `72px` `DM Sans`. "WhatsApp Business, engineered for transparency."
- **Primary CTA:** `Background #25D366`, `Text #FFFFFF`. "Get Started Free".
- **Video Embed:** `1024px` width, `16:9` aspect ratio, `1px solid #E4E4E7` border, `4px` radius. Play button overlay.
- **Benefits Grid:** 3 columns. `24px` headings. "No Markup BS", "Built by Devs", "Meta Verified".

**States:**
- **Loading:** Skeleton pulse on video embed.

**Components:**
- **Meta Badge:** `120px` width, grayscale until hover, links to Meta partner directory.

**Interactions:**
- **Toggle Click:** Instantly swaps Hero `h1` and `p` text via crossfade animation (`200ms ease-in-out`).

**Responsive:**
- **Desktop:** `1200px` max-width container, 3-column grid.
- **Tablet:** 2-column grid.
- **Mobile:** `48px` headings, stacked columns.

### Pricing Page

**Purpose:** Explain the transparent Meta pricing + 1.11x markup model.

**Layout:** Split layout. Left: Philosophy. Right: Calculator/Tiers.

**Key Elements:**
- **Header:** `64px`. "Pay for what you send. That's it."
- **Markup Explanation:** `24px` text. "Meta charges ₹X. We charge ₹X * 1.11. No hidden software fees."
- **Pricing Calculator:** Interactive slider. Select messages per month -> see exact Meta cost + Connecte cost.
- **FAQ:** Accordion list. Clear, blunt answers. "Do you charge per agent? No."

**Interactions:**
- **Slider Drag:** Instantly updates large price numbers in `DM Sans`.

### Why Connecte / Our Story

**Purpose:** Sell the builder-to-business relationship.

**Layout:** Single-column editorial article layout. `680px` max-width for optimal reading.

**Key Elements:**
- **Hero Image:** High-quality black-and-white photo of the founders/code.
- **Article Body:** `18px` `Inter`, `1.6` line-height. "We got tired of WhatsApp API platforms hiding their margins..."
- **Quote Block:** `24px` `DM Sans`, left border `4px solid #25D366`.

### About Page

**Purpose:** Trust building and future roadmap.

**Layout:** 2-column asymmetric grid.

**Key Elements:**
- **Mission:** Left column, sticky positioning. "To make WhatsApp Business accessible to every Indian SMB."
- **Roadmap:** Right column. Timeline list with `12px` monospaced dates. "Q3 2024: Automated Webhooks".

### Contact Page

**Purpose:** Direct line to founders.

**Layout:** Minimal, centered form.

**Key Elements:**
- **Heading:** "Talk to the people building it."
- **Contact Info:** Email (`founders@connecte.in`), WhatsApp number with `#25D366` icon.
- **Form:** Name, Email, Message. `1px solid #E4E4E7` inputs, focus state `border #121212`.
- **Submit Button:** `Width 100%`, `#000000` background.

**Footer (All Pages):**
- **Links:** Clean horizontal list. Includes `connecte.in/privacy`.
- **Text:** `14px`, `#71717A`.

</details>

---

<details>
<summary>Build Guide</summary>

**Stack:** HTML + Tailwind CSS v3

**Build Order:**
1. **Home** - Establishes the massive typography, dynamic segment toggle, and the critical `WhatsApp Green` accents.
2. **Pricing** - Establishes interactive components (slider) and precise grid layouts for numbers.
3. **Why Connecte** - Defines the long-form reading typography and editorial layouts.
4. **About / Contact** - Reuses components from previous screens to complete the site.

</details>