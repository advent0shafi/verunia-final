"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import planningIdeasImage from "@/public/hero-image/image-03.png";
import Link from "next/link";

export default function FurniturePlanningIdeasSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawParallaxY = useTransform(scrollYProgress, [0, 1], [-26, 26]);
  const smoothParallaxY = useSpring(rawParallaxY, {
    stiffness: 95,
    damping: 24,
    mass: 0.42,
  });

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] px-4 pb-[44px] md:px-6 md:pb-[72px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="relative overflow-hidden rounded-md min-h-[280px] md:min-h-[420px]">
          <motion.div
            className="absolute inset-0"
            style={
              prefersReducedMotion
                ? undefined
                : { y: smoothParallaxY, willChange: "transform" }
            }
          >
            <Image
              src={planningIdeasImage}
              alt="Planning ideas for modern furniture layouts"
              fill
              quality={82}
              sizes="100vw"
              className="object-cover scale-[1.08]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/50"/>

          <div className="relative z-10 flex min-h-[280px] md:min-h-[420px] items-center justify-center text-center">
            <div>
              <h2 className="font-helvetica text-[36px] text-white font-medium leading-[1.05] tracking-[-0.02em] text-[#1F1F1F] md:text-[56px]">
                Planning Ideas
              </h2>

              <Link href="/contact">    
              <p
                className="mt-2 cursor-pointer font-instrument text-white text-[20px] font-medium leading-[30px] text-[#2A2A2A] underline-offset-4 transition hover:underline md:mt-3 md:text-[28px] md:leading-[36px]"
                >
                  Get Inspired
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
