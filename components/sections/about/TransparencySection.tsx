import { Container } from "@/components/ui/Container";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { ShieldCheck, Users, Gem, CreditCard } from "lucide-react";
import { useTranslations } from "next-intl";

export function TransparencySection() {
    const t = useTranslations('AboutPage.transparency');

    return (
        <section className="bg-sky-50 py-12 lg:py-24">
            <Container>
                <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
                    <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                        {/* Public Insurance */}
                        <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                            <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">{t('tags.public')}</span>
                        </div>

                        {/* Private Insurance */}
                        <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                            <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                <Gem className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">{t('tags.private')}</span>
                        </div>

                        {/* Financing */}
                        <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                            <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                <CreditCard className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">{t('tags.financing')}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
