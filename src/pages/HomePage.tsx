import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wind, Shield, Zap } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { ProductCard } from '../components/ProductCard';
import { BentoGrid } from '../components/BentoGrid';
import type { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const featuredProducts = [
  {
    image: '/sgs-01-fan.jfif',
    badge: 'Best Seller',
    title: 'Ceiling Fan SGS-240',
    description: '2.4m diameter, high-volume low-speed ceiling fan for factories and warehouses.',
    specs: ['2.4m', '12,000 CFM', 'Silent'],
  },
  {
    image: '/sgs-fan-04.jpeg',
    badge: 'Mobile',
    title: 'Standing Fan SGM-220',
    description: '2.2m mobile industrial fan with adjustable height and oscillation. Plug & play.',
    specs: ['2.2m', '9,500 CFM', 'Castor Wheels'],
  },
  {
    image: '/sgs-fan-03.jpeg',
    badge: 'Mist/Water',
    title: 'Mist Fan SGW-200',
    description: '2.0m mobile mist/water fan with integrated high-pressure pump. Cools 300+ sq.m.',
    specs: ['2.0m', '8,000 CFM', '12°C Drop'],
  },
];

const stats = [
  { number: '500+', label: 'Units Installed' },
  { number: '2.4m', label: 'Max Blade Diameter' },
  { number: '12 yrs', label: 'Engineering Experience' },
  { number: '4 Cities', label: 'Service Centres' },
];

const valueProps = [
  {
    id: 'airflow',
    icon: '💨',
    title: 'Unmatched Airflow',
    description: 'Up to 12,000 CFM — cool spaces up to 850 sqm with a single unit.',
    size: 'small' as const,
  },
  {
    id: 'energy',
    icon: '⚡',
    title: 'Energy Efficient',
    description: 'Brushless DC motors with VFD cut energy costs by up to 40% vs. traditional fans.',
    size: 'small' as const,
  },
  {
    id: 'local',
    icon: '🇳🇬',
    title: 'Proudly Nigerian',
    description: 'Designed, assembled, and supported in Nigeria — faster delivery, local expertise.',
    size: 'small' as const,
  },
  {
    id: 'support',
    icon: '🔧',
    title: 'Lifetime Support',
    description: 'Field technicians across Lagos, Abuja, Port Harcourt, and Kano ready when you need them.',
    size: 'small' as const,
  },
  {
    id: 'installations',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    title: 'Trusted Across Industries',
    description: 'From oil refineries to outdoor events — our fans operate 24/7 in the toughest conditions.',
    size: 'medium' as const,
  },
  {
    id: 'warranty',
    icon: '🛡️',
    title: '5-Year Warranty',
    description: 'Structural warranty backed by a team that stands behind every unit we ship.',
    size: 'small' as const,
  },
];

function HeroSection({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('visible'), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-black-soft">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/sgs-fan-05.png" 
          alt=""
          aria-hidden
          className="w-full h-full object-cover animate-slow-pan opacity-60" 
        />
        {/* Adjusted gradient to let the image show through better */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="scroll-animate relative z-10 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto w-full py-20"
      >
        <span className="inline-block text-[0.75rem] font-bold tracking-[0.15em] uppercase text-primary mb-5">
          Industrial Cooling Solutions
        </span>

        <h1 className="font-display font-semibold text-white leading-tight mb-6 max-w-2xl"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          Nigeria's Most Powerful Industrial Fans
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed text-shadow-sm">
          From factory floors to outdoor events — Sprint GS fans cool spaces up to 850 sqm.
          2m+ blades, engineered in Lagos.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('products')}
            className="btn btn-primary gap-2"
          >
            View Products
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="btn btn-outline gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20"
          >
            Get a Quote
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-5 mt-12 text-white/70 text-sm font-medium">
          <span className="flex items-center gap-1.5 drop-shadow-md">
            <Shield className="w-4 h-4 text-primary" />
            5-Year Structural Warranty
          </span>
          <span className="flex items-center gap-1.5 drop-shadow-md">
            <Wind className="w-4 h-4 text-primary" />
            Up to 12,000 CFM
          </span>
          <span className="flex items-center gap-1.5 drop-shadow-md">
            <Zap className="w-4 h-4 text-primary" />
            IE3 Energy Efficiency
          </span>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-slide-in">
      <HeroSection onNavigate={onNavigate} />

      {/* Stats */}
      <section className="section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} number={stat.number} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section pt-0 md:pt-0">
        <span className="section-label">Our Range</span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="section-title mb-2">Fans Built for Nigeria's Toughest Spaces</h2>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              Three models engineered for 200+ sqm industrial and commercial environments.
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary-deep transition-colors duration-350 shrink-0"
          >
            See all specs
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product, idx) => (
            <ProductCard
              key={idx}
              {...product}
              onContact={() => onNavigate('contact')}
            />
          ))}
        </div>
      </section>

      {/* Why Sprint GS */}
      <section className="section bg-silver -mx-0 px-5 md:px-10 lg:px-16 rounded-none"
        style={{ maxWidth: '100%', margin: '0' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <span className="section-label">Why Sprint GS</span>
          <h2 className="section-title">Performance You Can Rely On</h2>
          <p className="section-subtitle">
            Built to run 24/7 in the harshest conditions, backed by local expertise and a team that
            responds fast.
          </p>
          <BentoGrid columns={3} items={valueProps} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-black-soft text-white px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2
              className="font-display font-semibold text-white mb-3"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}
            >
              Ready to cool your facility?
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-md">
              Tell us your space dimensions and we'll recommend the right fan configuration — fast.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="btn btn-primary gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="btn btn-outline"
            >
              Our Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
