import { getTranslations } from 'next-intl/server';
import { EmergencyHero } from "@/components/sections/emergency/EmergencyHero";
import { CommonEmergencies } from "@/components/sections/emergency/CommonEmergencies";
import { EmergencySteps } from "@/components/sections/emergency/EmergencySteps";
import { EmergencyCTA } from "@/components/sections/emergency/EmergencyCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'EmergencyPage.meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function EmergencyPage() {
    return (
        <main>
            <EmergencyHero />
            <CommonEmergencies />
            <EmergencySteps />
            <EmergencyCTA />
        </main>
    );
}
