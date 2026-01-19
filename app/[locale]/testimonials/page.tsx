import { getTranslations } from 'next-intl/server';
import { Container } from "@/components/ui/Container";
import { Heading1, Heading2, Paragraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Star, MessageSquare, Video, Quote } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'TestimonialsPage.meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function TestimonialsPage() {
    const t = useTranslations('TestimonialsPage');

    // Helper to generate explicit array indices
    const reviews = [0, 1, 2, 3, 4, 5];
    const stories = [0, 1];

    return (
        <main>
            {/* Hero */}
            <section className="relative py-20 lg:py-32 bg-primary text-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/happy-patient-hero.png"
                        alt="Happy patient laughing outdoors"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{t('hero.badge')}</span>
                        <Heading1 className="text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                            {t('hero.title')}
                        </Heading1>
                        <Paragraph className="text-blue-50 text-xl leading-relaxed max-w-2xl">
                            {t('hero.description')}
                        </Paragraph>
                    </div>
                </Container>
            </section>

            {/* Main Reviews Grid */}
            <section className="py-12 lg:py-24 bg-background">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((i) => (
                            <div key={i} className="bg-background-subtle p-8 rounded-2xl border border-blue-50 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-1 text-orange-400 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <Quote className="h-8 w-8 text-accent/50 rotate-180 mb-4" />
                                <p className="text-slate-600 mb-6 italic min-h-[80px]">&quot;{t(`reviews.${i}.content`)}&quot;</p>

                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">
                                        <span className="uppercase">{(t.raw(`reviews.${i}.role`) as string).charAt(0) || 'P'}</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-primary">Patient {i + 1}</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">{t(`reviews.${i}.role`)}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Video Success Stories (Placeholder for premium feel) */}
            <section className="py-12 lg:py-24 bg-background-subtle">
                <Container>
                    <div className="text-center mb-16">
                        <Heading2>{t('video.title')}</Heading2>
                        <Paragraph>{t('video.subtitle')}</Paragraph>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {stories.map((i) => (
                            <div key={i} className="aspect-video bg-slate-900 rounded-2xl relative overflow-hidden group cursor-pointer shadow-xl">
                                <Image
                                    src={i === 0 ? "/testimonial-mark.png" : "/testimonial-sarah.png"}
                                    alt="Testimonial Video"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary pl-1">
                                            <Video className="h-6 w-6 fill-current" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                                    <h3 className="text-white font-bold text-lg">Patient Story {i + 1}</h3>
                                    <p className="text-slate-300 text-sm">{t(`video.stories.${i}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Leave a Review CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <MessageSquare className="h-12 w-12 text-accent mx-auto mb-6" />
                        <Heading2 className="text-white mb-6">{t('cta.title')}</Heading2>
                        <Paragraph className="text-blue-100 mb-8 text-lg">
                            {t('cta.description')}
                        </Paragraph>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                                {t('cta.googleBtn')}
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                {t('cta.jamedaBtn')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
