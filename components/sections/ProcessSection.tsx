"use client";

import { Container } from "@/components/ui/Container";
import { Heading2 } from "@/components/ui/Typography";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

import { Link } from "@/i18n/routing";

export function ProcessSection() {
    const t = useTranslations('Process');

    return (
        <section className="py-12 lg:py-24 bg-background-subtle">
            <Container>
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">{t('badge')}</h2>
                    <Heading2>{t('title')}</Heading2>
                </ScrollReveal>

                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-blue-100 -z-0"></div>

                <ScrollReveal staggerChildren={0.2} className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
                    {/* Step 1 */}
                    <ScrollRevealItem className="text-center relative z-10 bg-background-subtle">
                        <div className="w-16 h-16 bg-white text-primary rounded-full shadow-sm flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-6 relative">
                            1
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{t('steps.step1.title')}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {t('steps.step1.description')}
                        </p>
                    </ScrollRevealItem>

                    {/* Step 2 */}
                    <ScrollRevealItem className="text-center relative z-10 bg-background-subtle">
                        <div className="w-16 h-16 bg-white text-primary rounded-full shadow-sm flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-6 relative">
                            2
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{t('steps.step2.title')}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {t('steps.step2.description')}
                        </p>
                    </ScrollRevealItem>

                    {/* Step 3 */}
                    <ScrollRevealItem className="text-center relative z-10 bg-background-subtle">
                        <div className="w-16 h-16 bg-white text-primary rounded-full shadow-sm flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-6 relative">
                            3
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{t('steps.step3.title')}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {t('steps.step3.description')}
                        </p>
                    </ScrollRevealItem>
                </ScrollReveal>

                <div className="mt-16 text-center">
                    <Link href="/book">
                        <Button size="lg" className="rounded-full px-8 py-6 text-lg">
                            {t('cta')} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
