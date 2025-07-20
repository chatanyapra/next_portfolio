import type { Metadata } from 'next';
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import dynamic from 'next/dynamic';

const Workpage = dynamic(() => import('@/components/pages/workpage'));

type Params = {
    id: string;
};

// Static params for SSG
export async function generateStaticParams() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) throw new Error('Failed to fetch project list');

        const { data } = await res.json();
        return data.map((project: { _id: string }) => ({ id: project._id }));
    } catch (err) {
        console.error('Error in generateStaticParams:', err);
        return []; // Prevent build crash
    }
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const id = params.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        return {
            title: 'Project Not Found',
            description: 'The project you are looking for does not exist.',
        };
    }

    const { data } = await res.json();

    return {
        title: data?.title || 'Project | My Website',
        description: data?.shortDescription || 'Explore a featured project from my portfolio.',
        openGraph: {
            title: data?.title,
            description: data?.shortDescription,
            images: data?.images?.length
                ? [{ url: data.images[0].url, alt: data.images[0].alt || 'project image' }]
                : [],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data?.title,
            description: data?.shortDescription,
            images: data?.images?.[0]?.url,
        },
    };
}

export default async function Page({ params }: { params: Params }) {
    const id = params.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        console.error(`Failed to fetch project ${id}: ${res.status}`);
        throw new Error(`Failed to load project data`);
    }

    const { data: project } = await res.json();

    return (
        <div className="w-full mx-auto flex flex-col relative pt-32 max-md:pt-12">
            {!project || !project.longDescription ? (
                <div className="md:w-[90%] w-full mx-auto min-h-96 animate-pulse rounded-[50px] flex max-md:flex-col justify-between mb-8 max-sm:px-2">
                    <div className="w-full">
                        <div className="h-10 w-[250px] md:w-[40%] bg-gray-400 dark:bg-gray-600 rounded mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-2/3 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="md:w-[90%] w-full mx-auto min-h-96 flex flex-col mb-16 light-dark-shadow max-sm:px-2">
                    <ScrollViewAnimation>
                        <h1 className="text-4xl pb-8">{project.title}</h1>
                    </ScrollViewAnimation>
                    <ScrollViewAnimation delay={0.5}>
                        <div dangerouslySetInnerHTML={{ __html: project.longDescription }}></div>
                    </ScrollViewAnimation>
                </div>
            )}
            <Workpage projectId={id} />
        </div>
    );
}
