// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.CONNECTION_STRING as string;

if (!MONGODB_URI) {
  throw new Error('Please define the CONNECTION_STRING environment variable');
}

// Add a custom type for global cache
interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Use global to store the cached connection
const globalWithMongoose = global as typeof globalThis & {
  mongoose: MongooseGlobal;
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'test',
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
