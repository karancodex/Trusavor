import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={twMerge(
                "p-2 rounded-full transition-all duration-300 hover:bg-premium-gold/10 border border-transparent hover:border-premium-gold/20",
                // Default color if not overridden
                "text-premium-text-primary",
                className
            )}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5" />
            ) : (
                <Sun className="w-5 h-5" />
            )}
        </button>
    );
};
