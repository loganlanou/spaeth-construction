'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/construction-site-1.jpg', alt: 'Construction site overview', category: 'Construction' },
  { src: '/images/gallery/construction-site-2.jpg', alt: 'Building under construction', category: 'Construction' },
  { src: '/images/gallery/construction-site-3.jpg', alt: 'Construction progress', category: 'Construction' },
  { src: '/images/gallery/concrete-pour-1.jpg', alt: 'Concrete pouring', category: 'Concrete' },
  { src: '/images/gallery/concrete-work-1.jpg', alt: 'Concrete finishing work', category: 'Concrete' },
  { src: '/images/gallery/concrete-finishing.jpg', alt: 'Concrete surface finishing', category: 'Concrete' },
  { src: '/images/gallery/foundation-work.jpg', alt: 'Foundation construction', category: 'Foundation' },
  { src: '/images/gallery/excavator-work.jpg', alt: 'Excavator at work', category: 'Excavation' },
  { src: '/images/gallery/heavy-equipment.jpg', alt: 'Heavy construction equipment', category: 'Equipment' },
  { src: '/images/gallery/building-frame.jpg', alt: 'Building frame structure', category: 'Construction' },
  { src: '/images/gallery/worker-welding.jpg', alt: 'Worker welding steel', category: 'Steel Work' },
  { src: '/images/gallery/steel-structure.jpg', alt: 'Steel building structure', category: 'Steel Work' },
  { src: '/images/gallery/crane-work.jpg', alt: 'Crane lifting materials', category: 'Equipment' },
  { src: '/images/gallery/commercial-building.jpg', alt: 'Commercial building exterior', category: 'Commercial' },
  { src: '/images/gallery/barn-construction.jpg', alt: 'Agricultural barn', category: 'Agricultural' },
  { src: '/images/gallery/site-grading.jpg', alt: 'Site grading work', category: 'Excavation' },
  { src: '/images/gallery/residential-build.jpg', alt: 'Residential construction', category: 'Residential' },
  { src: '/images/gallery/bulldozer-work.jpg', alt: 'Bulldozer clearing land', category: 'Excavation' },
  { src: '/images/gallery/workers-site.jpg', alt: 'Construction workers on site', category: 'Team' },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const visibleImages = () => {
    const images = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + galleryImages.length) % galleryImages.length;
      images.push({ ...galleryImages[index], position: i, index });
    }
    return images;
  };

  return (
    <section className="relative py-16 lg:py-24 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
            <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
              Our Work
            </span>
            <div className="w-12 h-[3px] bg-gradient-to-l from-green-600 to-green-500" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-4">
            Project <span className="text-green-400">Gallery</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Browse through our portfolio of completed construction, concrete, and excavation projects.
          </p>
        </div>

        {/* Main Gallery Carousel */}
        <div
          className="relative h-[400px] lg:h-[500px] mb-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {visibleImages().map((image) => {
            const isCenter = image.position === 0;
            const isAdjacent = Math.abs(image.position) === 1;
            const isOuter = Math.abs(image.position) === 2;

            return (
              <div
                key={image.index}
                onClick={() => isCenter && setSelectedImage(image.index)}
                className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-out cursor-pointer
                  ${isCenter ? 'z-30 w-[70%] lg:w-[50%] h-full -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100' : ''}
                  ${isAdjacent ? `z-20 w-[50%] lg:w-[35%] h-[80%] -translate-y-1/2 scale-95 opacity-70 ${image.position < 0 ? '-translate-x-[130%]' : 'translate-x-[30%]'}` : ''}
                  ${isOuter ? `z-10 w-[40%] lg:w-[25%] h-[60%] -translate-y-1/2 scale-90 opacity-40 ${image.position < 0 ? '-translate-x-[180%]' : 'translate-x-[80%]'}` : ''}
                `}
              >
                <div className={`relative w-full h-full overflow-hidden border-2 ${isCenter ? 'border-green-500/50' : 'border-green-600/20'} shadow-2xl`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent ${isCenter ? 'opacity-100' : 'opacity-50'}`} />

                  {isCenter && (
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-green-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                        {image.category}
                      </span>
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-black/50 border border-green-500/30 text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-black/50 border border-green-500/30 text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 flex-wrap">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-16 h-12 overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-green-500 scale-110'
                  : 'border-green-600/20 opacity-50 hover:opacity-100'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <span className="text-green-400 font-mono text-sm">
            {String(currentIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 text-white hover:bg-green-600 transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 text-white hover:bg-green-600 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev! + 1) % galleryImages.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 text-white hover:bg-green-600 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="inline-block px-3 py-1 bg-green-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                {galleryImages[selectedImage].category}
              </span>
              <p className="text-white font-medium text-lg">{galleryImages[selectedImage].alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
