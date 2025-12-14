import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import PhotoGallery from '@/components/PhotoGallery';
import VideoShowcase from '@/components/VideoShowcase';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Why Choose Us Section */}
      <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 construction-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/spaeth-construction/images/gallery/workers-site.jpg"
                  alt="Quality construction work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 lg:right-8 bg-green-600 p-6 shadow-2xl rounded">
                <div className="text-4xl font-bold text-white mb-1">20+</div>
                <div className="text-green-100 text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[3px] bg-gradient-to-r from-green-600 to-green-500" />
                <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Built on Trust,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                  Delivered with Quality
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Since 2001, Cloverbelt Construction has been building Wisconsin&apos;s future one project at a time. Our commitment to quality craftsmanship and customer satisfaction has made us the trusted choice for residential, commercial, and agricultural construction.
              </p>

              {/* Feature List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Licensed & Insured',
                  'A+ BBB Rating',
                  'Free Estimates',
                  'Quality Materials',
                  'Experienced Team',
                  'On-Time Delivery',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 border border-green-200 text-green-600 rounded">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group"
              >
                Learn More About Us
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Services />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Project Portfolio */}
      <Projects />

      {/* About Section */}
      <About />

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-green-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 construction-stripes opacity-10" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg group rounded"
            >
              Get Free Estimate
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17152894098"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 rounded"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (715) 289-4098
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
