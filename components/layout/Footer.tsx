"use client";

import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Stethoscope, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { CONTACT_INFO, BUSINESS_HOURS, SOCIAL_LINKS } from "@/lib/constants";
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="border-t border-slate-100 bg-white pt-16 pb-8">
            <Container>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                                <Stethoscope className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-serif font-bold leading-none text-primary">ZAHNARZTPRAXIS</span>
                                <span className="text-[10px] tracking-widest text-slate-500 uppercase">Am Zob</span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 max-w-xs">
                            {t('description')}
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif font-semibold text-primary mb-4">{t('contact')}</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>{CONTACT_INFO.phone.display}</li>
                            <li>{CONTACT_INFO.email}</li>
                            <li>{CONTACT_INFO.address.full}</li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-serif font-semibold text-primary mb-4">{t('hours')}</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>{t('week.monThu')}: {BUSINESS_HOURS.monday}</li>
                            <li>{t('week.fri')}: {BUSINESS_HOURS.friday}</li>
                            <li>{t('week.weekend')}: {t('status.closed')}</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-serif font-semibold text-primary mb-4">{t('social')}</h4>
                        <div className="flex gap-4">
                            <Link href={SOCIAL_LINKS.facebook} className="text-slate-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href={SOCIAL_LINKS.instagram} className="text-slate-400 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href={SOCIAL_LINKS.linkedin} className="text-slate-400 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
                            <Link href={SOCIAL_LINKS.twitter} className="text-slate-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-100 pt-8 text-center text-xs text-slate-400">
                    <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
                        <p>{t('rights')}</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-primary">{t('imprint')}</Link>
                            <Link href="#" className="hover:text-primary">{t('privacy')}</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
