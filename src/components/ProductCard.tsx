import React, { useEffect, useRef } from 'react';

interface ProductCardProps {
  image: string;
  badge: string;
  title: string;
  description: string;
  specs: string[];
  onContact: () => void;
}

export function ProductCard({
  image,
  badge,
  title,
  description,
  specs,
  onContact,
}: ProductCardProps) {
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
      className="scroll-animate bg-white rounded-lg overflow-hidden shadow-md border border-border hover:-translate-y-3 hover:shadow-xl hover:border-primary-light transition-all duration-350"
    >
      <div className="h-48 md:h-60 bg-silver relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-550 hover:scale-[1.07]"
        />
        <span className="absolute top-4 left-4 bg-primary text-white text-[0.7rem] font-bold px-3 py-1 rounded-full tracking-wide">
          {badge}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-display mb-2 text-black">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-text-muted mb-4">
          {specs.map((spec, idx) => (
            <span key={idx} className="bg-silver px-2.5 py-1 rounded-full">
              {spec}
            </span>
          ))}
        </div>
        <button onClick={onContact} className="btn btn-primary w-full text-sm">
          Request Specs
        </button>
      </div>
    </div>
  );
}
