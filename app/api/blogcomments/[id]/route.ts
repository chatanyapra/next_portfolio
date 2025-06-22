import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import { connectToDB } from "@/lib/mongodb";
import BlogComment from "@/models/blogComment";
import '@/models/userModel';
import User from "@/models/userModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";


export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDB();

  const blogId = params.id;
  console.log("Blog ID param:", blogId);

  // Validate ObjectId format
  if (!Types.ObjectId.isValid(blogId)) {
    return NextResponse.json(
      { success: false, message: "Invalid blog ID" },
      { status: 400 }
    );
  }

  try {
    const objectId = new Types.ObjectId(blogId);

    const comments = await BlogComment.find({ blogId: objectId })
      .populate("userId", "username image")
      .sort({ createdAt: -1 })
      .exec();

    if (!comments || comments.length === 0) {
      return NextResponse.json(
        { success: false, message: "Comments not found or have been deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: comments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

// Update a blog comment (soft delete or toggle visibility)
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const commentId = params.id;

    if (!Types.ObjectId.isValid(commentId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid comment ID' },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { action, showOnHomepage } = body;

    // Find the comment first
    const comment = await BlogComment.findById(commentId);

    if (!comment || comment.isDeleted) {
      return NextResponse.json(
        { success: false, message: 'Comment not found or already deleted' },
        { status: 404 }
      );
    }

    // ✅ Handle visibility toggle
    if (action === 'toggleVisibility') {
      if (typeof showOnHomepage !== 'boolean') {
        return NextResponse.json(
          { success: false, message: 'Invalid value for showOnHomepage' },
          { status: 400 }
        );
      }

      comment.showOnHomepage = showOnHomepage;
      await comment.save();

      return NextResponse.json({
        success: true,
        message: 'Visibility updated successfully.',
        data: comment,
      });
    }

    // ✅ Handle soft delete
    if (action === 'softDelete') {
      comment.isDeleted = true;
      await comment.save();

      return NextResponse.json({
        success: true,
        message: 'Comment soft deleted successfully.',
        data: comment,
      });
    }

    // Unknown action
    return NextResponse.json(
      { success: false, message: 'Invalid action' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Error updating blog comment:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'Server Error',
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// post the comment to the blog
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const blogId = params.id;
    const { commentText } = await req.json();

    if (!Types.ObjectId.isValid(blogId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid blog ID' },
        { status: 400 }
      );
    }

    if (!commentText || commentText.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Comment text cannot be empty.' },
        { status: 400 }
      );
    }

    if (commentText.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: 'Comment must be at least 5 characters long.' },
        { status: 400 }
      );
    }

    // Get userId from the database via session email
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found.' },
        { status: 404 }
      );
    }

    const blogComment = await BlogComment.create({
      blogId,
      userId: user._id,
      comment: commentText.trim(),
    });

    return NextResponse.json({ success: true, data: blogComment });
  } catch (error: any) {
    console.error('Error adding blog comment:', error.message);
    return NextResponse.json(
      { success: false, message: 'Server Error', error: error.message },
      { status: 500 }
    );
  }
}
