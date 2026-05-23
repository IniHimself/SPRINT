import React from 'react';

interface TimelineItemData {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItemData[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8 md:pl-10 border-l-2 border-primary-light">
      {items.map((item, idx) => (
        <TimelineItem key={idx} {...item} isLast={idx === items.length - 1} />
      ))}
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
  isLast,
}: TimelineItemData & { isLast: boolean }) {
  return (
    <div className={`relative pl-6 md:pl-7 ${isLast ? '' : 'mb-8 md:mb-9'}`}>
      <div className="absolute -left-[calc(1.25rem+2px)] md:-left-[calc(1.5rem+2px)] top-1 w-4 h-4 bg-primary rounded-full border-[3px] border-white shadow-[0_0_0_4px_rgba(229,243,255,1)]" />
      <div className="font-bold text-primary-deep text-sm tracking-wide">{year}</div>
      <h4 className="font-display text-base md:text-lg mt-1 mb-1.5">{title}</h4>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}
