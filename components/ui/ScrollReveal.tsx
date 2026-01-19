"use client";

import { motion, UseInViewOptions, Variant, Variants } from "framer-motion";
import { useAnimationSettings } from "@/lib/hooks/useAnimationSettings";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    mode?: "fade-up" | "fade-in" | "slide-right" | "slide-left";
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
    className?: string;
    staggerChildren?: number; // If set, this component acts as a container for staggering
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    mode = "fade-up",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-50px", amount: 0.2 },
    className,
    staggerChildren
}: ScrollRevealProps) => {
    const { shouldAnimate } = useAnimationSettings();

    // If animations are disabled, we want to show content immediately without motion
    if (!shouldAnimate) {
        return (
            <div className={className} style={{ width }}>
                {children}
            </div>
        );
    }

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: mode === "fade-up" ? 30 : 0,
            x: mode === "slide-right" ? -30 : mode === "slide-left" ? 30 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
                staggerChildren: staggerChildren
            }
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

// Child component for stagger effects
export const ScrollRevealItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const itemVariants: Record<string, Variant> = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};
