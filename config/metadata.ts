import { Metadata } from "next";

export const urlmain = process.env.NEXT_PUBLIC_BASE_URL;

export const siteConfig = {
    name: "Chatanya",
    description: "Welcome to Chatanya's portfolio — explore my full-stack projects, read insightful blogs, and learn more about me and my development journey.",
    url: urlmain,
    ogImage: `/opengraph-image.JPG`,
    profileImage: `assets/my-image2.png`,
}

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name}'s Auramic World`,
        template: `%s - ${siteConfig.name} | Fullstack Developer Portfolio`
    },
    description: siteConfig.description,
    openGraph: {
        title: `${siteConfig.name} | Fullstack Developer Portfolio`,
        description: "Explore projects, blogs, and insights into my journey as a developer. Learn more about what drives my work.",
        url: `${urlmain}`,
        siteName: "Chatanya Portfolio",
        images: [
            {
                url: `${siteConfig.ogImage}`,
                width: 1200,
                height: 630,
                alt: "Chatanya Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | Fullstack Developer Portfolio`,
        description: "Discover my projects, blog posts, and background as a passionate fullstack web developer.",
        images: [`${siteConfig.ogImage}`]
    },
    metadataBase: new URL(`${urlmain}`),
};
