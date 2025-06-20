// models/BlogModel.ts
import mongoose, { Schema, models, model, Document } from 'mongoose';

interface Image {
  url: string;
  alt?: string;
}

export interface IBlog extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  shortDescription: string;
  longDescription: string;
  images: Image[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          required: false,
        },
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = models.Blog || model<IBlog>('Blog', blogSchema);

export default Blog;
