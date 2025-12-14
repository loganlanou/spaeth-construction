'use client';

import { useState } from 'react';
import Link from 'next/link';

const videos = [
  {
    id: 'construction-overview',
    title: 'Construction Excellence',
    description: 'Watch our team bring projects to life with precision and expertise.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual construction video
    thumbnail: '/images/gallery/construction-site-1.jpg',
    category: 'General Construction',
  },
  {
    id: 'concrete-work',
    title: 'Concrete Craftsmanship',
    description: 'From foundations to decorative finishes, see our concrete expertise.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual concrete video
    thumbnail: '/images/gallery/concrete-pour-1.jpg',
    category: 'Concrete Work',
  },
  {
    id: 'excavation',
    title: 'Site Preparation',
    description: 'Professional excavation and land clearing services.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual excavation video
    thumbnail: '/images/gallery/excavator-work.jpg',
    category: 'Excavation',
  },
  {
    id: 'agricultural',
    title: 'Agricultural Buildings',
    description: 'Building structures that serve Wisconsin farms.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual ag video
    thumbnail: '/images/gallery/barn-construction.jpg',
    category: 'Agricultural',
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 construction-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
            <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
              See Us In Action
            </span>
            <div className="w-12 h-[3px] bg-gradient-to-l from-green-600 to-green-500" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-4">
            Video <span className="text-green-400">Showcase</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Watch our skilled team in action across various construction projects.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden bg-[#111111] border border-green-600/10 hover:border-green-500/40 transition-all duration-500"
              onMouseEnter={() => setActiveVideo(video.id)}
              onMouseLeave={() => setActiveVideo(null)}
            >
              {/* Video Thumbnail / Player */}
              <div className="relative aspect-video overflow-hidden">
                {playingVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                    {/* Play Button */}
                    <button
                      onClick={() => setPlayingVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label={`Play ${video.title}`}
                    >
                      <div className={`w-20 h-20 flex items-center justify-center rounded-full bg-green-600/90 text-white transition-all duration-300 ${activeVideo === video.id ? 'scale-110' : 'scale-100'} hover:bg-green-500`}>
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-600/90 text-white text-xs font-semibold uppercase tracking-wider">
                        {video.category}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs font-mono">
                        2:30
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm mb-4">Want to see more of our work?</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-500/50 text-green-400 font-medium hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
