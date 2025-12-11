'use client';

interface PageHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

const PageHeader = ({ badge, title, highlight, description }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-emerald-500/10 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-emerald-500" />
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
          {title}
          {highlight && (
            <span className="block text-emerald-400 mt-2">{highlight}</span>
          )}
        </h1>

        {/* Description */}
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
          {description}
        </p>

        {/* Bottom Line */}
        <div className="mt-12 h-px bg-gradient-to-r from-emerald-500/50 via-white/10 to-transparent max-w-xl" />
      </div>
    </section>
  );
};

export default PageHeader;
