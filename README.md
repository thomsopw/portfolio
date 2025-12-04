# Modern Portfolio Website

An ultra-modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features glassmorphism design, smooth animations, and a comprehensive showcase of web development projects.

## Features

- **Modern Design**: Glassmorphism effects with smooth animations
- **Project Showcase**: Interactive project cards with detailed modals
- **Pricing Page**: Comprehensive pricing tiers and services information
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Performance Optimized**: Fast loading times with Next.js optimization
- **Accessibility**: WCAG compliant with keyboard navigation support

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home/Projects page
│   └── pricing/        # Pricing page
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Feature components
├── data/               # Data files
│   ├── projects.ts     # Project data
│   └── pricing.ts      # Pricing data
└── lib/                # Utility functions
```

## Customization

### Adding Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  shortDescription: 'Brief description',
  fullDescription: 'Full description',
  image: 'image-url',
  category: 'product-landing' | 'saas' | 'ecommerce' | 'custom',
  technologies: ['React', 'Next.js'],
  features: ['Feature 1', 'Feature 2'],
  liveUrl: 'https://example.com',
  // ... more fields
}
```

### Modifying Pricing

Edit `data/pricing.ts` to update pricing tiers and services.

### Styling

Customize colors, animations, and glassmorphism effects in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and utilities

## Features Overview

### Projects Page
- Hero section with animated background
- Project filtering by category
- Interactive project cards
- Detailed project modals with image galleries
- Services showcase
- Technologies display
- Testimonials carousel
- Stats counter
- Call-to-action sections

### Pricing Page
- Pricing tiers with feature lists
- Detailed services accordion
- Process timeline
- FAQ section
- Contact form
- Why choose us section

## Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations (GPU-accelerated)
- Static generation where possible

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader support

## License

This project is private and proprietary.

