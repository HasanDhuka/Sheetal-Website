# Component Specifications & API Reference

## Overview

This document provides detailed specifications for all reusable components in the premium blueprint system. Each component includes visual specifications, interactive behaviors, accessibility requirements, and implementation examples.

---

## Component Library Index

### Atoms (Base Components)
- Button
- Input / Form Field
- Image / Media
- Icon
- Badge
- Tag
- Tooltip

### Molecules (Composite Components)
- ProductCard
- TestimonialCard
- FeatureCard
- FormField
- SearchInput
- Pagination
- Breadcrumb

### Organisms (Complex Components)
- Header / Navigation
- HeroSection
- ProductShowcase
- InteractiveCarousel3D
- FeatureGallery
- AboutSection
- TestimonialSection
- ContactForm
- Footer

### Templates
- PageLayout
- LandingPage
- ProductPage
- AboutPage
- ContactPage

---

## ATOMS - Base Components

### Button

**Purpose:** Primary interactive element for user actions

**States:**
- Default: Idle state
- Hover: Mouse over (desktop only)
- Active: Pressed state
- Disabled: Non-interactive state
- Loading: Async operation in progress

**Sizes:**

| Size | Padding | Height | Font Size |
|------|---------|--------|-----------|
| Small | 8px 16px | 36px | 0.875rem |
| Medium | 12px 24px | 44px | 1rem |
| Large | 16px 32px | 52px | 1.125rem |

**Variants:**

1. **Primary (Cyan)**
   ```
   Background: #00D9FF
   Color: #0A0E27
   Border: None
   Hover: Gradient (Cyan → #00B8D4)
   ```

2. **Secondary (Outline)**
   ```
   Background: Transparent
   Color: #0A0E27
   Border: 2px solid #0A0E27
   Hover: Background #F5F5F5
   ```

3. **Ghost (Text Only)**
   ```
   Background: Transparent
   Color: #0A0E27
   Border: None
   Hover: Underline
   ```

4. **Gold (Accent)**
   ```
   Background: #FFB800
   Color: #0A0E27
   Border: None
   Hover: #FF9F00
   ```

**Interactive Behavior:**

```
Hover (Desktop):
  - Transform: scaleX(1.05) scaleY(1)
  - Shadow: Floating (0 8px 24px rgba(0,0,0,0.18))
  - Duration: 300ms ease-out

Active (Press):
  - Transform: scale(0.98)
  - Shadow: Raised (0 2px 8px rgba(0,0,0,0.12))
  - Duration: 100ms ease-out

Disabled:
  - Opacity: 0.6
  - Cursor: not-allowed
  - No interactive states
```

**Accessibility:**

```
- Keyboard: Enter, Space to activate
- Screen reader: aria-label if text not clear
- Focus: 3px Cyan outline
- Color contrast: 7:1 (meets AAA)
- Touch: Minimum 48x48px hit area
```

**Props (React Example):**

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}
```

---

### Input / Form Field

**Purpose:** Text input for user data entry

**States:**
- Default: Empty, unfocused
- Focus: Active keyboard input
- Error: Validation failure
- Success: Valid input
- Disabled: Non-editable

**Specifications:**

```
Height: 48px
Padding: 12px 16px
Border: 1px solid #DDDDDD
Border-radius: 4px
Font: Inter, 1rem
Line-height: 1.5
```

**Focus State:**

```
Border: 2px solid #00D9FF
Background: #F5F5F5
Box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1)
Outline: None
Transition: 200ms ease-out
```

**Error State:**

```
Border: 2px solid #F44336 (red)
Background: #FFFBFB (very light red)
Error icon: 16x16px red X
Error message: Below input, 0.875rem, red
```

**Placeholder Styling:**

```
Color: #999999
Font-size: 1rem
Font-weight: 400
Opacity: 1 (not 0.5 for accessibility)
```

**Types:**

1. **Text** - General text input
2. **Email** - Email validation
3. **Password** - Hidden input with show/hide toggle
4. **Telephone** - Phone number with formatting
5. **Textarea** - Multi-line text
6. **Number** - Numeric input with +/- controls
7. **Date** - Calendar picker

**Accessibility:**

```
- Label: Always associated with <label>
- aria-required: true for required fields
- aria-describedby: Links to error message
- aria-invalid: true on error
- Placeholder: Not a substitute for label
- Clear error messages on blur/submit
```

---

### Image / Media

**Purpose:** Optimized image display with responsive variants

**Optimization:**

```
Format: WebP (primary), PNG/JPG (fallback)
Compression: Quality 75-85
Lazy loading: Yes, threshold 50px
Responsive: 1x, 2x, 3x variants
```

**Sizes:**

```
Small: 300x200px
Medium: 600x400px
Large: 1200x800px
Full: 1920x1200px
```

**Aspect Ratios:**

```
Square: 1:1
Landscape: 16:9, 4:3
Portrait: 3:4, 2:3
Wide: 21:9
```

**Picture Element Example:**

```html
<picture>
  <source 
    srcset="image.webp 1x, image@2x.webp 2x" 
    type="image/webp"
  >
  <img 
    src="image.jpg" 
    srcset="image.jpg 1x, image@2x.jpg 2x"
    alt="Descriptive text"
    loading="lazy"
    width="600"
    height="400"
  >
</picture>
```

**Blur-up Loading:**

```
1. Show LQIP (low-quality placeholder) instantly
2. Load full image in background
3. Fade from LQIP to full image (600ms)
4. Cache in browser
```

---

### Icon

**Purpose:** Scalable SVG icons for UI elements

**Specifications:**

```
Format: SVG (scalable, small file size)
Strokes: 2px for consistency
Colors: Inherit from parent or override
Sizes: 16px, 24px, 32px, 48px
```

**Icon Set:**

- Arrow (right, left, up, down)
- Close / X
- Menu / Hamburger
- Search
- Check / Checkmark
- Plus / Add
- Minus
- Settings / Gear
- Star
- Heart
- Share
- Download
- Upload
- Social icons (Instagram, Facebook, LinkedIn, Twitter)

**Usage Example:**

```html
<svg class="icon icon--24" viewBox="0 0 24 24" aria-hidden="true">
  <path d="..." />
</svg>
```

---

### Badge / Tag

**Purpose:** Labels, status indicators, categories

**Badge (Status Indicator):**

```
Background: #4CAF50 (success), #F44336 (error), #2196F3 (info)
Color: #FFFFFF
Padding: 4px 8px
Border-radius: 12px
Font: Inter 0.75rem
Font-weight: 600
```

**Tag (Category Label):**

```
Background: #F5F5F5
Color: #0A0E27
Border: 1px solid #DDDDDD
Padding: 6px 12px
Border-radius: 4px
Font: Inter 0.875rem
```

---

### Tooltip

**Purpose:** Additional information on hover/focus

**Specifications:**

```
Background: #0A0E27 (navy)
Color: #FFFFFF
Padding: 8px 12px
Border-radius: 4px
Font: Inter 0.875rem
Max-width: 200px
Z-index: 1000
Arrow: 8px triangle pointing to trigger
```

**Positioning:**

- Top: Default, 8px above trigger
- Bottom: If insufficient space above
- Left/Right: If horizontal space needed

**Delay:**

- Hover delay: 300ms (prevent flashing)
- Keyboard focus: Immediate

---

## MOLECULES - Composite Components

### ProductCard

**Purpose:** Display product information in a grid

**Sections:**

1. **Image Container** (top)
   - Image: 300x400px (3:4 ratio)
   - Overlay: Fade on hover
   - Badge: Optional "New", "Popular" label

2. **Content** (bottom)
   - Title: H4, 1.5rem
   - Description: Body small, 1rem
   - Price: Bold, 1.125rem, Cyan color
   - Rating: Stars + count (optional)

3. **Footer (CTA)**
   - Primary button: "View Details"
   - Secondary icon: "Add to favorites"

**Hover States:**

```
Image:
  - Scale: 1.05
  - Brightness: 0.9
  - Duration: 400ms ease-out

Card:
  - Shadow: Raised → Floating
  - Transform: translateY(-8px)
  - Duration: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

**Responsive:**

- Desktop: 300x400px
- Tablet: 280x373px
- Mobile: 100% width, aspect ratio 3:4

**Props:**

```typescript
interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: {
    src: string;
    alt: string;
    srcSet?: string;
  };
  rating?: {
    score: number;
    count: number;
  };
  badge?: 'new' | 'popular' | 'sale';
  onViewDetails: () => void;
  onFavorite?: () => void;
}
```

---

### TestimonialCard

**Purpose:** Display customer quotes and reviews

**Layout:**

```
┌─────────────────────┐
│  ★ ★ ★ ★ ★ (5)     │
├─────────────────────┤
│ "Outstanding        │
│  service and        │
│  quality..."        │
│                     │
│ - Author Name       │
│   Job Title         │
│   ○ [Avatar]        │
└─────────────────────┘
```

**Specifications:**

```
Width: 350px
Padding: 32px
Border-radius: 8px
Background: #FFFFFF
Border: 1px solid #DDDDDD
Shadow: Raised

Quote:
  Font: Playfair Display italic 1.25rem
  Line-height: 1.6
  Color: #0A0E27
  Margin-bottom: 24px

Author:
  Name: Bold, 1rem
  Title: Regular, 0.875rem
  Color: #666666

Avatar:
  Size: 60x60px
  Border-radius: 50%
  Position: Floating above card (top-right)
```

**Hover State:**

```
Card:
  - Shadow: Raised → Floating
  - Transform: translateY(-8px)
  - Duration: 400ms
```

**Props:**

```typescript
interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  image: string;
  rating?: number; // 1-5 stars
  verified?: boolean;
}
```

---

### FeatureCard

**Purpose:** Highlight key features or benefits

**Layout:**

```
┌──────────────────┐
│    [Icon 48x48]  │
│                  │
│ Feature Title    │
│                  │
│ Brief description│
│ explaining the   │
│ benefit...       │
└──────────────────┘
```

**Specifications:**

```
Width: 280px
Padding: 32px
Border-radius: 8px
Background: #F5F5F5
Border: 1px solid #DDDDDD

Icon:
  Size: 48x48px
  Color: Cyan (#00D9FF)
  Margin-bottom: 16px

Title:
  Font: Playfair Display, bold 1.5rem
  Margin-bottom: 12px
  Color: #0A0E27

Description:
  Font: Inter 1rem
  Line-height: 1.6
  Color: #666666
```

---

### FormField

**Purpose:** Wrapper for input + label + error message

**Structure:**

```html
<div class="form-field" aria-required="true">
  <label for="email">Email Address *</label>
  <input 
    id="email" 
    type="email"
    aria-describedby="email-error"
    aria-invalid="false"
    required
  >
  <span id="email-error" role="alert" class="error-message"></span>
  <span class="helper-text">We'll never share your email</span>
</div>
```

**Specifications:**

```
Margin-bottom: 24px
Label:
  Font: Inter 0.875rem, 600
  Color: #0A0E27
  Margin-bottom: 8px

Input: See Input component specs above

Error Message:
  Color: #F44336
  Font: Inter 0.875rem
  Margin-top: 4px
  Display: None (shown on error)

Helper Text:
  Color: #999999
  Font: Inter 0.75rem
  Margin-top: 4px
  Italic
```

---

### Pagination

**Purpose:** Navigate between multi-page content

**Layout:**

```
← Previous [1] [2] [3] [4] Next →
```

**Specifications:**

```
Button:
  Size: 40x40px
  Border-radius: 4px
  Font: 1rem
  
Active Page:
  Background: #00D9FF
  Color: #0A0E27
  Font-weight: 600
  
Inactive:
  Background: #F5F5F5
  Color: #0A0E27
  
Disabled:
  Opacity: 0.5
  Cursor: not-allowed

Gap: 8px between items
```

---

### Breadcrumb

**Purpose:** Show page hierarchy and navigation

**Layout:**

```
Home / Products / Category / Product Name
```

**Specifications:**

```
Font: Inter 0.875rem
Color: #666666 (links), #0A0E27 (current)

Links:
  Color: #00D9FF
  Cursor: pointer
  Hover: Underline

Separator:
  Content: " / "
  Color: #CCCCCC
  Padding: 0 8px

Current Page:
  Font-weight: 500
  No link
  aria-current="page"
```

---

## ORGANISMS - Complex Components

### Header / Navigation

**Purpose:** Primary navigation and site identity

**Layout:**

```
[Logo] [Nav Items] [CTA Button]
```

**Desktop (> 1440px):**

```
Fixed / Sticky: position fixed or sticky on scroll
Height: 80px
Padding: 0 80px
Logo: 40x40px, left-aligned
Nav items: Horizontal, 20px spacing
  - Home
  - Products
  - About
  - Contact
CTA Button: Right-aligned, Cyan
```

**Tablet (768px - 1440px):**

```
Height: 70px
Padding: 0 40px
Logo: 32x32px
Nav items: Visible or hamburger menu
CTA Button: Visible
```

**Mobile (< 768px):**

```
Height: 60px
Padding: 0 20px
Logo: 28x28px
Nav items: Hamburger menu (off-canvas)
CTA Button: Icon or in menu

Hamburger Menu:
  - Animated icon (3 lines)
  - Smooth slide-in panel (right-side)
  - Semi-transparent backdrop
  - Close button in panel
```

**Sticky Behavior:**

```
Trigger: Scroll down 100px
Animation: Fade in, 300ms
Animation: Fade out, 300ms
Stay visible: Unless navbar height < threshold
```

**Mobile Menu:**

```
Position: Fixed, right side
Width: 80vw (max 400px)
Height: 100vh
Background: #0A0E27
Padding: 80px 20px 20px
Z-index: 999
Backdrop: rgba(0,0,0,0.5)

Items:
  Font: Inter 1.125rem
  Color: #FFFFFF
  Padding: 16px 0
  Border-bottom: 1px solid rgba(255,255,255,0.1)
  Hover: Color #00D9FF
```

---

### HeroSection

**Purpose:** First impression, immediate value communication

**Desktop Layout:**

```
┌─────────────────────────────────┐
│ [Content 40%]  [Image 60%]      │
│                                 │
│ Title                           │
│ Subtitle                        │
│ [CTA] [Secondary CTA]           │
│                                 │
│                    [3D Model]   │
└─────────────────────────────────┘
```

**Content Section:**

```
Title: H1 (4.5rem)
Subtitle: Body Large (1.25rem)
Description: Body (1.125rem), max 400px width

CTAs:
  - Primary button (large)
  - Secondary button (large)
  - Positioned side-by-side (desktop)
  - Stacked (mobile)

Padding: 80px vertical, 80px horizontal (desktop)
Min height: 100vh
Vertical alignment: Center
```

**Image/3D Model Section:**

```
Position: Right side (60% of width)
Height: Match container height
Object-fit: cover
Parallax: Yes, 30% scroll speed
Fade: Bottom 120px fade to content

3D Model:
  - Center-positioned
  - Slight elevation shadow
  - Rotation enabled on desktop
  - Static on mobile
```

**Background:**

```
Solid color: #0A0E27
OR
Gradient: Premium gradient with animation
OR
Image: High-quality hero image

Overlay: Slight dark overlay (optional)
```

---

### ProductShowcase

**Purpose:** Feature multiple products in grid layout

**Grid Layout:**

```
[Card] [Card]    (Desktop: 4 columns)
[Card] [Card]    

[Card] [Card]    (Tablet: 2 columns)
[Card] [Card]    

[Card]           (Mobile: 1 column)
[Card]
...
```

**Specifications:**

```
Desktop: 4 columns, 40px gutters
Tablet: 2 columns, 40px gutters
Mobile: 1 column, 20px gutters

Section padding: 120px vertical, 80px horizontal
Background: #FFFFFF

Cards: See ProductCard component specs

Stagger animation:
  - Each card fades in on scroll
  - 100ms delay between cards
  - 800ms duration
  - ease-out easing
```

**Optional Header:**

```
Centered section:
  - Title: H2 (3rem)
  - Subtitle: Body (1.125rem)
  - Margin-bottom: 80px
```

---

### InteractiveCarousel3D

**Purpose:** Interactive 3D model viewer for products

**Layout:**

```
┌────────────────────────────────┐
│  [3D Model Area] [Info Panel]  │
│  - Rotation enabled (drag)    │
│  - Zoom (mouse wheel)         │
│  - Touch: Swipe to next item  │
│                                │
│  Prev ◄ Page dots ► Next      │
└────────────────────────────────┘
```

**Desktop (1440px+):**

```
Container: 1200px max-width, centered
Height: 600px
Layout: 70% model area, 30% info panel

Model Viewer (left 70%):
  - 3D model center-aligned
  - Responsive lighting
  - Smooth rotation on drag
  - Momentum on release (decelerate 3s)
  - Pinch-to-zoom support
  - Reset on double-click
  
Info Panel (right 30%):
  - Product name (H3)
  - Product description (Body)
  - Specifications list
  - Price
  - CTA button
  - Padding: 32px
  
Navigation:
  - Prev/Next arrows (sides)
  - Dots indicator (bottom)
  - Slide count (e.g., "1 / 4")
```

**Tablet (768px - 1440px):**

```
Height: 500px
Layout: Stacked vertically
  - Model (top 60%)
  - Info panel (bottom 40%)
  
Controls: More prominent
Model: Slightly smaller
```

**Mobile (< 768px):**

```
Height: 400px
Full width with 20px margins
Single column layout
Info panel below model
Touch controls:
  - Single finger: Rotate
  - Two fingers: Zoom
  - Swipe horizontal: Next product
  - Tap to toggle info visibility
```

**3D Model Loading:**

```
Initial: Skeleton loader (placeholder geometry)
Load: Show progress bar
Complete: Fade skeleton out, fade model in (400ms)
Timeout: Show fallback image after 5s

Format: glTF/GLB (Web-optimized 3D format)
Max size: 2MB
Max polygons: 100,000
```

**Interaction Feedback:**

```
Drag: Cursor changes to grab/grabbing
Hover on arrows: Button highlight
Touch model: Brief highlight flash
Zoom in/out: Smooth scale animation

Animation:
  - Rotation: Smooth, momentum-based
  - Zoom: 300ms ease-out
  - Slide: 600ms ease-in-out
```

---

### FeatureGallery

**Purpose:** Showcase images in masonry layout

**Layout:**

```
┌──────┬──────────┐
│ [1]  │ [2] [3]  │
├──────┤          │
│ [4]  ├──────────┤
│      │ [5]      │
└──────┴──────────┘
```

**Desktop (1440px+):**

```
Grid: 3 columns, 40px gutters
Variation:
  - 1x1 (single column wide): 300x300px
  - 2x1 (double width): 620x300px
  - 1x2 (double height): 300x620px

Hover effect:
  - Brightness: 0.9
  - Scale: 1.05
  - Overlay fade in
  - Duration: 300ms ease-out
```

**Tablet (768px - 1440px):**

```
Grid: 2 columns
Variation:
  - Mostly 1x1
  - Some 2x1 if space allows
```

**Mobile (< 768px):**

```
Grid: 1 column
All items: 1x1 aspect ratio
```

**Lightbox Modal:**

```
Trigger: Click on image
Overlay: Backdrop rgba(0,0,0,0.8)
Image: Centered, max-width 90vw
Controls:
  - Close button (top-right)
  - Previous/Next arrows
  - Image counter (e.g., "5 / 12")
  
Keyboard:
  - Escape to close
  - Arrow keys to navigate
  - Close other modals

Image info (optional):
  - Title
  - Description
  - Caption
```

---

### AboutSection

**Purpose:** Tell company story and build trust

**Layout:**

```
[Text 45%] [Visual 55%]
```

**Desktop:**

```
Container: 1200px max-width
Padding: 100px vertical, 80px horizontal
Layout: Flexbox, side-by-side

Text side:
  - H2 heading
  - Multiple paragraphs (1.125rem)
  - List items with icons
  - Maybe a quote section
  - Max-width: 500px

Visual side:
  - Large image or video
  - OR infographic/timeline
  - OR subtle background graphic
```

**Tablet/Mobile:**

```
Stack vertically
100% width
Text padding: 40px
Visual padding: 40px
```

---

### TestimonialSection

**Purpose:** Build trust through social proof

**Layout - Desktop:**

```
[Quote 1] [Quote 2] [Quote 3]
   ←           ·           →
```

**Specifications:**

```
Container: 1200px max-width
Padding: 80px vertical, 80px horizontal
Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
Gap: 40px

Cards: See TestimonialCard specs

Auto-rotation:
  - Interval: 8 seconds
  - Animation: 600ms slide
  - Pause on hover
  - Resume on hover exit
  
Manual navigation:
  - Prev/Next buttons
  - Dot indicators
  - Click to jump to specific card
  
Optional:
  - Section header (centered)
  - Autoplay toggle for accessibility
```

---

### ContactForm

**Purpose:** Collect user inquiries and bookings

**Layout - Desktop:**

```
[Form 50%]  [Info 50%]

Form fields:  Contact info:
- Name        - Address
- Email       - Phone
- Subject     - Hours
- Message     - Social links
- [Submit]    - Map embed
```

**Tablet/Mobile:**

```
Stack vertically
Form: 100% width
Info: Below form
```

**Form Fields:**

```
1. Full Name (required)
   Type: text
   Validation: Non-empty

2. Email (required)
   Type: email
   Validation: Valid email format
   
3. Phone (optional)
   Type: tel
   Validation: Valid phone format
   
4. Subject (required)
   Type: select dropdown
   Options:
     - General inquiry
     - Product support
     - Booking request
     - Partnership
     
5. Message (required)
   Type: textarea
   Min length: 10 chars
   Max length: 2000 chars
   Placeholder: "Tell us more..."

6. Terms checkbox (required)
   Text: "I agree to the privacy policy"
   Link: Underlined privacy link

7. Submit button
   Text: "Send Message"
   Loading state: Shows spinner
   Success: "Message sent! We'll be in touch."
```

**Validation & Errors:**

```
On blur: Validate individual field
On submit: Validate all fields
Errors: Show below field in red
Success: Show success message, clear form
```

**Accessibility:**

```
Labels: Each input has <label>
ARIA: aria-required, aria-invalid, aria-describedby
Focus: Visible outline on all inputs
Keyboard: Tab order logical, can submit with Enter
Screen reader: Error messages announced
```

---

### Footer

**Purpose:** Secondary navigation, legal links, social

**Layout - Desktop:**

```
┌──────────────────────────────────────┐
│ [Column1] [Column2] [Column3] [Col4] │
├──────────────────────────────────────┤
│ Copyright © | Privacy | Terms | Logo │
└──────────────────────────────────────┘
```

**Sections:**

```
Column 1: Quick Links
  - Home
  - Products
  - About
  - Blog
  
Column 2: Resources
  - FAQ
  - Documentation
  - Support
  - Contact
  
Column 3: Legal
  - Privacy Policy
  - Terms of Service
  - Cookie Policy
  - Accessibility

Column 4: Follow
  - Social icons (Instagram, Facebook, LinkedIn, Twitter)
  - Newsletter signup
  - Email
```

**Specifications:**

```
Background: #0A0E27 (navy)
Color: #FFFFFF
Padding: 80px horizontal, 60px vertical
Border-top: 1px solid rgba(255,255,255,0.1)

Text:
  Font: Inter
  Size: 0.875rem to 1rem
  Line-height: 1.6
  
Links:
  Color: #FFFFFF
  Hover: #00D9FF
  Transition: 300ms

Social icons:
  Size: 24x24px
  Gap: 16px
  Hover: Scale 1.2, color cyan
  
Newsletter form:
  Input: Inline, white
  Button: Cyan
  Placeholder: "Enter your email"

Bottom bar:
  Flex: space-between
  Text: Center on mobile
  Padding-top: 40px
  Border-top: 1px solid rgba(255,255,255,0.1)
```

**Responsive:**

```
Desktop: 4-column grid
Tablet: 2-column grid
Mobile: Single column stack
```

---

## TEMPLATES - Page Layouts

### PageLayout

**Purpose:** Base template for all pages

**Structure:**

```html
<PremiumLayout>
  <Header />
  <main role="main">
    {children}
  </main>
  <Footer />
</PremiumLayout>
```

**Features:**

```
- Sticky header
- 100% viewport height minimum
- Sticky footer (on short content)
- Proper semantic HTML
- Accessible skip links
- Background color management
```

---

### LandingPage

**Purpose:** Homepage with full section showcase

**Sections:**

```
1. Header (sticky)
2. Hero
3. Signature Products Showcase
4. 3D Interactive Carousel
5. Feature Gallery
6. About Section
7. Testimonials
8. CTA Section
9. Footer
```

**Animations:**

```
Each section:
- Fade in on scroll
- Stagger child elements (100ms delay)
- Duration: 800ms ease-out

Parallax:
- Hero background: 30% scroll speed
- Gallery images: 40% scroll speed
```

---

### ProductPage

**Purpose:** Individual product detail page

**Sections:**

```
1. Breadcrumb navigation
2. Hero (product 3D model or image)
3. Product specs grid
4. Features section
5. Related products carousel
6. CTA (Add to cart / Schedule consultation)
7. Reviews/testimonials
8. FAQ accordion
```

---

### AboutPage

**Purpose:** Company story and team showcase

**Sections:**

```
1. Hero (simple, with title)
2. Story section
3. Timeline
4. Team members grid
5. Values section
6. Awards/certifications
7. Press mentions
8. CTA to contact
```

---

### ContactPage

**Purpose:** Contact form and information

**Sections:**

```
1. Hero (simple title)
2. Contact form (left) + Info (right)
3. FAQ accordion
4. Map embed
5. Hours of operation
6. Social links
```

---

## Component Development Guidelines

### Best Practices

1. **Props Naming:**
   - Use clear, descriptive names
   - Boolean props: prefix with `is`, `has`, `can`
   - Example: `isLoading`, `hasError`, `canSubmit`

2. **Prop Drilling:**
   - Max 3 levels before consider context
   - Use React Context for global state
   - Consider compound component pattern

3. **CSS Organization:**
   - Use CSS Modules for scoped styles
   - Or Tailwind utilities for consistency
   - Follow spacing system exactly

4. **Accessibility:**
   - Include ARIA labels where needed
   - Ensure keyboard navigation
   - Test with screen readers
   - Color contrast 4.5:1 minimum

5. **Performance:**
   - Memoize expensive components
   - Use useCallback for event handlers
   - Lazy load images with React.lazy
   - Monitor bundle size

6. **Testing:**
   - Unit tests for logic
   - Snapshot tests for rendering
   - E2E tests for user flows
   - Accessibility tests with axe-core

---

## Testing Checklist

Before shipping any component:

- [ ] Visual appearance matches specs
- [ ] All states tested (default, hover, active, disabled, error, loading)
- [ ] Responsive: desktop, tablet, mobile views
- [ ] Keyboard navigation works
- [ ] Screen reader announces content properly
- [ ] Color contrast > 4.5:1
- [ ] Performance: renders in < 100ms
- [ ] No console errors/warnings
- [ ] TypeScript types valid
- [ ] Storybook story created
- [ ] Unit tests written (90%+ coverage)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile touch tested
- [ ] Animation performance (60 FPS)

---

**Document Last Updated:** December 2024
**Document Version:** 1.0
