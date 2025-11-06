import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800
        rounded-2xl shadow-xl
        p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700
        hover:shadow-2xl transition-shadow duration-300
        ${className}
      `}
    >
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

