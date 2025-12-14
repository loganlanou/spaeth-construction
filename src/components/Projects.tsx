'use client';

import { useState } from 'react';
import Image from 'next/image';

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
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Commercial', 'Agricultural', 'Residential', 'Concrete', 'Excavation'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 xl:py-40 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
            <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
              Our Portfolio
            </span>
            <div className="w-12 h-[3px] bg-gradient-to-l from-green-600 to-green-500" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500"> Projects</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A showcase of our craftsmanship across residential, commercial, and agricultural construction.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-green-600/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#111111] border border-green-600/20 hover:border-green-500/40 transition-all duration-500"
            >
              {/* Project image */}
              <div className="relative h-56 xl:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-600/90 text-white text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 xl:p-8">
                <h3 className="font-[family-name:var(--font-poppins)] text-xl xl:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm xl:text-base mb-4 leading-relaxed">
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

        {/* CTA */}
        <div className="text-center mt-12 xl:mt-16">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-green-400 font-semibold text-base lg:text-lg hover:text-green-300 transition-colors duration-300 group"
          >
            View All Projects
            <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
