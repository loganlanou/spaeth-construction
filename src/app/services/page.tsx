import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services | Cloverbelt Construction',
  description: 'Comprehensive construction services including commercial, agricultural, residential construction, concrete work, excavation, and demolition in Wisconsin.',
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Commercial Construction',
    description: 'Full-scale commercial building projects including retail spaces, offices, and industrial facilities. Quality craftsmanship for businesses that demand excellence.',
    features: ['Office Buildings', 'Retail Spaces', 'Industrial Facilities', 'Renovations'],
    image: '/images/gallery/commercial-building.jpg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Agricultural Buildings',
    description: 'Specialized agricultural construction including barns, storage facilities, and manure pits. Built to withstand Wisconsin\'s demanding conditions.',
    features: ['Barn Construction', 'Storage Buildings', 'Manure Pits', 'Equipment Sheds'],
    image: '/images/gallery/barn-construction.jpg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Residential Construction',
    description: 'Custom home building and residential projects tailored to your vision. From foundations to finishing touches, we build homes that last.',
    features: ['Custom Homes', 'Garages', 'Additions', 'Remodeling'],
    image: '/images/gallery/residential-build.jpg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Concrete Work',
    description: 'Expert concrete services including decorative flatwork, stamped patios, driveways, and reinforced foundations. Precision pours every time.',
    features: ['Stamped Concrete', 'Decorative Flatwork', 'Driveways', 'Foundations'],
    image: '/images/gallery/concrete-pour-1.jpg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Excavation & Land Clearing',
    description: 'Professional excavation and land preparation services. We prepare your site for construction with precision and efficiency.',
    features: ['Site Preparation', 'Land Clearing', 'Grading', 'Trenching'],
    image: '/images/gallery/excavator-work.jpg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Demolition Services',
    description: 'Safe and efficient demolition services for structures of all sizes. We handle removal and site cleanup professionally.',
    features: ['Building Demolition', 'Interior Gutting', 'Debris Removal', 'Site Cleanup'],
    image: '/images/gallery/bulldozer-work.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black">
      <PageHeader
        badge="Our Services"
        title="Comprehensive Construction"
        highlight="Solutions"
        description="From concept to completion, we deliver excellence across residential, commercial, and agricultural projects throughout Wisconsin."
        backgroundImage="/spaeth-construction/images/gallery/worker-welding.jpg"
      />

      {/* Services Grid */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 construction-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-[#111111] border border-green-600/10 hover:border-green-500/40 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/85" />

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  <div className="w-14 h-14 flex items-center justify-center border border-green-500/30 text-green-400 mb-6 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300">
                    {service.icon}
                  </div>

                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white/50">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
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
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today for a free consultation and estimate. We&apos;ll work with you to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold hover:bg-green-50 transition-colors shadow-xl"
          >
            Get a Free Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
