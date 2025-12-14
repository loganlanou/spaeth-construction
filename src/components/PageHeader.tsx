'use client';

import Image from 'next/image';

interface PageHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  backgroundImage?: string;
}

const PageHeader = ({ badge, title, highlight, description, backgroundImage = '/images/construction-1.jpg' }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#1a1714] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Construction background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714] via-[#1a1714]/90 to-[#1a1714]" />
      </div>

      {/* Warm Grid Pattern */}
      <div className="absolute inset-0 warm-grid opacity-40" />

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-amber-600/15 hidden lg:block" />
      <div className="absolute top-32 right-22 w-40 h-40 border border-amber-600/10 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 hidden lg:block" />

      {/* Accent Lines */}
      <div className="absolute left-0 top-1/3 w-1 h-24 bg-gradient-to-b from-amber-600 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[3px] bg-gradient-to-r from-amber-600 to-amber-500" />
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
          {title}
          {highlight && (
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 mt-2">{highlight}</span>
          )}
        </h1>

        {/* Description */}
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
          {description}
        </p>

        {/* Bottom Line */}
        <div className="mt-12 h-[3px] bg-gradient-to-r from-amber-600 via-amber-500/50 to-transparent max-w-xl" />
      </div>
    </section>
  );
};

export default PageHeader;
