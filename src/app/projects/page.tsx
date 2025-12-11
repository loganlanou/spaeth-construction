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
    <div className="bg-slate-950">
      <PageHeader
        badge="Our Portfolio"
        title="Featured"
        highlight="Projects"
        description="A showcase of our craftsmanship across residential, commercial, and agricultural construction."
      />

      {/* Projects Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 lg:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-white/[0.05] text-slate-400 hover:bg-white/[0.1] hover:text-white border border-white/[0.05]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] hover:border-emerald-500/30 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="px-2.5 py-1 bg-white/[0.05] text-slate-400 text-xs rounded-full border border-white/[0.05]"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to See Your Project Featured Here?
          </h2>
          <p className="text-base lg:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a free estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 btn-gradient text-white font-semibold rounded-xl text-sm lg:text-base"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
