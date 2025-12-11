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
