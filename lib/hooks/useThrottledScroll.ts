import { useEffect, useState } from 'react';

export function useThrottledScroll(delay = 100) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        // Initialize state
        setScrollY(window.scrollY);

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}
