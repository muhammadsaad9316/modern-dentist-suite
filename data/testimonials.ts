export interface Testimonial {
    id: number;
    content: string;
    author: string;
    rating: number;
    verified: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 1,
        content: "I was terrified of dentists until I found Dr. Geus. The implant procedure was completely painless, and the results are incredible. I can smile confidently again!",
        author: "Sarah K.",
        rating: 5,
        verified: true,
    },
    {
        id: 2,
        content: "From the warm welcome at the reception to the professional treatment, everything is top-notch. The best dental experience I've had in 40 years.",
        author: "Michael B.",
        rating: 5,
        verified: true,
    },
    {
        id: 3,
        content: "The aesthetic dentistry work exceeded my expectations. The veneers look so natural. Thank you to the whole team for my new smile!",
        author: "Julia W.",
        rating: 5,
        verified: true,
    },
];
