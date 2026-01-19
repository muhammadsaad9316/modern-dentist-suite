import { MetadataRoute } from 'next';

const baseUrl = 'https://zahnarzt-am-zob.de'; // Replace with actual domain

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
