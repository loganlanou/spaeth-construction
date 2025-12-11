'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

const projects = [
  {
    category: 'Commercial',
    title: 'Office Complex Foundation',
    description: 'Complete foundation and concrete work for a 20,000 sq ft commercial office building.',
    stats: ['20,000 sq ft', '45 Days', 'Cadott, WI'],
    image: '/images/construction-1.jpg',
  },
  {
    category: 'Agricultural',
    title: 'Dairy Barn Construction',
    description: 'Full agricultural building including structural work and specialized flooring.',
    stats: ['150 Head Capacity', '90 Days', 'Chippewa Falls'],
    image: '/images/construction-2.jpg',
  },
  {
    category: 'Residential',
    title: 'Custom Home Build',
    description: 'Complete residential construction from foundation to finishing for a 3,500 sq ft home.',
    stats: ['3,500 sq ft', '6 Months', 'Eau Claire'],
    image: '/images/construction-3.jpg',
  },
  {
    category: 'Concrete',
    title: 'Decorative Patio Project',
    description: 'Stamped concrete patio with custom patterns and integrated drainage system.',
    stats: ['1,200 sq ft', '2 Weeks', 'Stanley, WI'],
    image: '/images/concrete.jpg',
  },
  {
    category: 'Excavation',
    title: 'Site Development',
    description: 'Land clearing and site preparation for a new residential subdivision.',
    stats: ['15 Acres', '30 Days', 'Boyd, WI'],
    image: '/images/excavator.jpg',
  },
  {
    category: 'Commercial',
    title: 'Retail Expansion',
    description: 'Building expansion and parking lot construction for local retail business.',
    stats: ['8,000 sq ft', '60 Days', 'Cadott, WI'],
    image: '/images/construction-1.jpg',
  },
  {
    category: 'Agricultural',
    title: 'Equipment Storage Building',
    description: 'Large-scale equipment storage facility with concrete flooring.',
    stats: ['10,000 sq ft', '45 Days', 'Thorp, WI'],
    image: '/images/construction-2.jpg',
  },
  {
    category: 'Residential',
    title: 'Garage Addition',
    description: 'Three-car attached garage with workshop space and heated floors.',
    stats: ['900 sq ft', '4 Weeks', 'Cadott, WI'],
    image: '/images/construction-3.jpg',
  },
  {
    category: 'Concrete',
    title: 'Commercial Foundation',
    description: 'Reinforced concrete foundation for multi-story commercial building.',
    stats: ['5,000 sq ft', '3 Weeks', 'Eau Claire'],
    image: '/images/concrete.jpg',
  },
];

const categories = ['All', 'Commercial', 'Agricultural', 'Residential', 'Concrete', 'Excavation'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        badge="Our Portfolio"
        title="Featured"
        highlight="Projects"
        description="A showcase of our craftsmanship across residential, commercial, and agricultural construction."
      />

      {/* Projects Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-white'
                    : 'bg-transparent text-white/50 border border-white/10 hover:border-emerald-500/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group card-architectural overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="px-2.5 py-1 bg-white/5 text-white/40 text-xs border border-white/5"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 bg-[#111111]">
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl font-bold text-white mb-6">
            Want to See Your Project Featured Here?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a free estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
