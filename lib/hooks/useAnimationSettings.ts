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

        // Optional: Listen for resize/change (debounce recommended in prod, keeping simple for now)
        const resizeObserver = new ResizeObserver(() => checkSettings());
        resizeObserver.observe(document.body);

        return () => resizeObserver.disconnect();
    }, []);

    return settings;
}
