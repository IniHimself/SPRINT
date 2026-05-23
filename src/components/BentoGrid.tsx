import React, { useEffect, useRef } from 'react';

export interface BentoItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  content?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  highlight?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  columns?: number;
}

export function BentoGrid({ items, columns = 3 }: BentoGridProps) {
  return (
    <div
      className={`grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${
          columns === 3 ? '280px' : columns === 2 ? '320px' : '400px'
        }, 1fr))`,
      }}
    >
      {items.map((item) => (
        <BentoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function BentoItem({ item }: { item: BentoItem }) {
  const itemRef = useRef<HTMLDivElement>(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sizeClass = {
    small: 'col-span-1',
    medium: 'col-span-1 sm:col-span-2 md:col-span-1',
    large: 'col-span-1 sm:col-span-2 md:col-span-2',
  }[item.size || 'small'];

  return (
    <div
      ref={itemRef}
      className={`scroll-animate rounded-xl overflow-hidden transition-all duration-350 border border-border hover:border-primary-light hover:shadow-lg hover:-translate-y-1 ${sizeClass} ${
        item.image ? 'h-64 sm:h-80' : 'min-h-48 p-5 md:p-6'
      } ${
        item.highlight
          ? 'bg-gradient-to-br from-primary-light to-primary-light/30'
          : 'bg-white'
      }`}
    >
      {item.image ? (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-550 hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5 md:p-6 text-white">
            <h3 className="font-display text-lg md:text-xl font-semibold">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-white/80 mt-2">{item.description}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          {item.icon && <div className="text-3xl md:text-4xl mb-3">{item.icon}</div>}
          <h3 className="font-display text-base md:text-lg font-semibold text-black mb-2">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-text-secondary text-sm leading-relaxed flex-1">
              {item.description}
            </p>
          )}
          {item.content && <div className="mt-4 text-sm text-text-secondary">{item.content}</div>}
        </div>
      )}
    </div>
  );
}
