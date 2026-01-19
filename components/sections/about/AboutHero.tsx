"use client";

import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutHero() {
    const t = useTranslations('AboutPage.hero');
    return (
        <section className="relative py-24 bg-primary text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="/clinic-interior.png"
                    alt="Modern Dental Clinic Interior"
                    fill
                    className="object-cover"
                    priority
                    quality={75}
                    sizes="100vw"
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{t('badge')}</span>
                    <Heading1 className="text-white mb-6">{t('title')}</Heading1>
                    <Paragraph className="text-blue-50 text-xl leading-relaxed">
                        {t('description')}
                    </Paragraph>
                </div>
            </Container>
        </section>
    );
}
