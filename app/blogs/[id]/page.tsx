import type { Metadata } from 'next';
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import dynamic from 'next/dynamic';
import DetailSkeleton from '@/components/ui/skeleton/DetailSkeleton';

const Blogpage = dynamic(() => import('@/components/pages/blogpage'));

type Params = {
    id: string;
};

export async function generateStaticParams() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return [];
        const { data } = await res.json();
        return Array.isArray(data) ? data.map((blog: { _id: string }) => ({ id: blog._id })) : [];
    } catch (error) {
        console.error("Failed to fetch blogs for static params:", error);
        return [];
    }
}

// Dynamically generate metadata for each blog
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {

    const id = params.id;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            return { title: 'Blog Post Not Found' };
        }

        const { data } = await res.json();

        return {
            title: `${data?.title} | Chatanya Pratap - Tech Blog`,
            description: `${data?.shortDescription} - Read this insightful tech blog by Chatanya Pratap (Chatanyapra) covering web development, programming, and modern technologies.`,
            keywords: [
                "Chatanya Pratap",
                "Chatanyapra",
                "Tech Blog",
                "Web Development",
                "Programming",
                data?.title,
                "JavaScript",
                "React",
                "Next.js"
            ],
            authors: [{ name: "Chatanya Pratap" }],
            creator: "Chatanya Pratap",
            publisher: "Chatanya Pratap",
            openGraph: {
                title: `${data?.title} | Chatanya Pratap Blog`,
                description: `${data?.shortDescription} - Tech insights by Chatanya Pratap (Chatanyapra)`,
                images: data?.images?.length
                    ? [{ 
                        url: data.images[0].url, 
                        alt: `${data?.title} - Blog post by Chatanya Pratap`,
                        width: 1200,
                        height: 630
                    }]
                    : [],
                type: 'article',
                publishedTime: data?.createdAt,
                authors: ['Chatanya Pratap'],
                section: 'Technology'
            },
            twitter: {
                card: 'summary_large_image',
                title: `${data?.title} | Chatanya Pratap`,
                description: `${data?.shortDescription} - by @chatanyapra`,
                images: data?.images?.[0]?.url,
                creator: '@chatanyapra'
            },
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`
            }
        };
    } catch (error) {
        console.error("Failed to generate metadata:", error);
        return {
            title: "Error",
            description: "Could not load blog post details."
        };
    }
}

export default async function page({ params }: { params: Params }) {
    const id = params.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`, {
        next: { revalidate: 60 }
    });

    const { data } = await res.json();

    return (
        <div className='w-full mx-auto flex flex-col relative pt-32 max-md:pt-12'>
            {!data || !data.longDescription ? (
                <DetailSkeleton />
            ) : (
                <div className="md:w-[90%] w-full mx-auto min-h-96 flex flex-col mb-16 light-dark-shadow max-sm:px-2">
                    <ScrollViewAnimation>
                        <h1 className="text-4xl pb-8">{data.title}</h1>
                    </ScrollViewAnimation>
                    <ScrollViewAnimation delay={0.5}>
                        <div dangerouslySetInnerHTML={{ __html: data.longDescription }}></div>
                    </ScrollViewAnimation>
                </div>
            )}

            <Blogpage blogId={id} />
        </div>
    );
}