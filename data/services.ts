import { Shield, Hammer, Smile, Sparkles, Siren, Activity } from "lucide-react";
import { ServiceItem } from "@/types";

export const SERVICES_DATA: (ServiceItem & { id: string })[] = [
    {
        id: "preventive",
        title: "Preventive Care",
        description: "Keep your natural teeth healthy for life with comprehensive cleanings and early detection.",
        icon: Shield,
        href: "/services#preventive",
    },
    {
        id: "implants",
        title: "Dental Implants",
        description: "Restore your smile's function and aesthetics with permanent, natural-looking tooth replacements.",
        icon: Hammer,
        href: "/services#implants",
    },
    {
        id: "orthodontics",
        title: "Orthodontics",
        description: "Straighten your teeth discreetly with modern clear aligners and traditional solutions.",
        icon: Smile,
        href: "/services#orthodontics",
    },
    {
        id: "aesthetic",
        title: "Aesthetic Dentistry",
        description: "Design your perfect smile with premium veneers, whitening, and cosmetic bonding.",
        icon: Sparkles,
        href: "/services#aesthetic",
    },
    {
        id: "surgery",
        title: "Oral Surgery",
        description: "Expert surgical care for complex extractions and procedures in a gentle environment.",
        icon: Activity,
        href: "/services#surgery",
    },
    {
        id: "emergency",
        title: "Emergency Care",
        description: "Immediate pain relief and urgent care when you need it most. Same-day slots available.",
        icon: Siren,
        href: "/emergency",
        highlight: true,
    },
];
