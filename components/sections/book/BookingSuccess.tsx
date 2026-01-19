import { Container } from "@/components/ui/Container";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function BookingSuccess() {
    const t = useTranslations('BookPage.success');

    return (
        <main className="bg-slate-50 min-h-screen py-24 flex items-center">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-slate-100"
                >
                    <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <Heading2 className="mb-4">{t('title')}</Heading2>
                    <Paragraph className="mb-8 text-lg">
                        {t('message')}
                    </Paragraph>
                    <Button onClick={() => window.location.href = '/'}>{t('btn')}</Button>
                </motion.div>
            </Container>
        </main>
    );
}
