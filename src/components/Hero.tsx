'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/construction-1.jpg',
      title: 'Building',
      highlight: "Wisconsin's Future",
      subtitle: 'Premier construction services for residential, commercial, and agricultural projects.',
    },
    {
      image: '/images/construction-2.jpg',
      title: 'Quality',
      highlight: 'Craftsmanship',
      subtitle: 'Over 20 years of experience delivering excellence in every project we undertake.',
    },
    {
      image: '/images/construction-3.jpg',
      title: 'Your Vision',
      highlight: 'Our Expertise',
      subtitle: 'From concept to completion, we bring your construction dreams to life.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1714]">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Construction project ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714] via-[#1a1714]/85 to-[#1a1714]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-transparent to-[#1a1714]/40" />

      {/* Warm Grid Pattern */}
      <div className="absolute inset-0 warm-grid opacity-40" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-amber-600/20 hidden lg:block" />
      <div className="absolute top-32 right-22 w-40 h-40 border border-amber-600/10 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-white/5 hidden lg:block" />

      {/* Construction Accent Lines */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-amber-600 to-transparent hidden lg:block" />
      <div className="absolute right-0 bottom-1/4 w-1 h-32 bg-gradient-to-t from-amber-600 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-gradient-to-r from-amber-600 to-amber-500" />
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
              Since 2001 | Licensed & Insured
            </span>
          </div>

          {/* Main Heading - Animated per slide */}
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
            {slides[currentSlide].title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold hover:from-amber-500 hover:to-amber-400 transition-all duration-300 group shadow-lg shadow-amber-600/25"
            >
              Get Free Estimate
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium hover:border-amber-500 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 pt-8 border-t border-white/10">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: 'A+', label: 'BBB Rating' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 h-2 bg-amber-500'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Right Side Accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block pointer-events-none">
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-amber-600/50" />
          <div className="w-3 h-3 border-2 border-amber-500 rotate-45" />
          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-amber-600/50" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 animate-bounce hidden lg:flex">
        <span className="text-white/40 text-xs uppercase tracking-wider rotate-90 origin-center translate-x-6">Scroll</span>
        <svg
          className="w-5 h-5 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
