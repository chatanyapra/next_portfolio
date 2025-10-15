import { MetadataRoute } from 'next';

type Blog = {
  _id: string;
  updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chatanya.vercel.app';

  // Fetch dynamic blog posts
  const res = await fetch(`${baseUrl}/api/blogs`, { next: { revalidate: 60 } });
  const { data: blogs } = await res.json();

  const blogEntries: MetadataRoute.Sitemap = Array.isArray(blogs) ? blogs.map((blog: Blog) => ({
    url: `${baseUrl}/blogs/${blog._id}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.9,
  })) : [];

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogEntries];
}
