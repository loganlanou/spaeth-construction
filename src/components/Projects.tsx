'use client';

import { useState } from 'react';

const projects = [
  {
    category: 'Commercial',
    title: 'Office Complex Foundation',
    description: 'Complete foundation and concrete work for a 20,000 sq ft commercial office building.',
    stats: ['20,000 sq ft', '45 Days', 'Cadott, WI'],
  },
  {
    category: 'Agricultural',
    title: 'Dairy Barn Construction',
    description: 'Full agricultural building including structural work and specialized flooring.',
    stats: ['150 Head Capacity', '90 Days', 'Chippewa Falls'],
  },
  {
    category: 'Residential',
    title: 'Custom Home Build',
    description: 'Complete residential construction from foundation to finishing for a 3,500 sq ft home.',
    stats: ['3,500 sq ft', '6 Months', 'Eau Claire'],
  },
  {
    category: 'Concrete',
    title: 'Decorative Patio Project',
    description: 'Stamped concrete patio with custom patterns and integrated drainage system.',
    stats: ['1,200 sq ft', '2 Weeks', 'Stanley, WI'],
  },
  {
    category: 'Excavation',
    title: 'Site Development',
    description: 'Land clearing and site preparation for a new residential subdivision.',
    stats: ['15 Acres', '30 Days', 'Boyd, WI'],
  },
  {
    category: 'Commercial',
    title: 'Retail Expansion',
    description: 'Building expansion and parking lot construction for local retail business.',
    stats: ['8,000 sq ft', '60 Days', 'Cadott, WI'],
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
      className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 text-sm font-semibold rounded-full mb-4 border border-green-500/20">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured
            <span className="text-green-400"> Projects</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A showcase of our craftsmanship across residential, commercial, and agricultural construction.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-500"
            >
              {/* Project image placeholder with gradient */}
              <div className="relative h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                    {project.category}
                  </span>
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-neutral-700 group-hover:text-green-500/30 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {project.stats.map((stat, statIndex) => (
                    <span
                      key={statIndex}
                      className="px-3 py-1 bg-white/5 text-neutral-500 text-xs rounded-full border border-white/5"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-500 mb-4">Want to see your project featured here?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors duration-300 group"
          >
            Start Your Project
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
