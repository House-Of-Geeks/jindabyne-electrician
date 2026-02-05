# Image Guide for Jindabyne Electrician Website

## Current Visual State

The site currently has **rich SVG graphics and CSS-based visuals** that provide visual depth without requiring photos:

### What's Already Visual:
- ✅ **Mountain silhouettes** - SVG clip-path layers at bottom of hero
- ✅ **Topographic contour lines** - SVG overlays showing alpine terrain
- ✅ **Electrical grid patterns** - Animated circuit diagrams in background
- ✅ **Lightning bolt icons** - Gradient SVG graphics
- ✅ **Service icons** - Animated containers with rotating gradients
- ✅ **Diagonal accents** - Angular design elements
- ✅ **Technical patterns** - Grid overlays and electrical symbols

## Where to Add Real Photos

### 1. Hero Section Background
**Priority: High**
**Location:** `app/components/Hero.tsx`

Replace the gradient background with:
```tsx
<div style={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url("/images/hero-snowy-mountains.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.15,
  zIndex: 0
}} />
```

**Recommended Image:**
- Snowy Mountains landscape with electrical infrastructure
- Power lines against mountain backdrop
- Alpine properties with electrical equipment
- Size: 1920x1080px minimum
- Format: WebP or JPEG
- Aspect ratio: 16:9

### 2. Service Showcase Images
**Priority: Medium**
**Location:** Individual service pages

Add photos to service pages showing:

**Solar Installation:**
- Solar panels on alpine home roofs
- Mountain backdrop with solar arrays
- Before/after installations
- Size: 800x600px
- Aspect ratio: 4:3

**Battery Storage:**
- Tesla Powerwall installations
- Battery systems in alpine homes
- During installation shots
- Size: 800x600px

**Starlink Installation:**
- Starlink dish on alpine properties
- Technician installing equipment
- Completed installations with mountain views
- Size: 800x600px

**Underfloor Heating:**
- Underfloor heating installation process
- Completed bathroom/kitchen floors
- Thermal imaging if available
- Size: 800x600px

### 3. Location Images
**Priority: Medium**
**Location:** Service area pages (`app/service-areas/[location]/page.tsx`)

Add location-specific images:
- Jindabyne townscape
- Thredbo village
- Perisher resort
- Charlotte Pass
- Crackenback properties
- Other service areas

**Specifications:**
- Size: 1200x800px
- Format: WebP
- Aspect ratio: 3:2

### 4. Team/About Photos
**Priority: Low**
**Location:** About page (when created)

Add team photos showing:
- Electricians on site
- Working on alpine properties
- Service vehicles
- Team in Jindabyne

**Specifications:**
- Size: 800x800px
- Aspect ratio: 1:1 or 4:3
- Professional headshots

### 5. Project Gallery
**Priority: Low**
**Location:** Portfolio/Gallery page (when created)

Add completed project photos:
- Before/after transformations
- Switchboard upgrades
- Solar installations
- Complex commercial projects

**Specifications:**
- Size: 1200x800px
- Format: WebP
- Various aspect ratios OK

## How to Add Images

### Using ImagePlaceholder Component

We've created a placeholder component that shows where images should go:

```tsx
import ImagePlaceholder from './components/ImagePlaceholder'

<ImagePlaceholder
  title="Solar Installation Photo"
  description="Photo of solar panels on alpine home roof with mountain backdrop"
  aspectRatio="16/9"
  size="large"
/>
```

### Replacing with Real Images

When you have real photos:

1. **Add images to public folder:**
   ```
   /public/images/
     hero-background.jpg
     services/
       solar-installation-1.jpg
       battery-storage-1.jpg
     locations/
       jindabyne.jpg
       thredbo.jpg
     team/
       electrician-1.jpg
   ```

2. **Replace ImagePlaceholder with Next.js Image:**
   ```tsx
   import Image from 'next/image'

   <Image
     src="/images/services/solar-installation-1.jpg"
     alt="Solar installation on Jindabyne alpine home"
     width={800}
     height={600}
     quality={85}
     priority={false}
   />
   ```

3. **Or use background images:**
   ```tsx
   <div style={{
     backgroundImage: 'url("/images/locations/jindabyne.jpg")',
     backgroundSize: 'cover',
     backgroundPosition: 'center'
   }} />
   ```

## Image Optimization Tips

1. **Use WebP format** for better compression
2. **Optimize with tools** like:
   - ImageOptim (Mac)
   - TinyPNG
   - Squoosh (web-based)
3. **Resize before upload** - don't rely on browser resizing
4. **Use Next.js Image component** for automatic optimization
5. **Add descriptive alt text** for SEO and accessibility

## Recommended Image Sizes

| Usage | Dimensions | Aspect Ratio |
|-------|-----------|--------------|
| Hero background | 1920x1080px | 16:9 |
| Service cards | 800x600px | 4:3 |
| Location headers | 1200x800px | 3:2 |
| Team photos | 800x800px | 1:1 |
| Gallery images | 1200x800px | 3:2 |
| Mobile hero | 1080x1920px | 9:16 |

## Image Sources

**Recommended approaches:**
1. **Custom photography** - Hire local photographer in Jindabyne
2. **Stock photos** - Unsplash, Pexels (free), or iStock (paid)
3. **Client projects** - Ask permission to photograph completed work
4. **Local partnerships** - Partner with Snowy Mountains tourism for location shots

**Search terms for stock photos:**
- "snowy mountains australia"
- "alpine electrician"
- "solar panels mountains"
- "jindabyne landscape"
- "electrical work commercial"
- "underfloor heating installation"

## Current State is Production-Ready

**Important:** The site is already visually complete with SVG graphics and doesn't *require* photos to launch. The visual design uses:
- Technical SVG patterns
- Mountain silhouettes
- Circuit diagrams
- Animated icons
- Gradient overlays

Photos will enhance trust and authenticity but aren't blocking for launch.

## Next Steps

1. **Phase 1 (Launch):** Use current SVG graphics ✅ Already done
2. **Phase 2 (Post-launch):** Add hero background image
3. **Phase 3 (Growth):** Add service photos
4. **Phase 4 (Scale):** Add project gallery and team photos

---

**Status:** Site has rich visual design with SVG graphics. Photos are optional enhancement for trust/authenticity.
