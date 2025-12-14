import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Cloverbelt Construction',
  description: 'Learn about Cloverbelt Construction LLC - A licensed, bonded, and insured construction company serving Cadott, Wisconsin since 2001.',
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Quality First',
    description: 'Every project receives our full commitment to excellence.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'On-Time Delivery',
    description: 'We respect your timeline and deliver projects on schedule.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Fair Pricing',
    description: 'Transparent, competitive pricing with no hidden costs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Expert Team',
    description: 'Skilled professionals dedicated to superior standards.',
  },
];

const milestones = [
  { year: '2001', event: 'Company Founded', description: 'Started operations in Cadott, WI' },
  { year: '2003', event: 'LLC Established', description: 'Incorporated as Cloverbelt Construction LLC' },
  { year: '2010', event: 'Service Expansion', description: 'Expanded to commercial and agricultural' },
  { year: '2015', event: 'Equipment Upgrade', description: 'Major investment in modern equipment' },
  { year: '2020', event: 'Team Growth', description: 'Expanded team across the Chippewa Valley' },
  { year: '2024', event: 'A+ BBB Rating', description: 'Recognized for exceptional service' },
];

export default function AboutPage() {
  return (
    <div className="bg-black">
      <PageHeader
        badge="About Us"
        title="Building Trust Since"
        highlight="2001"
        description="A licensed, bonded, and insured construction company proudly serving Cadott, Wisconsin and the surrounding communities."
        backgroundImage="/images/construction-1.jpg"
      />

      {/* Story Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 construction-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
                <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-6">
                Quality Construction, Honest Service
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Cloverbelt Construction LLC was founded by Josh R. Spaeth with a simple mission: to provide quality construction services with honesty and integrity. What started as a small residential construction company has grown into a full-service construction firm serving the entire Chippewa Valley region.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We&apos;ve built our reputation on quality craftsmanship, honest communication, and customer satisfaction. From residential homes to commercial buildings and agricultural facilities, we bring the same dedication and expertise to every project.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Completed' },
                  { value: 'A+', label: 'BBB Rating' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="p-4 border border-green-600/20 bg-[#111111]">
                    <div className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-green-400">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/construction-2.jpg"
                  alt="Cloverbelt Construction team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-green-500/30 hidden lg:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/5 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 lg:py-24 bg-[#050505]">
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
              <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
                Our Values
              </span>
              <div className="w-12 h-[3px] bg-gradient-to-l from-green-600 to-green-500" />
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group p-6 bg-[#0a0a0a] border border-green-600/10 hover:border-green-500/40 transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto flex items-center justify-center border border-green-500/30 text-green-400 mb-4 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 construction-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
              <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
                Our Journey
              </span>
              <div className="w-12 h-[3px] bg-gradient-to-l from-green-600 to-green-500" />
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white">
              Key Milestones
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="group p-6 bg-[#111111] border border-green-600/10 hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex items-center justify-center border border-green-500/30 flex-shrink-0 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
                    <span className="font-[family-name:var(--font-poppins)] text-sm font-bold text-green-400 group-hover:text-white transition-colors">
                      {milestone.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">
                      {milestone.event}
                    </h3>
                    <p className="text-white/50 text-sm">{milestone.description}</p>
                  </div>
                </div>
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
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Ready to start your next project? Contact us for a free consultation and estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold hover:bg-green-50 transition-colors shadow-xl"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
