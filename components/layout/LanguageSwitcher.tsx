"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const changeLocale = (nextLocale: "de" | "en") => {
        if (locale === nextLocale) return;

        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className={cn("flex items-center text-xs font-medium border rounded-full p-1 bg-slate-50 border-slate-200", className)}>
            <button
                onClick={() => changeLocale('de')}
                disabled={isPending}
                className={cn(
                    "px-3 py-1.5 rounded-full transition-all",
                    locale === 'de'
                        ? "bg-white text-primary shadow-sm ring-1 ring-slate-200"
                        : "text-slate-500 hover:text-slate-900"
                )}
            >
                DE
            </button>
            <button
                onClick={() => changeLocale('en')}
                disabled={isPending}
                className={cn(
                    "px-3 py-1.5 rounded-full transition-all",
                    locale === 'en'
                        ? "bg-white text-primary shadow-sm ring-1 ring-slate-200"
                        : "text-slate-500 hover:text-slate-900"
                )}
            >
                EN
            </button>
        </div>
    );
}
