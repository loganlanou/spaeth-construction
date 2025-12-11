'use client';

interface PageHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

const PageHeader = ({ badge, title, highlight, description }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 hero-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6 glass">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-emerald-300 text-sm font-medium">{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
          <span className="block text-gradient mt-2">{highlight}</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
