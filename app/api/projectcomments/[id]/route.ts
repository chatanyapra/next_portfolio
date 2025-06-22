import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import ProjectComment from '@/models/projectComment';
import '@/models/userModel'; // Required for population
import { Types } from 'mongoose';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import Project from '@/models/projectModel';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const projectId = params.id;

    if (!Types.ObjectId.isValid(projectId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid project ID' },
        { status: 400 }
      );
    }

    const comments = await ProjectComment.find({
      projectId,
      isDeleted: false,
    })
      .populate('userId', 'username image')
      .sort({ createdAt: -1 })
      .exec();

    console.log(`Fetched Comments for Project ${projectId}:`, comments);

    if (!comments || comments.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Comments not found or have been deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: comments }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching project comments by ID:', error.message);
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

// Update a project comment (soft delete or toggle visibility)
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

    const comment = await ProjectComment.findById(commentId);
    if (!comment || comment.isDeleted) {
      return NextResponse.json(
        { success: false, message: 'Comment not found or already deleted' },
        { status: 404 }
      );
    }

    // ✅ Handle toggle visibility
    if (action === 'toggleVisibility') {
      if (typeof showOnHomepage !== 'boolean') {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid visibility status. It must be a boolean value.',
          },
          { status: 400 }
        );
      }

      comment.showOnHomepage = showOnHomepage;
      await comment.save();

      return NextResponse.json({
        success: true,
        message: 'Project comment visibility updated successfully.',
        data: comment,
      });
    }

    // ✅ Handle soft delete
    if (action === 'softDelete') {
      comment.isDeleted = true;
      await comment.save();

      return NextResponse.json({
        success: true,
        message: 'Project comment deleted successfully.',
      });
    }

    // ❌ Unknown action
    return NextResponse.json(
      { success: false, message: 'Invalid action' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Error updating project comment:', error.message);
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


// Add a new comment to a project
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Ensure DB connection
    await connectToDB();

    // 2. Validate session
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userEmail = session.user.email;
    const projectId = params.id;
    const body = await req.json();
    const { commentText } = body;

    // 3. Validate ID
    if (!Types.ObjectId.isValid(projectId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid project ID' },
        { status: 400 }
      );
    }

    // 4. Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return NextResponse.json(
        { success: false, message: 'Project not found or has been deleted' },
        { status: 404 }
      );
    }

    // 5. Validate commentText
    if (!commentText || commentText.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Comment text cannot be empty.' },
        { status: 400 }
      );
    }

    if (commentText.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: 'Comment text must be at least 5 characters.' },
        { status: 400 }
      );
    }

    // 6. Get userId from email
    const user = await import('@/models/userModel').then((mod) =>
      mod.default.findOne({ email: userEmail })
    );
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    // 7. Save the comment
    const newComment = new ProjectComment({
      projectId,
      userId: user._id,
      comment: commentText.trim(),
    });

    await newComment.save();

    return NextResponse.json(
      { success: true, data: newComment },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error adding project comment:', error.message);
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
