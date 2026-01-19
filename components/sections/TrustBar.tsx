"use client";

import { Container } from "@/components/ui/Container";
import { Star, Users, Award, ShieldCheck } from "lucide-react";
import { useTranslations } from 'next-intl';

export function TrustBar() {
    const t = useTranslations('TrustBar');

    const stats = [
        { id: 'reviews', icon: Star },
        { id: 'patients', icon: Users },
        { id: 'experience', icon: Award },
        { id: 'certified', icon: ShieldCheck },
    ]

    return (
        <div className="bg-primary py-8 text-white">
            <Container>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center md:items-start gap-3">
                            <stat.icon className="h-6 w-6 text-accent" />
                            <div>
                                <div className="text-xl font-bold">{t(`${stat.id}.value`)}</div>
                                <div className="text-xs font-medium uppercase tracking-wide text-blue-200">{t(`${stat.id}.label`)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
