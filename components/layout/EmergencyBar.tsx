"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT_INFO } from "@/lib/constants";

export function EmergencyBar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check session storage on mount to see if previously closed
        const isClosed = sessionStorage.getItem("emergency-bar-closed");
        if (isClosed === "true") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(false);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("emergency-bar-closed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="bg-emergency py-2 text-white relative transition-all duration-300 ease-in-out">
            <Container>
                <div className="flex flex-col items-center justify-between gap-2 text-center text-sm font-medium sm:flex-row sm:text-left pr-8">
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                        <span className="hidden sm:inline-block">🚨</span>
                        <span className="font-bold uppercase tracking-wider">Dental Emergency?</span>
                        <span className="hidden sm:inline mx-1">|</span>
                        <a href={CONTACT_INFO.phone.href} className="font-semibold hover:text-blue-100 transition-colors">
                            Call {CONTACT_INFO.phone.display}
                        </a>
                        <span className="hidden lg:inline text-white/80">for immediate assistance</span>
                    </div>
                    <Link
                        href="/emergency"
                        className="group flex items-center gap-1 hover:underline"
                    >
                        Get Help Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </Container>
            <button
                onClick={handleClose}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close emergency notification"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}
