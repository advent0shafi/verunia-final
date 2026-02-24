'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductThumbnailsProps {
  thumbnails: string[];
  onSelect: (img: string) => void;
  selected: string;
}

export default function ProductThumbnails({ thumbnails, onSelect, selected }: ProductThumbnailsProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent">
      {thumbnails.map((thumb, idx) => {
        const isActive = selected === thumb;
        return (
          <motion.button
            key={idx}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(thumb)}
            className={`
              relative shrink-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] 
              bg-[#F5F5F4] rounded-[6px] transition-all duration-300 overflow-hidden
              border-2 ${isActive ? 'border-[#8B4513] shadow-md' : 'border-transparent hover:border-[#E5E1D6]'}
            `}
          >
            <Image
              src={thumb}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className={`object-contain p-2 transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
            />
            {isActive && (
              <motion.div
                layoutId="active-thumb-overlay"
                className="absolute inset-0 bg-[#8B4513]/5"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
