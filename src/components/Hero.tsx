'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction-1.jpg"
          alt="Construction site"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
      </div>

      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-emerald-500/20 hidden lg:block" />
      <div className="absolute top-32 right-22 w-32 h-32 border border-emerald-500/10 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/5 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-emerald-500" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Since 2001 • Licensed & Insured
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Building
            <span className="block text-emerald-400">Wisconsin&apos;s Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
            Premier construction services for residential, commercial, and agricultural projects. Quality craftsmanship that stands the test of time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all duration-300 group"
            >
              Start Your Project
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 pt-8 border-t border-white/10">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: 'A+', label: 'BBB Rating' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/40 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Building Silhouette */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block pointer-events-none">
        <svg
          viewBox="0 0 400 600"
          className="absolute right-0 bottom-0 h-full w-auto opacity-10"
          fill="none"
        >
          {/* Building 1 */}
          <rect x="250" y="200" width="80" height="400" fill="#10b981" />
          <rect x="260" y="220" width="15" height="20" fill="#0a0a0a" />
          <rect x="285" y="220" width="15" height="20" fill="#0a0a0a" />
          <rect x="260" y="260" width="15" height="20" fill="#0a0a0a" />
          <rect x="285" y="260" width="15" height="20" fill="#0a0a0a" />
          <rect x="260" y="300" width="15" height="20" fill="#0a0a0a" />
          <rect x="285" y="300" width="15" height="20" fill="#0a0a0a" />
          <rect x="260" y="340" width="15" height="20" fill="#0a0a0a" />
          <rect x="285" y="340" width="15" height="20" fill="#0a0a0a" />

          {/* Building 2 */}
          <rect x="340" y="150" width="60" height="450" fill="#059669" />
          <rect x="350" y="170" width="12" height="15" fill="#0a0a0a" />
          <rect x="370" y="170" width="12" height="15" fill="#0a0a0a" />
          <rect x="350" y="200" width="12" height="15" fill="#0a0a0a" />
          <rect x="370" y="200" width="12" height="15" fill="#0a0a0a" />
          <rect x="350" y="230" width="12" height="15" fill="#0a0a0a" />
          <rect x="370" y="230" width="12" height="15" fill="#0a0a0a" />

          {/* Building 3 */}
          <rect x="150" y="300" width="90" height="300" fill="#047857" />
          <rect x="165" y="320" width="18" height="25" fill="#0a0a0a" />
          <rect x="195" y="320" width="18" height="25" fill="#0a0a0a" />
          <rect x="165" y="365" width="18" height="25" fill="#0a0a0a" />
          <rect x="195" y="365" width="18" height="25" fill="#0a0a0a" />

          {/* Crane */}
          <rect x="100" y="100" width="8" height="500" fill="#10b981" />
          <rect x="50" y="100" width="150" height="8" fill="#10b981" />
          <line x1="100" y1="100" x2="50" y2="150" stroke="#10b981" strokeWidth="3" />
          <line x1="100" y1="100" x2="150" y2="150" stroke="#10b981" strokeWidth="3" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs uppercase tracking-wider">Scroll</span>
        <svg
          className="w-5 h-5 text-white/30"
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
