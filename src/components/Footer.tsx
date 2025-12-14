'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Commercial Construction',
    'Agricultural Buildings',
    'Residential Construction',
    'Concrete Work',
    'Excavation Services',
    'Demolition',
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top Border - Green Gradient */}
      <div className="h-1 bg-gradient-to-r from-green-700 via-green-500 to-green-700" />

      {/* Grid Background */}
      <div className="absolute inset-0 construction-grid opacity-20" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              {/* Logo */}
              <div className="w-10 h-10">
                <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
                  <circle cx="18" cy="18" r="8" fill="#22c55e" />
                  <circle cx="30" cy="18" r="8" fill="#16a34a" />
                  <circle cx="18" cy="30" r="8" fill="#16a34a" />
                  <circle cx="30" cy="30" r="8" fill="#22c55e" />
                  <rect x="20" y="14" width="8" height="20" fill="#0a0a0a" />
                  <rect x="14" y="20" width="20" height="8" fill="#0a0a0a" />
                  <circle cx="24" cy="24" r="4" fill="#22c55e" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-poppins)] font-bold text-lg text-white group-hover:text-green-400 transition-colors">
                  CLOVERBELT
                </span>
                <span className="text-[10px] text-green-500 tracking-[0.2em] uppercase">
                  Construction LLC
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Building Wisconsin&apos;s future since 2001. Licensed, bonded, and insured construction services for residential, commercial, and agricultural projects.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Cloverbelt-Construction/100063839118887/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-green-600/30 text-white/60 hover:border-green-500 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
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
                className="w-10 h-10 flex items-center justify-center border border-green-600/30 text-white/60 hover:border-green-500 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-green-600 to-green-500" />
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-white/60 text-sm hover:text-green-400 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-green-600 to-green-500" />
              Company
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-green-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-green-600 to-green-500" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17152894098"
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-green-400 transition-colors duration-300 group"
                >
                  <span className="w-9 h-9 flex items-center justify-center border border-green-600/30 group-hover:border-green-500 group-hover:bg-green-500/10 transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  (715) 289-4098
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=2515+250th+St+Cadott+WI+54727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-green-400 transition-colors duration-300 group"
                >
                  <span className="w-9 h-9 flex items-center justify-center border border-green-600/30 group-hover:border-green-500 group-hover:bg-green-500/10 transition-all flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <span>
                    2515 250th St<br />
                    Cadott, WI 54727
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="w-9 h-9 flex items-center justify-center border border-green-600/30 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Mon-Fri: 7AM - 5PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Cloverbelt Construction LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-xs uppercase tracking-wider">A+ BBB Rated</span>
              <span className="text-green-500">|</span>
              <span className="text-white/40 text-xs uppercase tracking-wider">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
