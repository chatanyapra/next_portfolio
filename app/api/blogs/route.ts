import { connectToDB } from "@/lib/mongodb";
import Blog from "@/models/BlogModel";
import { NextRequest, NextResponse } from "next/server";
import { parseForm } from '@/lib/parseForm';
import fs from "fs";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    await connectToDB();
    const blogs = await Blog.find()
      .select('-longDescription') // Exclude the longDescription field
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const { fields, files } = await parseForm(req);
    const { title, shortDescription, longDescription, userId } = fields;

    if (!title || !shortDescription || !longDescription || !files.length) {
      return Response.json({ message: 'All fields and at least one image are required' }, { status: 400 });
    }

    // Upload images to Cloudinary
    const imageUploads = await Promise.all(
      files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.filepath, {
          folder: 'portfolio',
        });
        fs.unlinkSync(file.filepath); // Remove temp file
        return { url: result.secure_url, alt: file.originalFilename || 'image' };
      })
    );

    // Create blog
    const newBlog = new Blog({
      userId,
      title,
      shortDescription,
      longDescription,
      images: imageUploads,
    });

    await newBlog.save();

    return Response.json({ message: 'Blog uploaded successfully', data: newBlog }, { status: 201 });
  } catch (error: any) {
    console.error('[UPLOAD_BLOG_ERROR]', error);
    return Response.json({ message: 'Error uploading blog', error: error.message }, { status: 500 });
  }
}