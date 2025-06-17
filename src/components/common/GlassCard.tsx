import React from 'react';
import clsx from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={clsx(
        'backdrop-blur-xl bg-white/80 dark:bg-dark-800/80',
        'border border-gray-200/50 dark:border-dark-700/50',
        'rounded-3xl shadow-xl',
        'hover:bg-white/90 dark:hover:bg-dark-800/90',
        'hover:shadow-2xl hover:scale-[1.02]',
        'transition-all duration-300',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;