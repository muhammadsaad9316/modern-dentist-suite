import { Container } from "@/components/ui/Container";
import { Heading2 } from "@/components/ui/Typography";
import { Heart, Users, Microscope } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutWhyChooseUs() {
    const t = useTranslations('AboutPage.whyChooseUs');

    return (
        <section className="py-12 lg:py-24 bg-background-subtle">
            <Container>
                <div className="text-center mb-16">
                    <Heading2>{t('title')}</Heading2>
                    <div className="text-center text-slate-500 mt-2">{t('subtitle')}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Microscope, id: "modern" },
                        { icon: Heart, id: "comfort" },
                        { icon: Users, id: "expert" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
                            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-6">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-3">{t(`items.${item.id}.title`)}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{t(`items.${item.id}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
