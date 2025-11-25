# 🎨 Customization Guide

Complete guide to customizing your Denim website.

## Quick Customization Checklist

### 🔥 Essential (Do First)
- [ ] Update company name in Header
- [ ] Change email address in Contact section
- [ ] Replace placeholder images
- [ ] Update hero tagline and headline
- [ ] Add real social media links
- [ ] Modify metadata (title, description)

### 🎯 Content Updates
- [ ] Customize features/services
- [ ] Add your projects to showcase
- [ ] Update testimonials
- [ ] Modify tech stack list
- [ ] Update company names in social proof

### 🎨 Visual Customization
- [ ] Adjust color palette (optional)
- [ ] Fine-tune animations
- [ ] Modify typography (optional)

---

## 1. Company Branding

### Update Company Name

**File: `components/Header.tsx`** (Line 53)
```typescript
<a href="#hero" className="...">
  YOUR COMPANY  {/* Change from DENIM */}
</a>
```

**File: `components/Footer.tsx`** (Line 13)
```typescript
<span className="...">YOUR COMPANY</span>
<span className="...">Your Tagline</span>
```

**File: `app/layout.tsx`** (Lines 18-20)
```typescript
export const metadata: Metadata = {
  title: "Your Company | Tech Consultancy",
  description: "Your custom description here.",
  keywords: ["your", "keywords", "here"],
};
```

---

## 2. Contact Information

### Email Address

**File: `components/Contact.tsx`**

Replace `hello@denim.tech` in:
- Line 70 (display)
- Line 68 (mailto link)
- Line 118 (CTA button)

```typescript
<a href="mailto:your@email.com">
  your@email.com
</a>
```

### Social Media Links

**File: `components/Contact.tsx`** (Lines 8-12)
```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/yourcompany", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/yourcompany", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/yourcompany", label: "LinkedIn" },
];
```

---

## 3. Hero Section

**File: `components/Hero.tsx`**

### Eyebrow Text (Line 62)
```typescript
<span className="...">Your custom eyebrow text</span>
```

### Main Headline (Lines 72-76)
```typescript
<h1 className="...">
  <span>Your opening</span>
  <br />
  <span>your highlight</span>
</h1>
```

### Subheadline (Line 85)
```typescript
<p className="...">
  Your custom subheadline that describes what you do.
</p>
```

### CTA Buttons (Lines 101-113)
```typescript
<Button>
  <a href="#contact">
    Your Button Text
  </a>
</Button>
```

---

## 4. Services/Features

**File: `components/Features.tsx`** (Lines 6-42)

### Add/Remove Services
```typescript
const features = [
  {
    icon: YourIconFromLucide,  // Import from lucide-react
    title: "Your Service Name",
    description: "Detailed description of your service.",
    color: "from-blue-500 to-cyan-400",  // Tailwind gradient
  },
  // Add more services...
];
```

### Available Icons
Import from `lucide-react`:
- `Code2`, `Rocket`, `Zap`, `Layout`, `Database`, `Cog`
- `Shield`, `Globe`, `Cpu`, `Cloud`, `Lock`, `Sparkles`
- Browse all: https://lucide.dev/icons/

### Gradient Colors
Choose from Tailwind gradients:
```typescript
"from-blue-500 to-cyan-400"
"from-purple-500 to-pink-500"
"from-green-500 to-emerald-400"
"from-orange-500 to-red-400"
"from-yellow-400 to-orange-500"
```

### Section Header (Lines 75-78)
```typescript
<h2>
  Your <span>highlight</span>
</h2>
<p>Your section description</p>
```

---

## 5. Project Showcase

**File: `components/Showcase.tsx`** (Lines 8-49)

### Update Projects
```typescript
const projects = [
  {
    title: "Project Name",
    category: "Project Type",  // e.g., "SaaS Product", "Web App"
    description: "Brief description of the project.",
    image: "/images/your-project.jpg",  // Local or URL
    gradient: "from-primary to-pink-500",
  },
  // Add more projects...
];
```

### Using Local Images
1. Create `/public/images/` directory
2. Add images there
3. Reference as `/images/filename.jpg`

### Using External Images
1. Upload to CDN or image host
2. Add domain to `next.config.js`:
```javascript
module.exports = {
  images: {
    domains: ['your-cdn.com', 'images.pexels.com'],
  },
}
```

---

## 6. Testimonials

**File: `components/Testimonials.tsx`** (Lines 8-43)

### Update Client Feedback
```typescript
const testimonials = [
  {
    name: "Client Name",
    role: "Title, Company",
    image: "/images/clients/client-photo.jpg",
    quote: "The testimonial text goes here.",
  },
  // Add more testimonials...
];
```

### Tips for Great Testimonials
- Keep quotes under 200 characters
- Include specific results or benefits
- Use professional headshots (square format)
- Mix different company sizes/industries

---

## 7. Tech Stack

**File: `components/TechStackMarquee.tsx`** (Lines 5-20)

### Update Technologies
```typescript
const technologies = [
  "Your Tech 1",
  "Your Tech 2",
  "Your Tech 3",
  // Add 12-20 items for best visual effect
];
```

### Animation Speed
Line 38 - Adjust duration (higher = slower):
```typescript
duration: 20,  // Default is 20 seconds
```

---

## 8. Social Proof

**File: `components/SocialProof.tsx`**

### Company Names (Lines 5-12)
```typescript
const companies = [
  "COMPANY1",
  "COMPANY2",
  "COMPANY3",
  // Add 4-8 companies
];
```

### Statistics (Lines 14-18)
```typescript
const stats = [
  { value: "100+", label: "Your Metric" },
  { value: "99%", label: "Your Metric" },
  { value: "5x", label: "Your Metric" },
];
```

---

## 9. Color Customization

**File: `app/globals.css`** (Lines 6-19)

### Update Color Palette
```css
:root {
  --primary: 321 99% 50%;      /* Your primary color (HSL) */
  --secondary: 66 100% 59%;    /* Your secondary color (HSL) */
  --background: 35 12% 13%;    /* Background darkness */
  /* ... other variables */
}
```

### Converting HEX to HSL
1. Use online converter: https://htmlcolors.com/hex-to-hsl
2. Enter your HEX color (e.g., #FE019A)
3. Get HSL values (e.g., 321 99% 50%)
4. Use format: `hue saturation% lightness%`

### Quick Color Presets

**Electric Blue**
```css
--primary: 210 100% 50%;
--secondary: 180 100% 50%;
```

**Vibrant Purple**
```css
--primary: 270 100% 60%;
--secondary: 330 100% 60%;
```

**Neon Green**
```css
--primary: 120 100% 50%;
--secondary: 160 100% 50%;
```

---

## 10. Typography

**File: `app/layout.tsx`** (Lines 6-14)

### Change Fonts
```typescript
import { YourFont, AnotherFont } from "next/font/google";

const headingFont = YourFont({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
});

const bodyFont = AnotherFont({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
});
```

### Popular Font Combinations
- **Modern**: Space Grotesk + Inter (current)
- **Professional**: Poppins + Open Sans
- **Elegant**: Playfair Display + Source Sans Pro
- **Tech**: JetBrains Mono + IBM Plex Sans
- **Bold**: Montserrat + Lato

Browse fonts: https://fonts.google.com/

---

## 11. Animation Timing

### Adjust Animation Speed

**Entrance Animations**
Default: `duration: 0.6`

Faster: `duration: 0.4`
Slower: `duration: 0.8`

**Stagger Delay**
Default: `staggerChildren: 0.1`

Faster: `staggerChildren: 0.05`
Slower: `staggerChildren: 0.15`

### Example in `components/Features.tsx`:
```typescript
variants={containerVariants}
// Change duration in itemVariants (line 48)
transition={{ duration: 0.4 }}  // Make faster
```

---

## 12. Layout Adjustments

### Section Spacing

**Current**: `py-32` (128px top/bottom)

Tighter: `py-20` (80px)
Looser: `py-40` (160px)

**Apply to all section tags:**
```typescript
<section className="py-32 px-6">  // Change py-32
```

### Content Width

**Current**: `max-w-7xl` (1280px)

Narrower: `max-w-6xl` (1152px)
Wider: `max-w-[1400px]`

**Apply to containers:**
```typescript
<div className="container max-w-7xl">  // Change max-w-7xl
```

---

## 13. Mobile Optimization

### Hide Elements on Mobile

Add responsive classes:
```typescript
className="hidden md:block"  // Hide on mobile, show on tablet+
className="md:hidden"        // Show on mobile, hide on tablet+
```

### Mobile-Specific Sizing
```typescript
className="text-4xl md:text-6xl"  // Smaller on mobile
className="px-4 md:px-8"           // Less padding on mobile
```

---

## 14. SEO Optimization

**File: `app/layout.tsx`**

### Update Metadata
```typescript
export const metadata: Metadata = {
  title: "Your Title | Your Brand",
  description: "150-160 character description for search results",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Title",
    description: "Your description",
    images: ["/og-image.jpg"],
  },
};
```

### Add Favicon
Place files in `/app/`:
- `favicon.ico`
- `icon.png`
- `apple-icon.png`

---

## 15. Performance Tips

### Optimize Images
- Use WebP format when possible
- Compress images (TinyPNG, Squoosh)
- Keep file sizes under 200KB
- Use Next.js Image component (already implemented)

### Lazy Load Heavy Sections
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <div>Loading...</div>,
});
```

---

## Common Customization Scenarios

### Scenario 1: Add a New Section

1. Create component file:
```typescript
// components/NewSection.tsx
export default function NewSection() {
  return (
    <section id="new-section">
      {/* Your content */}
    </section>
  );
}
```

2. Import in `app/page.tsx`:
```typescript
import NewSection from "@/components/NewSection";
```

3. Add to page:
```typescript
<NewSection />
<AnimatedDivider />  // Add divider if needed
```

4. Update Header navigation:
```typescript
// components/Header.tsx
{ name: "New", href: "#new-section" }
```

### Scenario 2: Remove a Section

1. Comment out in `app/page.tsx`:
```typescript
{/* <Features /> */}
```

2. Remove from Header navigation
3. Keep component file in case you want it back

### Scenario 3: Change Section Order

Reorder imports and components in `app/page.tsx`:
```typescript
<Hero />
<Showcase />  {/* Moved up */}
<Features />  {/* Moved down */}
```

---

## Testing Your Changes

### Development Checklist
- [ ] Check mobile responsiveness (iPhone, Android)
- [ ] Test tablet view (iPad)
- [ ] Verify all links work
- [ ] Check animations play smoothly
- [ ] Test form/mailto links
- [ ] Validate on multiple browsers
- [ ] Check page load speed
- [ ] Verify images load correctly

### Tools
- Chrome DevTools (Responsive mode)
- Lighthouse (Performance audit)
- PageSpeed Insights
- Real devices when possible

---

## Getting Help

### Documentation Files
- `README.md` - Full project documentation
- `QUICKSTART.md` - Setup instructions
- `STRUCTURE.md` - Project architecture
- This file - Customization guide

### External Resources
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/

---

**Save your changes frequently and test as you go! 🚀**
