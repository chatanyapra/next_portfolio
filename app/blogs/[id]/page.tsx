import type { Metadata } from 'next';
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import dynamic from 'next/dynamic';
import DetailSkeleton from '@/components/ui/skeleton/DetailSkeleton';

const Blogpage = dynamic(() => import('@/components/pages/blogpage'));
type Params = {
    id: string
}
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
        { next: { revalidate: 60 } }
    );
    const { data } = await res.json();
    return data.map((blog: { _id: string }) => ({ id: blog._id }));
}


// Dynamically generate metadata for each blog
export async function generateMetadata(
    { params }: { params: Params }
): Promise<Metadata> {
    const id = await params.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`, {
        next: { revalidate: 60 }
    });

    const { data } = await res.json();

    return {
        title: data?.title || 'Blog | My Website',
        description: data?.shortDescription || 'Read an insightful blog post.',
        openGraph: {
            title: data?.title,
            description: data?.shortDescription,
            images: data?.images?.length
                ? [{ url: data.images[0].url, alt: data.images[0].alt || 'blog image' }]
                : [],
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: data?.title,
            description: data?.shortDescription,
            images: data?.images?.[0]?.url
        }
    };
}


export default async function Page({ params }: { params: Params }) {
    const id = await params.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`, {
        next: { revalidate: 60 } // ISR enabled
    });

    const { data } = await res.json();

    return (
        <div className='w-full mx-auto flex flex-col relative blogsection-bg-design pt-32 max-md:pt-12'>
            {!data || !data.longDescription ? (
                <DetailSkeleton />
            ) : (
                <div className="md:w-[90%] w-full mx-auto min-h-96 flex flex-col mb-16 light-dark-shadow max-sm:px-2">
                    <ScrollViewAnimation>
                        <h1 className="text-4xl pb-8">{data.title}</h1>
                    </ScrollViewAnimation>
                    <ScrollViewAnimation delay={0.5}>
                        <p dangerouslySetInnerHTML={{ __html: data.longDescription }}></p>
                    </ScrollViewAnimation>
                </div>
            )}

            <Blogpage blogId={id} />
        </div>
    );
}
