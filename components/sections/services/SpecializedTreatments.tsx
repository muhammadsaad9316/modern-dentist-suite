import { Container } from "@/components/ui/Container";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

export function SpecializedTreatments() {
    const t = useTranslations('ServicesPage.specialized');

    return (
        <section className="bg-slate-50 py-12 lg:py-24">
            <Container>
                <div className="text-center mb-16">
                    <Heading2>{t('title')}</Heading2>
                    <div className="h-1 w-20 bg-primary/10 mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Oral Surgery */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <Heading3 className="mb-4 text-xl">{t('items.surgery.title')}</Heading3>
                        <Paragraph className="text-sm mb-6">{t('items.surgery.description')}</Paragraph>
                        <a href="#" className="text-sm font-semibold text-secondary hover:underline flex items-center gap-1">{t('items.surgery.link')} <ArrowRight className="h-3 w-3" /></a>
                    </div>

                    {/* Orthodontics */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <Heading3 className="mb-4 text-xl">{t('items.ortho.title')}</Heading3>
                        <Paragraph className="text-sm mb-6">{t('items.ortho.description')}</Paragraph>
                        <a href="#" className="text-sm font-semibold text-secondary hover:underline flex items-center gap-1">{t('items.ortho.link')} <ArrowRight className="h-3 w-3" /></a>
                    </div>

                    {/* Pediatric */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <Heading3 className="mb-4 text-xl">{t('items.pediatric.title')}</Heading3>
                        <Paragraph className="text-sm mb-6">{t('items.pediatric.description')}</Paragraph>
                        <a href="#" className="text-sm font-semibold text-secondary hover:underline flex items-center gap-1">{t('items.pediatric.link')} <ArrowRight className="h-3 w-3" /></a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
