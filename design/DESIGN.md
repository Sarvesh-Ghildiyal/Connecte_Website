# Design System Strategy: The Precision Ledger

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Precision Ledger."** 

In the world of high-volume WhatsApp communication, chaos is the default. This system rejects that chaos through the lens of high-end editorial design. We are moving away from the "app-like" feel of rounded bubbles and soft shadows. Instead, we are building a digital broadsheet: authoritative, airy, and uncompromisingly sharp. 

By utilizing "Capitol Lean" principles—massive typography, pure high contrast, and the surgical application of WhatsApp Green—we create an environment that feels less like a chat tool and more like a premium command center. We break the "template" look by using intentional asymmetry and radical whitespace, ensuring that every interaction feels like a deliberate editorial choice.

---

## 2. Colors
Our palette is rooted in the tension between `#1B1B1B` (On-Surface) and `#F9F9F9` (Surface), with `#25D366` (Primary-Container) acting as the high-energy pulse of the system.

*   **The "No-Line" Rule:** To maintain the premium editorial feel, 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a sidebar using `surface-container-low` should sit flush against a main content area using `surface`.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. Use the surface-container tiers to define importance without adding visual noise:
    *   **Level 0 (Base):** `surface` (#F9F9F9)
    *   **Level 1 (Sections):** `surface-container-low` (#F3F3F3)
    *   **Level 2 (Cards/Active Elements):** `surface-container-lowest` (#FFFFFF)
*   **The "Glass & Gradient" Rule:** To prevent the layout from feeling "flat," use `surface-container-lowest` with a 80% opacity and a 32px backdrop blur for floating navigation or hovering modals. For primary CTAs, apply a subtle linear gradient from `primary` (#006D2F) to `primary-container` (#25D366) at a 45-degree angle to add "soul" to the button.

---

## 3. Typography
Typography is our primary architectural element. We use **Inter** as a monolithic typeface to convey modern authority.

*   **Display Scales (`display-lg` 3.5rem):** Reserved for high-impact dashboard summaries (e.g., total message volume) or hero headers. It should feel "massive" and dominate the whitespace.
*   **Headline Scales (`headline-lg` 2rem):** Used for primary section titles. Use tight letter-spacing (-0.02em) to give it a "news-headline" density.
*   **Body & Labels:** `body-lg` (1rem) is your workhorse for message content. Use `label-md` (0.75rem) in ALL CAPS with +0.05em tracking for metadata like timestamps or status tags to create a rhythmic, structured feel.
*   **Hierarchy:** The contrast between a `display-lg` number and a `label-sm` caption creates the "Editorial" tension that defines this system.

---

## 4. Elevation & Depth
In a system with **0px roundedness**, depth must be handled with extreme sophistication to avoid a "Windows 95" aesthetic.

*   **The Layering Principle:** Avoid shadows where possible. Create "lift" by placing a `surface-container-lowest` (Pure White) object on top of a `surface-container-high` (#E8E8E8) background. The color shift provides all the affordance necessary.
*   **Ambient Shadows:** When a floating element (like a dropdown) requires separation, use a "Glow" rather than a shadow. 
    *   *Value:* `0px 20px 40px rgba(27, 27, 27, 0.04)`. 
    *   It should be almost invisible, felt rather than seen.
*   **The "Ghost Border" Fallback:** If a container must exist on a similar background, use the `outline-variant` (#BBCBB9) at **15% opacity**. This creates a "whisper" of a boundary that respects the "No-Line" rule.

---

## 5. Components

### Buttons
*   **Primary:** Background: `primary` (#006D2F); Text: `on-primary` (#FFFFFF); Corners: **0px**.
*   **Secondary:** Background: `secondary-container` (#E2E2E2); Text: `on-secondary-fixed` (#1B1B1B); Corners: **0px**.
*   **Interaction:** On hover, primary buttons should shift to `primary-container` (#25D366) with a black text (`on-primary-container`) transition.

### Input Fields
*   **Style:** No full boxes. Use a background-only approach using `surface-container-highest` (#E2E2E2) with a 2px bottom stroke of `primary` (#006D2F) only upon focus.
*   **Typography:** Input text uses `title-md`.

### Cards & Thread Lists
*   **Rule:** Forbid the use of divider lines. 
*   **Implementation:** Separate chat threads using vertical whitespace (`spacing.6` - 2rem). Use a `surface-container-low` background on hover to indicate selection.
*   **Status Indicators:** Use a 4px x 4px square (0px radius) of `primary-container` next to unread messages.

### Chips (Labels)
*   **Style:** Rectangular, `surface-container-highest` background, `label-sm` uppercase text. These should look like "tags" in a filing system, not "pills."

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme whitespace. If you think there is enough space, add 1.4rem (`spacing.4`) more.
*   **Do** align everything to a strict baseline grid. In a sharp-edged system, misalignment is glaring.
*   **Do** use `primary-container` (#25D366) sparingly. It is a "laser pointer," not a bucket of paint.
*   **Do** use "Pure Black" (`on-background`) for body text against "Off-White" (`surface`) to maximize the editorial high-contrast feel.

### Don't
*   **Don't ever use a border-radius.** Every corner in this system—from buttons to avatars to modals—must be `0px`.
*   **Don't use icons as the primary communicator.** If a text label in `label-md` fits, use the text.
*   **Don't use standard "WhatsApp Green" gradients.** Stick to the specific tokens provided; our green is a tool for utility, not a background theme.
*   **Don't use dividers.** Use the `spacing` scale to create "voids" that separate content blocks.