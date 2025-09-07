import { Metadata } from "next";

export const urlmain = process.env.NEXT_PUBLIC_BASE_URL;

export const siteConfig = {
    name: "Chatanya Pratap",
    description: "Chatanya Pratap (Chatanyapra) - Full Stack Developer Portfolio. Explore innovative web development projects, insightful tech blogs, and learn about my journey in modern web technologies including React, Next.js, Node.js, and more.",
    url: urlmain,
    ogImage: `/opengraph-image.JPG`,
    profileImage: `assets/my-image2.png`,
    keywords: [
        "Chatanya",
        "Chatanyapra", 
        "Chatanya Pratap",
        "Full Stack Developer",
        "Web Developer",
        "React Developer",
        "Next.js Developer",
        "Portfolio",
        "JavaScript Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Development Projects",
        "Tech Blog",
        "Software Engineer"
    ],
    author: "Chatanya Pratap",
}

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} - Full Stack Developer Portfolio | Chatanyapra`,
        template: `%s | ${siteConfig.name} - Full Stack Developer`
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `${urlmain}`,
        title: `${siteConfig.name} | Full Stack Developer Portfolio - Chatanyapra`,
        description: siteConfig.description,
        siteName: "Chatanya Pratap Portfolio",
        images: [
            {
                url: `${urlmain}/opengraph-image.JPG`,
                width: 1200,
                height: 630,
                alt: "Chatanya Pratap - Full Stack Developer Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | Full Stack Developer Portfolio`,
        description: siteConfig.description,
        images: [`${urlmain}${siteConfig.ogImage}`],
        creator: "@chatanyapra",
    },
    alternates: {
        canonical: `${urlmain}`,
    },
    metadataBase: new URL(`${urlmain || 'https://chatanya.vercel.app'}`),
};
