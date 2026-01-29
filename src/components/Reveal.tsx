import React, { useEffect, useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    className = "motion-in",
    threshold = 0.1
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.disconnect(); // Trigger animation once and stop observing
                    }
                });
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default Reveal;
