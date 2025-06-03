import mongoose from 'mongoose';

const projectCommentSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    showOnHomepage: { type: Boolean, default: true }  
});

const ProjectComment = mongoose.model('CommentProject', projectCommentSchema);

export default ProjectComment;
