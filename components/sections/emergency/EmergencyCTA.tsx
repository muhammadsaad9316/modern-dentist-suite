import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useTranslations } from "next-intl";

export function EmergencyCTA() {
    const t = useTranslations('EmergencyPage.cta');

    return (
        <section className="bg-primary py-16 text-center text-white">
            <Container>
                <h2 className="text-3xl font-serif font-bold mb-6">{t('title')}</h2>
                <Button size="lg" variant="emergency" className="gap-2 text-lg px-8 h-16 shadow-xl shadow-red-900/20">
                    <Phone className="h-6 w-6" /> {t('btn')} {CONTACT_INFO.phone.display}
                </Button>
                <p className="mt-6 text-slate-400 text-sm">{t('note')}</p>
            </Container>
        </section>
    );
}
