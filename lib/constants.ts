/**
 * Research-backed content for the hero section
 * Based on market research and user preferences
 */
export const HERO_CONTENT = {
  headline: 'Taste the Extraordinary',
  subheading: 'Premium Handcrafted Sweets Designed for Refined Palates',
  description:
    'Discover our signature collection of artisanal confections, where traditional craftsmanship meets modern innovation. Each piece is meticulously created to deliver an unforgettable sensory experience.',
  cta: {
    primary: 'Order Now',
    secondary: 'Get in Touch',
  },
}

/**
 * Signature Products Section Content
 */
export const SIGNATURE_PRODUCTS = {
  title: 'Signature Collections',
  subtitle: 'Curated Excellence',
  products: [
    {
      id: 'velvet-truffles',
      name: 'Velvet Truffles',
      description: 'Hand-rolled ganache infused with rare cocoa beans and hints of Madagascar vanilla.',
      color: 'from-amber-700 to-amber-900',
    },
    {
      id: 'crystal-gems',
      name: 'Crystal Fruit Gems',
      description: 'Jewel-like pectin confections made with real fruit essences and organic cane sugar.',
      color: 'from-rose-400 to-rose-600',
    },
    {
      id: 'midnight-bar',
      name: 'Midnight Dark',
      description: 'Single-origin 85% dark chocolate bar with delicate sea salt flakes.',
      color: 'from-slate-800 to-black',
    },
  ],
}

/**
 * Gallery Section Content
 */
export const GALLERY_CONTENT = {
  title: 'Artistry in Detail',
  images: [
    { id: 1, alt: 'Chocolatier pouring ganache', color: 'bg-amber-900' },
    { id: 2, alt: 'Finished truffles in box', color: 'bg-rose-900' },
    { id: 3, alt: 'Sugar pulling technique', color: 'bg-amber-700' },
    { id: 4, alt: 'Display of fruit gems', color: 'bg-rose-500' },
    { id: 5, alt: 'Cocoa bean sorting', color: 'bg-slate-800' },
    { id: 6, alt: 'Packaging details', color: 'bg-gold-600' },
  ],
}

/**
 * About/Heritage Section Content
 */
export const HERITAGE_CONTENT = {
  title: 'Our Heritage',
  story: 'Founded in 1952, our journey began in a small kitchen with a big dream.',
  timeline: [
    { year: '1952', title: 'The Beginning', description: 'Grandma Maria opens the first shop in Paris.' },
    { year: '1985', title: 'Generational Craft', description: 'Recipes passed down and refined by the second generation.' },
    { year: '2010', title: 'Global Recognition', description: 'Awarded the "Golden Cacao" for excellence in chocolate making.' },
    { year: '2023', title: 'Modern Innovation', description: 'Launching our sustainable, zero-waste production facility.' },
  ],
}

/**
 * Testimonials Section Content
 */
export const TESTIMONIALS_CONTENT = [
  {
    id: 1,
    quote: "A symphony of flavors that dances on the palate. Simply exquisite.",
    author: "Elena R., Food Critic",
    rating: 5,
  },
  {
    id: 2,
    quote: "The attention to detail in presentation and taste is unmatched.",
    author: "Marc D., Executive Chef",
    rating: 5,
  },
  {
    id: 3,
    quote: "I've never tasted chocolate this pure and balanced before.",
    author: "Sarah L., Chocolate Sommelier",
    rating: 5,
  },
]

/**
 * Contact Section Content
 */
export const CONTACT_CONTENT = {
  title: 'Visit Our Atelier',
  address: '123 Confectionary Lane, Sweet District, Paris',
  hours: [
    { day: 'Mon-Fri', time: '9:00 AM - 7:00 PM' },
    { day: 'Sat', time: '10:00 AM - 6:00 PM' },
    { day: 'Sun', time: 'Closed' },
  ],
  email: 'bonjour@sweets.com',
  phone: '+33 1 23 45 67 89',
  coordinates: { lat: 48.8566, lng: 2.3522 },
}

/**
 * Performance thresholds
 */
export const PERFORMANCE_TARGETS = {
  lighthouse: 80,
  dpr: {
    min: 1,
    max: 1.5,
  },
}

/**
 * Animation configuration respecting prefers-reduced-motion
 */
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
}
