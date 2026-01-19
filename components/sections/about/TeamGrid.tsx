import { Container } from "@/components/ui/Container";
import { Heading2 } from "@/components/ui/Typography";
import Image from "next/image";
import { TEAM_DATA } from "@/data/team";
import { useTranslations } from "next-intl";

export function TeamGrid() {
    const t = useTranslations('AboutPage.team');

    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <Heading2>{t('title')}</Heading2>
                    <div className="h-1 w-20 bg-primary/20 mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Team Grid */}
                    {TEAM_DATA.map((member, i) => (
                        <div key={i} className="group">
                            <div className="aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                            <div className="text-secondary text-sm font-medium uppercase tracking-wider mb-2">{t(`members.${i}.role`)}</div>
                            <p className="text-slate-500 text-sm">{t(`members.${i}.bio`)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
