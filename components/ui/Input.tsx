"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, icon, ...props }, ref) => {
        return (
            <div className="relative w-full">
                <div className="relative">
                    {/* Icon container */}
                    {icon && React.isValidElement(icon) && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                                className: cn("h-4 w-4", (icon.props as { className?: string }).className),
                            })}
                        </div>
                    )}

                    <input
                        type={type}
                        className={cn(
                            "flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
                            icon ? "pl-10" : "",
                            error
                                ? "border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500 bg-red-50/10 pr-10"
                                : "",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />

                    {/* Error Icon Indicator */}
                    {error && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
                            <AlertCircle className="h-4 w-4" />
                        </div>
                    )}
                </div>

                {/* Animated Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -5, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -5, height: 0 }}
                            className="text-[0.8rem] font-medium text-red-500 mt-1.5 flex items-center gap-1.5 overflow-hidden"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
