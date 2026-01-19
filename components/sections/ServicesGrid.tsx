"use client";

import { Container } from "@/components/ui/Container";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { SERVICES_DATA } from "@/data/services";
import { useTranslations } from 'next-intl';

export function ServicesGrid() {
    const t = useTranslations('Services');

    return (
        <section className="py-12 lg:py-24 bg-white">
            <Container>
                <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
                    <Heading2>{t('title')}</Heading2>
                    <Paragraph>
                        {t('description')}
                    </Paragraph>
                </ScrollReveal>

                <ScrollReveal staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service) => (
                        <ScrollRevealItem key={service.id}>
                            <Link href={service.href} className="block h-full">
                                <Card
                                    variant="premium"
                                    className={cn(
                                        "p-8 transition-all group flex flex-col items-start h-full",
                                        service.highlight ? "border-red-100 bg-red-50/30 shadow-none" : "hover:border-blue-100 hover:bg-blue-50/50"
                                    )}
                                >
                                    <div className={cn(
                                        "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                                        service.highlight ? "bg-red-100 text-red-600 group-hover:bg-red-200" : "bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white"
                                    )}>
                                        <service.icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="text-xl font-serif font-bold text-primary mb-3">
                                        {t(`items.${service.id}.title`)}
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                        {t(`items.${service.id}.description`)}
                                    </p>

                                    <span
                                        className={cn(
                                            "inline-flex items-center text-sm font-semibold uppercase tracking-wider transition-colors mt-auto",
                                            service.highlight ? "text-red-600 group-hover:text-red-700" : "text-secondary group-hover:text-primary"
                                        )}
                                    >
                                        {service.highlight ? t('buttons.book') : t('buttons.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </span>
                                </Card>
                            </Link>
                        </ScrollRevealItem>
                    ))}
                </ScrollReveal>
            </Container>
        </section>
    );
}
