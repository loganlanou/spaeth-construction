import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Commercial Construction",
    description: "Full-scale commercial building projects from retail spaces to industrial facilities.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Agricultural Buildings",
    description: "Specialized construction for barns, storage facilities, and agricultural infrastructure.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Residential Construction",
    description: "Custom homes and residential projects tailored to your vision and needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Concrete Work",
    description: "Expert flatwork, foundations, and decorative concrete services.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: "Excavation",
    description: "Professional site preparation, land clearing, and grading services.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Demolition",
    description: "Safe and efficient demolition services for structures of all sizes.",
  },
];

const projects = [
  {
    title: "Commercial Office Complex",
    category: "Commercial",
    image: "/images/construction-1.jpg",
  },
  {
    title: "Agricultural Storage Facility",
    category: "Agricultural",
    image: "/images/construction-2.jpg",
  },
  {
    title: "Custom Residential Home",
    category: "Residential",
    image: "/images/construction-3.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="relative py-20 lg:py-28 bg-[#0a0a0a]">
        {/* Background Pattern */}
        <div className="absolute inset-0 technical-grid opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-emerald-500" />
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-white/60 leading-relaxed">
              From residential homes to commercial buildings and agricultural facilities, we deliver excellence across all project types.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 card-architectural"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-emerald-500/30 text-emerald-400 mb-5 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors group"
            >
              View All Services
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20 lg:py-28 bg-[#111111]">
        <div className="absolute inset-0 blueprint-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-emerald-500" />
                <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                  Our Work
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-white/60 leading-relaxed">
                A showcase of our craftsmanship across residential, commercial, and agricultural construction.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 self-start lg:self-auto"
            >
              View All Projects
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href="/projects"
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/30 mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="absolute inset-0 technical-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-emerald-500" />
                <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-6">
                Building Trust Since 2001
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Cloverbelt Construction LLC was founded with a simple mission: to provide quality construction services with honesty and integrity. What started as a small residential construction company has grown into a full-service construction firm serving the entire Chippewa Valley region.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We&apos;ve built our reputation on quality craftsmanship, honest communication, and customer satisfaction. Today, we&apos;re proud to be one of the most trusted construction companies in the area.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Licensed & Insured",
                  "A+ BBB Rating",
                  "20+ Years Experience",
                  "500+ Projects Completed",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
              >
                Learn More About Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/construction-2.jpg"
                  alt="Construction team at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-emerald-500/30 hidden lg:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/5 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-emerald-500">
        <div className="absolute inset-0 construction-stripes opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. We&apos;ll work with you to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold hover:bg-white/90 transition-colors"
            >
              Get a Free Quote
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17152894098"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (715) 289-4098
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
