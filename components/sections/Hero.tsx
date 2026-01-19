"use client";

import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, Star } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Hero');

    // Inside Hero component
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-background-subtle to-background pb-16 pt-6 lg:pt-12">
            {/* Background Decoration - Responsive sizing */}
            {/* Background Decoration - Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                    x: [0, 30, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] bg-blue-100/60 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -20, 0],
                    y: [0, 20, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-0 left-0 -z-10 h-[200px] w-[200px] md:h-[400px] md:w-[400px] bg-accent/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/4"
            />


            <Container>
                <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block rounded-full glass-panel px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary mb-6 ring-1 ring-white/50">
                            {t('badge')}
                        </span>
                        <Heading1 className="mb-6 max-w-full sm:max-w-2xl lg:max-w-xl">
                            {t.rich('title', {
                                br: () => <br />
                            })}
                        </Heading1>
                        <Paragraph className="mb-10 max-w-xl text-lg">
                            {t('description')}
                        </Paragraph>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="/book">
                                <Button size="lg" className="gap-2">
                                    <Calendar className="h-5 w-5" /> {t('bookBtn')}
                                </Button>
                            </Link>
                            <Button variant="secondary" size="lg" className="gap-2">
                                <Phone className="h-5 w-5" /> {CONTACT_INFO.phone.value}
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mt-12 h-[300px] w-full lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:h-[90%] lg:w-[45%]"
                >
                    <div className="relative h-full w-full">
                        {/* Gradient overlay for smooth transition */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
                        {/* Floating Abstract Shape */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0"
                        />

                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-subtle via-background-subtle/50 to-transparent z-10 hidden lg:block" />

                        <Image
                            src="/hero-image.png"
                            alt="Smiling confident patient"
                            fill
                            className="object-cover object-center rounded-[40%_60%_70%_30%_/_60%_30%_70%_40%] shadow-2xl"
                            priority
                            quality={90}
                        />

                        {/* Floating Glass Card - Rating */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-8 left-8 z-20 hidden md:block"
                        >
                            <div className="glass-panel-strong px-5 py-3 rounded-xl flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="h-6 w-6 rounded-full bg-amber-100 border border-white flex items-center justify-center">
                                            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-800">5.0 Rating</span>
                                    <span className="text-[10px] text-slate-500">From 500+ Patients</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section >
    );
}
