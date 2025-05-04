import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left'
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }[align];
  
  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className="section-title opacity-0 animate-on-scroll">
        {title}
      </h2>
      {subtitle && (
        <p className="text-silver/80 mt-4 max-w-2xl opacity-0 animate-on-scroll">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;