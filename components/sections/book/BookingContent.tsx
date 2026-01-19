"use client";

import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookingSuccess } from "@/components/sections/book/BookingSuccess";
import { ContactSidebar } from "@/components/sections/book/ContactSidebar";
import { BookingForm } from "@/components/sections/book/BookingForm";
import { useTranslations } from "next-intl";

export function BookingContent() {
    const t = useTranslations('BookPage');
    const [isSuccess, setIsSuccess] = useState(false);

    if (isSuccess) {
        return <BookingSuccess />;
    }

    return (
        <main className="bg-slate-50 min-h-screen py-12 lg:py-24">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Heading1 className="mb-4">{t('title')}</Heading1>
                        <Paragraph className="max-w-2xl mx-auto">
                            {t('description')}
                        </Paragraph>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                        <div className="grid md:grid-cols-3">
                            <ContactSidebar />
                            <BookingForm onSuccess={() => setIsSuccess(true)} />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </main>
    );
}
