import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { Accordion } from '../components/Accordion';
import { BentoGrid } from '../components/BentoGrid';
import type { PageType } from '../App';

interface ProductsPageProps {
  onNavigate: (page: PageType) => void;
}

const products = [
  {
    image: '/sgs-01-fan.jfif',
    badge: 'Best Seller',
    title: 'Ceiling Fan SGS-240',
    description: '2.4m diameter, high-volume low-speed ceiling fan for factories and warehouses.',
    specs: ['2.4m', '12,000 CFM', 'Silent'],
  },
  {
    image: '/sgs-fan-03.jpeg',
    badge: 'Mobile',
    title: 'Standing Fan SGM-220',
    description: '2.2m mobile industrial fan with adjustable height and oscillation. Plug & play.',
    specs: ['2.2m', '9,500 CFM', 'Castor Wheels'],
  },
  {
    image: '/sgs-fan-04.jpeg',
    badge: 'Mist/Water',
    title: 'Mist Fan SGW-200',
    description: '2.0m mobile mist/water fan with integrated high-pressure pump. Cools 300+ sq.m.',
    specs: ['2.0m', '8,000 CFM', '12°C Drop'],
  },
];

const galleryImages = [
  {
    src: '/image-warehouse-1.jpg',
    alt: 'Warehouse fan',
  },
  {
    src: '/event-center.jpg',
    alt: 'Event center',
  },
  {
    src: '/sgs-fan-04.jpeg',
    alt: 'Factory floor',
  },
];

const comparisonRows = [
  {
    feature: 'Blade Diameter',
    'Ceiling SGS-240': '2.4m',
    'Standing SGM-220': '2.2m',
    'Mist SGW-200': '2.0m',
  },
  {
    feature: 'Max Airflow (CFM)',
    'Ceiling SGS-240': '12,000',
    'Standing SGM-220': '9,500',
    'Mist SGW-200': '8,000',
  },
  {
    feature: 'Coverage Area',
    'Ceiling SGS-240': '850 sqm',
    'Standing SGM-220': '650 sqm',
    'Mist SGW-200': '300 sqm',
  },
  {
    feature: 'Power Consumption',
    'Ceiling SGS-240': '1.2 kW',
    'Standing SGM-220': '0.9 kW',
    'Mist SGW-200': '1.5 kW',
  },
  {
    feature: 'Noise Level',
    'Ceiling SGS-240': '68-72 dB',
    'Standing SGM-220': '65-70 dB',
    'Mist SGW-200': '70-75 dB',
  },
  {
    feature: 'Mobile Installation',
    'Ceiling SGS-240': false,
    'Standing SGM-220': true,
    'Mist SGW-200': true,
  },
  {
    feature: 'Mist/Water System',
    'Ceiling SGS-240': false,
    'Standing SGM-220': false,
    'Mist SGW-200': true,
  },
  {
    feature: 'Oscillation Control',
    'Ceiling SGS-240': false,
    'Standing SGM-220': true,
    'Mist SGW-200': true,
  },
];

const specAccordion = [
  {
    id: 'sgs240',
    title: 'Ceiling Fan SGS-240 — Technical Specifications',
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-black mb-3">Physical</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Blade Diameter:</strong> 2.4m (8 feet)
              </li>
              <li>
                <strong>Blade Material:</strong> Aluminum alloy with reinforced ribs
              </li>
              <li>
                <strong>Frame Material:</strong> Galvanized steel with powder coat
              </li>
              <li>
                <strong>Weight:</strong> 180 kg
              </li>
              <li>
                <strong>Mounting:</strong> Ceiling (1.2m min clearance)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Electrical</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Motor Type:</strong> Brushless DC with VFD
              </li>
              <li>
                <strong>Power:</strong> 1.2 kW (nominal)
              </li>
              <li>
                <strong>Voltage:</strong> 220V/380V, 50/60 Hz
              </li>
              <li>
                <strong>Efficiency:</strong> 89% (IE3)
              </li>
              <li>
                <strong>Control:</strong> Manual, remote, or smart integration
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Performance</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Airflow:</strong> 12,000 CFM max
              </li>
              <li>
                <strong>RPM:</strong> 60-240 (variable)
              </li>
              <li>
                <strong>Noise Level:</strong> 68-72 dB
              </li>
              <li>
                <strong>Coverage:</strong> 850 sqm effective
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Warranty</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Structural:</strong> 5 years
              </li>
              <li>
                <strong>Motor:</strong> 3 years
              </li>
              <li>
                <strong>Support:</strong> Lifetime
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'sgm220',
    title: 'Standing Fan SGM-220 — Technical Specifications',
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-black mb-3">Physical</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Blade Diameter:</strong> 2.2m (7 feet)
              </li>
              <li>
                <strong>Height Adjustment:</strong> 1.2m - 2.0m
              </li>
              <li>
                <strong>Base Dimensions:</strong> 1.5m × 1.5m
              </li>
              <li>
                <strong>Weight:</strong> 140 kg
              </li>
              <li>
                <strong>Castor Wheels:</strong> Heavy-duty, locking
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Electrical</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Motor Type:</strong> Brushless DC
              </li>
              <li>
                <strong>Power:</strong> 0.9 kW
              </li>
              <li>
                <strong>Voltage:</strong> 220V/380V, 50/60 Hz
              </li>
              <li>
                <strong>Efficiency:</strong> 87% (IE3)
              </li>
              <li>
                <strong>Cord Length:</strong> 5m heavy-duty
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Performance</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Airflow:</strong> 9,500 CFM max
              </li>
              <li>
                <strong>Oscillation:</strong> 90° horizontal sweep
              </li>
              <li>
                <strong>Noise Level:</strong> 65-70 dB
              </li>
              <li>
                <strong>Coverage:</strong> 650 sqm effective
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>Easy setup, no installation needed</li>
              <li>Variable speed control (3 speeds)</li>
              <li>Tilt-adjustable head</li>
              <li>Compact storage</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'sgw200',
    title: 'Mist Fan SGW-200 — Technical Specifications',
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-black mb-3">Physical</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Blade Diameter:</strong> 2.0m (6.5 feet)
              </li>
              <li>
                <strong>Height Range:</strong> 0.8m - 1.8m
              </li>
              <li>
                <strong>Water Tank:</strong> 50L capacity
              </li>
              <li>
                <strong>Weight:</strong> 165 kg (with tank)
              </li>
              <li>
                <strong>Castor Wheels:</strong> Heavy-duty, all-terrain
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Mist System</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Pump Type:</strong> High-pressure centrifugal
              </li>
              <li>
                <strong>Pressure:</strong> 30-40 bar
              </li>
              <li>
                <strong>Nozzles:</strong> 4 adjustable mist heads
              </li>
              <li>
                <strong>Flow Rate:</strong> 15L/hour
              </li>
              <li>
                <strong>Coverage:</strong> 300+ sqm
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Performance</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Temperature Drop:</strong> Up to 12°C
              </li>
              <li>
                <strong>Airflow:</strong> 8,000 CFM
              </li>
              <li>
                <strong>Power Consumption:</strong> 1.5 kW
              </li>
              <li>
                <strong>Noise Level:</strong> 70-75 dB
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Perfect For</h4>
            <ul className="space-y-2 text-sm">
              <li>Outdoor events and weddings</li>
              <li>Factory cooling zones</li>
              <li>Warehouse loading areas</li>
              <li>Restaurant terraces</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  return (
    <div className="animate-fade-slide-in pt-4 md:pt-0">
      {/* Header Section */}
      <section className="section pb-0 md:pb-4">
        <span className="section-label">Our Range</span>
        <h2 className="section-title">Industrial Fan Systems</h2>
        <p className="section-subtitle">
          Every unit is engineered for spaces exceeding 200 square metres. Custom finishes and
          mounting options available.
        </p>
      </section>

      {/* Products Grid */}
      <section className="section pt-0 md:pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              {...product}
              onContact={() => onNavigate('contact')}
            />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section">
        <span className="section-label">Detailed Comparison</span>
        <h2 className="section-title">Product Specifications at a Glance</h2>
        <p className="section-subtitle">
          Side-by-side comparison of our three industrial fan systems.
        </p>

        <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
          <ComparisonTable
            columns={['Ceiling SGS-240', 'Standing SGM-220', 'Mist SGW-200']}
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* Detailed Specs Accordion */}
      <section className="section">
        <span className="section-label">Deep Dive</span>
        <h2 className="section-title">Complete Technical Specifications</h2>
        <p className="section-subtitle">
          Explore detailed engineering specifications for each fan model.
        </p>

        <Accordion items={specAccordion} />
      </section>

      {/* Application Guide Bento */}
      <section className="section">
        <span className="section-label">Use Cases</span>
        <h2 className="section-title">Perfect Applications for Each Model</h2>

        <BentoGrid
          columns={3}
          items={[
            {
              id: 'ceiling-factory',
              title: 'Manufacturing Plants',
              description: 'SGS-240 ceiling fans for 24/7 continuous duty cooling',
              size: 'medium',
              image:
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
            },
            {
              id: 'standing-warehouse',
              title: 'Warehouses & Logistics',
              description: 'SGM-220 mobile units for flexible cooling zones',
              size: 'medium',
              image:
                'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=600&q=80',
            },
            {
              id: 'mist-events',
              title: 'Outdoor Events',
              description: 'SGW-200 mist fans for guest comfort and brand experience',
              size: 'medium',
              image:
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            },
            {
              id: 'ceiling-speed',
              icon: '⚡',
              title: 'Variable Speed Control',
              description: 'All models support VFD for energy optimization',
              size: 'small',
            },
            {
              id: 'standing-mobility',
              icon: '🛞',
              title: 'Instant Deployment',
              description: 'Mobile models ready to use, no installation required',
              size: 'small',
            },
            {
              id: 'mist-comfort',
              icon: '❄️',
              title: '12°C Temperature Drop',
              description: 'Mist system creates comfortable outdoor environments',
              size: 'small',
            },
          ]}
        />
      </section>

      {/* Gallery Section */}
      <section className="section">
        <span className="section-label">Installations</span>
        <h2 className="section-title">Trusted Across Nigeria</h2>
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
