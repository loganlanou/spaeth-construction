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

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
