import { Paragraph } from "@/components/ui/Typography";
import { Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO, BUSINESS_HOURS } from "@/lib/constants";
import { useTranslations } from "next-intl";

export function ContactSidebar() {
    const t = useTranslations('BookPage.sidebar');

    return (
        <div className="bg-primary text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
                <h3 className="font-serif text-2xl font-bold mb-6">{t('title')}</h3>
                <Paragraph className="text-blue-100 mb-8 text-sm">
                    {t('subtitle')}
                </Paragraph>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-secondary mt-1" />
                        <div>
                            <p className="font-medium">{t('phone')}</p>
                            <p className="text-blue-100 text-sm">{CONTACT_INFO.phone.display}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="h-5 w-5 text-secondary mt-1" />
                        <div>
                            <p className="font-medium">{t('email')}</p>
                            <p className="text-blue-100 text-sm">{CONTACT_INFO.email}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="h-5 w-5 text-secondary mt-1" />
                        <div>
                            <p className="font-medium">{t('hours')}</p>
                            <p className="text-blue-100 text-sm">Mon-Thu: {BUSINESS_HOURS.monday}</p>
                            <p className="text-blue-100 text-sm">{t('days.fri')}: {BUSINESS_HOURS.friday}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 hidden md:block">
                <div className="h-40 w-full bg-blue-800/50 rounded-xl relative overflow-hidden group">
                    {/* Placeholder for map or clinic image */}
                    <div className="absolute inset-0 flex items-center justify-center text-blue-200 text-xs tracking-widest uppercase font-bold">
                        {CONTACT_INFO.address.street}
                    </div>
                </div>
            </div>
        </div>
    );
}
