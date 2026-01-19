"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CalendarCheck2 } from "lucide-react";
import { useTranslations } from 'next-intl';

import { Link } from "@/i18n/routing";

export function FinalCTA() {
    const t = useTranslations('FinalCTA');

    return (
        <section className="py-24 bg-primary text-white text-center">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                        {t('description')}
                    </p>
                    <Link href="/book">
                        <Button size="lg" variant="secondary" className="gap-2 h-14 px-10 text-lg">
                            <CalendarCheck2 className="h-5 w-5" /> {t('button')}
                        </Button>
                    </Link>
                    <p className="mt-4 text-sm text-blue-200 opacity-90">
                        {t('note')}
                    </p>
                </div>
            </Container>
        </section>
    );
}
