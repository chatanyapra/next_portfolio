import mongoose, { Document, Schema, Model, model, models } from 'mongoose';

// Define the structure of each image object
interface Image {
  url: string;
  alt?: string;
}

// Define the structure of each tech stack entry
interface TechStack {
  name: string;
}

// Define the main Project document type
export interface IProject extends Document {
  title: string;
  shortDescription: string;
  longDescription: string;
  images: Image[];
  techStack: TechStack[];
  link: string;
  createdAt: Date;
  isDeleted: boolean;
  updatedAt: Date;
}

// Create the schema
const projectSchema = new Schema<IProject>(
  {
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
        },
      },
    ],
    techStack: [
      {
        name: {
          type: String,
        },
      },
    ],
    link: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Use existing model if already defined (important for Next.js hot-reloading)
const Project: Model<IProject> = models.Project || model<IProject>('Project', projectSchema);

export default Project;
