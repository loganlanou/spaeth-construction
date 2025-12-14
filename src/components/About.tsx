'use client';

import Image from 'next/image';

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: 'Quality First',
      description: 'Every project receives our full commitment to excellence and attention to detail.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'On-Time Delivery',
      description: 'We respect your timeline and deliver projects on schedule, every time.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: 'Fair Pricing',
      description: 'Transparent, competitive pricing with no hidden costs or surprises.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      title: 'Craftsmanship',
      description: 'Skilled professionals dedicated to superior construction standards.',
    },
  ];

  const milestones = [
    { year: '2001', event: 'Company Founded', description: 'Started operations in Cadott, WI' },
    { year: '2003', event: 'LLC Established', description: 'Officially incorporated as Cloverbelt Construction LLC' },
    { year: '2010', event: 'Expansion', description: 'Grew services to include commercial and agricultural' },
    { year: '2024', event: 'A+ BBB Rating', description: 'Recognized for exceptional customer service' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 construction-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
              <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Building Trust Since
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">2001</span>
            </h2>
            <p className="text-lg text-white/60 mb-6 leading-relaxed">
              Cloverbelt Construction LLC is a licensed, bonded, and insured construction company proudly serving Cadott, Wisconsin and the surrounding communities. Founded by Josh R. Spaeth, we&apos;ve built our reputation on quality craftsmanship, honest communication, and customer satisfaction.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              From residential homes to commercial buildings and agricultural facilities, we bring the same dedication and expertise to every project. Our team specializes in concrete work, excavation, and full-scale construction services designed to meet the unique needs of Wisconsin property owners.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-[#111111] border border-green-600/10 hover:border-green-500/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-green-500/30 text-green-400 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                    <p className="text-sm text-white/50">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Timeline */}
          <div>
            <div className="relative">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <Image
                  src="/spaeth-construction/images/gallery/team-planning.jpg"
                  alt="Cloverbelt Construction team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent" />
              </div>

              {/* Timeline Card */}
              <div className="bg-[#111111] border border-green-600/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Our Journey
                </h3>

                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4 group">
                      {/* Year bubble */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
                          <span className="text-sm font-bold text-green-400 group-hover:text-white transition-colors duration-300">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                          {milestone.event}
                        </h4>
                        <p className="text-white/50 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BBB Badge */}
                <div className="mt-8 pt-8 border-t border-green-600/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white flex items-center justify-center">
                      <span className="text-2xl font-black text-blue-800">BBB</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-semibold">A+ Rated</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-white/50 text-sm">Better Business Bureau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
