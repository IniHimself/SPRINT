import React, { useEffect, useRef } from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

export function StatCard({ number, label }: StatCardProps) {
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
      className="scroll-animate bg-white rounded-lg p-6 md:p-8 text-center shadow-sm border border-border hover:-translate-y-2 hover:shadow-lg hover:border-primary-light transition-all duration-350 relative overflow-hidden group"
    >
      <div className="absolute -top-5 -right-5 w-20 h-20 bg-primary-light rounded-full opacity-30 transition-all duration-350 group-hover:scale-[2] group-hover:opacity-10" />
      <div className="relative z-10">
        <div className="font-display text-3xl md:text-4xl font-semibold text-primary-deep">
          {number}
        </div>
        <div className="text-xs md:text-sm text-text-muted uppercase tracking-wide mt-1.5">
          {label}
        </div>
      </div>
    </div>
  );
}
