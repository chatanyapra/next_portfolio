import mongoose, { Schema, models, model, Model, Document } from 'mongoose';

// Define the TypeScript type for a blog comment document
export interface IBlogComment extends Document {
    blogId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    comment: string;
    createdAt: Date;
    isDeleted: boolean;
    showOnHomepage: boolean;
}

const commentSchema = new Schema<IBlogComment>({
    blogId: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    showOnHomepage: { type: Boolean, default: true },
});

// Prevent model overwrite error in Next.js (dev/hot reload)
const BlogComment: Model<IBlogComment> =
    models.CommentBlog || model<IBlogComment>('CommentBlog', commentSchema);

export default BlogComment;
