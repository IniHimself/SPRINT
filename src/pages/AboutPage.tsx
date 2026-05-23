import React from 'react';
import { Award, Users, Rocket, Heart, Globe, Zap } from 'lucide-react';
import { FullBleedImage } from '../components/FullBleedImage';
import { Timeline } from '../components/Timeline';
import { BentoGrid } from '../components/BentoGrid';
import { CaseStudy } from '../components/CaseStudy';
import { Accordion } from '../components/Accordion';

const timelineItems = [
  {
    year: '2012',
    title: 'Workshop founded',
    description: 'Gbenga Salu begins assembling imported fan components in Lagos.',
  },
  {
    year: '2016',
    title: 'First 2m prototype',
    description: 'Successfully tested a locally assembled 2m ceiling fan for a textile factory.',
  },
  {
    year: '2019',
    title: 'Mist fan launch',
    description: 'Introduced mobile mist/water fan; adopted by event centres nationwide.',
  },
  {
    year: '2023',
    title: 'National distribution',
    description: 'Service centres opened in 4 major cities; over 500 units installed.',
  },
];

const coreValues = [
  {
    icon: '🏆',
    title: 'Quality First',
    description: 'Uncompromising commitment to engineering excellence and reliability.',
  },
  {
    icon: '🤝',
    title: 'Customer Success',
    description: 'Your satisfaction is our mission — from installation to lifetime support.',
  },
  {
    icon: '🌍',
    title: 'Local Innovation',
    description: 'Nigerian ingenuity solving African challenges with global standards.',
  },
  {
    icon: '⚡',
    title: 'Efficiency',
    description: 'Reducing operational costs while maximizing performance and uptime.',
  },
  {
    icon: '🔧',
    title: 'Reliability',
    description: '24/7 operational capacity with minimal maintenance requirements.',
  },
  {
    icon: '💚',
    title: 'Sustainability',
    description: 'Energy-efficient designs reducing environmental impact across sectors.',
  },
];

const caseStudies = [
  {
    image:
      '/sgs-fan-05.png',
    client: 'RCCG Redemption City',
    industry: 'Missionary',
    challenge: 'Large-scale warehouse cooling with 24/7 operational demands',
    solution: '24 units of SGS-240 ceiling fans with centralized control',
    result: 'Improved worker productivity and product quality assurance',
    quote:
      'Sprint GS fans have been instrumental in maintaining optimal working conditions across our facility. The reliability is unmatched.',
    stats: [
      { number: '24', label: 'Units Installed' },
      { number: '2.2m', label: 'Blade Diameter' },
      { number: '99.8%', label: 'Uptime' },
      { number: '₦12M+', label: 'Annual Savings' },
    ],
  },
  {
    image:
      '/sgs-01-fan.jfif',
    client: 'Redeemers Univeristy',
    industry: 'School',
    challenge: 'Cooling 5,000 sqm outdoor event space during peak season',
    solution: '8 mobile SGW-200 mist fans with real-time monitoring',
    result: 'Enhanced guest experience with 12°C temperature reduction',
    quote:
      'Our students now have properly ventilated lecture halls. These fans are a game-changer for University and halls in Nigeria.',
    stats: [
      { number: '500', label: 'Sq.m Covered' },
      { number: '8', label: 'Units Deployed' },
      { number: '12°C', label: 'Cooling Drop' },
      { number: '94%', label: 'Guest Satisfaction' },
    ],
  },
  {
    image:
      '/event-center.jpg',
    client: 'Lagos Event Centre',
    industry: 'Hospitality & Events',
    challenge: 'Cooling 5,000 sqm outdoor event space during peak season',
    solution: '8 mobile SGW-200 mist fans with real-time monitoring',
    result: 'Enhanced guest experience with 12°C temperature reduction',
    quote:
      'Our guests noticed the comfort difference immediately. These fans are a game-changer for outdoor events in Nigeria.',
    stats: [
      { number: '5000', label: 'Sq.m Covered' },
      { number: '8', label: 'Units Deployed' },
      { number: '12°C', label: 'Cooling Drop' },
      { number: '94%', label: 'Guest Satisfaction' },
    ],
  },
  {
    image:
      '/sgs-fan-03.jpeg',
    client: 'Dangote Refinery',
    industry: 'Oil & Gas',
    challenge: 'Maintain precise temperature control for fabric production',
    solution: '15 SGS-240 units with variable frequency drive system',
    result: 'Reduced product defects by 18% and improved staff retention',
    quote:
      'The precision control has been crucial for our production quality. We cannot imagine operating without these fans now.',
    stats: [
      { number: '15', label: 'Installed Units' },
      { number: '18%', label: 'Defect Reduction' },
      { number: '92%', label: 'Energy Savings' },
      { number: '2.5yrs', label: 'ROI Timeline' },
    ],
  },
];

const aboutAccordion = [
  {
    id: 'founder',
    title: 'Meet Gbenga Salu, Founder & CEO',
    content: (
      <div className="space-y-3">
        <p>
          Gbenga Salu's journey into industrial cooling began with a simple observation: Nigerian
          businesses were importing expensive, unreliable cooling solutions when homegrown
          engineering could do better.
        </p>
        <p>
          In 2012, with a small team and limited resources, he started assembling fan components in
          a modest Ikeja workshop. Through relentless iteration, local partnerships, and a
          commitment to quality, Sprint GS evolved from a startup to Nigeria's most trusted
          industrial fan manufacturer.
        </p>
        <p>
          Today, Gbenga oversees a team of 45 engineers and technicians across four major cities,
          with the vision of becoming Africa's leading provider of precision cooling solutions.
        </p>
      </div>
    ),
  },
  {
    id: 'team',
    title: 'Our Team & Expertise',
    content: (
      <div className="space-y-3">
        <p>
          Sprint GS is powered by 45+ professionals across engineering, manufacturing, and customer
          support:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Engineering Team:</strong> 18 mechanical and electrical engineers with 10+ years
            experience in HVAC systems
          </li>
          <li>
            <strong>Manufacturing:</strong> 12 skilled technicians managing assembly, quality control,
            and testing
          </li>
          <li>
            <strong>Service & Support:</strong> 12 certified technicians across Lagos, Abuja, Port
            Harcourt, and Kano
          </li>
          <li>
            <strong>Operations:</strong> 3 supply chain and logistics specialists ensuring timely
            delivery
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'supply',
    title: 'Supply Chain & Manufacturing',
    content: (
      <div className="space-y-3">
        <p>
          Our manufacturing philosophy balances local assembly with selective international
          partnerships for critical components:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Blade Manufacturing:</strong> In-house aluminum casting and CNC machining for
            precision and quality
          </li>
          <li>
            <strong>Motors:</strong> Partnership with leading Asian suppliers for brushless motor
            technology
          </li>
          <li>
            <strong>Frames & Hardware:</strong> Local galvanization and powder coating for durability
          </li>
          <li>
            <strong>Electronics:</strong> Variable frequency drives sourced from verified European
            manufacturers
          </li>
          <li>
            <strong>Quality Assurance:</strong> 100% testing of all units before delivery
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'commitment',
    title: 'Sustainability & Social Responsibility',
    content: (
      <div className="space-y-3">
        <p>
          Sprint GS is committed to creating positive impact beyond business:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Energy Efficiency:</strong> All fans engineered to reduce power consumption by
            40% vs. traditional motors
          </li>
          <li>
            <strong>Local Employment:</strong> 80% of our team are trained from within Nigeria,
            creating skilled job opportunities
          </li>
          <li>
            <strong>Community Programs:</strong> Technical training partnerships with vocational
            schools across Lagos and Abuja
          </li>
          <li>
            <strong>Waste Management:</strong> Recycling program for old fans and manufacturing
            byproducts
          </li>
        </ul>
      </div>
    ),
  },
];

export function AboutPage() {
  return (
    <div className="animate-fade-slide-in pt-4 md:pt-0">
      {/* Header Section */}
      <section className="section pb-0 md:pb-4">
        <span className="section-label">Our Heritage</span>
        <h2 className="section-title">Sprint GS – Born in Lagos, Built for the World</h2>
        <p className="section-subtitle">
          From a small workshop in Ikeja to Nigeria's leading industrial fan manufacturer – our
          story is one of relentless innovation and local pride.
        </p>
      </section>

      {/* Hero Image */}
      <section className="section pt-0 md:pt-4 py-0">
        <FullBleedImage
          image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=80"
          caption="Founder, Gbenga Salu, at the original Ikeja workshop (2012)"
        />
      </section>

      {/* Mission & Timeline */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Mission & Vision */}
          <div>
            <h3 className="font-display text-xl md:text-2xl mb-4 text-black">Mission & Vision</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong className="text-text">Mission:</strong> To provide Nigeria and Africa with
              industrial cooling solutions that match global standards – using local talent and
              materials wherever possible.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text">Vision:</strong> To become the most trusted name in
              industrial air movement across the continent, known for durability, performance, and
              after-sales support.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-silver rounded-lg p-5 md:p-6">
            <h4 className="font-display text-lg font-medium mb-4 text-black">Company Timeline</h4>
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* Core Values Bento */}
      <section className="section">
        <span className="section-label">Our Foundation</span>
        <h2 className="section-title">Core Values</h2>
        <p className="section-subtitle">
          Six pillars guiding every decision we make and every fan we build.
        </p>

        <BentoGrid
          columns={3}
          items={coreValues.map((value, idx) => ({
            id: `value-${idx}`,
            icon: value.icon,
            title: value.title,
            description: value.description,
            size: 'small',
          }))}
        />
      </section>

      {/* Case Studies */}
      <section className="section">
        <span className="section-label">Proven Results</span>
        <h2 className="section-title">Real-World Impact</h2>
        <p className="section-subtitle">
          Trusted by Nigeria's largest companies across manufacturing, logistics, and hospitality.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((study, idx) => (
            <CaseStudy key={idx} {...study} />
          ))}
        </div>
      </section>

      {/* About Accordion */}
      <section className="section">
        <span className="section-label">Learn More</span>
        <h2 className="section-title">Behind the Scenes</h2>

        <Accordion items={aboutAccordion} />
      </section>
    </div>
  );
}
