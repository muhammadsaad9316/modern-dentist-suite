import Script from 'next/script';

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Zahnarztpraxis Am ZOB",
        "image": "https://zahnarzt-am-zob.de/hero-image.png",
        "@id": "https://zahnarzt-am-zob.de",
        "url": "https://zahnarzt-am-zob.de",
        "telephone": "+49 951 123456", // Make sure this matches actual phone
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Promenadestraße 1", // Update with real address
            "addressLocality": "Bamberg",
            "postalCode": "96047",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.8929,
            "longitude": 10.8906 // Coordinates for Bamberg ZOB approx
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "08:00",
                "closes": "14:00"
            }
        ],
        "priceRange": "$$",
        "sameAs": [
            "https://www.facebook.com/zahnarztamzob",
            "https://www.instagram.com/zahnarztamzob"
        ]
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
