import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setCursorVariant('hover');
        const handleMouseLeave = () => setCursorVariant('default');

        const interactiveElements = document.querySelectorAll('button, a, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            backgroundColor: 'transparent',
            border: '2px solid currentColor'
        },
        hover: {
            height: 60,
            width: 60,
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            mixBlendMode: 'difference' as any
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-black dark:border-white pointer-events-none z-[9999] hidden lg:block transition-colors duration-300"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
        />
    );
};

export default CustomCursor;
