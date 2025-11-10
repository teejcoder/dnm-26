# 🚀 Quick Start Guide

Get your Denim website up and running in minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- Framer Motion
- Tailwind CSS
- Lucide Icons
- And more...

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

### 3. Build for Production

```bash
npm run build
npm start
```

## First Steps After Installation

### Update Content

1. **Company Name & Branding**
   - Update "DENIM" in `components/Header.tsx`
   - Change footer text in `components/Footer.tsx`
   - Modify metadata in `app/layout.tsx`

2. **Hero Section**
   - Edit tagline and headline in `components/Hero.tsx`
   - Update CTA button text and links

3. **Contact Email**
   - Replace `hello@denim.tech` with your email in:
     - `components/Contact.tsx` (2 locations)

4. **Social Links**
   - Add real URLs in `components/Contact.tsx`
   - Update the `socialLinks` array

### Replace Placeholder Images

Current images are from Pexels. Replace them with your own:

1. Add images to `/public/images/`
2. Update image URLs in:
   - `components/Showcase.tsx` (project images)
   - `components/Testimonials.tsx` (client photos)

3. If using external images, add domains to `next.config.js`:

```js
module.exports = {
  images: {
    domains: ['your-cdn-domain.com'],
  },
}
```

### Customize Services

Edit the `features` array in `components/Features.tsx`:

```typescript
const features = [
  {
    icon: YourIcon,
    title: "Your Service",
    description: "Your description",
    color: "from-blue-500 to-cyan-400",
  },
  // Add more services...
];
```

### Update Projects

Modify the `projects` array in `components/Showcase.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    category: "Category",
    description: "Description",
    image: "/images/your-project.jpg",
    gradient: "from-primary to-pink-500",
  },
  // Add more projects...
];
```

## Customization Tips

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: 321 99% 50%;      /* Your primary color */
  --secondary: 66 100% 59%;    /* Your secondary color */
}
```

### Add New Sections

1. Create component in `/components/YourSection.tsx`
2. Import and add to `app/page.tsx`
3. Add navigation link to `components/Header.tsx`

### Modify Animations

Adjust Framer Motion settings in components:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

## Common Issues

### Port Already in Use

If port 3000 is taken, specify a different port:

```bash
npm run dev -- -p 3001
```

### TypeScript Errors

The linting errors shown during file creation are expected before `npm install` runs. They'll disappear once dependencies are installed.

### Images Not Loading

1. Check image URLs are correct
2. Verify domains are allowed in `next.config.js`
3. Ensure images are in `/public` directory

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure everything!

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

## Project Structure

```
📁 app/           # Next.js app directory
  ├── layout.tsx  # Root layout
  ├── page.tsx    # Main page
  └── globals.css # Global styles

📁 components/    # React components
  ├── Hero.tsx
  ├── Features.tsx
  └── ...

📁 lib/          # Utility functions
  └── utils.ts

📁 public/       # Static assets (add images here)
```

## Next Steps

- [ ] Replace all placeholder content
- [ ] Add your own images
- [ ] Update contact information
- [ ] Customize colors if needed
- [ ] Test on mobile devices
- [ ] Deploy to production

## Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Consult Next.js docs: https://nextjs.org/docs
- Framer Motion docs: https://www.framer.com/motion/

---

**Happy Building! 🎨✨**
