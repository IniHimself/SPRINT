import React, { useEffect, useRef } from 'react';

interface FullBleedImageProps {
  image: string;
  caption?: string;
  subcaption?: string;
}

export function FullBleedImage({ image, caption, subcaption }: FullBleedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-animate w-full h-[35vh] md:h-[55vh] min-h-[240px] rounded-xl overflow-hidden shadow-xl relative mx-0"
    >
      <img
        src={image}
        alt={caption || 'Featured image'}
        className="w-full h-full object-cover transition-transform duration-550 hover:scale-[1.03]"
      />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/65 to-transparent text-white">
          <h3 className="text-lg md:text-xl font-semibold">{caption}</h3>
          {subcaption && <p className="text-sm text-white/80 mt-1">{subcaption}</p>}
        </div>
      )}
    </div>
  );
}
