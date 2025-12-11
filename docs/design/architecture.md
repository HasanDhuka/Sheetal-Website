# Premium Blueprint Architecture

## Overview

This document defines the complete design system, UX strategy, and technical architecture for the premium branded experience. It serves as the single source of truth for all design decisions, component specifications, and implementation guidance.

---

## 1. Sitemap & Information Architecture

### Primary Navigation Structure

```
Root (Home)
├── Home / Landing Page
│   ├── Hero Section
│   ├── Signature Products Showcase
│   ├── 3D Interactive Carousel
│   ├── Feature Gallery
│   ├── About / Story
│   ├── Testimonials / Social Proof
│   ├── Call-to-Action / Contact
│   └── Footer Navigation
├── Products Page
│   ├── Product Grid / Listing
│   ├── Product Details (Dynamic)
│   └── Product 3D Model Viewer
├── About Page
│   ├── Company Story
│   ├── Team / Leadership
│   ├── Values & Mission
│   └── Timeline / History
├── Gallery / Portfolio
│   ├── Curated Collections
│   ├── Lightbox / Detail View
│   └── Filter & Search
├── Testimonials / Case Studies
│   ├── Featured Stories
│   ├── Client Quotes
│   └── Results & Metrics
├── Contact & Booking
│   ├── Contact Form
│   ├── Booking Calendar
│   ├── Service Inquiry
│   └── Appointment Scheduling
├── Resources (Optional)
│   ├── Blog / Articles
│   ├── Documentation
│   └── FAQ
└── Footer
    ├── Legal / Privacy
    ├── Terms of Service
    └── Social Links
```

### User Journey Map

**Primary User Flows:**
1. **Discovery**: Landing → Hero → Products/3D Carousel → CTA
2. **Exploration**: Products → Gallery → Testimonials → Contact
3. **Conversion**: Hero CTA → About → Testimonials → Booking
4. **Deep Dive**: About → Gallery → Case Studies → Contact

---

## 2. Page Hierarchy & Section Layouts

### 2.1 Home / Landing Page

#### Section Hierarchy
1. **Header / Navigation** (Fixed, Sticky)
2. **Hero Section** (Full-viewport, immersive)
3. **Signature Products Showcase** (Featured, highlighted)
4. **3D Interactive Carousel** (Centerpiece interaction)
5. **Feature Gallery** (Visual showcase)
6. **About / Value Proposition** (Story & differentiation)
7. **Testimonials / Social Proof** (Trust builders)
8. **CTA Section** (Contact / Booking)
9. **Footer**

#### Desktop Layout (1440px+)

**Hero Section:**
- Full viewport height (100vh)
- Split layout: Image/3D model (60% right) + Content (40% left)
- Content alignment: Left-aligned, vertically centered
- Typography: Large headline (4rem-5rem), supporting body (1.125rem)
- CTA buttons: Two primary buttons, side-by-side
- Background: Animated gradient or premium image

**Signature Products Showcase:**
- 4-column grid layout
- Each product card: 300x400px minimum
- 2x2 grid with 40px gutters
- Hover states: Scale, shadow enhancement, reveal additional details
- Centered section padding: 120px vertical, 80px horizontal

**3D Interactive Carousel:**
- Full-width container (1200px max-width, centered)
- 3D model viewer center (70% width)
- Navigation controls: Minimal, integrated
- Info panel on right: Product details, specs
- Height: 600px
- Interactive: Drag-to-rotate on desktop, swipe on mobile

**Feature Gallery:**
- 3-column masonry layout
- Variable image sizes (some span 2x1, 1x2)
- Lightweight hover effects: Brightness shift, minimal overlay
- Padding: 80px vertical, 80px horizontal
- Image aspect ratios: Mixed (some landscape, some portrait)

**About Section:**
- Two-column layout: Text (left, 45%) + Visual (right, 55%)
- Text: Large body copy (1.125rem), semantic hierarchy (h2, h3, p)
- Visual: High-quality image or subtle background graphic
- Padding: 100px vertical, 80px horizontal

**Testimonials Section:**
- 3-column grid of quote cards
- Card dimensions: 350x300px
- Centered section, 80px padding
- Avatar: 60x60px circles, floating above cards
- Quote styling: Serif font, italicized

**CTA Section:**
- Full-width, high-contrast background
- Center-aligned content
- Large headline (3rem), supporting text (1.125rem)
- Two CTA buttons
- Padding: 120px vertical

#### Tablet Layout (768px - 1440px)

**Adaptations:**
- Hero: Stack content and image vertically (content 60%, image 40%)
- Products: 2x2 grid maintained, increased card width
- Carousel: Interactive controls more prominent, smaller model
- Gallery: 2-column layout, adjusted card sizes
- About: Stack vertically, 100% width sections
- Testimonials: 2-column grid
- CTA: Single button with fallback link

#### Mobile Layout (< 768px)

**Adaptations:**
- Hero: Full stack, content 100%, image full-width
- Products: Single column, full-width cards (minimum 280px)
- Carousel: Simplified, touch-optimized controls
- Gallery: Single column, adjusted for portrait
- About: Single column, full-width
- Testimonials: Single column, horizontal scroll option
- CTA: Single button, full-width
- Typography: Scaled down (h1: 2rem, body: 1rem)
- Padding: Reduced to 40px vertical, 20px horizontal
- Touch targets: Minimum 48x48px

### 2.2 Product Detail Page

- Hero with large product image (or 3D model)
- Product specifications grid
- Technical details in collapsible sections
- Related products carousel at bottom
- CTA: Add to cart, Schedule consultation

### 2.3 Gallery / Portfolio Page

- Filter bar (category, collection, style)
- Justified grid or masonry layout
- Lightbox modal for full-size images
- Image metadata (title, description, date)
- Related collections

### 2.4 About Page

- Timeline or narrative sections
- Team member cards
- Mission statement section
- Company values grid
- Press / Awards section

### 2.5 Contact & Booking Page

- Two-column layout: Form (left) + Information/Map (right)
- Contact form with validation
- Booking calendar integration
- Address, phone, email, social links
- FAQ accordion

---

## 3. Component Tree & Module Architecture

### Core Layout Components

```
<PremiumLayout>
  ├── <Header>
  │   ├── <Logo>
  │   ├── <Navigation>
  │   └── <CTAButton>
  ├── <PageContent>
  │   ├── <HeroSection>
  │   ├── <ProductShowcase>
  │   ├── <InteractiveCarousel3D>
  │   ├── <FeatureGallery>
  │   ├── <AboutSection>
  │   ├── <TestimonialsSection>
  │   └── <CTASection>
  └── <Footer>
      ├── <NavigationFooter>
      ├── <SocialLinks>
      └── <LegalLinks>
```

### Reusable Component Library

**Cards & Containers:**
- `ProductCard`: Image + title + price + CTA
- `TestimonialCard`: Quote + author + avatar + rating
- `FeatureCard`: Icon + title + description
- `TeamMemberCard`: Image + name + role + socials

**Forms:**
- `ContactForm`: Email, subject, message fields + validation
- `BookingForm`: Date/time selection + service selection
- `SubscriptionForm`: Email input + checkbox

**Interactive Elements:**
- `ImageCarousel`: Swipeable, keyboard-accessible
- `Accordion`: Expandable sections, smooth animation
- `Tabs`: Tab navigation with content switching
- `Modal`: Lightbox, overlay content
- `Tooltip`: Hover information
- `Dropdown`: Menu selection

**Display & Media:**
- `Image`: Optimized, lazy-loaded
- `Video`: Embedded or self-hosted
- `Model3DViewer`: Three.js or Babylon.js integration
- `ParallaxImage`: Depth effect on scroll
- `ScrollReveal`: Animation trigger on viewport entry

**Navigation:**
- `Breadcrumb`: Page location indicator
- `Pagination`: Multi-page navigation
- `StickyNav`: Persistent navigation bar

---

## 4. Visual Language System

### 4.1 Color Palette

**Primary Colors:**
- **Dominant Accent**: `#0A0E27` (Deep Navy/Black) - Primary brand color, backgrounds
- **Vibrant Accent**: `#00D9FF` (Cyan/Electric Blue) - CTAs, highlights, interactive states
- **Warm Secondary**: `#FFB800` (Premium Gold) - Premium accents, highlights

**Neutral Palette:**
- **Text Primary**: `#1A1A1A` (Almost Black) - Body text, headings
- **Text Secondary**: `#666666` (Medium Gray) - Supporting text
- **Background**: `#FFFFFF` (White) - Content backgrounds
- **Background Subtle**: `#F5F5F5` (Off-White) - Section backgrounds
- **Border**: `#DDDDDD` (Light Gray) - Dividers, borders

**Accent Palette:**
- **Success**: `#4CAF50` (Green)
- **Warning**: `#FF9800` (Orange)
- **Error**: `#F44336` (Red)
- **Info**: `#2196F3` (Blue)

**3D Gradient Colors:**
- **Gradient 1** (Premium): `#0A0E27` → `#1A1A2E` → `#00D9FF`
- **Gradient 2** (Warm): `#1A1A2E` → `#FFB800` → `#FF6B35`
- **Gradient 3** (Cool): `#00D9FF` → `#0A0E27` → `#FFFFFF`

**Usage Guidelines:**
- Primary backgrounds: Deep Navy (`#0A0E27`)
- Text on light: Deep Navy (`#1A1A1A`)
- Text on dark: White (`#FFFFFF`) or Cyan (`#00D9FF`)
- Interactive states: Cyan (#00D9FF) for active, Gold (#FFB800) for hover
- Gradients: Use in 3D elements, hero backgrounds, CTAs

### 4.2 Typography System

**Font Stack:**

**Headings:**
```css
font-family: "Playfair Display", "Georgia", serif;
letter-spacing: -0.02em;
font-weight: 700;
line-height: 1.2;
```

**Body:**
```css
font-family: "Inter", "Helvetica Neue", sans-serif;
letter-spacing: 0;
font-weight: 400;
line-height: 1.6;
```

**Monospace (for code/specs):**
```css
font-family: "Menlo", "Monaco", monospace;
```

**Type Scale:**

| Element | Size | Weight | Mobile | Spacing |
|---------|------|--------|--------|---------|
| H1 (Hero) | 4.5rem (72px) | 700 | 2rem (32px) | -0.02em |
| H2 (Section) | 3rem (48px) | 700 | 1.75rem (28px) | -0.02em |
| H3 (Subsection) | 1.875rem (30px) | 700 | 1.5rem (24px) | -0.01em |
| H4 (Card Title) | 1.5rem (24px) | 700 | 1.25rem (20px) | -0.01em |
| Body Large | 1.25rem (20px) | 400 | 1.125rem (18px) | 0 |
| Body Regular | 1.125rem (18px) | 400 | 1rem (16px) | 0 |
| Body Small | 1rem (16px) | 400 | 0.875rem (14px) | 0 |
| Captions | 0.875rem (14px) | 500 | 0.75rem (12px) | 0.01em |

**Typography Pairings:**
- **Premium Heading + Clean Body**: Playfair Display + Inter
- **Call-to-Action**: Playfair Display, Bold, Cyan color
- **Testimonial Quotes**: Playfair Display, Italic, 1.25rem
- **Product Specs**: Inter, Regular, 1rem, monospace for values

### 4.3 Grid & Spacing System

**Base Unit:** 8px (1rem = 16px)

**Grid:**
- Desktop: 12-column grid, 80px gutters, 80px margins
- Tablet: 8-column grid, 40px gutters, 40px margins
- Mobile: 4-column grid, 20px gutters, 20px margins

**Spacing Scale:**
```
2px  (0.25 rem)
4px  (0.5 rem)
8px  (1 rem) [Base]
12px (1.5 rem)
16px (2 rem)
24px (3 rem)
32px (4 rem)
40px (5 rem)
48px (6 rem)
56px (7 rem)
64px (8 rem)
80px (10 rem)
96px (12 rem)
120px (15 rem)
```

**Component Spacing:**
- Card padding: 32px
- Section padding vertical: 80px-120px
- Section padding horizontal: 80px
- Gutters between grid items: 40px (desktop), 24px (tablet), 16px (mobile)

### 4.4 3D & Gradient Effects

**Lighting Style:**
- **Key Light**: 45° angle from top-left, Cyan (#00D9FF), 80% intensity
- **Fill Light**: 45° angle from bottom-right, Warm (#FFB800), 40% intensity
- **Ambient Light**: Soft white, 30% intensity

**3D Model Styling:**
- Reflective surfaces: High specular highlights in Cyan
- Matte surfaces: Subtle diffuse with warm shadows
- Transparency: Use with care, max 70% opacity
- Depth: Exaggerate depth slightly (2-3x normal scale) for emphasis

**Gradient Applications:**
- Hero backgrounds: Dynamic gradient with 3D depth
- 3D model surrounds: Subtle animated gradient
- CTA buttons: Linear gradient, Cyan to deeper blue
- Hover effects: Animated gradient shift

**3D Carousel Specifications:**
- Model: Center-positioned, slightly elevated
- Rotation speed: 0.5 units/sec (user-interactive)
- Lighting: Key + fill as described above
- Environment map: Soft white, slight color shift to Cyan
- Camera: Perspective view, ~50° FOV
- Depth of field: Subtle, focus on center

### 4.5 Elevation & Shadow System

**Shadows (Depth Levels):**

| Level | Usage | Definition |
|-------|-------|-----------|
| Flat | Background, text | No shadow |
| Raised | Cards on white | `0 2px 8px rgba(0,0,0,0.12)` |
| Floating | Hover cards | `0 8px 24px rgba(0,0,0,0.18)` |
| Modal | Dialogs, modals | `0 20px 60px rgba(0,0,0,0.3)` |
| Elevated 3D | 3D models | `0 24px 48px rgba(0,0,0,0.25)` |

**Usage:**
- Product cards: Raised, increase to Floating on hover
- Testimonial cards: Raised
- Modals: Modal shadow on background
- 3D carousel: Elevated 3D for depth
- Hero content: No shadow or minimal

---

## 5. Interaction & Animation Guidelines

### 5.1 Micro-interactions

**Button States:**
```
Default:
  - Background: Cyan (#00D9FF)
  - Color: Dark navy (#0A0E27)
  - Padding: 16px 32px
  - Border-radius: 4px
  - Font: Inter, 16px, 600

Hover:
  - Background: Gradient (Cyan → deeper blue)
  - Transform: scaleX(1.05), scaleY(1)
  - Shadow: Floating shadow
  - Transition: 300ms ease-out

Active/Press:
  - Transform: scale(0.98)
  - Shadow: Raised
  - Transition: 100ms ease-out

Disabled:
  - Background: #DDDDDD
  - Color: #999999
  - Cursor: not-allowed
  - Opacity: 0.6
```

**Form Inputs:**
```
Default:
  - Border: 1px solid #DDDDDD
  - Border-radius: 4px
  - Padding: 12px 16px
  - Font: Inter, 16px

Focus:
  - Border: 2px solid Cyan (#00D9FF)
  - Background: #F5F5F5
  - Shadow: 0 0 0 3px rgba(0, 217, 255, 0.1)
  - Outline: none
  - Transition: 200ms ease-out

Error:
  - Border: 2px solid #F44336
  - Icon: Red X symbol
```

**Card Hover:**
```
Default:
  - Shadow: Raised
  - Transform: translateY(0)

Hover:
  - Shadow: Floating
  - Transform: translateY(-8px)
  - Transition: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### 5.2 Parallax Effects

**Hero Section Parallax:**
- Background image moves at 30% of scroll speed
- Creates depth perception, foreground faster than background
- Enabled on desktop only, disabled on mobile (<768px)
- Fade transition at bottom (120px fade zone)

**Signature Products Parallax:**
- Cards move on scroll at 50% of background speed
- Subtle vertical shift (-4px to +4px) based on scroll position
- Creates floating effect without disorientation

**Gallery Image Parallax:**
- Images with aspect ratio > 1.5 have parallax enabled
- Speed: 40% of scroll
- Depth: Min -10px, Max +10px

**Implementation:**
```javascript
offset = (scrollPosition * speedFactor) % 100;
transform: translateY(offset);
```

### 5.3 Scroll-Triggered Reveals

**Fade In Animation:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Trigger when 30% of element is in viewport */
animation: fadeInUp 800ms ease-out forwards;
animation-delay: stagger (0ms per item);
```

**Stagger Effect:**
- First element: 0ms delay
- Each subsequent element: +100ms delay
- Max delay: 600ms
- Duration: 800ms (ease-out)

**Slide In Animation:**
```
From left: translateX(-60px) + opacity 0
From right: translateX(60px) + opacity 0
Default: 800ms ease-out

For images:
  - Scale from 0.95 + opacity 0
  - Duration: 1000ms (slower for visual impact)
```

**Scroll Progress Indicator:**
- Appears during scroll
- Bottom border of section grows from 0-100% width
- Color: Cyan gradient
- Visibility: desktop only

### 5.4 Loading Sequence

**Page Load Animations:**
1. **Header**: Fade in, 300ms, immediate
2. **Hero Content**: Fade in up, 800ms, 100ms delay
3. **Hero Background**: Scale up (1.05 → 1.0), fade in, 1200ms, immediate
4. **Products Section**: Staggered fade in, 600ms each, 50ms stagger

**3D Model Loading:**
- Skeleton loader (placeholder geometry) shown initially
- Model loads in background
- On load complete: Fade skeleton out, fade model in, 400ms
- If load takes >3s, show loading bar with percentage

**Images Loading:**
- LQIP (Low Quality Image Placeholder) shown
- Blur-up effect as full image loads
- Transition: 600ms ease-out fade
- Fallback: Gray placeholder if fails

### 5.5 3D Carousel Interactions

**Desktop Interaction:**
- Click and drag: Rotate model around Y-axis
- Scroll/Mouse wheel: Zoom in/out (clamp at 0.5x-2.0x)
- Double-click: Reset to default view
- Keyboard: Arrow keys for rotation, +/- for zoom

**Mobile Interaction:**
- Single finger drag: Rotate around Y-axis
- Two finger pinch: Zoom in/out
- Tap: Show/hide info panel
- Swipe: Navigate to next product

**Animation Specs:**
- Rotation momentum: Decelerate over 3 seconds
- Inertia: Ease-out cubic
- Zoom animation: 300ms ease-out
- Info panel slide: 400ms ease-out

### 5.6 Testimonial Section Animations

**Auto-rotate behavior:**
- Every 8 seconds, scroll to next testimonial
- Animation: 600ms ease-in-out
- Pause on hover
- Resume on mouse leave
- Manual arrows reset timer

**Quote emphasis:**
- Letter-by-letter reveal on scroll into view
- Duration: 2000ms total
- Letter delay: 50ms stagger
- Enabled once per page load

### 5.7 Transition & Easing

**Standard Easing Functions:**
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Timing Guidelines:**
- Micro-interactions: 150-300ms
- Section reveals: 600-800ms
- Page transitions: 300-400ms
- Parallax updates: No duration (continuous)
- 3D model rotation: No duration (momentum-based)

---

## 6. Performance Considerations

### 6.1 Asset Budget

**Page Load Targets:**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Total Page Size: < 4 MB
- JS Bundle: < 250 KB (gzipped)
- CSS Bundle: < 50 KB (gzipped)

**Asset Size Limits:**

| Asset Type | Budget | Rationale |
|-----------|--------|-----------|
| Hero Image | 400-600 KB | Single download, critical path |
| Product Image | 150-250 KB each | Multiple on page, lazy loaded |
| 3D Model | 1-2 MB | Large file, async loading |
| Video Background | 800 KB - 2 MB | Optional, adaptive bitrate |
| Fonts (system fonts + 2 custom) | 80-150 KB | Preload, subset glyphs |
| Icons (SVG sprite) | 50-80 KB | Single request, cached |
| JS Libraries (React, Three.js, etc.) | 150 KB total gzipped | Production bundles |

**Image Optimization:**
- Use WebP with PNG fallback
- Serve responsive images (1x, 2x, 3x)
- Compress with quality 75-85
- Hero image: 1920x1080 (desktop), 1200x900 (tablet), 800x600 (mobile)
- Product images: 600x800 (desktop), 400x533 (mobile)
- Gallery images: 1200x800 (landscape), 600x800 (portrait)

### 6.2 Lazy Loading Strategy

**Intersection Observer API:**
```javascript
Lazy load images:
  - Threshold: 50px below viewport
  - Load 3 images ahead on scroll
  - Priority: Above-fold first, then scroll direction

Lazy load components:
  - Gallery: Load on scroll to section
  - 3D model: Load on hover, after hero
  - Video: Load on scroll, pause audio by default

Lazy load scripts:
  - Analytics: Load after TTI
  - Social embeds: Load after interaction
  - Chat widget: Load after 5 seconds idle
```

**Code Splitting:**
- Separate chunks: Hero, Products, Gallery, Contact Form
- Load chunk on scroll to section
- Preload next chunk while loading current
- Fallback: Full bundle if JS error

### 6.3 Caching & CDN

**Browser Caching:**
- Static assets: 1 year (with cache busting)
- Images: 30 days
- API responses: 5 minutes
- HTML: No cache

**CDN Strategy:**
- Serve images from CDN (e.g., Cloudinary, imgix)
- Serve JS/CSS from CDN
- Geographic distribution for global audience
- Gzip compression enabled

### 6.4 Rendering Optimization

**CSS Performance:**
- Critical CSS inlined (< 14 KB)
- Non-critical CSS deferred with media query
- CSS-in-JS evaluated at build time
- Avoid !important, use specificity

**JavaScript Optimization:**
- Tree-shaking, dead-code elimination
- Minification and obfuscation
- Async/defer scripts, except critical
- No render-blocking resources above fold

**Animation Performance:**
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating: width, height, position, box-shadow
- Debounce scroll listeners (16ms throttle)
- Use `will-change` sparingly (performant browsers only)
- Disable animations on prefers-reduced-motion

**3D Rendering:**
- Limit model complexity: < 100k polygons
- Use progressive loading: Low-poly → high-poly
- Disable shadows on mobile, reduce lights
- Frame-rate cap: 60 FPS target, allow 30 FPS on lower devices

---

## 7. Accessibility Targets

### 7.1 WCAG 2.1 Level AA Compliance

**Color Contrast:**
- Text on background: 4.5:1 ratio (normal), 3:1 (large)
- Interactive elements: 3:1 ratio minimum
- Decorative: No requirement
- Test: Use WebAIM Contrast Checker

**Example Ratios (Pre-calculated):**
- Navy (#0A0E27) on White: 12.6:1 ✓
- Navy on Cyan (#00D9FF): 6.8:1 ✓
- Cyan on Navy: 6.8:1 ✓
- Gold (#FFB800) on White: 4.5:1 ✓
- Gray (#666666) on White: 4.5:1 ✓

### 7.2 Keyboard Navigation

**Keyboard Access:**
- All interactive elements focusable (buttons, links, form inputs)
- Tab order: Logical, left-to-right, top-to-bottom
- Focus indicator: Visible outline (3px Cyan border)
- Skip links: Present on page load, keyboard accessible

**Keyboard Shortcuts:**
- `Tab`: Move focus forward
- `Shift+Tab`: Move focus backward
- `Enter`: Activate button, submit form
- `Space`: Activate button, toggle checkbox
- `Arrow keys`: Navigate carousel, dropdown menus
- `Escape`: Close modals, exit fullscreen
- `H`: Jump to main heading (optional)

### 7.3 Screen Reader Support

**ARIA Labels & Roles:**
```html
<button aria-label="Close modal">×</button>
<nav aria-label="Main navigation">
<div role="region" aria-label="Testimonials" aria-live="polite">
<img alt="Product name - [specific description of contents]">
<svg aria-hidden="true"><!-- decorative --></svg>
<a href="#main" class="sr-only">Skip to main content</a>
```

**Semantic HTML:**
- Use correct elements: `<button>` for buttons, `<a>` for links
- Headings: `<h1>`, `<h2>`, `<h3>` in logical order
- Lists: `<ul>`, `<ol>`, `<li>` for grouped content
- Forms: `<label>` for inputs, `<fieldset>` for groups
- Regions: `<nav>`, `<main>`, `<section>`, `<footer>`

**Announcement & Live Updates:**
- Carousel auto-play: Announce current slide
- Form validation: Announce errors to screen reader
- Loading: "Loading..." announcement, then "Loaded"

### 7.4 Motion & Animation

**Prefers Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Guidelines:**
- Parallax disabled for users with reduced motion preference
- Auto-play animations disabled
- Carousel auto-rotation disabled
- Scroll reveals become instant
- 3D model rotation slowed significantly (if enabled)

### 7.5 Form Accessibility

**Form Requirements:**
- Every input has associated `<label>`
- Error messages linked to input via `aria-describedby`
- Required fields marked with `aria-required="true"`
- Instructions for complex inputs above field
- Form submission accessible (not AJAX-only)

**Example:**
```html
<label for="email">Email Address *</label>
<input 
  id="email" 
  type="email" 
  aria-required="true"
  aria-describedby="email-error"
  required
>
<span id="email-error" role="alert"></span>
```

### 7.6 Testing Checklist

- [ ] Keyboard-only navigation of all features
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Color contrast validation (WebAIM Contrast Checker)
- [ ] Reduced motion testing (Chrome DevTools)
- [ ] Zoom to 200% (no loss of functionality)
- [ ] Mobile screen reader (VoiceOver iOS, TalkBack Android)
- [ ] Automated testing: axe, Lighthouse, WAVE
- [ ] Manual accessibility audit: WCAG 2.1 AA checklist

---

## 8. Implementation Guidance

### 8.1 Tech Stack Recommendations

**Frontend Framework:**
- React 18+ (component-based, large ecosystem)
- Alternative: Vue 3 (lighter weight), Svelte (performance)

**Styling:**
- Tailwind CSS (utility-first, built-in a11y)
- CSS Modules (component-scoped styles)
- CSS-in-JS (Styled Components, Emotion) for dynamic styles

**3D Graphics:**
- Three.js (most mature, extensive examples)
- Babylon.js (feature-rich, good documentation)
- WebGL directly (for maximum performance)

**Performance & Optimization:**
- Next.js (React) or Nuxt (Vue) for SSR, code splitting
- Webpack 5 or Vite (fast builds, tree-shaking)
- Image optimization: Sharp, ImageOptim
- Bundle analysis: webpack-bundle-analyzer

**Animation Libraries:**
- GSAP (professional animations, timeline support)
- Framer Motion (React integration, simple API)
- React Spring (physics-based animations)
- AOS (Animate On Scroll, lightweight)

**Testing & Quality:**
- Jest (unit testing)
- Cypress (E2E testing)
- Storybook (component development)
- ESLint, Prettier (code quality)
- Lighthouse CI (performance regression)

### 8.2 Component Development Workflow

**Atomic Design Structure:**
```
components/
├── atoms/
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Card.jsx
│   └── Image.jsx
├── molecules/
│   ├── FormField.jsx
│   ├── ProductCard.jsx
│   ├── TestimonialCard.jsx
│   └── Carousel.jsx
├── organisms/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ProductShowcase.jsx
│   ├── InteractiveCarousel3D.jsx
│   ├── GallerySection.jsx
│   ├── TestimonialSection.jsx
│   └── Footer.jsx
└── templates/
    └── PageLayout.jsx
```

**Development Order:**
1. Design tokens (colors, typography, spacing)
2. Base atoms (Button, Input, Image)
3. Molecules (Cards, forms)
4. Organisms (Sections, complex layouts)
5. Templates (Page layouts)
6. Integration (Routing, state management)
7. Optimization (Code splitting, lazy loading)
8. Testing (Unit, integration, E2E)

### 8.3 Deployment & Monitoring

**Deployment:**
- Use CDN (Vercel, Netlify, AWS CloudFront)
- Enable compression (Gzip, Brotli)
- Configure cache headers properly
- SSL/TLS enabled (HTTPS only)
- Security headers (CSP, X-Frame-Options, etc.)

**Monitoring:**
- Performance monitoring: Sentry, LogRocket
- Analytics: Google Analytics 4, Mixpanel
- Error tracking: Rollbar, Bugsnag
- Uptime monitoring: UptimeRobot, Datadog
- Real-time metrics dashboard

**Performance Budgets:**
- Set budgets in CI/CD pipeline
- Fail builds if metrics exceed thresholds
- Track metrics over time (lighthouse-ci)

### 8.4 Browser Support

**Target Browsers:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 13+, Android 8+

**Feature Fallbacks:**
- CSS Grid → Flexbox fallback
- 3D models → 2D image fallback
- Lazy loading → Eager loading
- WebP → PNG/JPG fallback
- ES6+ → Transpile with Babel

### 8.5 Content Management

**CMS Recommendations:**
- Headless CMS: Contentful, Sanity, Strapi
- Git-based: Markdown with frontmatter
- Database-backed: Wordpress (with REST API), Statamic

**Content Structure:**
- Homepage sections as modular blocks
- Product details in structured fields
- Testimonials with author metadata
- Gallery with categories and filtering

---

## 9. File Structure & Resources

### 9.1 Directory Organization

```
project-root/
├── docs/
│   ├── design/
│   │   ├── architecture.md (this file)
│   │   ├── research.md (research document reference)
│   │   ├── component-specs.md (detailed component specs)
│   │   └── design-tokens.json (design system data)
│   └── guides/
│       ├── setup.md
│       └── deployment.md
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── App.jsx
├── public/
│   ├── images/
│   ├── models/ (3D files)
│   ├── fonts/
│   └── icons/
├── tests/
├── .github/
│   └── workflows/
├── package.json
└── README.md
```

### 9.2 Design Reference Links

**Mockups & Wireframes:**
- Desktop Mockups: [Link to Figma/Adobe XD file]
- Mobile Wireframes: [Link to mobile mockups]
- Component Library: [Link to Storybook or design system]

**Research Document:**
- User Research: `docs/design/research.md` (complementary resource)
- Competitive Analysis: [Link to analysis document]

**Brand Guidelines:**
- Logo files: `public/assets/logos/`
- Brand colors: Defined in section 4.1
- Font files: `public/fonts/`

### 9.3 Design Tokens Export

**JSON Design Tokens:**
```json
{
  "colors": {
    "primary": "#0A0E27",
    "secondary": "#00D9FF",
    "accent": "#FFB800"
  },
  "typography": {
    "headings": "Playfair Display, serif",
    "body": "Inter, sans-serif"
  },
  "spacing": {
    "xs": "8px",
    "sm": "16px",
    "md": "32px",
    "lg": "80px"
  },
  "shadows": {
    "raised": "0 2px 8px rgba(0,0,0,0.12)",
    "floating": "0 8px 24px rgba(0,0,0,0.18)"
  }
}
```

### 9.4 Testing & QA Checklist

- [ ] Visual regression testing (Percy, Chromatic)
- [ ] Accessibility audit (axe-core, Lighthouse)
- [ ] Performance testing (Lighthouse, WebPageTest)
- [ ] Cross-browser testing (BrowserStack, Sauce Labs)
- [ ] Mobile responsiveness (various device sizes)
- [ ] Form validation and error handling
- [ ] 3D model loading and interaction
- [ ] Animation performance on lower-end devices

---

## 10. Revision History & Next Steps

### Revision v1.0 - Initial Architecture
- Comprehensive design system definition
- Complete page hierarchy and layouts
- Component tree and reusable modules
- Visual language (colors, typography, spacing)
- Interaction and animation guidelines
- Performance budgets and optimization
- WCAG 2.1 AA accessibility targets
- Implementation-ready technical guidance

### Next Steps

1. **Create Detailed Component Specifications**
   - Individual component APIs
   - Prop definitions and types
   - Usage examples
   - Code samples

2. **Develop Storybook/Design System**
   - Interactive component library
   - Live examples
   - Design tokens integration
   - Documentation per component

3. **Create High-Fidelity Mockups**
   - Desktop, tablet, mobile layouts
   - Interactive prototype
   - Animation previews
   - Handoff specs for developers

4. **Setup Development Environment**
   - Initialize project structure
   - Configure build tools
   - Setup testing infrastructure
   - Create CI/CD pipeline

5. **Begin Component Development**
   - Start with atoms/design tokens
   - Build molecules (cards, forms)
   - Construct organisms (sections)
   - Implement interactive features

6. **Integrate Content & Data**
   - Setup CMS integration
   - Create data models
   - Populate with content
   - Test with real data

---

## 11. Appendix: Quick Reference

### Design Token Quick Reference

**Colors:**
- Navy: `#0A0E27`
- Cyan: `#00D9FF`
- Gold: `#FFB800`
- Text Dark: `#1A1A1A`
- Text Light: `#FFFFFF`

**Typography:**
- Headlines: Playfair Display, 700
- Body: Inter, 400
- Base size: 16px
- Line height: 1.6 (body), 1.2 (headings)

**Spacing (base 8px):**
- Micro: 8px
- Small: 16px
- Medium: 32px
- Large: 80px

**Shadows:**
- Raised: `0 2px 8px rgba(0,0,0,0.12)`
- Floating: `0 8px 24px rgba(0,0,0,0.18)`

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1440px
- Desktop: 1440px+

### Performance Budgets (Summary)

- FCP: < 1.5s
- LCP: < 2.5s
- TTI: < 3.5s
- Total Size: < 4 MB
- JS (gzipped): < 250 KB
- CSS (gzipped): < 50 KB

### Accessibility Checklist

- [ ] WCAG 2.1 Level AA compliance
- [ ] Keyboard navigation support
- [ ] Screen reader compatible
- [ ] Color contrast 4.5:1
- [ ] Reduced motion respected
- [ ] Form accessibility complete

---

**Document Last Updated:** December 2024
**Document Version:** 1.0
**Maintained By:** Design & Engineering Team
