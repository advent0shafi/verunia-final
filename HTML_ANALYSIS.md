# HTML Analysis Report - Discovery Builders Website

## 📦 Third-Party Libraries & Services Identified

### 1. **UI Component Libraries**
- **Ant Design** (`ant-*` classes)
  - Modals, Drawers, Messages, Forms, Tooltips
  - Installation: `npm install antd`
  
- **Radix UI** (Already in your project ✅)
  - You already have Radix UI components installed

### 2. **3D Graphics & Visualization**
- **Three.js** (`data-engine="three.js r147"`)
  - Already in your project ✅ (`three@^0.182.0`)
  - Used for interactive 3D globe
  
- **React Three Fiber** (Already in your project ✅)
  - `@react-three/fiber` and `@react-three/drei`

- **Three Globe** (Already in your project ✅)
  - `three-globe@^2.45.0` - Perfect for globe visualization

### 3. **Styling**
- **Tailwind CSS** (Already in your project ✅)
  - Extensive utility classes used throughout

### 4. **Animation Libraries**
- **Framer Motion** (Already in your project ✅)
  - `motion@^12.26.2` - Used for animations

### 5. **Carousel/Slider**
- **React Responsive Carousel** (commented in HTML)
  - Alternative: You already have `embla-carousel-react` ✅

### 6. **Browser Extensions**
- **Plasmo** (`<plasmo-csui>`) - Browser extension framework
  - Not needed for your project

### 7. **Chat Widget**
- **Custom Chat UI** (`.cs-*` classes)
  - Appears to be a custom implementation
  - Could use: `@chatscope/chat-ui-kit-react` or build custom

### 8. **Security**
- **Google reCAPTCHA** (`.grecaptcha-badge`)
  - Installation: `npm install react-google-recaptcha`

---

## 🎨 Key Features & Elements

### 1. **Navigation**
- Fixed header with logo
- Mobile hamburger menu
- Desktop horizontal navigation
- Smooth menu transitions

### 2. **Hero Section**
- Full-screen hero with parallax background
- Multiple layered images with different scroll speeds
- Animated text reveals
- Scroll-down button

### 3. **Interactive 3D Globe**
- Interactive globe with clickable locations
- Location markers (Construction Management vs General Contractor)
- Modal popup with location details
- Navigation between locations

### 4. **Image Galleries**
- Scale grid layout
- Parallax scrolling images
- Lazy loading images
- Image masks and reveals

### 5. **Text Animations**
- Text reveal on scroll
- Line-by-line animations
- Mask animations

### 6. **Parallax Effects**
- Multiple parallax layers
- Different scroll speeds (`data-speed` attributes)
- Background gradients

### 7. **Modals & Popups**
- Globe location modal
- Full-screen modals
- Slide-in animations
- Close buttons

### 8. **Forms**
- Contact forms
- Input fields with custom styling
- Validation

### 9. **Footer**
- Multi-column layout
- Links and navigation
- Pattern background

---

## 🚀 How to Add These Features to Your Project

### 1. **Interactive 3D Globe** (You already have the libraries!)

```bash
# Already installed:
# - three@^0.182.0
# - @react-three/fiber
# - @react-three/drei
# - three-globe@^2.45.0
```

**Implementation:**
```tsx
// components/globe/interactive-globe.tsx
'use client'

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Globe from 'three-globe'

export function InteractiveGlobe({ locations = [] }) {
  const globeRef = useRef<Globe>()
  
  return (
    <Canvas camera={{ position: [0, 0, 300], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        pointsData={locations}
        pointColor="color"
        pointRadius={2}
        pointLabel="name"
      />
      <OrbitControls enableZoom={true} />
      <Stars />
    </Canvas>
  )
}
```

### 2. **Parallax Scrolling**

```tsx
// components/parallax/parallax-section.tsx
'use client'

import { useScroll, useTransform, motion } from 'motion/react'

export function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  return (
    <motion.div style={{ y }}>
      {/* Your content */}
    </motion.div>
  )
}
```

### 3. **Text Reveal Animations**

```tsx
// components/animations/text-reveal.tsx
'use client'

import { motion } from 'motion/react'
import { useInView } from 'motion/react'

export function TextReveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
```

### 4. **Image Carousel** (You have Embla!)

```tsx
// Already have embla-carousel-react
import useEmblaCarousel from 'embla-carousel-react'

export function ImageCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true })
  
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((img, i) => (
          <div key={i} className="flex-[0_0_100%]">
            <Image src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
```

### 5. **Modal System** (Use Radix UI Dialog)

```tsx
// Already have @radix-ui/react-dialog
import * as Dialog from '@radix-ui/react-dialog'

export function LocationModal({ location, open, onOpenChange }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Modal content */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

---

## 📋 Recommended Additions

### Install Missing Libraries:

```bash
# For forms and validation (if needed)
npm install react-hook-form zod @hookform/resolvers

# For reCAPTCHA (if needed)
npm install react-google-recaptcha

# For advanced animations (optional)
npm install gsap

# For smooth scrolling
npm install lenis
```

### Already Have (No need to install):
- ✅ Three.js & React Three Fiber
- ✅ Tailwind CSS
- ✅ Framer Motion
- ✅ Radix UI components
- ✅ Embla Carousel
- ✅ Next.js Image optimization

---

## 🎯 Implementation Priority

### High Priority:
1. **3D Globe** - You have all libraries, just need to implement
2. **Parallax Effects** - Use Framer Motion (already installed)
3. **Text Reveal** - Use Framer Motion animations

### Medium Priority:
4. **Image Carousels** - Use Embla (already installed)
5. **Modals** - Use Radix UI Dialog (already installed)

### Low Priority:
6. **Chat Widget** - Custom implementation or third-party
7. **reCAPTCHA** - Only if needed for forms

---

## 💡 Key Takeaways

1. **You already have 80% of what you need!**
   - Three.js ecosystem ✅
   - Animation library ✅
   - UI components ✅
   - Carousel ✅

2. **Main additions needed:**
   - Implementation code for globe
   - Parallax wrapper components
   - Text reveal components

3. **The HTML uses:**
   - Custom CSS classes (you can replicate with Tailwind)
   - Ant Design (you can use Radix UI instead)
   - Custom chat widget (optional)

Would you like me to create specific components for any of these features?
