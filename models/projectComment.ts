import mongoose, { Schema, Document, Model, models } from 'mongoose';

// 1. Define TypeScript interface for a single comment
export interface IProjectComment extends Document {
  projectId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  comment: string;
  createdAt: Date;
  isDeleted: boolean;
  showOnHomepage: boolean;
}

// 2. Define the Mongoose schema
const projectCommentSchema: Schema<IProjectComment> = new Schema(
  {
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    showOnHomepage: { type: Boolean, default: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// 3. Create model safely (to avoid overwriting on hot reloads)
const ProjectComment: Model<IProjectComment> =
  models.CommentProject || mongoose.model<IProjectComment>('CommentProject', projectCommentSchema);

export default ProjectComment;
