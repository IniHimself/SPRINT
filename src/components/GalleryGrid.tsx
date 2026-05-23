import React, { useEffect, useRef } from 'react';

interface GalleryGridProps {
  images: { src: string; alt: string }[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, idx) => (
        <GalleryItem key={idx} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

function GalleryItem({ src, alt }: { src: string; alt: string }) {
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

  return (
    <div
      ref={itemRef}
      className="scroll-animate rounded-md overflow-hidden aspect-square cursor-pointer shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-350"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-550 hover:scale-[1.05]"
      />
    </div>
  );
}
