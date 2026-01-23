# Jindabyne Electrician Website

A modern Next.js website for Jindabyne Electrician, featuring an alpine tech-forward design aesthetic.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS (with CSS Variables)
- **Fonts:** Outfit & JetBrains Mono (Google Fonts)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Reviews.tsx
│   │   ├── ServiceAreas.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── package.json
├── next.config.js
├── tsconfig.json
└── PRD.md                # Product Requirements Document
```

## Design Features

### Alpine Tech-Forward Aesthetic
- **Typography:** Outfit (display) + JetBrains Mono (technical accents)
- **Colors:** Electric blues, warm ambers, deep charcoals
- **Effects:** Animated gradients, noise textures, smooth transitions
- **Mobile-first:** Fully responsive design

### Key Sections
1. **Hero** - Bold headline with dual CTAs
2. **Services** - 6 high-value service cards
3. **Reviews** - Customer testimonials
4. **Service Areas** - 12 locations in Snowy Mountains
5. **CTA Section** - Final conversion point

## Next Steps

### Before Launch
- [ ] Update phone number (replace `+61234567890`)
- [ ] Add real ABN and license numbers
- [ ] Set up contact form with email integration
- [ ] Integrate Google Business reviews
- [ ] Add favicon and OG images
- [ ] Set up analytics (GA4)

### Future Pages (per PRD)
- Service landing pages (residential & commercial)
- Location pages for each service area
- Programmatic service + location pages
- Blog for content marketing

## Deployment

This site is ready to deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Performance

- CSS-only animations (no JavaScript for visual effects)
- Optimized fonts with `display: swap`
- Minimal dependencies
- Scroll-triggered animations for engagement

---

**Built with distinctive design for Jindabyne Electrician**
