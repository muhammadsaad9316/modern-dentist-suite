import { Container } from "@/components/ui/Container";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceFeatureProps {
    id: string;
    subtitle: string;
    title: string;
    description: string;
    benefits: string[];
    imageSrc: string;
    imageAlt: string;
    ctaText: string;
    ctaHref: string;
    reverse?: boolean;
}

export function ServiceFeature({
    id,
    subtitle,
    title,
    description,
    benefits,
    imageSrc,
    imageAlt,
    ctaText,
    ctaHref,
    reverse = false
}: ServiceFeatureProps) {
    return (
        <section id={id} className="py-12 lg:py-24 border-b border-slate-50 last:border-0">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className={cn("w-full lg:w-1/2", reverse ? "lg:order-2" : "lg:order-1")}>
                        <span className="text-sm font-bold uppercase tracking-widest text-secondary mb-2 block">{subtitle}</span>
                        <Heading2 className="mb-6">{title}</Heading2>
                        <Paragraph className="mb-8">{description}</Paragraph>
                        <ul className="space-y-3 mb-8">
                            {benefits.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-700">
                                    <div className="h-6 w-6 rounded-full bg-sky-100 flex items-center justify-center text-primary flex-shrink-0">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href={ctaHref}>
                            <Button>{ctaText}</Button>
                        </Link>
                    </div>
                    <div className={cn("w-full lg:w-1/2", reverse ? "lg:order-1" : "lg:order-2")}>
                        <div className="aspect-video relative rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={75}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
