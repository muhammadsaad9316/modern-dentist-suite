import { getTranslations } from 'next-intl/server';
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServiceFeature } from "@/components/sections/services/ServiceFeature";
import { SpecializedTreatments } from "@/components/sections/services/SpecializedTreatments";
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ServicesPage.meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function ServicesPage() {
    const t = useTranslations('ServicesPage.features');

    return (
        <main className="bg-white">
            <ServiceHero />

            <ServiceFeature
                id="implants"
                subtitle={t('implants.subtitle')}
                title={t('implants.title')}
                description={t('implants.description')}
                benefits={[
                    t('implants.benefits.1'),
                    t('implants.benefits.2'),
                    t('implants.benefits.3')
                ]}
                imageSrc="/service-implants.png"
                imageAlt="Advanced Dental Implant Procedure"
                ctaText={t('implants.cta')}
                ctaHref="/book"
            />

            <ServiceFeature
                id="aesthetic"
                subtitle={t('aesthetic.subtitle')}
                title={t('aesthetic.title')}
                description={t('aesthetic.description')}
                benefits={[
                    t('aesthetic.benefits.1'),
                    t('aesthetic.benefits.2'),
                    t('aesthetic.benefits.3')
                ]}
                imageSrc="/service-aesthetics.png"
                imageAlt="Aesthetic Dentistry Smile Design"
                ctaText={t('aesthetic.cta')}
                ctaHref="/book"
                reverse={true}
            />

            <ServiceFeature
                id="preventive"
                subtitle={t('preventive.subtitle')}
                title={t('preventive.title')}
                description={t('preventive.description')}
                benefits={[
                    t('preventive.benefits.1'),
                    t('preventive.benefits.2'),
                    t('preventive.benefits.3')
                ]}
                imageSrc="/service-hygiene.png"
                imageAlt="Professional Dental Hygiene Tools"
                ctaText={t('preventive.cta')}
                ctaHref="/book"
            />

            <SpecializedTreatments />
            <FinalCTA />
        </main>
    );
}
