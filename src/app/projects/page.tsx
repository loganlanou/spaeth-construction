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
    image: '/images/gallery/commercial-building.jpg',
  },
  {
    category: 'Agricultural',
    title: 'Dairy Barn Construction',
    description: 'Full agricultural building including structural work and specialized flooring.',
    stats: ['150 Head Capacity', '90 Days', 'Chippewa Falls'],
    image: '/images/gallery/barn-construction.jpg',
  },
  {
    category: 'Residential',
    title: 'Custom Home Build',
    description: 'Complete residential construction from foundation to finishing for a 3,500 sq ft home.',
    stats: ['3,500 sq ft', '6 Months', 'Eau Claire'],
    image: '/images/gallery/residential-build.jpg',
  },
  {
    category: 'Concrete',
    title: 'Decorative Patio Project',
    description: 'Stamped concrete patio with custom patterns and integrated drainage system.',
    stats: ['1,200 sq ft', '2 Weeks', 'Stanley, WI'],
    image: '/images/gallery/concrete-finishing.jpg',
  },
  {
    category: 'Excavation',
    title: 'Site Development',
    description: 'Land clearing and site preparation for a new residential subdivision.',
    stats: ['15 Acres', '30 Days', 'Boyd, WI'],
    image: '/images/gallery/bulldozer-work.jpg',
  },
  {
    category: 'Commercial',
    title: 'Retail Expansion',
    description: 'Building expansion and parking lot construction for local retail business.',
    stats: ['8,000 sq ft', '60 Days', 'Cadott, WI'],
    image: '/images/gallery/construction-site-1.jpg',
  },
  {
    category: 'Agricultural',
    title: 'Equipment Storage Building',
    description: 'Large-scale equipment storage facility with concrete flooring.',
    stats: ['10,000 sq ft', '45 Days', 'Thorp, WI'],
    image: '/images/gallery/steel-structure.jpg',
  },
  {
    category: 'Residential',
    title: 'Garage Addition',
    description: 'Three-car attached garage with workshop space and heated floors.',
    stats: ['900 sq ft', '4 Weeks', 'Cadott, WI'],
    image: '/images/gallery/building-frame.jpg',
  },
  {
    category: 'Concrete',
    title: 'Commercial Foundation',
    description: 'Reinforced concrete foundation for multi-story commercial building.',
    stats: ['5,000 sq ft', '3 Weeks', 'Eau Claire'],
    image: '/images/gallery/foundation-work.jpg',
  },
  {
    category: 'Excavation',
    title: 'Land Clearing Project',
    description: 'Complete site clearing and grading for new commercial development.',
    stats: ['25 Acres', '6 Weeks', 'Bloomer, WI'],
    image: '/images/gallery/excavator-work.jpg',
  },
  {
    category: 'Commercial',
    title: 'Steel Framework',
    description: 'Structural steel erection for industrial warehouse facility.',
    stats: ['35,000 sq ft', '3 Months', 'Eau Claire'],
    image: '/images/gallery/crane-work.jpg',
  },
  {
    category: 'Concrete',
    title: 'Industrial Floor Pour',
    description: 'Heavy-duty concrete flooring for manufacturing facility.',
    stats: ['12,000 sq ft', '4 Weeks', 'Chippewa Falls'],
    image: '/images/gallery/concrete-pour-1.jpg',
  },
];

const categories = ['All', 'Commercial', 'Agricultural', 'Residential', 'Concrete', 'Excavation'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-black">
      <PageHeader
        badge="Our Portfolio"
        title="Featured"
        highlight="Projects"
        description="A showcase of our craftsmanship across residential, commercial, and agricultural construction."
        backgroundImage="/spaeth-construction/images/gallery/construction-site-2.jpg"
      />

      {/* Projects Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 construction-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                    : 'bg-white/5 text-white/60 border border-green-600/20 hover:border-green-500/50 hover:text-white'
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
                className="group relative overflow-hidden bg-[#111111] border border-green-600/10 hover:border-green-500/40 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600/90 text-white text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="px-3 py-1 bg-green-500/10 text-green-400 text-xs border border-green-500/20"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 bg-green-600 overflow-hidden">
        <div className="absolute inset-0 construction-stripes opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl lg:text-4xl font-bold text-white mb-6">
            Want to See Your Project Featured Here?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today to discuss your construction needs and get a free estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold hover:bg-green-50 transition-colors shadow-xl"
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
