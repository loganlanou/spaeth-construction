'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '(715) 289-4098',
    href: 'tel:+17152894098',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: '2515 250th St, Cadott, WI 54727',
    href: 'https://maps.google.com/?q=2515+250th+St+Cadott+WI+54727',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon-Fri: 7AM - 5PM',
    href: null,
  },
];

const services = [
  'Commercial Construction',
  'Agricultural Buildings',
  'Residential Construction',
  'Concrete Work',
  'Excavation & Land Clearing',
  'Demolition Services',
  'Other',
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#1a1714]">
      <PageHeader
        badge="Get in Touch"
        title="Let's Build"
        highlight="Together"
        description="Ready to start your project? Contact us for a free consultation and estimate."
        backgroundImage="/images/construction-2.jpg"
      />

      {/* Contact Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 warm-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="p-6 lg:p-8 bg-[#222222] border border-amber-600/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[3px] bg-gradient-to-r from-amber-600 to-amber-500" />
                  <h2 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-white">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-5 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index}>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-10 h-10 flex items-center justify-center border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                            <p className="text-white font-medium group-hover:text-amber-400 transition-colors duration-300 break-words">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 flex items-center justify-center border border-amber-500/30 text-amber-400 flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-amber-600/20">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/people/Cloverbelt-Construction/100063839118887/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-amber-600/30 text-white/60 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://x.com/cloverbeltconsn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-amber-600/30 text-white/60 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Credentials */}
                <div className="mt-8 pt-6 border-t border-amber-600/20">
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 text-xs uppercase tracking-wider">A+ BBB Rated</span>
                    <span className="text-amber-500">|</span>
                    <span className="text-white/40 text-xs uppercase tracking-wider">Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="p-6 lg:p-8 bg-[#222222] border border-amber-600/20">
                {isSubmitted ? (
                  <div className="text-center py-12 lg:py-16">
                    <div className="w-16 h-16 flex items-center justify-center bg-amber-500/20 mx-auto mb-6">
                      <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60 mb-8">We&apos;ll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-amber-400 font-medium hover:text-amber-300 transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-[3px] bg-gradient-to-r from-amber-600 to-amber-500" />
                      <h2 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-white">
                        Send Us a Message
                      </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1a1714] border border-amber-600/20 text-white placeholder-white/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1a1714] border border-amber-600/20 text-white placeholder-white/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1a1714] border border-amber-600/20 text-white placeholder-white/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                            placeholder="(715) 555-0123"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                            Service Needed *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formState.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1a1714] border border-amber-600/20 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#1a1714]">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service} className="bg-[#1a1714]">{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1a1714] border border-amber-600/20 text-white placeholder-white/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none resize-none"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold shadow-lg shadow-amber-600/20 hover:from-amber-500 hover:to-amber-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Request Free Quote
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
