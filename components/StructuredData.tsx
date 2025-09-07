import { siteConfig } from '@/config/metadata';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chatanya Pratap",
    "alternateName": ["Chatanya", "Chatanyapra"],
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
    "url": siteConfig.url || "https://chatanya.vercel.app",
    "image": `${siteConfig.url || "https://chatanya.vercel.app"}${siteConfig.profileImage}`,
    "sameAs": [
      "https://github.com/chatanyapra",
      "https://www.linkedin.com/in/chatanya-pratap-ab410a277/",
      "https://x.com/Chatanyapra"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Develops web applications using modern technologies like React, Next.js, and Node.js"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteConfig.url || "https://chatanya.vercel.app"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Chatanya Pratap Portfolio",
    "alternateName": "Chatanyapra Portfolio",
    "url": siteConfig.url || "https://chatanya.vercel.app",
    "description": siteConfig.description,
    "author": {
      "@type": "Person",
      "name": "Chatanya Pratap",
      "alternateName": "Chatanyapra"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url || "https://chatanya.vercel.app"}/blogs?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  );
}
