import React from 'react';

export const TkLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="#0093CB">
            {/* T */}
            <rect x="10" y="5" width="24" height="6" />
            <rect x="19" y="5" width="6" height="30" />
            {/* K */}
            <path d="M40 5h6v12l10-12h7L52 18.5 64 35h-7l-9.5-13.5L46 22v13h-6V5z" />
        </g>
    </svg>
);

export const AokLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15 35h-6l10-26h6l10 26h-6l-2.5-7h-9L15 35zm5.5-20L17 24h7l-3.5-9z" fill="#007B3B" />
        <path d="M40 22c0-7.5 5.5-13 13-13s13 5.5 13 13-13 13-13-5.5-13-13zm20 0c0-4.5-3-7.5-7-7.5s-7 3-7 7.5 3 7.5 7 7.5 7-3 7-7.5z" fill="#007B3B" />
        <path d="M72 9h6v12.5L88 9h7.5L84.5 22 96 35h-8l-8.5-9.5V35h-6V9z" fill="#007B3B" />
    </svg>
);

export const BarmerLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#005C4D">BARMER</text>
    </svg>
);

export const AllianzLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#003781">Allianz</text>
    </svg>
);

export const DkvLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#E30613">DKV</text>
    </svg>
);

export const JamedaLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#004F9F">jameda</text>
        <circle cx="105" cy="15" r="3" fill="#FF8200" />
    </svg>
);

export const DoctolibLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#0596DE">doctolib</text>
    </svg>
);

export const KzvLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#333">KZV</text>
    </svg>
);
