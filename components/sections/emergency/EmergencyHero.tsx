import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Clock, Siren } from "lucide-react";
import { CONTACT_INFO, BUSINESS_HOURS } from "@/lib/constants";
import { useTranslations } from "next-intl";

export function EmergencyHero() {
    const t = useTranslations('EmergencyPage.hero');

    return (
        <section className="bg-slate-50 py-16 border-b-4 border-emergency">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Siren className="h-4 w-4" /> {t('badge')}
                        </div>
                        <Heading1 className="mb-6">
                            {t('title')} <br />
                            <span className="text-primary">{t('highlight')}</span>
                        </Heading1>
                        <Paragraph className="mb-8 text-lg">
                            {t('description')}
                        </Paragraph>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="emergency" className="gap-2 text-lg px-8">
                                <Phone className="h-5 w-5" /> {t('callBtn')} {CONTACT_INFO.phone.display}
                            </Button>
                            <Button size="lg" variant="secondary" className="gap-2">
                                <MapPin className="h-5 w-5" /> {t('directionsBtn')}
                            </Button>
                        </div>
                    </div>
                    {/* Quick info card */}
                    <div className="hidden lg:block w-80 bg-white p-6 rounded-xl shadow-lg border-t-4 border-emergency">
                        <h3 className="font-bold text-primary mb-4">{t('card.title')}</h3>
                        <div className="space-y-4 text-sm text-slate-600">
                            <div className="flex gap-3">
                                <Clock className="h-5 w-5 text-emergency flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-primary">{t('card.hours')}</div>
                                    <div>{t('card.weekdays')}: {BUSINESS_HOURS.emergency.weekdays}</div>
                                    <div>{t('card.sat')}: {BUSINESS_HOURS.emergency.saturday}</div>
                                    <div>{t('card.sun')}: {t('card.onCall')}</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <MapPin className="h-5 w-5 text-emergency flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-primary">{t('card.address')}</div>
                                    <div>{CONTACT_INFO.address.street}<br />{CONTACT_INFO.address.zip} {CONTACT_INFO.address.city}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
