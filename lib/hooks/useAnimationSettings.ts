import { useEffect, useState } from 'react';

export function useAnimationSettings() {
    const [settings, setSettings] = useState({
        shouldAnimate: false,
        reducedMotion: false,
        isMobile: false
    });

    useEffect(() => {
        // Initial check
        const checkSettings = () => {
            const isMobile = window.innerWidth < 768;
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            setSettings({
                shouldAnimate: !isMobile && !reducedMotion,
                reducedMotion,
                isMobile
            });
        };

        checkSettings();

        // Use efficient media query listener instead of ResizeObserver
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleMediaChange = () => {
            const isMobile = !mediaQuery.matches;
            const reducedMotion = reducedMotionQuery.matches;

            setSettings({
                shouldAnimate: !isMobile && !reducedMotion,
                reducedMotion,
                isMobile
            });
        };

        // Modern browsers support addEventListener, legacy browsers use addListener
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleMediaChange);
            reducedMotionQuery.addEventListener('change', handleMediaChange);
        } else {
            // Fallback for older browsers
            mediaQuery.addListener(handleMediaChange);
            reducedMotionQuery.addListener(handleMediaChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleMediaChange);
                reducedMotionQuery.removeEventListener('change', handleMediaChange);
            } else {
                mediaQuery.removeListener(handleMediaChange);
                reducedMotionQuery.removeListener(handleMediaChange);
            }
        };
    }, []);

    return settings;
}
