# 🎯 Project Structure & Component Map

## Complete File Tree

```
dnm-26/
│
├── 📁 app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Main page (combines all sections)
│   └── globals.css             # Global CSS, color variables
│
├── 📁 components/
│   ├── Header.tsx              # Floating navigation bar
│   ├── Hero.tsx                # Main hero section with CTA
│   ├── SocialProof.tsx         # Companies & stats
│   ├── Features.tsx            # Services grid (6 items)
│   ├── Showcase.tsx            # Project portfolio grid
│   ├── Testimonials.tsx        # Client feedback cards
│   ├── Contact.tsx             # Contact form/email CTA
│   ├── Footer.tsx              # Site footer
│   ├── TechStackMarquee.tsx    # Animated tech stack scroll
│   ├── AnimatedDivider.tsx     # Section separator
│   │
│   └── 📁 ui/
│       └── Button.tsx          # Reusable button component
│
├── 📁 lib/
│   └── utils.ts                # Utility functions (cn helper)
│
├── 📄 Configuration Files
│   ├── package.json            # Dependencies & scripts
│   ├── tsconfig.json           # TypeScript config
│   ├── tailwind.config.ts      # Tailwind theme & colors
│   ├── postcss.config.js       # PostCSS config
│   ├── next.config.js          # Next.js config
│   ├── .eslintrc.json          # ESLint config
│   └── .gitignore              # Git ignore rules
│
└── 📄 Documentation
    ├── README.md               # Full documentation
    ├── QUICKSTART.md           # Quick setup guide
    └── STRUCTURE.md            # This file
```

## Component Flow Diagram

```
┌─────────────────────────────────────┐
│           app/page.tsx              │  Main Entry Point
│   (Orchestrates all components)     │
└─────────────────────────────────────┘
                 │
                 ├──► Header (Floating Nav)
                 │
                 ├──► Hero
                 │      └─► Button (CTA)
                 │
                 ├──► SocialProof
                 │      ├─► Companies
                 │      └─► Stats
                 │
                 ├──► AnimatedDivider
                 │
                 ├──► Features
                 │      └─► 6 Feature Cards
                 │
                 ├──► TechStackMarquee
                 │      └─► Infinite Scroll
                 │
                 ├──► AnimatedDivider
                 │
                 ├──► Showcase
                 │      └─► 6 Project Cards
                 │
                 ├──► AnimatedDivider
                 │
                 ├──► Testimonials
                 │      └─► 6 Client Cards
                 │
                 ├──► AnimatedDivider
                 │
                 ├──► Contact
                 │      ├─► Email CTA
                 │      ├─► Social Links
                 │      └─► Button
                 │
                 └──► Footer
```

## Section Breakdown

### 🎨 Visual Sections (In Order)

1. **Header** - Always visible, floating navigation
   - Logo/brand name
   - Navigation links (Home, Services, Work, Testimonials, Contact)
   - Active section tracking
   - Smooth scroll to anchors

2. **Hero** - First impression
   - Animated background blobs
   - Main headline with gradient text
   - Subheadline
   - 2 CTA buttons
   - Scroll indicator
   - Floating decorative elements

3. **Social Proof** - Build credibility
   - "Trusted by" company names
   - 3 impressive statistics
   - Minimal, elegant design

4. **AnimatedDivider** - Visual break

5. **Features** - Core offerings
   - 6 service cards in grid
   - Icon, title, description
   - Hover effects
   - Gradient overlays

6. **TechStackMarquee** - Tech credentials
   - Infinite scrolling logos
   - 15+ technology names
   - Subtle motion

7. **AnimatedDivider** - Visual break

8. **Showcase** - Portfolio
   - 6 project cards
   - Project images (Pexels placeholders)
   - Category, title, description
   - Hover zoom effect
   - External link icon on hover

9. **AnimatedDivider** - Visual break

10. **Testimonials** - Social proof
    - 6 client testimonials
    - Profile photos
    - Name, role, company
    - Quote text
    - Grid layout

11. **AnimatedDivider** - Visual break

12. **Contact** - Conversion point
    - Email address with mailto link
    - Social media icons
    - CTA button
    - Animated background
    - "24 hour response" note

13. **Footer** - Brand closure
    - Brand name
    - Copyright with animated heart
    - Legal links
    - Year (dynamic)

## Animation Strategy

### Scroll-Based Animations
- `initial` → `whileInView` → `viewport={{ once: true }}`
- Stagger children for grid items
- Y-axis entrance (20-30px)
- Opacity fade-in (0 → 1)
- Delays for sequence (0.1s increments)

### Hover Animations
- Scale (1 → 1.02-1.05)
- Y-axis lift (-5 to -8px)
- Border glow effects
- Icon movements

### Infinite Animations
- Background blobs (scale + opacity pulse)
- Marquee scroll (translateX)
- Heartbeat effect
- Floating dots

## Color System

```typescript
// Defined in app/globals.css as HSL values

Primary:    321 99% 50%    // Hot Pink (#FE019A)
Secondary:  66 100% 59%    // Neon Yellow (#E9FF32)
Background: 35 12% 13%     // Dark gradient base
Foreground: 0 0% 13%       // Text color (#231F20)
Muted:      50 33% 98%     // Off-white (#FCFBF4)
Border:     0 0% 50%       // Mid gray for borders
```

## Typography Scale

```typescript
// Font families
font-heading: Space Grotesk (geometric, bold)
font-sans:    Inter (clean, light to bold)

// Scale
text-xs:      0.75rem
text-sm:      0.875rem
text-base:    1rem
text-lg:      1.125rem
text-xl:      1.25rem
text-2xl:     1.5rem
text-3xl:     1.875rem
text-5xl:     3rem
text-6xl:     3.75rem
text-7xl:     4.5rem
text-9xl:     8rem
```

## Responsive Breakpoints

```typescript
sm:   640px   // Mobile landscape
md:   768px   // Tablet
lg:   1024px  // Desktop
xl:   1280px  // Large desktop
2xl:  1536px  // Extra large
```

## Key Dependencies Purpose

```
react / react-dom        → Core React framework
next                     → React framework with routing
framer-motion           → Animation library
lucide-react            → Icon library
tailwindcss             → Utility-first CSS
class-variance-authority → Component variant management
clsx / tailwind-merge   → Conditional class merging
@radix-ui/react-slot    → Polymorphic component support
```

## Component Patterns

### Standard Component Structure
```typescript
"use client";                    // Client component directive

import { motion } from "framer-motion";
import { Icon } from "lucide-react";

const data = [...];             // Static data

const variants = {...};         // Animation variants

export default function Component() {
  return (
    <section id="section" className="...">
      <motion.div
        initial={...}
        whileInView={...}
        viewport={{ once: true }}
      >
        {/* Content */}
      </motion.div>
    </section>
  );
}
```

## Data Customization Points

### Easy Updates (No code structure changes needed)
- Hero tagline & headline
- Feature list (6 services)
- Project showcase (6 projects)
- Testimonials (6 clients)
- Tech stack (15+ technologies)
- Company list (6 companies)
- Contact email
- Social media links

### Requires Code Changes
- Color palette (CSS variables)
- Typography (font imports)
- Layout structure
- Animation timings
- Section order

## Performance Optimizations

- ✅ Viewport-based animation triggers (once: true)
- ✅ Next.js Image component for optimized images
- ✅ CSS-in-JS avoided (pure Tailwind)
- ✅ Lazy loading components below fold
- ✅ Minimal external dependencies
- ✅ Tree-shakeable icon imports

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support required
- CSS Grid & Flexbox
- CSS Variables (custom properties)
- Backdrop filter support

---

**This structure is designed for easy customization while maintaining code quality and performance.**
