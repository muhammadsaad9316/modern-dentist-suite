import { getTranslations } from 'next-intl/server';
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionSection } from "@/components/sections/about/MissionSection";
import { AboutWhyChooseUs } from "@/components/sections/about/AboutWhyChooseUs";
import { TeamGrid } from "@/components/sections/about/TeamGrid";
import { TransparencySection } from "@/components/sections/about/TransparencySection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'AboutPage.meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <MissionSection />
            <AboutWhyChooseUs />
            <TeamGrid />
            <TransparencySection />
            <FinalCTA />
        </main>
    );
}
