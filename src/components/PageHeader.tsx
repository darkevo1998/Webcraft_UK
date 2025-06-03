import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const PageHeader = ({ title, subtitle, bgImage }: PageHeaderProps) => {
  return (
    <div 
      className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader; 