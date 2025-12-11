import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

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
  { year: '2010', event: 'Service Expansion', description: 'Expanded to commercial and agricultural' },
  { year: '2015', event: 'Equipment Upgrade', description: 'Major investment in modern equipment' },
  { year: '2020', event: 'Team Growth', description: 'Expanded team in the Chippewa Valley' },
  { year: '2024', event: 'A+ BBB Rating', description: 'Recognized for exceptional service' },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950">
      <PageHeader
        badge="About Us"
        title="Building Trust Since"
        highlight="2001"
        description="A licensed, bonded, and insured construction company proudly serving Cadott, Wisconsin and the surrounding communities."
      />

      {/* Story Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Story */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-base lg:text-lg text-slate-400 mb-6 leading-relaxed">
                Cloverbelt Construction LLC was founded by Josh R. Spaeth with a simple mission: to provide quality construction services with honesty and integrity. What started as a small residential construction company has grown into a full-service construction firm serving the entire Chippewa Valley region.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We&apos;ve built our reputation on quality craftsmanship, honest communication, and customer satisfaction. From residential homes to commercial buildings and agricultural facilities, we bring the same dedication and expertise to every project.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Today, we&apos;re proud to be one of the most trusted construction companies in the area, with an A+ rating from the Better Business Bureau and hundreds of satisfied customers throughout Wisconsin.
              </p>
            </div>

            {/* Right Content - Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-5 lg:p-6 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.05] hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-11 h-11 lg:w-12 lg:h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">{value.title}</h3>
                  <p className="text-sm text-slate-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6 glass">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-emerald-300 text-sm font-medium">Our Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Key Milestones
            </h2>
            <p className="text-base lg:text-lg text-slate-400 max-w-2xl mx-auto">
              A look at our growth and achievements over the years
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 lg:p-6 border border-white/[0.05] hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-400 group-hover:text-white transition-colors duration-300">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base lg:text-lg font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                      {milestone.event}
                    </h3>
                    <p className="text-sm text-slate-400">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BBB Badge */}
          <div className="mt-12 lg:mt-16 flex justify-center">
            <div className="inline-flex items-center gap-4 bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-2xl px-6 lg:px-8 py-5 lg:py-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl lg:text-2xl font-black text-blue-800">BBB</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold text-base lg:text-lg">A+ Rated</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-400 text-sm">Better Business Bureau</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-base lg:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Ready to start your next project? Contact us for a free consultation and estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 btn-gradient text-white font-semibold rounded-xl text-sm lg:text-base"
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
