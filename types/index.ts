import { LucideIcon } from "lucide-react";

export interface NavigationItem {
    name: string;
    href: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    highlight?: boolean;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    img: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    quote: string;
    rating: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}
