# Denim - Tech Consultancy Website

A modern, avant-garde single-page website for Denim, a tech consultancy that builds SaaS products, web apps, and automation tools.

## 🎨 Design Philosophy

- **Dark & Sleek**: High-contrast neon accents with smooth motion
- **Futuristic**: Modern, confident aesthetic with geometric sans-serif typography
- **Minimalist**: Airy spacing with asymmetrical rhythm

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings), Inter (body)

## 🎨 Color Palette

```css
Primary: #FE019A (Hot Pink)
Secondary: #E9FF32 (Neon Yellow)
Foreground: #231F20 (Dark Gray)
Background: #0a0a0a to #1a1a1a (Gradient)
Muted: #FCFBF4 (Off White)
```

## 📁 Project Structure

```
dnm-26/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Header.tsx          # Floating navigation header
│   ├── Hero.tsx            # Bold intro with CTA
│   ├── SocialProof.tsx     # Trusted companies & stats
│   ├── Features.tsx        # Core services showcase
│   ├── Showcase.tsx        # Project portfolio grid
│   ├── Testimonials.tsx    # Client feedback cards
│   ├── Contact.tsx         # Contact form/CTA
│   ├── Footer.tsx          # Site footer
│   ├── TechStackMarquee.tsx # Animated tech stack
│   ├── AnimatedDivider.tsx  # Section divider
│   └── ui/
│       └── Button.tsx      # Reusable button component
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── next.config.js          # Next.js configuration
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "next": "^14.2.0",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.344.0",
  "tailwindcss": "^3.4.0",
  "class-variance-authority": "^0.7.0",
  "@radix-ui/react-slot": "^1.0.2",
  "tailwindcss-animate": "^1.0.7"
}
```

## 🎭 Features

### Section Overview

1. **Hero** - Bold introduction with animated background, tagline, and CTA buttons
2. **Social Proof** - Trusted companies and impressive stats
3. **Features** - 6 core services with icons and hover effects
4. **Tech Stack Marquee** - Infinite scroll of technologies
5. **Showcase** - 6 project cards with images and hover animations
6. **Testimonials** - Client feedback with profile pictures
7. **Contact** - Email CTA and social links

### Animations

- Scroll-triggered reveals with Framer Motion
- Smooth entrance animations
- Hover effects on cards and buttons
- Floating background elements
- Infinite marquee animations
- Pulsing gradient text

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Fluid typography and spacing
- Touch-friendly interactions

## 🎨 Customization

### Update Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 321 99% 50%;      /* Hot Pink */
  --secondary: 66 100% 59%;    /* Neon Yellow */
  /* ... other variables */
}
```

### Update Content

- **Hero tagline**: Edit `components/Hero.tsx`
- **Services**: Modify the `features` array in `components/Features.tsx`
- **Projects**: Update the `projects` array in `components/Showcase.tsx`
- **Testimonials**: Change the `testimonials` array in `components/Testimonials.tsx`
- **Technologies**: Edit the `technologies` array in `components/TechStackMarquee.tsx`

### Update Images

Replace placeholder images from Pexels with your own:
- Add images to `/public` directory
- Update image URLs in component files
- Configure domains in `next.config.js` if using external images

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- All components use TypeScript for type safety
- Framer Motion handles all animations
- Tailwind CSS for styling with custom theme
- Images are placeholder URLs from Pexels (replace with actual assets)
- Email links use `mailto:hello@denim.tech` (update with real email)
- Social links are placeholders (add real URLs)

## 🎯 Performance Tips

- Optimize images with Next.js Image component
- Lazy load components below the fold
- Use `viewport={{ once: true }}` for animations
- Keep bundle size minimal
- Enable edge caching for static assets

## 📄 License

MIT License - Feel free to use this template for your own projects!

---

**Built with 💜 by Denim**
