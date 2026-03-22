# SSYA Website — Design Spec

## Context

Southern Suburbs Youth Academy (SSYA) is a Cape Town-based education academy that helps adults (18–65) complete their matric and supports current Grade 12 learners with tuition and exam prep. They operate from Glendale High School on Mondays, Thursdays, and Saturdays. The client needs a professional website that builds trust and drives student registrations. They currently have only a Facebook page and printed flyers.

## Overview

A single-page Next.js website using shadcn/ui components, deployed on Vercel. Bold and energetic visual direction (vibrant royal blue + golden yellow) with warm, supportive copy. Includes an enquiry form (Formspree) and WhatsApp click-to-chat.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: shadcn/ui + Tailwind CSS
- **Font**: Geist Sans (UI text) + Geist Mono (if needed for fees/numbers)
- **Form handling**: Formspree (free tier)
- **Hosting**: Vercel (free tier)
- **No database, no auth, no CMS** — all content is static

## Visual Direction

**Palette:**
- Primary: `#0a4da2` (royal blue)
- Primary dark: `#062a5c` (deep navy)
- Accent: `#f5b731` (golden yellow)
- Background light: `#f9f9f7` (warm off-white)
- Text dark: `#1c1c1c`
- Text muted: `#666666`

**Typography:**
- Geist Sans throughout
- Hero headline: 48–56px, weight 300 with key phrase at weight 900
- Section headings: 28–32px, weight 800, tight tracking
- Body: 15–16px, weight 400, color `#666`
- Labels/tags: 10–11px, uppercase, letter-spacing 2px, weight 700

**Spacing rhythm:**
- Section padding: 80px vertical
- Group gaps: 32–40px
- Element gaps: 12–16px

**Visual personality:** Vibrant and motivating with warm, supportive copy. Uses bold gold accents sparingly for emphasis. Dark blue hero sections alternate with light off-white content sections for visual rhythm.

## Page Sections (top to bottom)

### 1. Navigation (sticky)
- SSYA logo/wordmark (left)
- Section links: About, Programmes, Fees, Contact (right)
- Mobile: hamburger menu with sheet overlay
- Sticky on scroll with subtle backdrop blur

### 2. Hero
- Full-width dark blue gradient background
- Subtle angled gold accent shape (decorative)
- Tagline label: "Where Education Matters" (gold, uppercase, small)
- Headline: "It's Never Too Late to **Finish Your Matric**" (white, bold gold on key phrase)
- Subtitle: "Supportive. Affordable. Life-changing."
- Sub-detail: "Adults aged 18–65. Monday, Thursday & Saturday classes."
- Two CTAs: "Enquire Now" (gold button → scrolls to Contact section) + "Learn More" (outline button → scrolls to About section)

### 3. About / Who Can Apply
- Light background section
- Heading: "A Second Chance at Education"
- Brief paragraph about SSYA's mission
- Three eligibility items with checkmarks:
  - Adults who did not complete matric
  - Current Grade 12 learners needing extra support
  - Learners committed to improving their academic future
- Mention of COCT Bursary availability (gold highlight badge)

### 4. Programmes
- Heading: "Two Paths to Your Matric"
- Two cards side-by-side (stacked on mobile):
  - **Matric Tuition & Exam Prep**: gold left-border, details about extra lessons, small groups, assignment help
  - **Adult Matric Completion Programme**: blue left-border, details about Grade 12 certificate, flexible evening classes, qualified educators

### 5. Why Choose Us
- Dark blue background section (visual contrast)
- 4 feature items in a grid (2x2 on desktop, stacked on mobile):
  - Qualified Educators
  - Affordable Education
  - Structured Programmes
  - Confidence Building
- Each with a Lucide icon and short description:
  - Qualified Educators → `GraduationCap`
  - Affordable Education → `PiggyBank`
  - Structured Programmes → `CalendarCheck`
  - Confidence Building → `Heart`

### 6. Pricing
- Dark blue background (continues from Why Choose Us, or separate section)
- Heading: "Simple, Transparent Fees"
- Registration note: "R2,000 once-off (includes all textbooks & dept. registration)"
- Three pricing tiers in cards:
  - 1–2 Subjects: R350/month
  - 3–5 Subjects: R550/month (marked "Popular")
  - 6–7 Subjects: R700/month
- CTA button: "Enquire About Registration"

### 7. Class Schedule
- Light background
- Simple, clean display:
  - Monday & Thursday: Evening classes
  - Saturday: 08:30 – 14:30
- Location: Glendale High School, Southern Suburbs, Cape Town

### 8. Contact / Enquiry Form
- Split layout (side-by-side on desktop, stacked on mobile):
  - **Left**: Contact details
    - Phone: 083 561 5572
    - WhatsApp: 060 410 0509 (click-to-chat: `https://wa.me/27604100509`)
    - Email: southernsuburbsyouthacademy@gmail.com
    - Location: Glendale High School
  - **Right**: Enquiry form (Formspree)
    - Full Name
    - Phone Number
    - Email (optional)
    - Programme Interest (dropdown: Matric Tuition / Adult Completion)
    - Message (optional)
    - Submit button

### 9. Footer
- Simple, minimal
- SSYA name + "Where Education Matters"
- Quick links to sections
- Social: Facebook link
- Copyright line

## Components (shadcn/ui)

- `Button` — CTAs, form submit
- `Card` — programme cards, pricing cards
- `Input` / `Textarea` — form fields
- `Select` — programme interest dropdown
- `Sheet` — mobile navigation
- `Badge` — COCT Bursary badge, "Popular" pricing tag
- `Separator` — visual dividers if needed
- `NavigationMenu` — top nav (or custom sticky nav)

## SEO & Metadata

- **Title**: "SSYA — Southern Suburbs Youth Academy | Finish Your Matric"
- **Description**: "Complete your matric with SSYA. Affordable adult education in Cape Town's Southern Suburbs. Qualified educators, flexible classes. Ages 18–65."
- **OG Image**: Text-based generated OG image (can add custom later)
- **Favicon**: Simple "SSYA" text favicon

## Form Handling

- Formspree integration (free tier: 50 submissions/month)
- Env var: `NEXT_PUBLIC_FORMSPREE_ID` (developer creates form on formspree.io)
- Form `action` posts to `https://formspree.io/f/{FORMSPREE_ID}`
- Client-side validation for required fields (name, phone)
- Success state: show confirmation message inline
- Formspree delivers submissions to both client email addresses

## Mobile Considerations

- Mobile-first responsive design
- Hero text scales down (32px headline on mobile)
- Programme cards stack vertically
- Pricing cards stack vertically
- Navigation collapses to hamburger → Sheet overlay
- WhatsApp button prominent on mobile (sticky or in hero)
- Touch-friendly tap targets (min 44px)

## Performance

- Static page (no SSR needed beyond initial render)
- Geist font via `next/font` (zero layout shift)
- No images initially (can add later) — text-driven design
- Lighthouse target: 95+ on all metrics
- `output: 'export'` considered for pure static if no server features needed

## File Structure

```
ssya/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main single-page content
│   └── globals.css         # Tailwind + custom CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── nav.tsx             # Sticky navigation
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About / Who Can Apply
│   ├── programmes.tsx      # Two programme cards
│   ├── why-choose-us.tsx   # Feature grid
│   ├── pricing.tsx         # Pricing tiers
│   ├── schedule.tsx        # Class schedule
│   ├── contact.tsx         # Contact info + enquiry form
│   └── footer.tsx          # Footer
├── lib/
│   └── utils.ts            # cn() utility from shadcn
├── public/                 # Static assets (favicon, etc.)
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Verification

1. `npm run dev` — site runs locally on localhost:3000
2. All sections render correctly and are visually consistent with mockups
3. Navigation links scroll smoothly to correct sections
4. Mobile responsive: test at 375px, 768px, 1440px widths
5. Enquiry form submits successfully to Formspree
6. WhatsApp button opens wa.me link correctly
7. Lighthouse audit: 95+ performance, accessibility, best practices, SEO
8. `vercel deploy` succeeds and site is accessible on preview URL

## Out of Scope (for now)

- Logo/image assets (text-based branding for v1)
- Blog or news section
- Student portal or login
- Online payments
- CMS integration
- Multi-language support
