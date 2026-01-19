"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { TkLogo, AokLogo, BarmerLogo, AllianzLogo, DkvLogo, JamedaLogo, DoctolibLogo, KzvLogo } from "@/components/ui/InsuranceLogos";

const PARTNERS = [
    { name: "Techniker Krankenkasse", Logo: TkLogo },
    { name: "AOK", Logo: AokLogo },
    { name: "Barmer", Logo: BarmerLogo },
    { name: "Allianz", Logo: AllianzLogo },
    { name: "DKV", Logo: DkvLogo },
    { name: "Jameda", Logo: JamedaLogo },
    { name: "Doctolib", Logo: DoctolibLogo },
    { name: "KZV", Logo: KzvLogo },
];

export function InsuranceTicker() {
    return (
        <section className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
            <Container>
                <div className="text-center mb-6">
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                        We accept all major insurances & private plans
                    </p>
                </div>
            </Container>

            <div className="flex relative w-full overflow-hidden mask-fade-sides">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap min-w-full pl-16"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40, // Adjust speed here
                    }}
                >
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                        <div key={`${partner.name}-${index}`} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default gap-3 mx-8 grayscale hover:grayscale-0">
                            <div className="relative h-12 w-32 flex items-center justify-center">
                                <partner.Logo className="h-full w-full object-contain" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
