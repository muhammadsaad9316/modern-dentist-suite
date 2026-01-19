import { Container } from "@/components/ui/Container";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function MissionSection() {
    const t = useTranslations('AboutPage.mission');

    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <Heading2 className="mb-6">{t('title')}</Heading2>
                        <Paragraph className="mb-6">
                            {t('p1')}
                        </Paragraph>
                        <Paragraph>
                            {t('p2')}
                        </Paragraph>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-square relative bg-slate-100 rounded-2xl shadow-xl overflow-hidden">
                            <Image
                                src="/clinic-lounge.png"
                                alt="Relaxing Clinic Lounge"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={75}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
