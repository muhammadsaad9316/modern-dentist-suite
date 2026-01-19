import { Container } from "@/components/ui/Container";
import { Heading2 } from "@/components/ui/Typography";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useTranslations } from "next-intl";

export function EmergencySteps() {
    const t = useTranslations('EmergencyPage.steps');

    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <Heading2 className="text-center mb-16">{t('title')}</Heading2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="h-16 w-16 bg-red-100 text-emergency rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-xl text-primary mb-2">{t('step1.title')}</h3>
                        <p className="text-slate-600">{t('step1.desc', { phone: CONTACT_INFO.phone.display })}</p>
                    </div>
                    <div>
                        <div className="h-16 w-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <div className="h-8 w-8 bg-blue-200 rounded animate-pulse" /> {/* Ice pack placeholder */}
                        </div>
                        <h3 className="font-bold text-xl text-primary mb-2">{t('step2.title')}</h3>
                        <p className="text-slate-600">{t('step2.desc')}</p>
                    </div>
                    <div>
                        <div className="h-16 w-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <ArrowRight className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-xl text-primary mb-2">{t('step3.title')}</h3>
                        <p className="text-slate-600">{t('step3.desc')}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
