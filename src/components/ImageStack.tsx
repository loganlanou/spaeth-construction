'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/construction-1.jpg',
    alt: 'Construction workers at a building site',
  },
  {
    src: '/images/construction-2.jpg',
    alt: 'Modern building construction',
  },
  {
    src: '/images/construction-3.jpg',
    alt: 'Heavy machinery at work',
  },
  {
    src: '/images/excavator.jpg',
    alt: 'Excavation work in progress',
  },
  {
    src: '/images/concrete.jpg',
    alt: 'Concrete pouring',
  },
];

const ImageStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
      {images.map((image, index) => {
        const position = (index - activeIndex + images.length) % images.length;

        let zIndex = 10;
        let translateX = 0;
        let translateY = 0;
        let scale = 1;
        let opacity = 1;
        let rotate = 0;

        if (position === 0) {
          zIndex = 50;
          translateX = 0;
          translateY = 0;
          scale = 1;
          opacity = 1;
          rotate = -2;
        } else if (position === 1) {
          zIndex = 40;
          translateX = 30;
          translateY = 15;
          scale = 0.95;
          opacity = 0.7;
          rotate = 2;
        } else if (position === 2) {
          zIndex = 30;
          translateX = 60;
          translateY = 30;
          scale = 0.9;
          opacity = 0.4;
          rotate = 5;
        } else {
          zIndex = 20;
          translateX = 80;
          translateY = 40;
          scale = 0.85;
          opacity = 0;
          rotate = 8;
        }

        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
            style={{
              zIndex,
              transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
              opacity,
            }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Glow effect on active */}
              {position === 0 && (
                <div className="absolute inset-0 rounded-2xl ring-2 ring-emerald-500/30 ring-offset-2 ring-offset-transparent" />
              )}
            </div>
          </div>
        );
      })}

      {/* Navigation dots */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'w-8 bg-emerald-500'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageStack;
