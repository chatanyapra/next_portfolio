'use client';

import { useState } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

interface BlogImage {
  url: string;
  alt?: string;
  _id?: string;
}

interface Blog {
  _id: string;
  title: string;
  shortDescription?: string;
  images: BlogImage[];
  link?: string;
}

interface BlogCardProps {
  blog: Blog;
  src: string;
  count: number;
  featured?: boolean;
}

const BlogCard = ({ blog, src, count, featured = false }: BlogCardProps) => {
  const images = blog.images.map(image => image.url);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const toggleImage = (index: number) => {
    setMainImageIndex(index);
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="relative w-[550px] max-lg:w-[98%] h-[400px] max-sm:h-[300px] group">

        {/* Main Image */}
        <div className="top-0 left-0 w-4/5 h-5/6 transparent-color light-dark-shadow rounded-[40px] overflow-hidden relative">
          <Image
            src={images[mainImageIndex]}
            fill
            sizes="(max-width: 640px) 100vw, 440px"
            className="object-cover hover:scale-150 hover:opacity-75 transition duration-500 ease-in-out"
            alt={`Blog Image ${mainImageIndex + 1}`}
            loading="lazy"
            priority={false}
          />
        </div>

        {/* Blog Details */}
        <div className="absolute right-0 bottom-0 w-3/4 h-[45%] rounded-b-[40px] rounded-r-[40px] rounded-tl-[5px] py-1 pl-2 transparent-colorblack overflow-hidden shadow-sm shadow-gray-400">
          <div className="text-xl max-sm:text-base font-bold text-blue-400">{blog.title}</div>
          <p className="text-gray-200 text-sm pl-3 pr-2 max-sm:text-[10px]">{blog.shortDescription}</p>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-0.5 left-1 w-[22%] h-[15%] flex justify-between items-center gap-1">
          {images.map((image, index) => (
            index !== mainImageIndex && (
              <div
                key={index}
                onClick={() => toggleImage(index)}
                className="w-10 h-10 cursor-pointer bg-gray-100 rounded-full outline-gray-500 outline-dashed outline-2 outline-offset-2 overflow-hidden relative"
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                  loading="lazy"
                  priority={false}
                />
              </div>
            )
          ))}
        </div>

        {/* Blog Meta */}
        <div className="w-[18%] h-[52%] absolute right-0 top-0 rounded-3xl transparent-colorwhite flex flex-col justify-around text-center py-2">
          <div className="relative w-full flex justify-center items-center">
            <Link
              href={`/${src}/${blog._id}`}
              title="click"
              className="faq-button"
            >
              <FaArrowUpRightFromSquare className="text-3xl max-sm:text-2xl cursor-pointer mx-auto hover:text-blue-600" />
              <span className="tooltip">View Blog</span>
            </Link>
          </div>

          {featured ? (
            <Image
              src="/assets/projectimage/badgeicon.png"
              className="mx-auto my-0"
              width={80}
              height={80}
              alt="Featured Badge"
              loading="lazy"
              priority={false}
            />
          ) : (
            <div>
              <div className="text-5xl font-bold mt-5 max-sm:text-3xl">{count}</div>
              <div className="text-2xl font-bold max-sm:text-base">Blog</div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
