'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar - Hidden on mobile, visible when not scrolled */}
      <div className={`hidden lg:block transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
      }`}>
        <div className="bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="flex items-center gap-6">
                <a href="tel:+17152894098" className="flex items-center gap-2 hover:text-green-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (715) 289-4098
                </a>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Cadott, WI
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-200">Licensed & Insured | A+ BBB Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? '' : 'bg-black/30 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Mark - Clover/Construction Inspired */}
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <svg
                  viewBox="0 0 48 48"
                  className="w-full h-full"
                  fill="none"
                >
                  {/* Four-leaf clover shape with construction elements */}
                  <circle cx="18" cy="18" r="8" fill="#22c55e" />
                  <circle cx="30" cy="18" r="8" fill="#16a34a" />
                  <circle cx="18" cy="30" r="8" fill="#16a34a" />
                  <circle cx="30" cy="30" r="8" fill="#22c55e" />
                  <rect x="20" y="14" width="8" height="20" fill="#0a0a0a" />
                  <rect x="14" y="20" width="20" height="8" fill="#0a0a0a" />
                  {/* Center accent */}
                  <circle cx="24" cy="24" r="4" fill="#22c55e" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-poppins)] font-bold text-lg lg:text-xl text-white tracking-tight group-hover:text-green-400 transition-colors">
                  CLOVERBELT
                </span>
                <span className="text-[10px] lg:text-xs text-green-500 tracking-[0.2em] uppercase font-medium">
                  Construction LLC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? 'text-green-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-green-500 to-green-400" />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-green-600 text-white text-sm font-semibold hover:bg-green-500 transition-all duration-300 shadow-md shadow-green-600/20"
              >
                Free Estimate
              </Link>
            </nav>

            {/* Mobile: Phone + Menu */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="tel:+17152894098"
                className="p-2 text-green-400 hover:text-green-300 transition-colors"
                aria-label="Call us"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-black/95 backdrop-blur-md border-t border-green-600/20 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-sm font-medium border-l-2 transition-all duration-200 ${
                isActive(link.href)
                  ? 'border-green-500 text-green-400 bg-green-500/10'
                  : 'border-transparent text-white/70 hover:text-white hover:border-white/20'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 mx-4 pt-4 border-t border-white/10">
            <Link
              href="/contact"
              className="block px-4 py-3 bg-green-600 text-white text-sm font-semibold text-center hover:bg-green-500 transition-all"
            >
              Get Free Estimate
            </Link>
            <div className="mt-4 flex items-center justify-center gap-2 text-white/50 text-xs">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Licensed & Insured | A+ BBB Rated
            </div>
          </div>
        </nav>
      </div>

      {/* Bottom accent line */}
      <div
        className={`h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  );
};

export default Header;
