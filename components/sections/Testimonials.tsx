"use client";

import { Container } from "@/components/ui/Container";
import { Heading2 } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { useTranslations } from 'next-intl';

import { TESTIMONIALS_DATA } from "@/data/testimonials";

export function Testimonials() {
    const t = useTranslations('Testimonials');

    return (
        <section className="py-24 bg-gradient-to-b from-white to-background-subtle relative overflow-hidden below-fold-section">
            {/* Decorative blob for glass effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

            <Container>
                <div className="text-center mb-16">
                    <Heading2>{t('title')}</Heading2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((testimonial) => (
                        <Card key={testimonial.id} variant="glass" className="p-8">
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <Quote className="h-8 w-8 text-accent rotate-180 mb-4" />

                            <p className="text-slate-600 italic mb-8 min-h-[100px]">
                                &quot;{t(`items.${testimonial.id}.content`)}&quot;
                            </p>

                            <div className="flex items-center gap-3 border-t border-slate-50 pt-6">
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                    {testimonial.author.charAt(0)}{testimonial.author.split(' ')[1]?.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-primary">{testimonial.author}</div>
                                    {testimonial.verified && (
                                        <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                                            <BadgeCheck className="h-3 w-3" /> {t('verified')}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
