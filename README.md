feat/hero-3d-landing-r3f-framer-performance
# Hero 3D Landing - Premium Signature Sweets

A high-performance, responsive hero landing page featuring 3D animation with React Three Fiber, Framer Motion, and Next.js.

## Features

- **3D Interactive Scene**: Stylized geometric representation of signature sweets using Three.js
- **Smooth Animations**: Framer Motion-powered intro timeline with parallax layers
- **Premium Loading Animation**: Custom loading screen with animated transitions
- **Performance Optimized**:
  - Adaptive pixel ratio (1x-1.5x based on device)
  - Suspense-based lazy loading for 3D components
  - Respects `prefers-reduced-motion` media query
  - Optimized WebGL rendering with antialias enabled
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG compliant with motion preferences support

## Tech Stack

- **Framework**: Next.js 14
- **UI**: React 18 with TypeScript
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS + PostCSS
- **Build Tools**: SWC (Next.js default)

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## Project Structure

```
/home/engine/project/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── canvas-wrapper.tsx   # React Three Fiber Canvas wrapper
│   ├── hero.tsx             # Main Hero component
│   ├── hero-scene.tsx       # 3D scene content (sweets, lighting)
│   └── loading-screen.tsx   # Premium loading animation
├── lib/
│   ├── constants.ts         # Research-backed content and config
│   └── hooks/
│       ├── use-device-pixel-ratio.ts
│       └── use-reduced-motion.ts
├── package.json
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
└── .eslintrc.json
```

## Content

### Hero Content (Research-Based)

The headline, subheading, description, and CTA copy are derived from market research and stored in `/lib/constants.ts`:

- **Headline**: "Taste the Extraordinary"
- **Subheading**: "Premium Handcrafted Sweets Designed for Refined Palates"
- **Description**: Details about artisanal craftsmanship and quality
- **CTAs**: "Order Now" and "Get in Touch"

### 3D Scene

The hero scene features:
- **Geometric Proxy Models**: Icosahedrons (strawberry), cubes (chocolate), octahedrons (mint)
- **Accent Particles**: Dodecahedrons and tetrahedrons
- **Animated Lighting**: Three point lights with dynamic positioning
- **Orbital Animation**: Rotation and floating motion on geometric shapes

## Performance Optimizations

1. **Adaptive Rendering**: Pixel ratio automatically adjusted (1.0-1.5x) based on device capabilities
2. **Lazy Loading**: 3D scene components wrapped in Suspense
3. **Motion Preferences**: All animations disabled when `prefers-reduced-motion: reduce` is set
4. **Loading Strategy**: Asset preloading with premium animation during initial load
5. **Vignette Effect**: GPU-accelerated background optimization

## Accessibility Features

- Full keyboard navigation support
- Respects user motion preferences
- Semantic HTML structure
- Proper color contrast ratios
- ARIA labels on interactive elements

## Performance Targets

- **Lighthouse Score**: > 80
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers with WebGL support

## Future Enhancements

- [ ] Add touch controls for mobile 3D interaction
- [ ] Implement advanced 3D models for actual products
- [ ] Add sound effects with audio preferences
- [ ] Integrate with e-commerce backend
- [ ] Add analytics tracking
- [ ] Implement A/B testing variants

# Next.js Enterprise Starter

A premium Next.js 14 starter with TypeScript, Tailwind CSS, Framer Motion, and Three.js ecosystem.

## Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [Drei](https://github.com/pmndrs/drei)
- **Fonts**: [Next/Font](https://nextjs.org/docs/basic-features/font-optimization) (Inter & Playfair Display)
- **Linting**: ESLint + Prettier

## Project Structure

- `src/app`: Next.js App Router pages and layouts
- `src/components`: Reusable UI components
- `src/sections`: Page sections (Hero, Features, etc.)
- `src/lib`: Utilities and hooks
- `public/assets`: Static assets

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- `npm run lint`: Run ESLint
- `npm run build`: Build the application for production
- `npm start`: Start the production server

## Features

- **Global Styles**: Configured with Tailwind and CSS variables for theming.
- **Premium Fonts**: Inter (Sans) and Playfair Display (Serif) configured.
- **Smooth Scroll**: Enabled by default.
- **Utility Hooks**:
  - `useViewport`: Get window dimensions.
  - `useReducedMotion`: Respect user motion preferences.
  - `useParallax`: Helper for parallax scroll effects.
main
