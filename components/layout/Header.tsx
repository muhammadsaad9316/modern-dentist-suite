"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { CONTACT_INFO } from "@/lib/constants";
import { NAVIGATION_DATA } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Stethoscope, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useTranslations } from 'next-intl';

export function Header() {
    const t = useTranslations('Navigation');
    const tHeader = useTranslations('Header');
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navigation = NAVIGATION_DATA;

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Background Layer - separates backdrop filter from the fixed overlay context */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-slate-100 -z-10" />

            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:scale-105">
                            <Stethoscope className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-serif font-bold leading-none text-primary">ZAHNARZTPRAXIS</span>
                            <span className="text-[10px] tracking-widest text-slate-500 uppercase">{tHeader('logoSubtitle')}</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex md:items-center md:gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-primary font-semibold"
                                        : "text-slate-600"
                                )}
                            >
                                {t(item.name.toLowerCase().replace(' ', ''))}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Link href="/book">
                            <Button size="sm">{tHeader('bookBtn')}</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <LanguageSwitcher />
                        <button
                            className="relative z-50 p-2 text-slate-600 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 pb-6 flex flex-col"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {navigation.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-22xl font-serif font-medium block py-2",
                                            pathname === item.href
                                                ? "text-primary"
                                                : "text-slate-600"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {t(item.name.toLowerCase().replace(' ', ''))}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-auto flex flex-col gap-4"
                        >
                            <div className="h-px w-full bg-slate-100" />
                            <Link href="/book" className="w-full">
                                <Button size="lg" className="w-full justify-center">{tHeader('bookBtn')}</Button>
                            </Link>
                            <div className="text-center text-sm text-slate-500 py-4">
                                <p>{CONTACT_INFO.phone.display}</p>
                                <p>{CONTACT_INFO.address.full}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
