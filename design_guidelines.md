# Design Guidelines for Interactive Application Catalog

## Design Approach

**Selected Approach**: Hybrid - combining Material Design's visual feedback systems with custom card-based layouts inspired by modern SaaS dashboards (Linear, Notion).

**Design Principles**:
- Clean, spacious layouts with emphasis on application cards
- Smooth, purposeful animations that enhance navigation
- Professional enterprise aesthetic with modern touches
- Clear information hierarchy focused on app discovery

## Typography System

**Font Family**: 
- Primary: Inter or DM Sans via Google Fonts CDN
- Fallback: system-ui, -apple-system, sans-serif

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Titles: text-3xl md:text-4xl, font-bold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body Regular: text-base, font-normal
- Small Text: text-sm, font-medium

## Layout System

**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-16 md:py-24 lg:py-32
- Card Padding: p-6 md:p-8
- Grid Gaps: gap-6 md:gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8

**Grid Systems**:
- Homepage Hero: Single column, centered content
- Application List: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Features Section: grid-cols-1 md:grid-cols-3
- Application Detail: Two-column layout (lg:grid-cols-2) for content + preview

## Component Library

### Header Component
- Fixed navigation with blur backdrop (backdrop-blur-lg)
- Logo on left, navigation links center/right
- Mobile: Hamburger menu with slide-in drawer animation
- Height: h-16 md:h-20
- Sticky positioning with subtle shadow on scroll

### Footer Component
- Multi-column layout on desktop (grid-cols-1 md:grid-cols-4)
- Quick links, contact info, social media icons
- Padding: py-12 md:py-16
- Divider line above footer

### Application Card
- Rounded corners: rounded-2xl
- Padding: p-6 md:p-8
- Border: border with subtle border color
- Shadow: shadow-sm with hover:shadow-xl transition
- Structure: App icon/logo at top, title, description, URL badge, "Open App" CTA button
- Hover state: Lift effect with scale-105 transform

### Feature Card
- Centered icon at top (size: w-12 h-12 md:w-16 md:h-16)
- Title below icon
- Description text with max-w-prose
- Minimal padding: p-6 md:p-8
- No border, focus on icon and typography

### Login SSO Form
- Centered card: max-w-md mx-auto
- Card style: rounded-2xl, p-8 md:p-12
- Input fields: Rounded (rounded-lg), padding (px-4 py-3), focus states with ring
- CTA button: Full width, prominent
- Descriptive text above form explaining SSO benefits

### Buttons
- Primary CTA: px-6 py-3 md:px-8 md:py-4, rounded-xl, font-semibold
- Secondary: Similar sizing with border variant
- Icon buttons: Square aspect ratio, p-2 md:p-3
- Hover states: brightness/opacity changes, no background blur needed for regular buttons
- Buttons on hero images: backdrop-blur-md bg-white/10 border border-white/20

## Page-Specific Layouts

### Homepage
1. **Hero Section**: 
   - Height: min-h-screen with centered content
   - Large hero image as background (gradient overlay for text readability)
   - Headline + tagline + primary CTA
   - Scroll indicator at bottom

2. **Features Section**:
   - 3-column grid (desktop) showcasing Dashboard, Personalized Experience, Fast & Secure, Seamless Sync
   - Icons from Heroicons library
   - py-20 md:py-32 spacing

3. **Application Preview Section**:
   - Bento-grid style showcase of featured apps
   - Mix of card sizes for visual interest
   - 4-6 featured applications with screenshots

4. **CTA Section**:
   - Full-width with subtle background
   - "Get Started" or "Explore Applications" call-to-action

### Application List Page
- Page title and description at top
- Search/filter bar (optional enhancement)
- Grid of application cards (responsive: 1-2-3-4 columns)
- Each card links to detail page
- Pagination or infinite scroll for large catalogs

### Application Detail Page
- Two-column layout (desktop):
  - Left: App info, description, features list, access URL
  - Right: Screenshots/preview images, stacked vertically
- Mobile: Single column, stacked content
- Prominent "Open Application" CTA button at top
- Back navigation breadcrumb

### Login SSO Page
- Centered layout with max-w-md
- Descriptive header section
- Clean form with email/username input (minimal fields)
- Large "Sign In with SSO" button
- Footer text for help/support links

## Animation Strategy

**Core Animation Library**: Framer Motion

**Animation Patterns** (2-3 distinct styles):

1. **Fade + Slide Up** (Page Entry):
   - Elements fade in while sliding up 20-30px
   - Stagger children by 0.1s for sequential reveal
   - Duration: 0.5-0.7s, ease-out

2. **Scale + Lift** (Card Hover):
   - Gentle scale to 1.02-1.05
   - Elevate shadow from sm to xl
   - Duration: 0.2s, ease-out

3. **Page Transitions**:
   - Fade between routes (0.3s)
   - Optional: Slide direction based on navigation (forward/back)

**Applied Animations**:
- Hero section: Fade + slide up on mount
- Application cards: Stagger fade-in on scroll into view
- Card hover: Scale + shadow lift
- Page navigation: Crossfade transitions
- Header on scroll: Subtle background blur + shadow appear
- Buttons: Hover brightness/scale micro-interaction (0.15s)

**Performance**: Use `will-change`, `transform`, and `opacity` only. Avoid animating width/height/position.

## Images

**Hero Section**:
- Large background image (1920x1080 minimum)
- Subject: Abstract tech/digital workspace or collaborative team environment
- Treatment: Subtle gradient overlay (dark-to-transparent from bottom) for text legibility
- Placement: Full viewport background with background-size: cover

**Application Icons**:
- Size: 64x64px to 128x128px
- Format: PNG or SVG
- Style: Colorful, modern app icons
- Placement: Top of each application card

**Application Screenshots**:
- Size: 800x600px or 1200x900px
- Format: PNG or WebP
- Placement: Application detail page, preview section
- Treatment: Rounded corners (rounded-xl), subtle shadow

**Feature Icons**:
- Use Heroicons library via CDN
- Size: w-12 h-12 to w-16 h-16
- Style: Outline variant for consistency

## Accessibility Requirements

- Maintain WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text)
- All interactive elements: min 44x44px touch target
- Keyboard navigation: visible focus rings (ring-2 ring-offset-2)
- ARIA labels for icon-only buttons
- Semantic HTML: proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Form labels properly associated with inputs
- Skip to main content link

## Responsive Breakpoints

- Mobile: < 768px (base Tailwind)
- Tablet: 768px - 1024px (md:)
- Desktop: > 1024px (lg:, xl:)

**Mobile-Specific Adjustments**:
- Stack all grid layouts to single column
- Reduce padding/spacing by 30-50%
- Hamburger menu for navigation
- Full-width buttons
- Larger touch targets