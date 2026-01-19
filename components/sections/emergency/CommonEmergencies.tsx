import { Container } from "@/components/ui/Container";
import { Heading2 } from "@/components/ui/Typography";
import { useTranslations } from "next-intl";

export function CommonEmergencies() {
    const t = useTranslations('EmergencyPage.common');
    const items = ['toothache', 'broken', 'fillings', 'abscess', 'knocked', 'bleeding'];

    return (
        <section className="py-24 bg-white">
            <Container>
                <Heading2 className="text-center mb-16">{t('title')}</Heading2>

                <div className="grid md:grid-cols-3 gap-6">
                    {items.map((key, i) => (
                        <div key={i} className="p-6 bg-blue-50/50 rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                            <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-4 font-serif font-bold text-xl">
                                {/* Icon Placeholder or Number */}
                                {i + 1}
                            </div>
                            <h3 className="font-bold text-lg text-primary mb-2">{t(`items.${key}.title`)}</h3>
                            <p className="text-slate-600 text-sm">{t(`items.${key}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
