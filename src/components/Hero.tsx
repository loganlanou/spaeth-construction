'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/gallery/construction-site-1.jpg',
      title: 'Building',
      highlight: "Wisconsin's Future",
      subtitle: 'Premier construction services for residential, commercial, and agricultural projects throughout the Chippewa Valley.',
    },
    {
      image: '/images/gallery/construction-site-2.jpg',
      title: 'Quality',
      highlight: 'Craftsmanship',
      subtitle: 'Over 20 years of experience delivering excellence in every project we undertake.',
    },
    {
      image: '/images/gallery/crane-work.jpg',
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      {/* Overlay - Lighter gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-gray-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-400" />
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
              Serving Wisconsin Since 2001
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
            {slides[currentSlide].title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-emerald-400">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold hover:bg-green-500 transition-all duration-300 group shadow-lg shadow-green-600/25 rounded"
            >
              Get Free Estimate
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 rounded"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 pt-8 border-t border-white/20">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: 'A+', label: 'BBB Rating' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/60 uppercase tracking-wider mt-1">
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
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-2 bg-green-500'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
