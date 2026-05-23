import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type PageType = 'home' | 'products' | 'about' | 'contact';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-links') && !target.closest('.mobile-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { page: PageType; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'products', label: 'Products' },
    { page: 'about', label: 'About' },
    { page: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[76px] nav-blur border-b border-primary/10 transition-all duration-350 flex items-center ${
        isScrolled ? 'shadow-md bg-white/95' : 'bg-white/80'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigate('home')}
          className="font-display text-xl md:text-2xl font-semibold text-black hover:text-primary transition-colors duration-350 flex items-center gap-2"
        >
          <span className="w-8 md:w-9 h-8 md:h-9 bg-primary rounded-sm flex items-center justify-center text-white font-bold text-base md:text-lg shadow-[0_0_12px_rgba(10,143,220,0.4)]">
            S
          </span>
          Sprint GS
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ page, label }) => (
            <li key={page}>
              <button
                onClick={() => handleNavigate(page)}
                className={`px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-350 ${
                  currentPage === page
                    ? 'text-primary-deep bg-primary-light'
                    : 'text-text-secondary hover:text-primary-deep hover:bg-primary-light'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavigate('contact')}
              className="btn btn-primary ml-2 px-5 py-2.5"
            >
              Get Quote
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle md:hidden p-2 z-[1001]"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`nav-links fixed top-0 right-0 h-screen w-[280px] flex flex-col bg-white pt-24 px-8 pb-8 gap-2 shadow-xl transition-all duration-350 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map(({ page, label }) => (
            <li key={page}>
              <button
                onClick={() => handleNavigate(page)}
                className={`w-full text-left px-4 py-3 rounded-full font-medium text-base transition-all duration-350 ${
                  currentPage === page
                    ? 'text-primary-deep bg-primary-light'
                    : 'text-text-secondary hover:text-primary-deep hover:bg-primary-light'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="mt-4">
            <button
              onClick={() => handleNavigate('contact')}
              className="btn btn-primary w-full"
            >
              Get Quote
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
