import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `
    px-6 py-3 rounded-lg font-medium
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    min-h-[44px] min-w-[44px]
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-blue-600 to-green-600 text-white
      hover:from-blue-700 hover:to-green-700
      focus:ring-blue-500
      shadow-lg hover:shadow-xl
      transition-all duration-200
    `,
    secondary: `
      bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100
      hover:bg-gray-300 dark:hover:bg-gray-600
      focus:ring-gray-500
    `,
    outline: `
      border-2 border-blue-600 text-blue-600
      hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 dark:hover:from-blue-900/20 dark:hover:to-green-900/20
      focus:ring-blue-500
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

