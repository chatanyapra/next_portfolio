import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    showOnHomepage: { type: Boolean, default: true } 
});

const BlogComment = mongoose.model('CommentBlog', commentSchema);

export default BlogComment;
