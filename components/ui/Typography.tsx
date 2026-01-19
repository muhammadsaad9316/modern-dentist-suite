import { cn } from "@/lib/utils";
import React from "react";

export function Heading1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl text-primary",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
}

export function Heading2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "scroll-m-20 pb-2 text-2xl font-serif font-semibold tracking-tight first:mt-0 md:text-3xl text-primary",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}

export function Heading3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-xl font-serif font-semibold tracking-tight md:text-2xl text-primary",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

export function Paragraph({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("leading-7 text-slate-600 [&:not(:first-child)]:mt-6", className)}
            {...props}
        >
            {children}
        </p>
    );
}
