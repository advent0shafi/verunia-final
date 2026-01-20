# Implementation Guide - Adding Features from Discovery Builders

## 🎯 Quick Start: What You Need to Add

### 1. Install Missing Dependencies (Optional)

```bash
# Only if you need reCAPTCHA
npm install react-google-recaptcha

# For smooth scroll (optional but recommended)
npm install lenis
```

---

## 📦 Component Implementations

### 1. Interactive 3D Globe Component

Create: `components/globe/interactive-globe.tsx`

```tsx
'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import Globe from 'three-globe'
import * as THREE from 'three'

interface Location {
  id: number
  name: string
  lat: number
  lng: number
  type: 'cm' | 'gc' // Construction Management or General Contractor
}

interface InteractiveGlobeProps {
  locations: Location[]
  onLocationClick?: (location: Location) => void
}

function GlobeComponent({ locations, onLocationClick }: InteractiveGlobeProps) {
  const globeRef = useRef<Globe>()
  
  useEffect(() => {
    if (!globeRef.current) return
    
    const globe = globeRef.current
    
    // Configure globe
    globe
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .pointsData(locations)
      .pointColor((d: any) => d.type === 'cm' ? '#E889A2' : '#47952C')
      .pointRadius(0.5)
      .pointLabel((d: any) => d.name)
      .pointResolution(2)
      .onPointClick((point: any) => {
        onLocationClick?.(point)
      })
  }, [locations, onLocationClick])
  
  return <primitive object={globeRef.current} />
}

export function InteractiveGlobe({ locations, onLocationClick }: InteractiveGlobeProps) {
  return (
    <div className="w-full h-[50vw] relative">
      <Canvas camera={{ position: [0, 0, 300], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <GlobeComponent locations={locations} onLocationClick={onLocationClick} />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={200}
          maxDistance={500}
        />
        <Stars radius={300} depth={50} count={5000} factor={4} />
      </Canvas>
    </div>
  )
}
```

### 2. Parallax Image Component

Create: `components/parallax/parallax-image.tsx`

```tsx
'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
}

export function ParallaxImage({ 
  src, 
  alt, 
  speed = 0.5,
  className = '' 
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}
```

### 3. Text Reveal Component

Create: `components/animations/text-reveal.tsx`

```tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface TextRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
}

export function TextReveal({ 
  children, 
  delay = 0,
  className = '',
  as: Component = 'div'
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3,
    margin: '0px 0px -100px 0px'
  })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  )
}
```

### 4. Line-by-Line Text Reveal

Create: `components/animations/line-reveal.tsx`

```tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface LineRevealProps {
  text: string
  className?: string
  delay?: number
}

export function LineReveal({ text, className = '', delay = 0 }: LineRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const lines = text.split('\n')
  
  return (
    <div ref={ref} className={className}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: delay + index * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="overflow-hidden"
        >
          {line || '\u00A0'}
        </motion.div>
      ))}
    </div>
  )
}
```

### 5. Location Modal Component

Create: `components/modals/location-modal.tsx`

```tsx
'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

interface Location {
  id: number
  name: string
  location: string
  lat: number
  lng: number
  type: 'cm' | 'gc'
  website?: string
}

interface LocationModalProps {
  location: Location | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LocationModal({ location, open, onOpenChange }: LocationModalProps) {
  if (!location) return null
  
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <>
            <Dialog.Portal>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/40 z-50"
                />
              </Dialog.Overlay>
              
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 max-w-2xl w-full z-50"
                >
                  <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full">
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                  
                  <Dialog.Title className="text-3xl font-bold mb-4">
                    {location.name}
                  </Dialog.Title>
                  
                  <Dialog.Description className="text-gray-600 mb-4">
                    {location.location}
                  </Dialog.Description>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-500">
                      {location.lat}° N / {location.lng}° W
                    </p>
                    <div className="flex items-center gap-2">
                      <span 
                        className={`w-4 h-4 rounded-full ${
                          location.type === 'cm' ? 'bg-[#E889A2]' : 'bg-[#47952C]'
                        }`}
                      />
                      <span className="text-sm">
                        {location.type === 'cm' ? 'Construction Management' : 'General Contractor'}
                      </span>
                    </div>
                  </div>
                  
                  {location.website && (
                    <a 
                      href={location.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit site →
                    </a>
                  )}
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          </>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
```

### 6. Smooth Scroll Setup

Create: `lib/smooth-scroll.ts`

```tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}
```

Then add to your layout:

```tsx
// app/layout.tsx
import { useSmoothScroll } from '@/lib/smooth-scroll'

export default function RootLayout({ children }) {
  useSmoothScroll() // Add this
  
  return (
    // ... rest of layout
  )
}
```

---

## 🎨 Usage Examples

### Example 1: Hero Section with Parallax

```tsx
'use client'

import { ParallaxImage } from '@/components/parallax/parallax-image'
import { TextReveal } from '@/components/animations/text-reveal'

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <ParallaxImage 
        src="/hero-bg.jpg"
        alt="Hero background"
        speed={0.3}
        className="absolute inset-0"
      />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <TextReveal as="h1" className="text-6xl font-bold text-white">
          Elevate your escape
        </TextReveal>
      </div>
    </section>
  )
}
```

### Example 2: Globe with Locations

```tsx
'use client'

import { useState } from 'react'
import { InteractiveGlobe } from '@/components/globe/interactive-globe'
import { LocationModal } from '@/components/modals/location-modal'

const locations = [
  {
    id: 1,
    name: 'Discovery Dunes',
    location: 'Dubai, UAE',
    lat: 39.086,
    lng: -120.160,
    type: 'cm' as const
  },
  // ... more locations
]

export function GlobeSection() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <section className="py-20">
      <InteractiveGlobe 
        locations={locations}
        onLocationClick={(location) => {
          setSelectedLocation(location)
          setModalOpen(true)
        }}
      />
      
      <LocationModal
        location={selectedLocation}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
```

---

## 📝 Next Steps

1. **Create the component files** listed above
2. **Test the globe** with sample location data
3. **Add parallax** to your existing sections
4. **Implement text reveals** on your headlines
5. **Style with Tailwind** to match your design system

All the core libraries are already installed! You just need to implement the components.
