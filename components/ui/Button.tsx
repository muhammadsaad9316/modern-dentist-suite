"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "emergency";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

// Framer Motion wrapper for buttons
const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-secondary text-white hover:bg-primary shadow-md hover:shadow-lg",
            secondary: "bg-white text-primary border border-slate-200 hover:bg-slate-50 shadow-sm",
            outline: "bg-transparent border border-white text-white hover:bg-white/10",
            ghost: "bg-transparent text-primary hover:bg-gray-100",
            emergency: "bg-emergency text-white hover:bg-red-600 shadow-md hover:shadow-red-200",
        };

        const sizes = {
            md: "h-11 px-4 py-2", // Was h-10, increased to 44px
            sm: "h-11 rounded-md px-3 md:h-9", // Mobile: 44px, Desktop: 36px
            lg: "h-12 rounded-md px-8", // 48px
            icon: "h-11 w-11 md:h-10 md:w-10", // Mobile: 44px, Desktop: 40px
        };

        return (
            <MotionButton
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref={ref as any}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative overflow-hidden inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...props as any}
            >
                {/* Shine Effect */}
                {(variant === 'primary' || variant === 'emergency') && (
                    <motion.div
                        className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-0 pointer-events-none"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "200%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 20%, transparent)"
                        }}
                    />
                )}

                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin relative z-10" />}
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </MotionButton>
        );
    }
);
Button.displayName = "Button";

export { Button };
