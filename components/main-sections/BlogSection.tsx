'use client';
import { SectionHeadAnimation } from '@/components/component-animations/animations';
import ViewAllButton from '../ui/buttons/viewbutton';
import dynamic from 'next/dynamic';

const CardShowBlog = dynamic(() => import("../card-components/CardShowBlog"));
const BlogSection = () => {
    return (
        <section className="w-full mx-auto">
            <SectionHeadAnimation>
                <i className="mb-2">Blogs</i>
            </SectionHeadAnimation>

            <CardShowBlog />

            <ViewAllButton text={"View All Blogs"} link={"/blogs"} />
        </section>
    );
}

export default BlogSection;