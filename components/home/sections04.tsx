"use client";

import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    // Warm dark globe + gold/orange accents (matches the provided reference image)
    globeColor: "#135195",
    showAtmosphere: true,
    atmosphereColor: "#FCE7D1",
    atmosphereAltitude: 0.06,
    emissive: "#000000",
    emissiveIntensity: 0.15,
    shininess: 0.8,
    polygonColor: "rgba(238, 186, 120, 0.35)",
    ambientLight: "#FDBA74",
    directionalLeftLight: "#FFE6CC",
    directionalTopLight: "#FFD8B0",
    pointLight: "#FFB36A",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#8FC4F0", "#8FC4F0", "#8FC4F0"];
  const pickColor = () => colors[Math.floor(Math.random() * colors.length)];
  const sampleArcs = [
    // Canada → Antwerpen (Belgium)
    {
      order: 1,
      startLat: 43.6532,   // Toronto, Canada
      startLng: -79.3832,
      endLat: 51.2194,     // Antwerpen
      endLng: 4.4025,
      arcAlt: 0.3,
      color: pickColor(),
      startLabel: "Toronto",
      endLabel: "Antwerpen",
    },

    // Antwerpen → Huajian (China)
    {
      order: 2,
      startLat: 51.2194,
      startLng: 4.4025,
      endLat: 31.2304,     // Huajian / Shanghai region
      endLng: 121.4737,
      arcAlt: 0.5,
      color: pickColor(),
      endLabel: "Shanghai",
    },

    // Huajian (China) → Seoul Yongsan
    {
      order: 3,
      startLat: 31.2304,
      startLng: 121.4737,
      endLat: 37.5326,     // Yongsan, Seoul
      endLng: 126.9906,
      arcAlt: 0.2,
      color: pickColor(),
      endLabel: "Seoul",
    },

    // Seoul Yongsan → Indonesia
    {
      order: 4,
      startLat: 37.5326,
      startLng: 126.9906,
      endLat: -6.2088,     // Jakarta
      endLng: 106.8456,
      arcAlt: 0.4,
      color: pickColor(),
      endLabel: "Jakarta",
    },

    // Indonesia → Saudi Arabia
    {
      order: 5,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 24.7136,     // Riyadh
      endLng: 46.6753,
      arcAlt: 0.6,
      color: pickColor(),
      endLabel: "Riyadh",
    },

    // Saudi Arabia → Oman
    {
      order: 6,
      startLat: 24.7136,
      startLng: 46.6753,
      endLat: 23.5880,     // Muscat
      endLng: 58.3829,
      arcAlt: 0.2,
      color: pickColor(),
      endLabel: "Muscat",
    },

    // Oman → UAE
    {
      order: 7,
      startLat: 23.5880,
      startLng: 58.3829,
      endLat: 25.2048,     // Dubai
      endLng: 55.2708,
      arcAlt: 0.15,
      color: pickColor(),
      endLabel: "Dubai",
    },

    // UAE → Canada (closing the global loop)
    {
      order: 8,
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 43.6532,
      endLng: -79.3832,
      arcAlt: 0.7,
      color: pickColor(),
    },
  ];


  return (
    <div className="flex flex-row items-center  justify-center   md:h-auto dark:bg-black  relative w-full">
      <div className="md:max-w-[1440px] md:mx-auto w-full   relative overflow-hidden h-full  md:px-4">
        <div className="div ">
          <h1 className="text-center font-serif text-[28px] md:text-5xl lg:text-7xl mb-6 md:mb-16 leading-[1.2] md:leading-tight px-4 md:px-0">
            Delivering projects across<br />
            <span className="font-bold">GCC and beyond.</span>
          </h1>
        </div>
        {/* Fixed-size globe viewport (1246×589) + crop so only half the globe shows */}
        <div className="relative md:mx-auto md:mt-10 w-full  md:h-[689px] h-[330.10791015625px] overflow-hidden z-10">
          <div className="absolute  inset-x-0 -bottom-[80%] h-[190%] w-full">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}
