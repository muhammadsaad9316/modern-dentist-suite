"use client";

import { Container } from "@/components/ui/Container";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Music, Wind, Hand, Coffee, Moon, Heart } from "lucide-react";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const COMFORT_FEATURES = [
    { id: 'wind', icon: Wind },
    { id: 'music', icon: Music },
    { id: 'hand', icon: Hand },
    { id: 'moon', icon: Moon },
    { id: 'heart', icon: Heart },
    { id: 'coffee', icon: Coffee }
];

export function AnxietyRelief() {
    const t = useTranslations('AnxietyRelief');

    return (
        <section className="py-20 bg-blue-50/50">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary mb-6">
                            {t('badge')}
                        </div>
                        <Heading2 className="mb-6">
                            {t.rich('title', {
                                span: (chunks) => <span className="text-secondary">{chunks}</span>
                            })}
                        </Heading2>
                        <Paragraph className="mb-8 text-lg">
                            {t('description')}
                        </Paragraph>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                            <p className="font-serif text-xl italic text-slate-700 mb-4">
                                "{t('quote')}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-slate-200 rounded-full overflow-hidden relative">
                                    {/* Placeholder for small avatar */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-primary text-white font-bold text-xs">Dr.G</div>
                                </div>
                                <div className="text-sm font-bold text-slate-900">Dr. Michael Geus</div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-4">
                        {COMFORT_FEATURES.map((feature) => (
                            <div
                                key={feature.id}
                                className={cn(
                                    "p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow group",
                                    feature.id === 'hand'
                                        ? "bg-blue-50/50 border-blue-200 ring-1 ring-blue-100"
                                        : "bg-white border-slate-100"
                                )}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: Math.random() * 2 // Randomize phase for organic feel
                                    }}
                                    className="inline-block"
                                >
                                    <feature.icon className={cn(
                                        "h-8 w-8 transition-colors mb-4",
                                        feature.id === 'hand' ? "text-secondary" : "text-blue-300 group-hover:text-secondary"
                                    )} />
                                </motion.div>
                                <h3 className="font-bold text-slate-800 mb-2">{t(`features.${feature.id}.title`)}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {t(`features.${feature.id}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
