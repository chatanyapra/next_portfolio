import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Chatanya's Auramic World",
        template: "%s - Chatanya | Fullstack Developer Portfolio"
    },
    description: "Welcome to Chatanya's portfolio — explore my full-stack projects, read insightful blogs, and learn more about me and my development journey.",
    openGraph: {
        title: "Chatanya | Fullstack Developer Portfolio",
        description: "Explore projects, blogs, and insights into my journey as a developer. Learn more about what drives my work.",
        url: "https://your-portfolio-url.com",
        siteName: "Chatanya Portfolio",
        images: [
            {
                url: "/opengraph-image.png",
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
        title: "Chatanya | Fullstack Developer Portfolio",
        description: "Discover my projects, blog posts, and background as a passionate fullstack web developer.",
        images: ["/opengraph-image.png"]
    },
    metadataBase: new URL("https://your-portfolio-url.com"),
};
