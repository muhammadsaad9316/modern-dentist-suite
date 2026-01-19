import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { useTranslations } from 'next-intl';

export function ServiceHero() {
    const t = useTranslations('ServicesPage.hero');

    return (
        <section className="bg-sky-50 py-12 lg:py-24">
            <Container>
                <Heading1 className="mb-6 text-center">{t('title')}</Heading1>
                <Paragraph className="text-center max-w-2xl mx-auto text-lg">
                    {t('description')}
                </Paragraph>
            </Container>
        </section>
    );
}
