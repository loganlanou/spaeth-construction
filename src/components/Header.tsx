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
          ? 'bg-[#1a1714]/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      {/* Top accent line - warm gradient */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Mark - Warm Construction Theme */}
            <div className="relative w-10 h-10 lg:w-11 lg:h-11">
              <svg
                viewBox="0 0 40 40"
                className="w-full h-full"
                fill="none"
              >
                {/* Building shapes with warm colors */}
                <rect x="6" y="14" width="14" height="20" fill="#d97706" />
                <rect x="20" y="8" width="14" height="26" fill="#b45309" />
                {/* Windows */}
                <rect x="9" y="18" width="4" height="5" fill="#1a1714" opacity="0.5" />
                <rect x="9" y="26" width="4" height="5" fill="#1a1714" opacity="0.5" />
                <rect x="24" y="12" width="4" height="5" fill="#1a1714" opacity="0.5" />
                <rect x="24" y="20" width="4" height="5" fill="#1a1714" opacity="0.5" />
                <rect x="24" y="28" width="4" height="5" fill="#1a1714" opacity="0.5" />
                {/* Ground line */}
                <rect x="2" y="34" width="36" height="2" fill="#f59e0b" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-poppins)] font-bold text-lg lg:text-xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
                CLOVERBELT
              </span>
              <span className="text-[10px] lg:text-xs text-amber-500 tracking-[0.2em] uppercase font-medium">
                Construction
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
                    ? 'text-amber-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-amber-500 to-amber-400" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-semibold hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-md shadow-amber-600/20"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-[#1f1b17] border-t border-amber-600/20 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-sm font-medium border-l-2 transition-all duration-200 ${
                isActive(link.href)
                  ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                  : 'border-transparent text-white/70 hover:text-white hover:border-white/20'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 mx-4 px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-semibold text-center hover:from-amber-500 hover:to-amber-400 transition-all"
          >
            Get a Quote
          </Link>
        </nav>
      </div>

      {/* Bottom border when scrolled */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  );
};

export default Header;
