import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
    variant?: "default" | "premium" | "glass";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants: Record<string, string> = {
            default: "bg-white text-slate-900 shadow-sm border border-slate-100",
            premium: "bg-white text-slate-900 shadow-premium hover:shadow-premium-hover border border-slate-100/50 transition-all duration-300",
            glass: "glass-panel text-slate-900 hover:bg-white/70 transition-all duration-300"
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl", // Increased radius for premium feel
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";

export { Card };
