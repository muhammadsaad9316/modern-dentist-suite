"use client";

import { Container } from "@/components/ui/Container";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { CheckCircle2, Award } from "lucide-react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function DoctorHighlight() {
    const t = useTranslations('DoctorHighlight');

    const credentials = ['item1', 'item2', 'item3', 'item4'];

    return (
        <section className="py-12 lg:py-16 bg-slate-50 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-slate-900/10"></div>
                            {/* Placeholder for Doctor Image - In real app, this would be a real image */}
                            <Image
                                src="/doctor-profile.png"
                                alt="Dr. Michael Geus"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={75}
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-primary">
                                    <Award className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary">15+</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{t('badge')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <Heading2 className="mb-2">{t('title')}</Heading2>
                        <div className="h-1 w-20 bg-primary/20 mb-6"></div>

                        <Paragraph className="mb-8">
                            "{t('bio')}"
                        </Paragraph>

                        <div className="space-y-4">
                            {credentials.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{t(`credentials.${item}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
