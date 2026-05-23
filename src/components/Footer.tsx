import React from 'react';

type PageType = 'home' | 'products' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks: { page: PageType; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'products', label: 'Products' },
    { page: 'about', label: 'About' },
    { page: 'contact', label: 'Contact' },
  ];

  const productLinks = [
    'Ceiling Fans',
    'Mobile Standing',
    'Mist/Water Fans',
    'Custom Solutions',
  ];

  const socialLinks = ['LinkedIn', 'Instagram', 'WhatsApp', 'Careers'];

  return (
    <footer className="bg-black text-white/70 px-5 md:px-10 py-12 md:py-16 mt-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-display font-semibold text-lg mb-4">Sprint GS</h4>
            <p className="text-sm leading-relaxed text-white/60">
              Industrial precision fans, proudly Nigerian. 2m+ blades, engineered for the toughest
              environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ page, label }) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-white/55 hover:text-white transition-colors duration-350 text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <span className="text-white/55 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((item, idx) => (
                <li key={idx}>
                  <span className="text-white/55 hover:text-white transition-colors duration-350 text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 text-center text-xs text-white/35">
          &copy; {currentYear} Sprint GS Limited. All rights reserved. Engineered in Nigeria.
        </div>
      </div>
    </footer>
  );
}
