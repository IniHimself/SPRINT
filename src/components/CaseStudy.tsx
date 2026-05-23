import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface CaseStudyProps {
  image: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  quote: string;
  stats: { number: string; label: string }[];
}

export function CaseStudy({
  image,
  client,
  industry,
  challenge,
  solution,
  result,
  quote,
  stats,
}: CaseStudyProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="scroll-animate bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-350"
    >
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={client}
          className="w-full h-full object-cover transition-transform duration-550 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block bg-primary-light px-3 py-1 rounded-full text-xs font-semibold text-primary-deep mb-3">
            {industry}
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-black mb-2">
            {client}
          </h3>
        </div>

        {/* Quote */}
        <div className="mb-6 p-4 md:p-5 bg-primary-light/30 rounded-lg border-l-4 border-primary">
          <div className="flex gap-2 mb-3">
            <Quote className="w-5 h-5 text-primary flex-shrink-0" />
          </div>
          <p className="text-text-secondary italic">{quote}</p>
        </div>

        {/* Challenge, Solution, Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
          <div>
            <h4 className="font-semibold text-black mb-2">Challenge</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">Solution</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">Result</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{result}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-semibold text-primary-deep">
                {stat.number}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
