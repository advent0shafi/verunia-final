'use client';

import Image from 'next/image';

interface ProductThumbnailsProps {
  thumbnails: string[];
  onSelect: (img: string) => void;
  selected: string;
}

export default function ProductThumbnails({ thumbnails, onSelect, selected }: ProductThumbnailsProps) {
  return (
    <div className="mt-[16px] flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
      {thumbnails.map((thumb, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(thumb)}
          className={` w-[109px] border h-[109px] hover:pointer-fine:  bg-[#F5F5F4] rounded-[4px] transition-all ${
            selected === thumb ? 'border-[#8B4513]' : 'border-[#57534E]'
          }`}
        >
          <Image
            src={thumb}
            alt={`Thumbnail ${idx + 1}`}
            width={109}
            height={109}
            className="object-contain w-[109px] h-[109px]"
          />
        </button>
      ))}
    </div>
  );
}